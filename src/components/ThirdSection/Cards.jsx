import React from 'react';
import { withRouter } from 'react-router';

const Cards = ({history}) => {
    const redirectToSingleFood = () => {
        history.push("/singleFood");
    }
    return ( 
        <div className="row">
            <div className="card offset-1 col-10 offset-sm-0 col-sm-6 col-md-4 col-lg-3" onClick={redirectToSingleFood}>
                <img className="card-img-top cardImage" src="Images/d31.jpg" alt=""/>
                <div className="card-body cardElement">
                    <h2 className="card-title">کیک توت فرنگی</h2>
                    <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,000<small>تومان</small></h4>
                    <div style={{marginTop: '20px'}}>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-heart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-shopping-cart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-info" /></a>
                    </div>
                </div>
            </div>
                {/* Other 8 Cards */}
            <div className="card offset-1 col-10 offset-sm-0 col-sm-6 col-md-4 col-lg-3" onClick={redirectToSingleFood}>
                <img className="card-img-top cardImage" src="Images/d32.jpg" alt=""/>
                <div className="card-body cardElement">
                    <h2 className="card-title">مرغ شکم پر</h2>
                    <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,000<small>تومان</small></h4>
                    <div style={{marginTop: '20px'}}>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-heart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-shopping-cart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-info" /></a>
                    </div>
                </div>
            </div>
            <div className="card offset-1 col-10 offset-sm-0 col-sm-6 col-md-4 col-lg-3" onClick={redirectToSingleFood}>
                <img className="card-img-top cardImage" src="Images/d33.jpg" alt=""/>
                <div className="card-body cardElement">
                    <h2 className="card-title">چیزبرگر</h2>
                    <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,000<small>تومان</small></h4>
                    <div style={{marginTop: '20px'}}>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-heart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-shopping-cart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-info" /></a>
                    </div>
                </div>
            </div>
            <div className="card offset-1 col-10 offset-sm-0 col-sm-6 col-md-4 col-lg-3" onClick={redirectToSingleFood}>
                <img className="card-img-top cardImage" src="Images/d34.jpg" alt=""/>
                <div className="card-body cardElement">
                    <h2 className="card-title">شیرینی آلبالویی</h2>
                    <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,000<small>تومان</small></h4>
                    <div style={{marginTop: '20px'}}>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-heart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-shopping-cart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-info" /></a>
                    </div>
                </div>
            </div>
            <div className="card offset-1 col-10 offset-sm-0 col-sm-6 col-md-4 col-lg-3" onClick={redirectToSingleFood}>
                <img className="card-img-top cardImage" src="Images/d35.jpg" alt=""/>
                <div className="card-body cardElement">
                    <h2 className="card-title">استیک</h2>
                    <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,000<small>تومان</small></h4>
                    <div style={{marginTop: '20px'}}>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-heart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-shopping-cart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-info" /></a>
                    </div>
                </div>
            </div>
            <div className="card offset-1 col-10 offset-sm-0 col-sm-6 col-md-4 col-lg-3" onClick={redirectToSingleFood}>
                <img className="card-img-top cardImage" src="Images/d36.jpg" alt=""/>
                <div className="card-body cardElement">
                    <h2 className="card-title">ساق مرغ</h2>
                    <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,000<small>تومان</small></h4>
                    <div style={{marginTop: '20px'}}>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-heart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-shopping-cart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-info" /></a>
                    </div>
                </div>
            </div>
            <div className="card offset-1 col-10 offset-sm-0 col-sm-6 col-md-4 col-lg-3" onClick={redirectToSingleFood}>
                <img className="card-img-top cardImage" src="Images/d37.jpg" alt=""/>
                <div className="card-body cardElement">
                    <h2 className="card-title">کرپ توت فرنگی</h2>
                    <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,000<small>تومان</small></h4>
                    <div style={{marginTop: '20px'}}>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-heart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-shopping-cart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-info" /></a>
                    </div>
                </div>
            </div>
            <div className="card offset-1 col-10 offset-sm-0 col-sm-6 col-md-4 col-lg-3" onClick={redirectToSingleFood}>
                <img className="card-img-top cardImage" src="Images/d38.jpg" alt=""/>
                <div className="card-body cardElement">
                    <h2 className="card-title">کوکی شکلاتی</h2>
                    <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,000<small>تومان</small></h4>
                    <div style={{marginTop: '20px'}}>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-heart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-shopping-cart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-info" /></a>
                    </div>
                </div>
            </div>
            <div className="card offset-1 col-10 offset-sm-0 col-sm-6 col-md-4 col-lg-5 mx-auto" onClick={redirectToSingleFood}>
                <img className="card-img-top cardImage" src="Images/d39.jpg" alt=""/>
                <div className="card-body cardElement">
                    <h2 className="card-title">بشقاب سبزیجات</h2>
                    <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,000<small>تومان</small></h4>
                    <div style={{marginTop: '20px'}}>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-heart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-shopping-cart" /></a>
                    <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-info" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default withRouter(Cards);