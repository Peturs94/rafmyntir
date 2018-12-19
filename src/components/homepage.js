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

          <div className="homepage__text">
            <p>The Smileycoin,  SMLY, is used for rewarding students for their performance in the tutor-web learning environment and is used for donations to the project Education in a Suitcase. This documents describes the foundations of the SMLY. At the bottom of the document there is a list of proposed changes.</p>
            <p>The tutor-web system is a completely open and freely accessible educational system, with an emphasis on mathematics and statistics. This system has been tested in Europe and Africa, in high schools and universities. It is most commonly used by students who need to practice difficult topics. This is done in an online drill based environment intended to promote learning. Often an instructor will point the students to this resource and may use the tutor-web grade as a course grade. See the tutor-web info site for further information. </p>
            <p>The tutor-web pays students for completing their drills and exercises, using the Smileycoin currency. The actual amount paid varies from course to course. Currently a student gets one or a few SMLY for passing a lecture but many more (10, 100 or even 10000) for the highest grade. The student can download a SMLY wallet and redeem the earned SMLY into the wallet. The student can then pay a peer for tutoring using the Smileycoins earned in the system, buy coffee for the SMLY or exchange them for other currencies.</p>
            <p>To get a feel for the mission of the project, look at the TEDx Reykjavík talk.</p>
            <div>MÖGULEGA SETJA YOUTUBE MYNDBAND</div>
            <p>Below is a description of the coin development. For actively updated information on the coin, go to the Bitcointalk page.</p>
          </div>
        </section>

        <section className="homepage__section">
          <h2>Smileycoin, Education in a Suitcase and tutor-web on social media</h2>

          <div className="homepage__text">
            <ul>
              <li>Smilecyoin chatroom on telegram: <a href="https://t.me/SmileyCoinInternational">SmileyCoinInternational</a></li>
              <li>Smilecyoin Twitter handle: <a href="https://twitter.com/@smileycoinnews">smileycoinnews</a></li>
              <li>Education in a Suitcase on Twitter: <a href="https://twitter.com/@educationcase">educationcase</a></li>
              <li>Education in a Suitcase on Facebook: <a href="https://www.facebook.com/education.in.a.suitcase/">Education in a Suitcase</a></li>
            </ul>
          </div>
          
        </section>

        <section className="homepage__section">
          <h2>Smileycoin uses and Smileycoin wallets</h2>

          <div className="homepage__text">
            <p>Smileycoins are stored in wallets. SMLY wallets for Linux, Android and Windows are available for download. See the download page for more information on downloads and the uses page for more uses of the coin. In addition to these traditional wallets, an HTML5 wallet is available at https://wallet.smileyco.in</p>
            <p>The "usual" way of obtaining SMLY is by completing drills in the tutor-web system. One can also obtain SMLY by registering at an exchange for cryptocurrencies and buying SMLY.</p>
            <p>From November 2015, the SMLY can be used to buy cups of coffee in a coffee shop on the campus at the University of Iceland (experiment, initially supported by the Dean).</p>
            <p>Within the tutor-web, SMLY can be used to pay peer-tutors.</p>
            <p>A computer game, Smileybubble, available in the Google Playstore was used as a proof-of-concept game using SMLY for in-game purchases.</p>
            <p>The page at <a href="smly.is">smly.is</a> contains a web-store where users can buy discount coupons for an Icelandic domestic airline, a cinema, Amazon etc.</p>
          </div>
        </section>

        <section className="homepage__section">
          <h2>Mining and coin information</h2>

          <div className="homepage__text">
            <p>The following information is intended specifically for miners who help run the SMLY cryptocoin network. Attempts are made to keep it up-to-date, but the thread at https://bitcointalk.org/index.php?topic=845761 keeps a track record of the development.</p>
            <p>The tutor-web project pre-mined just under 50% of all coins. Since the initial phase, mining has been open to any miner. The opening date for mining was Nov. 24 2014, as announced on twitter (by @gstefans), on the main talk forum at https://bitcointalk.org/index.php?topic=845761.0;all and on https://www.altcoincalendar.info.</p>
            <p>As explained elsewhere on this page, the pre-mined coins are used to reward students for their performance. In addition, the project will award grants to developers and entrepreneurs, who aim to use the Smileycoin in their systems or otherwise develop environments which lead to increased use of the SMLY. Uses may include but are not limited to gaming projects requiring the use of SMLY as a currency.</p>
            <p>During the premine phase one experiment was conducted on the use of the SMLY in a class of 200 students. The purpose was to debug and test the entire system on a live student group. Only minor student participation is expected and few wallets were predicted to be set up. The predicted amount of SMLY to be spent was about one block reward or 10000 SMLY.</p>
            <p>Initial block reward: 10000 SMLY.</p>
            <p>The coin is based on litecoin source. The source code is freely available.</p>
            <p>A total of 50*10^9 (50 billion) coins will eventually be generated, half during the pre-mine phase.</p>
            <p>Difficulty will be adjusted approximately every 5 days so as to obtain a new block every 3 minutes on average. This difficulty schedule aims to reduce the non-premined coins by 50% over 7 years. Modification: The difficulty computations were revised in August, 2015, after which difficulty is re-evaluated every 60 blocks, still with a goal to mine a new block every 3 minutes.</p>
            <ul>
              <li>Main mining discussion thread: <a href="https://bitcointalk.org/index.php?topic=845761.0;all">Bitcoin Talk</a></li>
              <li>Mining pools are available: <a href="http://smly.hashlink.eu/">SMLY Pools</a></li>
              <li>Coin explorers: <a href="https://chainz.cryptoid.info/smly/">CryptoID</a> and <a href="https://blocks.smileyco.in/">Blocks</a></li>
            </ul>
            <p>The SMLY is registered at cryptocoin exchanges, where it is possible to exchange SMLY for other electronic currencies such as Dogecoin (DOGE) and Litecoin (LTC) as well as Bitcoin (BTC). See for example https://tradesatoshi.com/, https://www.southxchange.com/Market/Book/SMLY/LTC and https://novaexchange.com/market/DOGE_SMLY/</p>
            <p>The tutor-web project provided a minimal mining capacity to ensure SMLY network functionality. </p>
          </div>
        </section>

        <section className="homepage__section">
          <h2>Smileycoin in the news</h2>

          <div className="homepage__text">
            <ul>
              <li> <a href="https://www.benzinga.com/general/education/15/04/5404773/cryptocurrency-finds-a-place-in-education-with-smileycoin">Benziga</a></li>
              <li>Icelandic newspaper: <a href="https://www.mbl.is/frettir/innlent/2015/11/08/kaupa_kaffibolla_med_broskorlum/">Coffee for SMLY</a></li>
              <li>See many more links at: <a href="http://educationinasuitcase.com/">Education in a Suitcase</a></li>
            </ul>
          </div>
        </section>

        <section className="homepage__section">
          <h2>Details</h2>

          <div className="homepage__text">
            <p>The pre-mined coins are used to reward students for their performance. Typically a student may receive one (or 10) SMLY for a minimal grade but much more, e.g. 100 SMLY (or even 10000) for a top grade (97.5%) in a study unit (lecture/section) and much more again, e.g. 1000 SMLY (or even 1 million SMLY) for acing an entire on-line tutorial. The actual numbers will be a part of the ongoing educational research project, where the most interesting educational research question is what kind of reward system enhances learning the most. From a social science perspective, the most interesting question is probably what effects payments for study have on students in low-income regions of the world. Initially the total number of coins available to the project is about 25 billion and the magnitude of rewards will take into account the number of students, their expected performance and the number of coins remaining, with an aim of not reducing the available number by more than 50% over 7 years.</p>
            <p>It is known that it is important for students to completely master the on-line drills, not just marginally pass them. The difference between a marginal pass and excellence is directly reflected in the probability of passing the corresponding real-world course. Thus there is a lot to be said for lavish rewards for a perfect grade in a tutorial. The meaning of "lavish" will be defined through experiments, but for a difficult tutorial this may potentially be set to a high number (even 100 thousand or 1 million SMLY).</p>
            <p>In addition to the automatic on-line rewards, the project will award grants to developers and entrepreneurs, who aim to use the Smileycoin in their systems or otherwise develop environments which lead to increased use of the SMLY. Uses may include but are not limited to gaming projects requiring the use of SMLY as a currency. Of particular interest would be gaming projects where gamers can use the SMLY to buy equipment or access to levels. As a part of this project, an open source game was modified to accept SMLY and is now available in the Google Playstore (for Android).</p>
            <p>As with many other cryptocurrencies, philanthropists are able to buy SMLY in small or large quantities to support the tutor-web project. </p>
            <p>Educational research using the tutor-web has been funded by several grant agencies and this will continue into the future since it is an area of active research. A list of publications by some of these researchers is available. Research projects which have their own funding and aim to use SMLY, will simply purchase SMLY on an exchange.</p>
            <p>In addition to simple payments for doing well on drills, students will also get rewards for other activities currently in the system, as well as some which are only on the drawing board. Since the tutor-web is a research project, several new features get added every year. Recently (2014) a crowd-sourcing feature for drill questions was added. Thus, students now occasionally get asked to write their own question, rather than just answering an existing one, and other students then get an assignment to peer-review the question. There are multiple goals with this type of self-assessment: The students need to think about their studies from a new angle, they get assessed by their peers and will get a chance to revise their earlier work. This is a very different approach from the most common multiple-choice questions. In this approach, the students may get rewarded for submitting a question, for reviewing it, for getting a good review and for writing a good review. This crowd-sourcing of questions has been implemented (but not the payments). Extensions include crowd-sourcing links to useful educational material and even having students submit their own material, such as worked examples, all subject to peer-review. The hope is that this will make the entire educational system more sustainable while also improving education. Initial tests with such a system indicated a tendency to fairly sloppy results from crowd-sourcing, which implies that the exact design of the the peer-review and reward schemes may play an important role.</p>
            <p>The tutor-web payment schedule will be adjusted so that the pre-mined coins do not get spent too quickly, i.e. the total amount paid to students will be adjusted so that in the long-term (7 years) 50% of the pre-mined coins will still remain. The uncertainty in the number of students in the system (currently about 1000 annually) makes it impossible to predict the individual awards, but changes by a factor of 10 (up or down) should not be very surprising during the first two years. </p>
            <p>The tutor-web wallets were the only ones receiving the pre-mined coins. Since the addresses of the tutor-web wallets are known, this is verifiable. Any subsequent transactions out of these wallets (after the pre-mine) will similarly be a matter of public record, although student rewards will be to anonymous wallets. An amount greater than routine student rewards, such as a possible grant to a developer, will NOT be anonymous, but will be either publicly declared before a transfer is made or at least recorded as a comment in the wallet. </p>
            <p>Like anyone else, students can set up their own wallets, register the wallet address in the tutor-web and transfer their earned SMLY to that wallet. This is only needed when the student intends to use the SMLY as a payment outside the tutor-web.</p>
            <p>The tutor-web will be enhanced to include a simple platform for matching tutors to students. Usually the tutors will be peers. The tutor-student relations will normally be anonymous. The tutors will be graded by the students and will be able to set up their own rate, in terms of SMLY per hour or 15-minute session. In order to use the SMLY in this manner students and tutors may set up their SMLY wallets prior to registration as a provider or requester.</p>
            
            <h3>The information above gets updated. Updates related to the SMLY reward principles are specified below.</h3>
            
            <p>2016 update: The total rewards from Nov. 2014-April 2016 are below 130 million SMLY but should have been ten times that number. The tutor-web rewards were increased accordingly from fall 2016, so total rewards through Nov. 2016 are about 2.5 bn. Prices for coffee and the like have been promotional but will be set to match more closely the market value of SMLY (1-2 Satoshi per SMLY in 2014-2016). This is still well below the cumulative target of about 2*(12/7)=3.4 bn for 2 years, but the same settings should come close to the cumulative target of 5.1 bn by Nov. 2017.</p>
            <p>Most students do not redeem their SMLY. Following a Nov. 15 discussion on bitcointalk, two tutor-web changes were implemented: Students have a one-click option to donate their earned SMLY to Education An A Suitcase (EIAS). Further, if SMLY are not redeemed from the tutor-web but lie dormant for 2 years, they will be donated automatically to EIAS.</p>
            <p>As indicated above, liquidity providers have been automated in the form of bots, for SMLY-DOGE and SMLY-LTC markets on tradesatoshi, c-cex and novaexchange. These receive coins from mining activity but were given starting amounts in SMLY from the tutor-web wallets.</p>
            <p>2015 update:  The entire educational reward system will be structured in a way similar to the block rewards for mining. The total number of coins will be 50 billion, 50% for each type of rewards. The block rewards are set to be 12.5 billion over the first 7 years and then go down by 50% every 7-year period. Doing the same for the educational rewards will result in the same annual totals or approximately 12.5 billion over the first 7 years, i.e. by Nov. 2021. Since in the first year or two, there are relatively few (1000) students, the rewards for acing an entire tutorial have been set high, or up to 1 million SMLY for a difficult tutorial.</p>
            <ul> 2016 update; information on spending: 
              <li>By year-end 2016, 2.7 billion SMLY have been allocated to students</li>
              <li>Most development is undertaken as small research projects, funded by grants.</li>
              <li>SMLY have been awarded to certain tasks related to SMLY development: coin explorers, wallets, liquidity provision and mining. </li>
              <li>A clause in the tutor-web reward system states: SMLY not redeemed by students will be automatically donated to Education in a Suitcase. </li>
              <li>Once the donation clause kicks in (late 2018), EIAS will be able to assist more with SMLY development.</li>
            </ul>
            <p>2017 update A: It is proposed that the mining fee be modified so that miners no longer receive the entire coinbase of 10 thousand SMLY. Instead, miners receive a much lower amount, most likely 1000 SMLY, 4500 are donated to an address maintained by Education in a Suitcase and 4500 are sent to the oldest address on the rich list. "Oldest" means the one which has remained unchanged for the longest. "Rich list" likely means addresses which contain at least 25 million SMLY. The full details will be worked out in summer, 2017. Combined with the proof-of-work algorithm (scrypt POW), this implements a supplementary proof-of-stake-style approach which pays dividends to wallets on the rich list..</p>
            <p>2017 update B: It is proposed that the scrypt algorithm be replaced with a multi-algo setup, most likely by adding X11 (or more) to the existing scrypt setup. A high difficulty in scrypt will allow continued mining with X11. </p>
            <p> 2017 update C: The changes proposed in A and B were subsequently implemented in summer 2017, though instead of X11, several other mining algorithms were implemented. Specifically, the Auroracoin wallet was used as the basis for a completely new code base. Mining algorithms now include sha256, scrypt, skein, qubit, groestl.</p>
            <p>2018 Feb update on premine spending: The initial premine was 24.1 bn SMLY. The total allocated to (earned by) students Nov 2014-Feb 2018 is 5.7 bn SMLY (of which 2.4 have been redeemed. In addition, 0.2 bn have been allocated as grants from the tutor-web wallet, so a total of 5.9 bn have been sent from the premine to the tutor-web system. Other grants and projects have received 2.3 bn SMLY, of which 0.5 bn were put on local tutor-web servers in Kenya, 1.5 bn were used to register on exchanges; for maintain liquidity on exchanges, payment for wallet ports and mining rig rentals to maintain the blockchain. As of Feb 2018, this leaves 15.9 bn SMLY from the premine, kept in cold storage. The premine spending goal is to reduce the premine to (approximately) 12 bn by year-end 2021.</p>
          </div>
        </section>
      </div>
     )
   }
 }
 
 export default Homepage;