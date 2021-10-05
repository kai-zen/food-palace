import React, {useState, Fragment} from 'react';
import {Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LoginRequest from './LoginRequest';
import MenusModal from './MenusModal';
import UserModal from './UserModal';

const MainNav = () => {
    const [showMenusModal, setShowMenusModal] = useState(false);
    const [showUserModal, setShowUserModal] = useState(false);
    const handleShowMenusModal = () => {
        setShowMenusModal(!showMenusModal);
    }
    const handleShowUserModal = () => {
        setShowUserModal(!showUserModal);
    };
    const [userInfo, setUserInfo] = useState({ persons : [
        {
        'age' : '35',
        'name' : 'رضا مولایی',
        'email' : 'rezamoalei@gmail.com'
      }
      ]});
    return (
        <Fragment>
            <nav id="fixed-top-menu" className="fixed-top row">
                <Link to="/" id="logo"><i className="fa fa-utensils" /> Food Palace</Link>
                <div id="navigation-options" className="offset-1 col-7 d-none d-lg-flex justify-content-around">
                <a href="#footer" className="navigation-option">تماس با ما</a>
                <Link to="/foods" className="navigation-option" id="login-1">علاقه مندی ها</Link>
                <Link to="/foods" className="navigation-option" id="login-2">سبد خرید</Link>
                <p className="navigation-option" onClick={handleShowMenusModal} style={{cursor: 'pointer'}}>منو ها</p>
                <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showMenusModal}>
                    <MenusModal handleShowMenusModal={handleShowMenusModal}/>
                </Modal>
                </div>
                <div id="hamburger-menu">
                <input type="checkbox" id="hidden-checkbox" className="checkbox" hidden />
                <label htmlFor="hidden-checkbox" className="hamburger-menu" id="menu">
                    <div className="menu-line" id="menu-line-1" />
                    <div className="menu-line" id="menu-line-2" />
                    <div className="menu-line" id="menu-line-3" />
                </label>
                <div id="hidden-menu">
                    <div id="hidden-menu-items">
                    <a href="/#" className="hidden-menu-item">خانه</a>
                    <p className="hidden-menu-item" onClick={handleShowUserModal} style={{cursor: 'pointer'}}>حساب کاربری</p>
                    <Modal
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={showUserModal}>
                        <UserModal handleShowUserModal={handleShowUserModal} userInfo={userInfo.persons[0]}/>
                    </Modal>
                    <Link to="/foods" className="hidden-menu-item">سبد خرید</Link>
                    <p className="hidden-menu-item"  style={{cursor: 'pointer'}}>رزرو میز</p>
                    <Link to="/foods" className="hidden-menu-item">علاقه مندی ها</Link>
                    <a href="#footer" className="hidden-menu-item">ارتباط با ما</a>
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
                <div id="miniNav">
                    <a onClick={handleShowUserModal}><i className='fas fa-user'></i></a>
                    <Link to='/foods'><i className='fas fa-heart'></i></Link>
                    <span class="badge bg-secondary">0</span>
                    <Link to='/foods'><i className='fas fa-shopping-cart'></i></Link>
                    <span class="badge bg-secondary">0</span>
                </div>
            </nav>
            <LoginRequest/>
        </Fragment>   
     );
}
 
export default MainNav ;