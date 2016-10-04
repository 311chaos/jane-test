import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import {  Navbar, Nav, NavItem } from 'react-bootstrap';

const handleSelected =(selectedKey) => {
  alert(`Selected ${selectedKey}`)
};

class App extends Component {
  render() {
    return (
      <div>
        <Nav bsStyle="tabs" activeKey="1" onSelect={handleSelected}>
          <NavItem disabled className="brand">
            <img src={logo} alt="logo"/>
          </NavItem>
          <NavItem eventKey="1" href="/view">
            View
          </NavItem>
          <NavItem eventKey="2" href="/edit">
            Edit
          </NavItem>
        </Nav>
        <div className="content">
          {this.props.children}
        </div>
        <Navbar fluid fixedBottom className="footer">
          <div>
           Aaron Hickman {Date.now().toDateString}
          </div>
        </Navbar>

      </div>

    );
  }
}

export default App;
