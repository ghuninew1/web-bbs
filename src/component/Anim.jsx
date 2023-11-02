import { css, ClassNames } from "@emotion/react";
import { useMemo, Children, isValidElement } from "react";
import PropTypes from "prop-types";
import animKeyframes from "./animKeyframes";

const GetAnimationCss = ({
    duration = 1e3, // ms
    delay = 0, // ms
    timingFunction = "ease", // string
    keyframes = animKeyframes.fadeIn, // keyframes
    iterationCount = 1, // number | infinite
}) => {
    return css`
        animation-duration: ${duration}ms;
        animation-timing-function: ${timingFunction};
        animation-delay: ${delay}ms;
        animation-name: ${keyframes};
        animation-direction: normal;
        animation-fill-mode: both;
        animation-iteration-count: ${iterationCount};

        @media (prefers-reduced-motion: reduce) {
            animation: none;
        }
    `;
};

export const Anim = ({
    children,
    type,
    duration,
    delay,
    timingFunction,
    iterationCount,
    cascade,
    cascadeDelay,
    className,
    isAnim = true,
    ...props
}) => {
    const animCss = useMemo(
        () =>
            isAnim &&
            GetAnimationCss({
                duration,
                delay,
                timingFunction,
                iterationCount,
                keyframes: animKeyframes[type],
            }),
        [isAnim, duration, delay, timingFunction, iterationCount, type]
    );

    return cascade ? (
        <ClassNames>
            {({ css, cx }) =>
                Children.map(children, (child, index) => {
                    const delayRandom = Math.floor(
                        Math.random() * (100 + cascadeDelay) * (index + 1)
                    );
                    return isValidElement(child) ? (
                        <div
                            {...props}
                            key={child.key}
                            style={{
                                animationDelay: `${
                                    cascadeDelay ? delayRandom : 100 * (index + 1)
                                }ms`,
                            }}
                            className={cx(css(animCss) + " " + className)}
                        >
                            {child}
                        </div>
                    ) : (
                        <div {...props} className={cx(css(animCss) + " " + className)}>
                            {child}
                        </div>
                    );
                })
            }
        </ClassNames>
    ) : (
        <ClassNames>
            {({ css, cx }) => (
                <div {...props} className={cx(css(animCss) + " " + className)}>
                    {children}
                </div>
            )}
        </ClassNames>
    );
};

const animNames = Object.keys(animKeyframes);
const animPropTypes = {
    duration: PropTypes.number,
    delay: PropTypes.number,
    timingFunction: PropTypes.string,
    iterationCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Anim.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(animNames),
    cascade: PropTypes.bool,
    className: PropTypes.string,
    isAnim: PropTypes.bool,
    cascadeDelay: PropTypes.number,
    ...animPropTypes,
};

Anim.defaultProps = {
    type: "fadeIn",
    duration: 800,
    delay: 0,
    timingFunction: "ease",
    iterationCount: 1,
    cascade: false,
    className: "",
    isAnim: true,
    cascadeDelay: null,
};

export const AnimSection = ({ children, ...props }) => (
    <Anim {...props} type="fadeIn">
        {children}
    </Anim>
);

AnimSection.propTypes = {
    children: PropTypes.node.isRequired,
    ...animPropTypes,
};

export default Anim;
