import React, { Component } from 'react';
import PicSlideshow from '../PicSlideshow/PicSlideshow'
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      picList: []
    };
  }

  componentWillMount() {
    fetch(`http://${window.location.hostname}:3001/list`)
      .then(data => data.json())
      .then((list) => {
        this.setState({
          picList: list,
        })
      })
      .catch((err) => {
        console.log(err.message);
      })
  }


  render() {

    return (
      <div className="homeContainer">
        <PicSlideshow picList={this.state.picList} />
      </div>
    )
  }
}

export default Main;