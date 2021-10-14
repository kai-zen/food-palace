import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import MainContext from '../../ContextAPI';

const Carousel = () => {
  const context = useContext(MainContext);
  const handleToggleToList = context.handleToggleToList;

// 18 20 11 9 6
useEffect(() => {
  const cartFoods = context.cartFoods;
  cartFoods.map(cartFood => {
    if(cartFood.id === 18 || cartFood.id === 20 || cartFood.id === 11 || cartFood.id === 9 || cartFood.id === 6){
      document.getElementById(`cartBtn${cartFood.id}`).innerText = 'حذف از سبد';
    }
  });
  window.scrollTo(0, 0);
},[]);

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
                <img src="images/Carousel1/پیتزا گیاهی.jpg" className="d-block w-100" alt=""/>
                <div className="carousel-caption">
                  <p>پیتزای سبزیجات</p>
                  <a className="btn btn-warning" id='cartBtn18' onClick={(event)=>handleToggleToList(event.target, '18', false, false)}>سفارش</a>
                  <Link to="/singleFood" className="btn btn-danger">صفحه غذا</Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/Carousel1/پنکیک کاراملی.jpg" className="d-block w-100" alt=""/>
                <div className="carousel-caption">
                  <p>پنکیک کاراملی</p>
                  <a className="btn btn-warning" id='cartBtn20' onClick={(event)=>handleToggleToList(event.target, '20', false, false)}>سفارش</a>
                  <Link to="/singleFood" className="btn btn-danger">صفحه غذا</Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/Carousel1/رپ مرغ.jpg" className="d-block w-100" alt=""/>
                <div className="carousel-caption">
                  <p>رپ مرغ و سبزیجات</p>
                  <a className="btn btn-warning" id='cartBtn11' onClick={(event)=>handleToggleToList(event.target, '11', false, false)}>سفارش</a>
                  <Link to="/singleFood" className="btn btn-danger">صفحه غذا</Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/Carousel1/برگر.jpg" className="d-block w-100 " alt=""/>
                <div className="carousel-caption">
                  <p>دوبل برگر ویژه</p>
                  <a className="btn btn-warning" id='cartBtn9' onClick={(event)=>handleToggleToList(event.target, '9', false, false)}>سفارش</a>
                  <Link to="/singleFood" className="btn btn-danger">صفحه غذا</Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/Carousel1/ماهی.jpg" className="d-block w-100" alt=""/>
                <div className="carousel-caption">
                  <p>ماهی کبابی(رژیمی)</p>
                  <a className="btn btn-warning" id='cartBtn6' onClick={(event)=>handleToggleToList(event.target, '6', false, false)}>سفارش</a>
                  <Link to="/singleFood" className="btn btn-danger">صفحه غذا</Link>
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
}
 
export default Carousel;