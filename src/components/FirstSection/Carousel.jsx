import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return ( 
        <div className="row">
          {/* دکمه اسلاید قبلی و بعدی */}
          <div id="next-prev">
            <a id="next-btn" className="carousel-control-prev bg-danger" href="#slider" title="بعدی" data-slide="next">
              <i className="fas fa-angle-right" />
            </a>
            <a id="prev-btn" className="carousel-control-next bg-warning" href="#slider" title="قبلی" data-slide="prev">
              <i className="fas fa-angle-left" />
            </a>
          </div>
          {/* کروسل */}
          <div className="carousel slide" data-ride="carousel" id="slider">
            <div className="carousel-inner" id="carousel-inner">
              <div className="carousel-item active">
                <img src="images/vegeterian-pizza.jpg" className="d-block w-100" alt=""/>
                <div className="carousel-caption">
                  <p>پیتزای سبزیجات</p>
                  <a href="/#" className="btn btn-warning">سفارش</a>
                  <Link to="/singleFood" className="btn btn-danger">صفحه غذا</Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/Pancake.jpeg" className="d-block w-100" alt=""/>
                <div className="carousel-caption">
                  <p>پنکیک کاراملی</p>
                  <a href="/#" className="btn btn-warning">سفارش</a>
                  <Link to="/singleFood" className="btn btn-danger">صفحه غذا</Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/wrap.png" className="d-block w-100" alt=""/>
                <div className="carousel-caption">
                  <p>رپ مرغ و سبزیجات</p>
                  <a href="/#" className="btn btn-warning">سفارش</a>
                  <Link to="/singleFood" className="btn btn-danger">صفحه غذا</Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/burger.png" className="d-block w-100 " alt=""/>
                <div className="carousel-caption">
                  <p>دوبل برگر ویژه</p>
                  <a href="/#" className="btn btn-warning">سفارش</a>
                  <Link to="/singleFood" className="btn btn-danger">صفحه غذا</Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/fish.png" className="d-block w-100" alt=""/>
                <div className="carousel-caption">
                  <p>ماهی کبابی(رژیمی)</p>
                  <a href="/#" className="btn btn-warning">سفارش</a>
                  <Link to="/singleFood" className="btn btn-danger">صفحه غذا</Link>
                </div>
              </div>
              <input type="checkbox" id="hidden-check" hidden />
              <div id="more">
                <label htmlFor="hidden-check" id="more-dots">
                  <i className="fas fa-ellipsis-h" />
                </label>
                <a href="/#" className="more-icons" title="افزودن به علاقه مندی ها">
                  <i className="fas fa-heart" />
                </a>
                <a href="/#" className="more-icons" title="افزودن به سبد خرید">
                  <i className="fas fa-shopping-cart" />
                </a>
                <Link to="/singleFood" className="more-icons" title="اطلاعات بیشتر">
                  <i className="fas fa-info" />
                </Link>
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
}
 
export default Carousel;