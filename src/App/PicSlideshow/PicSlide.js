import React, { Component } from 'react';

class PicSlide extends Component {

  render() {
    const data = this.props.data;
    return (
      <div id={data.id} className="mySlides fade" style={data.style}>
        <div className="numbertext"> {data.id} / {data.length}</div>
        <img src={data.link} alt="shit not working" />
        <div className="text">{data.image.title} - {data.image.category}</div>
      </div>
    )
  }
}

export default PicSlide;