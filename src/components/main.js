import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Donate from './donate';
import Articles from './articles';
import CCAS from './ccas';
import SmileyCoin from './coin';
import Info from './info';
import News from './news';
import Privacy from './privacy';
import Tutors from './tutor';

const Main = () => (
  <Switch>
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/donate" component={Donate} />
    <Route path="/articles" component={Articles} />
    <Route path="/ccas" component={CCAS} />
    <Route path="/coin" component={SmileyCoin} />
    <Route path="/info" component={Info} />
    <Route path="/news" component={News} />
    <Route path="/privacy" component={Privacy} />
    <Route path="/tutor" component={Tutors} />
  </Switch>
)

export default Main;
