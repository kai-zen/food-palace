import React, {Fragment} from 'react';
import { withRouter } from 'react-router';

const SearchResults = ({history}) => {
    const redirectToSingleFood = () => {
        history.push("/singleFood");
    }
    return ( 
        <Fragment>
            <div className="card d4SingleCard"  onClick={redirectToSingleFood}>
                <img className="card-img-top cardImage d4CardImage" src="Images/d33.jpg" alt=""/>
                <div className="card-body cardElement d4CardElement ">
                <h2 className="card-title">چیز برگر</h2>
                <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,000<small>تومان</small></h4>
                <div>
                <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-heart" /></a>
                <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-shopping-cart" /></a>
                <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-info" /></a>
                </div>
            </div>
        </div>
            <div className="card d4SingleCard" onClick={redirectToSingleFood}>
                <img className="card-img-top cardImage d4CardImage" src="Images/d35.jpg" alt=""/>
                <div className="card-body cardElement d4CardElement ">
                <h2 className="card-title">استیک</h2>
                <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,000<small>تومان</small></h4>
                <div>
                <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-heart" /></a>
                <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-shopping-cart" /></a>
                <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-info" /></a>
                </div>
            </div>
        </div>
            <div className="card d4SingleCard" onClick={redirectToSingleFood}>
                <img className="card-img-top cardImage d4CardImage" src="Images/d36.jpg" alt=""/>
                <div className="card-body cardElement d4CardElement ">
                <h2 className="card-title">ساق مرغ</h2>
                <h4 className="card-text">قیمت:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20,000<small>تومان</small></h4>
            <div>
              <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-heart" /></a>
              <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-shopping-cart" /></a>
              <a href="/#" className="iconStyle d3IconStyle"><span className="fas fa-info" /></a>
            </div>
          </div>
        </div>
        </Fragment>
     );
}
 
export default withRouter(SearchResults);