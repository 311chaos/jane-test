import { Component } from 'react';

const events = ['mousemove', 'keydown', 'wheel', 'DOMMouseScroll', 'mouseWheel', 'mousedown', 'touchstart', 'touchmove', 'MSPointerDown', 'MSPointerMove'];


class Activity extends Component {
  componentDidMount() {
    events.forEach((event) => {
      document.addEventListener(event, this.props.onActivity)
    });
  }
  componentWillUnmount() {
    events.forEach(event => {
      document.removeEventListener(event, this.props.onActivity)
    })
  }
  render() {
    return this.props.children;
  }
}

export default Activity;

