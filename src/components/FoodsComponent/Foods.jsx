import React, {Fragment, useEffect, useState} from 'react';
import Title from './Title';
import './FoodsComponent.css'
import Cards from './Cards';
import NoResults from './../../others/NoResults';
import { paginate } from './../../structure/paginate';
import { Button } from 'react-bootstrap';

const Foods = ({foodsToShow, titleOfThisMenu}) => {
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(()=>{
        document.title = 'رستوران قصر غذا'
    });

    const paginatedFoods = paginate(foodsToShow, currentPage);
    
    const nextPage = ()=>{
        if(foodsToShow.length/12 > currentPage ){
            setCurrentPage(currentPage+1);
        }
    }

    const prevPage = ()=>{
        if(foodsToShow.length/12 <= currentPage ){
            setCurrentPage(currentPage-1); 
        }
    }
    
    const whatToRender = () => {
        if (foodsToShow.length !== 0) {
            return (
                <Fragment>
                    <Cards foodsToShow={paginatedFoods}/>
                    <Button onClick={nextPage} style={{
                        marginRight: '10px',
                        backgroundColor: 'var(--gold)'
                    }}>صفحه بعد</Button>
                    <Button onClick={prevPage} style={{
                        backgroundColor: 'var(--gold)'
                    }}>صفحه قبل</Button>
                </Fragment>
            );
        }else{
            return <NoResults/>;
        }
    }

    return ( 
        <div className="container" id="foodsComponent">
            <Title titleOfThisMenu={titleOfThisMenu}/>
            {whatToRender()}   
        </div>
     );
}
 
export default Foods;