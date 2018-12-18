import React from 'react';

import '../../Assets/css/default.min.css';

const backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default backdrop;