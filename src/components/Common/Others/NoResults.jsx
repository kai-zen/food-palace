import React from 'react'

const NoResults = () => {
    const style = {
        backgroundColor: 'rgba(256, 256, 256, .7',
        borderRadius: '10%'
    }
    return (
        <div className="row"> 
            <img src="images/noResults.png" alt="" className='offset-1 col-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 p-3' style={style}/>
        </div>
     );
}
 
export default NoResults;