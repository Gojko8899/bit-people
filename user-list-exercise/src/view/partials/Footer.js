import React from 'react'

const Footer = () => {

    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    {new Date().getFullYear()} Copyright BIT
                </div>
            </div>
        </footer>
    )
}

export { Footer }