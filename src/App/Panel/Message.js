import React, { Component } from 'react';
import './Message.css'
class Message extends Component {

  render() {
    if (this.props.data) {
      return (

        <div className="message">
          {this.props.data}
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }

  }
}

export default Message;