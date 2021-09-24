import React from 'react'
import Foods from './Foods';
import Title from './Title';

const FoodsComponent = () => {
    return ( 
        <div className="container" id="foodsComponent">
            <Title/>
            <Foods/>
        </div>
     );
}
 
export default FoodsComponent;