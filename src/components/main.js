import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Homepage from './homepage';
import News from './news';
import Download from './Download/Download';
import Esuitcase from './Esuitcase/Esuitcase';
import Uses from './Uses/Uses';

const Main = () => (
  <Switch>
    <Route path="/Download" component={Download} />
    <Route path="/news" component={News} />
    <Route path="/Esuitcase" component={Esuitcase} />
    <Route path="/Uses" component={Uses} />
    <Route path="/" component={Homepage} />
  </Switch>
)

export default Main;
