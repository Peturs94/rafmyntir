import React, { Component } from 'react';

// Components
import Custom_Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/homepage';

// Includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
        <div className="App">

            <Custom_Header />

            <Homepage />

            <Footer />

        </div>

    );
  }
}

export default App;
