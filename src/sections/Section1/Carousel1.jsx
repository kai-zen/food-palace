import React, {useContext, useEffect, useState} from 'react';
import { Modal } from 'react-bootstrap';
import SingleFoodModal from '../../components/SingleFoodModal';
import MainContext from '../../structure/contexts/mainContext';

const Carousel = () => {
  const context = useContext(MainContext);
  const handleToggleToList = context.handleToggleToList;
  const allFoods = context.allFoods;

  const [showSingleFoodModal, setShowSingleFoodModal] = useState(false);
  const [clickedFoodIndex, setClickedFoodIndex] = useState(18);

  const handleShowSingleFoodModal = (id)=>{
    let i=0
    while(true){
        if(allFoods[i].id == id){
            setClickedFoodIndex(i);
            break;
        }else{
            ++i;
        }
    }
    setShowSingleFoodModal(true);
}

    useEffect(() => {
      const cartFoods = context.cartFoods;
      cartFoods.map(cartFood => {
        if(cartFood.id === 18 || cartFood.id === 20 || cartFood.id === 11 || cartFood.id === 9 || cartFood.id === 6){
          document.getElementById(`cartBtn${cartFood.id}`).innerText = 'حذف از سبد';
        }
        return true;
      });
    });

    useEffect(()=>{
      window.scrollTo(0, 0);
    }, [])

    useEffect(()=>{
      document.title = 'رستوران قصر غذا'
  })

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
                  <button className="btn btn-warning btn-lg" id='cartBtn18' onClick={(event)=>handleToggleToList(event.target, '18', false, false)}>سفارش</button>
                  <button onClick={()=>handleShowSingleFoodModal(18)} className="btn btn-danger btn-lg">صفحه غذا</button>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/Carousel1/پنکیک کاراملی.jpg" className="d-block w-100" alt=""/>
                <div className="carousel-caption">
                  <p>پنکیک کاراملی</p>
                  <button className="btn btn-warning btn-lg" id='cartBtn20' onClick={(event)=>handleToggleToList(event.target, '20', false, false)}>سفارش</button>
                  <button onClick={()=>handleShowSingleFoodModal(20)} className="btn btn-danger btn-lg">صفحه غذا</button>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/Carousel1/رپ مرغ.jpg" className="d-block w-100" alt=""/>
                <div className="carousel-caption">
                  <p>رپ مرغ و سبزیجات</p>
                  <button className="btn btn-warning btn-lg" id='cartBtn11' onClick={(event)=>handleToggleToList(event.target, '11', false, false)}>سفارش</button>
                  <button onClick={()=>handleShowSingleFoodModal(11)} className="btn btn-danger btn-lg">صفحه غذا</button>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/Carousel1/برگر.jpg" className="d-block w-100 " alt=""/>
                <div className="carousel-caption">
                  <p>دوبل برگر ویژه</p>
                  <button className="btn btn-warning btn-lg" id='cartBtn9' onClick={(event)=>handleToggleToList(event.target, '9', false, false)}>سفارش</button>
                  <button className="btn btn-danger btn-lg" onClick={()=>handleShowSingleFoodModal(9)}>صفحه غذا</button>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/Carousel1/ماهی.jpg" className="d-block w-100" alt=""/>
                <div className="carousel-caption">
                  <p>ماهی کبابی(رژیمی)</p>
                  <button className="btn btn-warning btn-lg" id='cartBtn6' onClick={(event)=>handleToggleToList(event.target, '6', false, false)}>سفارش</button>
                  <button onClick={()=>handleShowSingleFoodModal(6)} className="btn btn-danger btn-lg">صفحه غذا</button>
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
          <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showSingleFoodModal}>
                <SingleFoodModal setShowSingleFoodModal={setShowSingleFoodModal} foodInfo={allFoods[clickedFoodIndex]} clickedFoodIndex={clickedFoodIndex}/>
            </Modal>
        </div>
     );
}
 
export default Carousel;