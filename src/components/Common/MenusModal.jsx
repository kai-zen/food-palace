import React from 'react';

const MenusModal = ({handleShowMenusModal}) => {
    return (
    <div id="navbarMenusModal">
        <h1 id='navbarMenusModalH1'>
        منوها
        </h1>
        <div id='navbarMenusModalButtons'>
            <button className='btn-lg'>سنتی</button>
            <button className='btn-lg'>فست فود</button>
            <button className='btn-lg'>گیاهی</button>
        </div>
        <span onClick={handleShowMenusModal} className="closeSpan"><i className='fas fa-times'></i></span>
    </div>
     );
}
 
export default MenusModal;