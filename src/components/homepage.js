import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Homepage extends Component {
  render() {
    return(
      <div className="container-fluid" >
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://assets.coingecko.com/coins/images/685/large/smileycoin.png?1510040252" alt="SmileyCoin" className="Smiley-img">
            </img>
            <div className="banner-text">
              <h1>Smiley Coin</h1>
              <p>The cryptocurrency used for rewarding work in the tutor-web.</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Homepage;
