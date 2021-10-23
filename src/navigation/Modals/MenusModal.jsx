import React from 'react';
import { Link } from 'react-router-dom';
import './menusModal.css'

const MenusModal = ({handleShowMenusModal}) => {
    return (
    <div id="navbarMenusModal">
        <h1 id='navbarMenusModalH1'>
        منوها
        </h1>
        <div id='navbarMenusModalButtons'>
            <Link to='/sonati-foods' className='btn-lg menusModalButton' onClick={handleShowMenusModal}>سنتی</Link>
            <Link to='/fastfoods' className='btn-lg menusModalButton' onClick={handleShowMenusModal}>فست فود</Link>
            <Link to='/giahi-foods' className='btn-lg menusModalButton' onClick={handleShowMenusModal}>گیاهی</Link>
        </div>
        <span onClick={handleShowMenusModal} className="closeSpan"><i className='fas fa-times'></i></span>
    </div>
     );
}
 
export default MenusModal;