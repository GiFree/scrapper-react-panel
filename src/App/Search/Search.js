import React, { Component } from 'react';
import PicSlideshow from '../PicSlideshow/PicSlideshow';
import './Search.css';
class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      picList: [],
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    fetch(`http://${window.location.hostname}:3001/list/${e.target.value}`)
      .then((data) => data.json())
      .then((res) => {
        this.setState({ picList: res.response });
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  render() {
    return (
      <div className="searchContainer">
        <div className="container">
          <label htmlFor="searchBar">Search: </label>
          <input type="text" name="searchBar" id="searchBar" onChange={this.handleChange} />
        </div>
        <PicSlideshow picList={this.state.picList} />
      </div>
    )
  }
}

export default Search;
