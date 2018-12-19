import React, { Component } from 'react';

class Download extends Component {
  render() {
    return(
      <div className="download__content">
        <h1> Downloads Page</h1>

        <section className="download__section">
          <h2>Android</h2>

        <div className="download__text">
          <p>Download an Android wallet from the Google Playstore. Use the very nice coinomi wallet, with support for multiple electronic currencies. </p>
          <p>WARNING: In July 2017 you need to migrate all your coins to the coinomi wallet, as the original Android wallet is no longer maintained!</p>
          <p>Earlier you could choose either the original Android wallet which has a direct link to redeem coins from the tutor-web, or the coinomi wallet, but the former is no longer supported. </p>
        </div>
        </section>

        <section className="download__section">
          <h2>Linux</h2>
          <div className="linux-img">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" alt="linux">
          </img>
          </div>

          <a href="https://github.com/tutor-web/smileyCoin/blob/post-2017-wallet/doc/build-unix.md">Click here to look at the compilation instructions on Github.</a>
        </section>

        <section className="download__section">
          <h2>Mac OSX</h2>
          <div>
            <image>Insert Mac image here</image>
          </div>

          <a href="https://github.com/tutor-web/smileyCoin/releases/download/v2.1.1/Smileycoin-Qt.dmg">Click here to download the latest release from Github</a>
        </section>

        <section className="download__section">
          <h2>Windows</h2>
          <div>
            <image>Insert Windows image here</image>
          </div>

          <a href="https://github.com/tutor-web/smileyCoin/releases">Click here to download the latest binary from Github. Note that you must select the .exe-file</a>
        </section>

      </div>
    )
  }
}

export default Download;
