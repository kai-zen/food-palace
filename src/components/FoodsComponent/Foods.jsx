import React, {useEffect} from 'react';
import Title from './Title';
import Cards from './Cards';
import NoResults from './../../others/NoResults';

const Foods = ({foodsToShow, titleOfThisMenu}) => { 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(()=>{
        document.title = 'غذاهای هر دسته'
    })
    
    const whatToRender = () => {
        if (foodsToShow.length !== 0) {
            return <Cards foodsToShow={foodsToShow}/>;
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