import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
        <Header className="header_color" title="Education in a suitcase" scroll>
            <Navigation>
                <Link to="/aboutme">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/ccas">CCAS</Link>
                <Link to="/coin">SmileyCoin</Link>
                <Link to="/info">General Information</Link>
                <Link to="/news">News</Link>
                <Link to="/tutor">Online Tutors</Link>
            </Navigation>
        </Header>
        <Drawer title="SMLY">
            <Navigation>
                <Link to="/aboutme">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/ccas">CCAS</Link>
                <Link to="/coin">SmileyCoin</Link>
                <Link to="/info">General Information</Link>
                <Link to="/news">News</Link>
                <Link to="/tutor">Online Tutors</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
