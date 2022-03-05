import React, { useEffect } from 'react';

const Carousel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = 'رستوران قصر غذا';
  });

  return (
    <div className="row">
      {/* دکمه اسلاید قبلی و بعدی */}
      <div id="next-prev">
        <a
          id="next-btn"
          className="carousel-control-prev bg-danger"
          href="#slider"
          title="بعدی"
          data-slide="next"
        >
          <i className="fas fa-angle-right" />
        </a>
        <a
          id="prev-btn"
          className="carousel-control-next bg-warning"
          href="#slider"
          title="قبلی"
          data-slide="prev"
        >
          <i className="fas fa-angle-left" />
        </a>
      </div>
      {/* کروسل */}
      <div className="carousel slide" data-ride="carousel" id="slider">
        <div className="carousel-inner" id="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/Carousel1/رپ مرغ.jpg"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption">
              <p>پیتزای سبزیجات</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/Carousel1/رپ مرغ.jpg"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption">
              <p>پنکیک کاراملی</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/Carousel1/رپ مرغ.jpg"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption">
              <p>رپ مرغ و سبزیجات</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/Carousel1/رپ مرغ.jpg"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption">
              <p>دوبل برگر ویژه</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="images/Carousel1/رپ مرغ.jpg"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption">
              <p>ماهی کبابی(رژیمی)</p>
            </div>
          </div>
        </div>
        <div id="dots-box">
          <ol className="carousel-indicators">
            <li data-target="#slider" data-slide-to={0} className="active" />
            <li data-target="#slider" data-slide-to={1} />
            <li data-target="#slider" data-slide-to={2} />
            <li data-target="#slider" data-slide-to={3} />
            <li data-target="#slider" data-slide-to={4} />
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
