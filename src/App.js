import React, { Component } from 'react';

// Components
import Main from './components/main';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

// Includes
import './Assets/css/default.min.css';

class App extends Component {
  state = { /*þessi breyta sér um að sýna drawerinn þegar síðan er orðin það lítil að headerinn sést ekki*/
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => { /*Dregur fram drawerinn þegar klikkað er á strikinn í vinstra horninu*/
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => { /*afmarka hægri hliðinná á síðunni til að fókusa á drawer elementinum*/
    this.setState({sideDrawerOpen: false});
  };

  render() { 
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
        <div className="App" style={{height:'100%'}} >
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main>
          <div className="main__content">
          <Main />
          </div>
        </main>
        </div>

    );
  }
}

export default App;
