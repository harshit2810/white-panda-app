import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/">
                    <img alt="logo" src="/icons/logo.svg" />
                </Link>
                <div className="btns-grp">
                    <div className="btn btn--notification">
                        <img
                            alt="notifications"
                            src="/icons/notification.svg"
                        />
                        <div className="btn btn--circle btn--notcount">
                            699
                        </div>
                    </div>
                    <button className="btn btn--circle">AB</button>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
