import React, { Component } from 'react';
import PicSlide from './PicSlide';
import './PicSlideshow.css';

class PicSlideshow extends Component {

  constructor(params) {
    super(params);

    this.state = {
      currentPic: 1,
    }

    this.plusSlides = this.plusSlides.bind(this);
    this.minusSlides = this.minusSlides.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

  }

  plusSlides() {

    if (this.state.currentPic === this.props.picList.length) {
      this.setState({ currentPic: 1 });
    } else {
      this.setState({ currentPic: this.state.currentPic + 1 });
    }
  }

  minusSlides() {
    if (this.state.currentPic === 1) {
      this.setState({ currentPic: this.props.picList.length });
    } else {
      this.setState({ currentPic: this.state.currentPic - 1 });
    }
  }

  handleKeyPress(e) {
    if (e.keyCode === 39) {
      this.plusSlides();
    } else if (e.keyCode === 37) {
      this.minusSlides();
    }
  }

  componentWillReceiveProps() {
    this.setState({
      currentPic: 1
    });
  }

  render() {
    if (!this.props.picList || this.props.picList.length === 0) {
      return (
        <div className="picViewerError">
          Sorry there are no images
        </div>
      )
    }
    const images = this.props.picList.map((pic, index) => {
      const data = {
        length: this.props.picList.length,
        link: `http://${window.location.hostname}:3001/${pic.category}/${pic.hash}.${pic.extension}`,
        id: index + 1,
        href: pic.postLink,
        image: pic,
        index: index,
      };
      if (index + 1 === this.state.currentPic) {
        data.style = { display: 'block' };
      } else {
        data.style = {};
      }
      return (
        <PicSlide data={data} key={data.id} />
      )
    })

    return (
      <div>
        <div className="picViewerContainer" onKeyDown={this.handleKeyPress} tabIndex="0">
          {images}
          <a className="prev" onClick={this.minusSlides}>&#10094;</a>
          <a className="next" onClick={this.plusSlides}>&#10095;</a>
        </div>
      </div>
    );
  }
}

export default PicSlideshow;