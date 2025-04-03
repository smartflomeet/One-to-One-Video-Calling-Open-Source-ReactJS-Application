import React from 'react'

export default function LoginHeader() {
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="https://portal.smartflomeet.ttns.in/">
                        <img src="./logo-black.svg" alt="Smartflo" />
                    </a>
                    <div className="navbar-collapse collapse nav justify-content-end">
                        <ul className="nav justify-content-end ton-hedr-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link login text-dark">Sample Code <span className='fa fa-code'></span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}