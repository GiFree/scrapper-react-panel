import React, { Component } from 'react';

class PicSlide extends Component {

  render() {
    const data = this.props.data;
    console.log(data.href);
    return (
      <div id={data.id} className="mySlides fade" style={data.style}>
        <div className="numbertext"> {data.id} / {data.length}</div>
        <img src={data.link} alt="shit not working" />
        <div className="text">
          <a href={data.href}>
            {data.image.title} - {data.image.category}
          </a>
        </div>
      </div>
    )
  }
}

export default PicSlide;