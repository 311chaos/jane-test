import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';
import Inactive from './containers/Inactive';

class App extends Component {
  render() {
    return (
      <div>
        <Nav bsStyle="tabs">
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
        <div className="content container">
          <ReactCSSTransitionGroup
            component="div"
            transitionName="page"
            className="transition-group"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={600}
          >
            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })}
          </ReactCSSTransitionGroup>
        </div>
        <Navbar fixedBottom className="footer">
          <div>
            Aaron Hickman
            <Link target="_blank" to="https://www.linkedin.com/in/aaronhickman"><span className="icon-linkedin"/></Link>
            <Link target="_blank" to="https://github.com/311chaos"><span className="icon-github"/></Link>
          </div>
        </Navbar>
        <Inactive/>
      </div>
    );
  }
}

export default App;
