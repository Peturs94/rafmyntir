import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
     return(
       <div className="homepage__content">
        <h1>SmileyCoin</h1>
        <h3>The cryptocurrency used for rewarding work in the tutor-web</h3>

        <section className="homepage__section">
          <h2>Basics </h2>

          <p>The Smileycoin,  SMLY, is used for rewarding students for their performance in the tutor-web learning environment and is used for donations to the project Education in a Suitcase. This documents describes the foundations of the SMLY. At the bottom of the document there is a list of proposed changes.</p>
          <p>The tutor-web system is a completely open and freely accessible educational system, with an emphasis on mathematics and statistics. This system has been tested in Europe and Africa, in high schools and universities. It is most commonly used by students who need to practice difficult topics. This is done in an online drill based environment intended to promote learning. Often an instructor will point the students to this resource and may use the tutor-web grade as a course grade. See the tutor-web info site for further information. </p>
          <p>The tutor-web pays students for completing their drills and exercises, using the Smileycoin currency. The actual amount paid varies from course to course. Currently a student gets one or a few SMLY for passing a lecture but many more (10, 100 or even 10000) for the highest grade. The student can download a SMLY wallet and redeem the earned SMLY into the wallet. The student can then pay a peer for tutoring using the Smileycoins earned in the system, buy coffee for the SMLY or exchange them for other currencies.</p>
          <p>To get a feel for the mission of the project, look at the TEDx Reykjavík talk.</p>
          <div>MÖGULEGA SETJA YOUTUBE MYNDBAND</div>
          <p>Below is a description of the coin development. For actively updated information on the coin, go to the Bitcointalk page.</p>
        </section>

        <section className="homepage__section">
          <h2></h2>

        </section>

        <section className="homepage__section">
          <h2></h2>

        </section>

        <section className="homepage__section">
          <h2></h2>

        </section>

        <section className="homepage__section">
          <h2></h2>

        </section>

        <section className="homepage__section">
          <h2></h2>

        </section>
      </div>
     )
   }
 }
 
 export default Homepage;