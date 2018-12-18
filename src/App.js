import React, { Component } from 'react';

// Components
import CustomHeader from './components/headerComponent/header';


// Includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <CustomHeader />
        </div>

    );
  }
}

export default App;
