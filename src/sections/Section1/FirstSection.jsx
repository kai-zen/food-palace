import React, {useEffect} from 'react'
import Carousel from './Carousel1';

const FirstSection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return ( 
    <div className="bkg" id="bkg">
        <div className="bkg" id="div1">
            {/* عناوین */}
            <h1 className="title" id="main-title">FOOD PALACE!</h1>
            <h6 className="title" id="subtitle">This is what they serve in heaven!</h6>
            {/* اسلایدر */}
            <Carousel/>
        </div>
    </div>
     );
}
 
export default FirstSection;