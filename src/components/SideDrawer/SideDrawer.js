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
        <li><a href="/download">Download</a></li>
        <li><a href="/uses">SmileyCoin uses</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/esuitcase">Education in a suitcase</a></li>
        <li><a href="https://tutor-web.info/">The tutor-web project</a></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;