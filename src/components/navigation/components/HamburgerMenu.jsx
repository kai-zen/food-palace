import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Modal } from 'react-bootstrap';
import UserModal from './../../../modals/UserModal';
import LoginContext from '../../../structure/contexts/loginContext';


const HamburgerMenu = () => {
    const loginContext = useContext(LoginContext);

    const [showUserModal, setShowUserModal] = useState(false);

    // مدیریت ریدایرکت یا نمایش مدال اطلاعات کاربر
    const handleRenderOrRedirect = () => {
        if(loginContext.loggedInUser){
            return (
                <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={showUserModal}>
                    <UserModal setShowUserModal={setShowUserModal} userInfo={loginContext.loggedInUser}/>
                </Modal>
            )
        }else{
            return <Redirect to='/login'/>
        }
    }
   
    return ( 
        <div id="hamburger-menu">
            <input type="checkbox" id="hidden-checkbox" className="checkbox" hidden />
            <label htmlFor="hidden-checkbox" className="hamburger-menu" id="menu">
                <div className="menu-line" id="menu-line-1" />
                <div className="menu-line" id="menu-line-2" />
                <div className="menu-line" id="menu-line-3" />
            </label>
            <div id="hidden-menu">
                <div id="hidden-menu-items">
                    <Link to="/" className="hidden-menu-item">خانه</Link>
                    <p className="hidden-menu-item" onClick={()=>{
                        setShowUserModal('true')
                        }} style={{cursor: 'pointer'}}>
                        حساب کاربری
                    </p>
                    {showUserModal ? handleRenderOrRedirect() : null}
                    <Link to="/shopping-cart" className="hidden-menu-item">
                        سبد خرید
                    </Link>
                    <p className="hidden-menu-item"  style={{cursor: 'pointer'}}>
                        رزرو میز
                    </p>
                    <Link to="/favorites" className="hidden-menu-item">
                        علاقه مندی ها
                    </Link>
                    <a href="#footer" className="hidden-menu-item">
                        ارتباط با ما
                    </a>
                    <div className="hidden-menu-item row">
                        <a href="/#" className="col-4">
                            <i className="fab fa-telegram-plane" />
                        </a>
                        <a href="/#" className="col-4">
                            <i className="fab fa-whatsapp" />
                        </a>
                        <a href="/#" className="col-4">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HamburgerMenu;