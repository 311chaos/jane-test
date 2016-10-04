import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

const handleSelected = (selectedKey) => {
  // alert(`Selected ${selectedKey}`)
};

class App extends Component {
  render() {
    return (
      <div>
        <Nav bsStyle="tabs" onSelect={handleSelected}>
          <NavItem disabled className="brand">
            <img src={logo} alt="logo"/>
          </NavItem>
          <IndexLinkContainer to="/view">
            <NavItem href="/view">
              View
            </NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/edit">
            <NavItem href="/edit">
              Edit
            </NavItem>
          </LinkContainer>
        </Nav>
        <div className="content">
          {this.props.children}
        </div>
        <Navbar fluid fixedBottom className="footer">
          <div>
            Aaron Hickman
          </div>
        </Navbar>

      </div>

    );
  }
}

export default App;
