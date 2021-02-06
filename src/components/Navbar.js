import React from 'react';
import List from './List';

const socialMedia = [
    {
        url: "https://github.com/VicNeto",
        src: "../github-desktop.svg",
        alt: "github",
    },
    {
        url: "https://www.linkedin.com/in/vicgvelazquez/",
        src: "../linkedin.svg",
        alt: "linkedin",
    },
];

const NavBar = () => {
    return (
        <nav class="navbar">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <List items={socialMedia}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;