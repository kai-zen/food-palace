import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const NotFound404 = () => {
    useEffect(()=>{
        document.title = 'پیدا نشد'
    })
    return ( 
        <div style={{
            width: '50%',
            margin: '10% 25%',
            textAlign: 'center',
            color: 'var(--white)',
        }}>
            <img src="Images/404.jpg" alt="" style={{
                display: 'block',
                borderRadius: '20px',
                width: '80%',
                marginLeft: '10%',
                marginBottom: '30px'
            }}/>
            <Link to='/' className='btn btn-warning btn-lg'>برگشت به صفحه اصلی</Link>
        </div>
     );
}
 
export default NotFound404;