import { useEffect, useState, useMemo } from "react";
import { css, ClassNames } from "@emotion/react";
import ScrollListener from "./ScrollListener";
import PropTypes from "prop-types";
import animKeyframes from "./animKeyframes";

const UseScroll = ({ children, sec = 600 }) => {
    const scroll = ScrollListener();
    const [style, setStyle] = useState("fadeIn");
    const [className, setClassName] = useState("header-main");

    useEffect(() => {
        if (scroll.lastY === scroll.y) {
            return;
        }
        if (scroll.y - scroll.lastY > 0) {
            if (scroll.y > 573) {
                setClassName("header-sticky");
                setStyle("fadeOutUp");
            }
        } else if (scroll.y < 573) {
            setClassName("header-main");
            setStyle("fadeInDown");
        } else {
            setStyle("fadeInDown");
        }
    }, [scroll.lastY, scroll.y]);

    const animCss = useMemo(
        () =>
            getAnimationCss({
                keyframes: animKeyframes[style],
                animationDuration: sec + "ms",
            }),
        [sec, style]
    );

    return (
        <ClassNames>
            {({ css, cx }) => <div className={cx(css(animCss) + " " + className)}>{children}</div>}
        </ClassNames>
    );
};

const animPropTypes = {
    duration: PropTypes.number,
    delay: PropTypes.number,
    timingFunction: PropTypes.string,
    iterationCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

UseScroll.propTypes = {
    children: PropTypes.node.isRequired,
    sec: PropTypes.number,
    className: PropTypes.string,
    ...animPropTypes,
};

const getAnimationCss = ({ keyframes, animationDuration }) => {
    return css`
        animation-duration: ${animationDuration || "300ms"};
        animation-iteration-count: 1;
        animation-timing-function: linear;
        animation-delay: 0ms;
        animation-name: ${keyframes};
        animation-direction: normal;
        animation-fill-mode: both;
        @media (prefers-reduced-motion: reduce) {
            animation: none;
        }
    `;
};

export default UseScroll;
