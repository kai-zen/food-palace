import React from 'react';
import { Link } from 'react-router-dom';
import './menusModal.css'

const MenusModal = ({setShowMenusModal}) => {
    return (
    <div id="navbarMenusModal">
        <h1 id='navbarMenusModalH1'>
        منوها
        </h1>
        <div id='navbarMenusModalButtons'>
            <Link to='/sonati-foods' className='btn-lg menusModalButton' onClick={()=>setShowMenusModal(false)}>سنتی</Link>
            <Link to='/fastfoods' className='btn-lg menusModalButton' onClick={()=>setShowMenusModal(false)}>فست فود</Link>
            <Link to='/giahi-foods' className='btn-lg menusModalButton' onClick={()=>setShowMenusModal(false)}>گیاهی</Link>
        </div>
        <span onClick={()=>setShowMenusModal(false)} className="closeSpan"><i className='fas fa-times'></i></span>
    </div>
     );
}
 
export default MenusModal;