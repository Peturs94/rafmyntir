import React from 'react';

import '../../Assets/css/default.min.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/aboutme">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/donate">Donate</a>
        </li>
        <li>
          <a href="/articles">Articles</a>
        </li>
        <li>
          <a href="/ccas">CCAS</a>
        </li>
        <li>
          <a href="/coin">SmileyCoin</a>
        </li>
        <li>
          <a href="/info">General Info</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/tutor">Online Tutors</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;