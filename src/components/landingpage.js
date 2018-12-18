import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return(
      <div styles={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://assets.coingecko.com/coins/images/685/large/smileycoin.png?1510040252" alt="SmileyCoin" className="Smiley-img">
            </img>
            <div className="banner-text">
              <h1>Smiley Coin</h1>
              <p>The cryptocurrency used for rewarding work in the tutor-web.</p>
            </div>
            <div className="dalkur-text">
            <h2>General</h2>
            <p>The Smileycoin,  SMLY, is used for rewarding
             students for their performance in the tutor-web learning
              environment and is used for donations to the project
              Education in a Suitcase.
            </p>
            <Button raised>
              <Link to="/coin">Learn More</Link>
            </Button>
            </div>
            <div className="dalkur-text">
            <h2>Wallet</h2>
            <p>Smileycoins are stored in wallets.
            SMLY wallets for Linux, Android and Windows
            are available for download</p>
            <Button raised>
              <Link to="/coin">Learn More</Link>
            </Button>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
