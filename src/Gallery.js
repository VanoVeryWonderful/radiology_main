import React from "react";
import PropTypes from 'prop-types';
import Rose from './rose.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const divStyle = {
  width: '400px',
};

class Gallery extends React.Component {
  renderImage(image) {
    return (
      <div>
        <img src={process.env.PUBLIC_URL + '/images/brain/' + image} />
      </div>
    );
  }
  render() {
    return (
      <div>
      <div  style={divStyle}>
      <Carousel>
        {this.props.images.map(image => this.renderImage(image))}
      </Carousel>
      </div>


      </div>
    );
  }
}

// <div className="gallery">
// <img src={Rose}></img>
// <div className="images">
//    {this.props.images.map(image => this.renderImage(image))}
// </div>
// </div>
Gallery.propTypes = {
  images: PropTypes.array.isRequired
};
export default Gallery;
