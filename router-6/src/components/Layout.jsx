import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";

// const setActive = () => ({isActive}) => isActive ? 'active-link' : ''

const Layout = () => {
    return (
        <div>
            <header>
                <CustomLink to="/" >Home</CustomLink>
                <CustomLink to="/blog" >Blog</CustomLink>
                <CustomLink to="/about" >About</CustomLink>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                Workshop react-router 6
            </footer>
        </div>
    );
};

export default Layout;