import React, { Component } from 'react';

class Esuitcase extends Component {
  render() {
    return(
      <div className="suitcase__content">
        <div className="suitcase__image">
          <img src="http://educationinasuitcase.com/donation/en/eias_trans.png" alt="Smileycoin logo"></img>
        </div>
        <h1> Education in a Suitcase Privacy Policy </h1>
        
        
        <section className="suitcase__section">
          <h2>Education in a Suitcase privacy policy</h2>

          <div className="suitcase__text">
            <p>Education in a suitcase (EIAS) has developed apps for use on Android devices.</p>
            <p>These apps may use the device's camera to scan a QR code and you may request the app to store or restore a backup of its data.</p>
            <p>Education in a suitcase does NOT collect, store or distribute any user data from any of these apps.</p>
            <p>EIAS integrates with <a href="http://tutor-web.net/">tutor-web.net</a> to provide means to request SMLY rewards from the system. Whilst Education in a Suitcase does not store any information on it's servers, Tutor-Web will log reward requests which may be used anonymously for research purposes.</p>
          </div>
          </section>
      </div>
    )
  }
}

export default Esuitcase;