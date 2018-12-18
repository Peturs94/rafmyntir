import React, { Component } from 'react';

class Uses extends Component {
  render() {
    return(
      <div className="uses__content"> 
        <h1> SmileyCoin Uses</h1>
        
        <section className="uses__section">
          <h2>Smileycoin games and apps in the Google Playstore</h2>

          <div className="uses__text">
            <p>The Google Playstore has two Android apps which support the SmileyCoin.(SMLY)</p>
            <p>The SmileyCoin(SMLY) wallet Android is currently the easiest SMLY wallet available.</p>
            <p>The Smileycoin Bubble game is a simple computer game where you can use SMLY to buy certain features.</p>
          </div>
          </section>

        <section className="uses__section">
          <h2>Cryptocurrency exchanges</h2>
          <h3>Cryptocurrency exchanges and other ways to get into cryptocoins</h3>

          <div className="uses__text">
            <ul>
              <li><a href="https://www.cryptopia.co.nz/">Cryptopia - (an exchange accepting SMLY and exchanging to/from Dogecoin and Litecoin; includes a market)</a></li>
              <li><a href="https://novaexchange.com/market/LTC_SMLY/">Novaexchange - (an exchange accepting SMLY and exchanging to/from BTC and LTC; includes a simple game of dice)</a></li>
              <li><a href="https://www.virwox.com/">VirWox - (the easiest way to buy SMLY for real money: First transfer $/ERU, then buy SLL; then buy BTC; then transfer these to C-CEX; then buy SMLY)</a></li>
              <li><a href="http://educationinasuitcase.com/">It is also possible to donate to Education in a suitcase and receive some SMLY.</a></li>
            </ul>
          </div>
          
        </section>
      </div>
    )
  }
}

export default Uses;