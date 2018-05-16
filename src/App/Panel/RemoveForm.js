import React, { Component } from 'react';
import Message from "./Message";
class RemoveForm extends Component {

  constructor(params) {
    super(params);

    this.state = {
      message: ''
    }

    this.handleSubmit = (e) => {
      const childs = Array.from(e.target.children);
      const data = {
        category: childs[1].value,
      }

      fetch(`http://${window.location.hostname}:3001/delete`, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        mode: 'cors',
      })
        .then((res) => {
          this.setState({ message: res.message });
        })
        .catch((err) => {
          this.setState({ message: err.message });
        })

      e.preventDefault();
      return false;
    }
  }

  render() {
    return (
      <div className="container">
        <h3>Remove</h3>
        <form action="#" onSubmit={this.handleSubmit}>
          <label htmlFor="category">Category: </label>
          <input type="text" name="category" id="category" />
          <input type="submit" value="Submit" />
        </form>
        <Message message={this.state.message} />
      </div>
    )
  }
}

export default RemoveForm;