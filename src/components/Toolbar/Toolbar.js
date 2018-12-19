import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import '../../Assets/css/default.min.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">SMILEYCOIN</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/download">Download</a></li>
                <li><a href="/uses">SmileyCoin uses</a></li>
                <li><a href="/esuitcase">Education in a suitcase</a></li>
                <li><a href="https://tutor-web.info/">The tutor-web project</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
