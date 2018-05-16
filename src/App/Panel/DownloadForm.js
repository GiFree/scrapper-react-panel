import React, { Component } from 'react';
import Message from './Message';
import './DownloadForm.css';

class DownloadForm extends Component {

  constructor(params) {
    super(params);

    this.state = {
      message: '',
    }

    this.handleSubmit = (e) => {

      const childs = Array.from(e.target.children);
      const data = {
        subReddit: childs[1].value,
        numOfPages: childs[4].value
      }
      console.log(data);
      fetch(`http://${window.location.hostname}:3001/download`, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        mode: 'cors',
      })
        .then(res => res.json())
        .then((response) => {
          this.setState({ message: response.message });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ message: err.message });
        })

      e.preventDefault();
      return false;
    }
  }


  render() {
    return (
      <div className="container">
        <h3>Download</h3>
        <form action="#" onSubmit={this.handleSubmit}>
          <label htmlFor="subreddit">SubReddit: </label>
          <input type="text" name="subreddit" id="subreddit" />
          <br />
          <label htmlFor="numOfPages">Number Of Pages (max 10): </label>
          <input type="number" name="numOfPages" id="numOfPages" min="1" max="10" />
          <input type="submit" value="Start" />
        </form>
        <Message data={this.state.message} />
      </div>
    )
  }
}

export default DownloadForm;
