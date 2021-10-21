import React from 'react';
import { Link } from 'react-router-dom';

const FloatingMenu = () => {
    return ( 
        <div id="floating-menu" className="d-none d-md-flex">
            <Link to="/giahi-foods">گیاهی</Link>
            <Link to="/fastfoods">فست فود </Link>
            <Link to="/sonati-foods">سنتی</Link>
        </div>
     );
}
 
export default FloatingMenu;