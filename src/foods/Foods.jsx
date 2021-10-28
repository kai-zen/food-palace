import React, {Fragment, useEffect, useState} from 'react';
import Title from './Title';
import './FoodsComponent.css'
import Cards from './Cards';
import NoResults from '../others/NoResults';
import { paginate } from '../structure/paginate';
import { Button } from 'react-bootstrap';
import Footer from '../others/Footer';

const Foods = ({foodsToShow, titleOfThisMenu, renderFooterOrNot}) => {
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
        if(currentPage > 1){
            setCurrentPage(currentPage-1);
        }  
    }

    const renderTitle = () => {
        if(titleOfThisMenu !== null){
            return <Title titleOfThisMenu={titleOfThisMenu}/>
        }else{
            return null;
        }
    }

    const renderPagination = () => {
        if(foodsToShow.length > 12){
            return (
                <Fragment>
                    <Button id='paginationNext' onClick={nextPage} style={{
                        marginRight: '10px',
                        backgroundColor: 'var(--gold)'
                    }}>بعد</Button>
                    <button className='btn' style={{
                        fontSize: '2rem',
                        marginRight: '10px',
                        color: 'var(--white)'
                    }}>{currentPage}</button>
                    <Button id='paginationPrev' onClick={prevPage} style={{
                        backgroundColor: 'var(--gold)',
                    }}>قبل</Button>
                </Fragment>
            )
        }else{
            return null;
        } 
    }
    
    const renderCards = () => {
        if (foodsToShow.length !== 0) {
            return (
                <div style={{
                    position: 'relative',
                    zIndex: '10'
                }}>
                    <Cards foodsToShow={paginatedFoods}/>
                    {renderPagination()}
                </div>
            );
        }else{
            return <NoResults/>;
        }
    }

    const renderFooter = () => {
        if(renderFooterOrNot){
            return <Footer/>
        }else{
            return null;
        }
    }

    return ( 
        <div className="container" id="foodsComponent">
            {renderTitle()}
            {renderCards()}
            {renderFooter()}   
        </div>
     );
}
 
export default Foods;