import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './Layout.css'
import ScrollListener from '../../component/ScrollListener'

const Layout = ({ children, title, totop = false, className }) => {
    const scollToRef = useRef(null)
    const [titles, setTitles] = useState('©Big Brain Studio')
    const scroll = ScrollListener()
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (title) {
            setTitles('©Big Brain Studio' + ' - ' + title)
        }
        document.title = titles
        return () => {
            document.title = '©Big Brain Studio'
        }
    }, [title, titles])

    useEffect(() => {
        if (totop) {
            if (scroll.y - scroll.lastY > 0) {
                if (scroll.y > 100) {
                    setShow(true)
                }
            } else {
                setShow(false)
            }
            if (scroll.y > 0 && scroll.y !== scroll.lastY) {
                const UseScrollBar = () => {
                    const scrollHeight = document.body.scrollHeight
                    const innerHeight = window.innerHeight
                    const scrollPercents = (scroll.y / (scrollHeight - innerHeight)) * 100
                    scollToRef.current = scrollPercents
                }
                return () => {
                    UseScrollBar()
                }
            }
        }
    }, [scroll.y, scroll.lastY, totop])

    const scrollToTop = () => {
        scollToRef.current =
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            }) || scollToRef.current
    }
    const showPercent = (value) => {
        return <progress value={value} max="100" className="progress-bar" />
    }

    return (
        <div className={`layout + ${className}`}>
            {children}
            {totop && (
                <>
                    {showPercent(scollToRef.current)}

                    <button
                        onClick={scrollToTop}
                        style={{
                            transform: show ? 'translateY(0)' : 'translateY(100%)',
                            opacity: show ? '1' : '0',
                            transition: 'all 0.3s ease-in-out',
                        }}
                        className="totop btn btn-sm btn-outline-warning"
                    >
                        to top
                    </button>
                </>
            )}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    totop: PropTypes.bool,
    title: PropTypes.string,
    className: PropTypes.string,
}

Layout.defaultProps = {
    totop: false,
    title: '',
    className: '',
}

export default Layout
