import React from 'react';
import { Link } from 'react-router-dom';

const FloatingMenu = () => {
    return ( 
        <div id="floating-menu" className="d-none d-md-flex">
            <Link to="/foods">گیاهی</Link>
            <Link to="/foods">فست فود </Link>
            <Link to="/foods">سنتی</Link>
        </div>
     );
}
 
export default FloatingMenu;