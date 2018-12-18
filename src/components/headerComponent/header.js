import React, { Component } from 'react';

// Components
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from '../main';

class CustomHeader extends Component {
  render() {
    return(
      <div className="header">
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
            <Main />
        </Content>
    </Layout>
      </div>
    )
  }
}

export default CustomHeader;
