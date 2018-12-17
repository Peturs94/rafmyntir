import React, { Component } from 'react';

// Components
import Custom_Header from './components/headerComponent/header';


// Includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Custom_Header />
        </div>

    );
  }
}

export default App;
