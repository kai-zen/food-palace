import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import MenusModal from './../../../modals/MenusModal';

const NavigationOptions = () => {
    const [showMenusModal, setShowMenusModal] = useState(false);

    return ( 
        <div id="navigation-options" className="offset-1 col-7 d-none d-lg-flex justify-content-around">
            <a
            href="#footer"
            className="navigation-option">
                تماس با ما
            </a>
            <NavLink
            to="/favorites"
            className="navigation-option"
            id="login-1">
                علاقه مندی ها
            </NavLink>
            <NavLink
            to="/shopping-cart"
            className="navigation-option"
            id="login-2">
                سبد خرید
            </NavLink>
            <p
            className="navigation-option"
            onClick={()=>setShowMenusModal(true)}
            style={{cursor: 'pointer'}}>
                منو ها
            </p>
            <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showMenusModal}>
                <MenusModal setShowMenusModal={setShowMenusModal}/>
            </Modal>
            <NavLink to="/" exact className="navigation-option" id="login-1">خانه</NavLink>
        </div>
    );
}
 
export default NavigationOptions;