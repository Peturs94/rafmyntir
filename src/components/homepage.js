import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
     return(
       <div className="container-fluid">
         <Grid className="landing-grid">
           <Cell col={12}>
             <img src="https://assets.coingecko.com/coins/images/685/large/smileycoin.png?1510040252" alt="SmileyCoin" className="Smiley-img">
             </img>
             <div className="banner-text">
              <h1>Smiley Coin</h1>
              <p>The cryptocurrency used for rewarding work in the tutor-web.</p>
            </div>
            <div className="lysing-text">
              <p>The Smileycoin,  SMLY, is used for rewarding
               students for their performance in the tutor-web learning
                environment and is used for donations to the project
                Education in a Suitcase. This documents describes the foundations
                 of the SMLY. At the bottom of the document there is a
                  list of proposed changes.
              </p>
              <Button ripple>
                <Link to="/aboutme">Learn More</Link>
              </Button>

            </div>
          </Cell>
        </Grid>
      </div>
     )
   }
 }
 
 export default Homepage;