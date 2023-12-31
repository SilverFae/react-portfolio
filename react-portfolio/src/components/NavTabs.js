import React from 'react';
import "./style/nav.css"

function NavTabs({ currentPage, handlePageChange }) {
    return (

        <div className = "nav-container">
        <ul className="nav nav-tabs">
        <div className="userIn">
                <h1>Shannon Hogeboom</h1>
            </div>
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#projects"
                    onClick={() => handlePageChange('Projects')}
                    className={currentPage === 'Projects' ? 'nav-link-active' : 'nav-link'}>
                    Projects
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}>
                    Resume
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}>
                    Contact
                </a>
            </li>
        </ul>
        </div>
    );
}

export default NavTabs;