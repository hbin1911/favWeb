import React from 'react';
import mainPhoto from '../images/Janhavi1.jpeg';
import Jan2 from '../images/Jan2.jpeg';
// import Jan3 from '../images/Jan3.jpeg';
import Jan4 from '../images/Jan4.jpeg';
import Jan5 from '../images/Jan5.jpeg';
import Jan6 from '../images/Jan6.jpeg';
import Jan7 from '../images/Jan7.jpeg';
import Jan8 from '../images/Jan8.jpeg';

const Carousel = () => {
  const images = [Jan2, Jan4, Jan5, Jan6, Jan7, Jan8, mainPhoto];

  return (
    <div className="carousel-container">
      {images.map((img, index) => (
        <div key={index} className="carousel-item">
          <img src={img} alt={`Memory ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;