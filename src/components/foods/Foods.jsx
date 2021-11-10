import React, {useEffect, useState} from 'react';
import Title from './Title';
import Cards from './Cards';
import Footer from './../../others/Footer';
import NoResults from './../../others/NoResults';
import { paginate } from './../../structure/paginate';
import MyPagination from './Pagination';

const Foods = ({foodsToShow, titleOfThisMenu, renderFooterOrNot}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const paginatedFoods = paginate(foodsToShow, currentPage);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(()=>{
        document.title = 'رستوران قصر غذا'
    });

    
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
                <MyPagination nextPage={nextPage} currentPage={currentPage} prevPage={prevPage}/>
            )
        }else{
            return null;
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
            {(foodsToShow.length !== 0) ? 
                <div style={{
                    position: 'relative',
                    zIndex: '10'
                }}>
                    <Cards foodsToShow={paginatedFoods}/>
                    {renderPagination()}
                </div> : <NoResults/>
            }
            {renderFooter()}   
        </div>
     );
}
 
export default Foods;