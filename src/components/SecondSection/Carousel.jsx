import React from 'react'

const Carousel = () => {
    return ( 
        <div id="d2-right-part" className="col-12 col-md-7 col-lg-7 order-md-2">
            <div id="d2-slideshow">
              <div id="d2-carousel">
                <div className="carousel-inner rounded-circle">
                  <div className="d2-carousel-item">
                    <img className="d2-carousel-img d-block w-100" src="Images/sonati.jpg" alt="First slide"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="/#">
                  <i className="fas fa-angle-left" />
                </a>
                <a className="carousel-control-next" href="/#">
                  <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
     );
}
 
export default Carousel;