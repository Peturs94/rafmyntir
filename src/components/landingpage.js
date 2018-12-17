import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div styles={{position: 'fixed', display: 'block', right: 0, bottom: 0}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://assets.coingecko.com/coins/images/685/large/smileycoin.png?1510040252" alt="SmileyCoin" className="Smiley-img">
            </img>
            <div className="banner-text">
              <h1>Smiley Coin</h1>
              <p>The cryptocurrency used for rewarding work in the tutor-web.</p>
              <p>The Smileycoin,  SMLY, is used for rewarding students
              for their performance in the tutor-web learning environment
              and is used for donations to the project Education in a Suitcase.
               This documents describes the foundations of the SMLY.
                At the bottom of the document there is a
                list of proposed changes.</p>
            </div>

            <div classname="text-lysing">
              <p>The Smileycoin,  SMLY, is used for rewarding students
            for their performance in the tutor-web learning environment
            and is used for donations to the project Education in a Suitcase.
             This documents describes the foundations of the SMLY.
              At the bottom of the document there is a
              list of proposed changes.</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
