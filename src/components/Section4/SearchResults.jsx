import React, {Fragment} from 'react';
import { withRouter } from 'react-router';

const SearchResults = ({history}) => {
    const redirectToSingleFood = () => {
        history.push("/singleFood");
    }
    return (
        <Fragment>
            <div className='d4SearchResult'  onClick={redirectToSingleFood}>
                <img src="/Images/giahi/حمص.jpg" alt=""/>
                <h2 className="card-title">فست فود / چیز برگر</h2>
                <button className='btn'>بیشتر...</button>
            </div>
            <div className='d4SearchResult'  onClick={redirectToSingleFood}>
                <img src="/Images/giahi/حمص.jpg" alt=""/>
                <h2 className="card-title">فست فود / چیز برگر</h2>
                <button className='btn'>بیشتر...</button>
            </div>
            <div className='d4SearchResult'  onClick={redirectToSingleFood}>
                <img src="/Images/giahi/حمص.jpg" alt=""/>
                <h2 className="card-title">فست فود / چیز برگر</h2>
                <button className='btn'>بیشتر...</button>
            </div>
        </Fragment>
     );
}
 
export default withRouter(SearchResults);