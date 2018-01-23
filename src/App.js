import React, { Component } from 'react';
import './App.css';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 'home',
    };
  }

  switchPage(activePage) {
    this.setState({ activePage });
  }

  render() {
    const { activePage } = this.state;
    return (
      <div className="App">
        <Menu>
          <Menu.Item
            as='div'
            onClick={() => this.switchPage('home')}
            active={activePage === 'home'}
            name='home'>
            <Link to='/'>Home</Link>
          </Menu.Item>

          <Menu.Item
            as='div'
            onClick={() => this.switchPage('abilities')}
            active={activePage === 'abilities'}
            name='abilities'>
            <Link to='/abilities'>Abilities</Link>
          </Menu.Item>

          <Menu.Item
            onClick={() => this.switchPage('skills')}
            active={activePage === 'skills'}
            as='div'
            name='skills'>
            <Link to='/skills'>Skills</Link>
          </Menu.Item>

          <Menu.Item
            as='div'
            onClick={() => this.switchPage('campaigns')}
            active={activePage === 'campaigns'}
            name='campaigns'>
            <Link to='/campaigns'>Campaigns</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default App;
