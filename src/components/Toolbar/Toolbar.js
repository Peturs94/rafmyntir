import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import '../../Assets/css/default.min.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/aboutme">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/donate">Donate</a></li>
                <li><a href="/articles">Articles</a></li>
                <li><a href="/ccas">CCAS</a></li>
                <li><a href="/coin">SmileyCoin</a></li>
                <li><a href="/info">General Information</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/tutor">Online Tutors</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;