import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
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
    }
    return (
        <nav id="fixed-top-menu" className="fixed-top row">
            <a href="/#" id="logo"><i className="fa fa-utensils" /> Food Palace</a>
            <div id="navigation-options" className="offset-1 col-7 d-none d-lg-flex justify-content-around">
            <a href="#footer" className="navigation-option">تماس با ما</a>
            <a href="/#" className="navigation-option" id="login-1">علاقه مندی ها</a>
            <a href="/#" className="navigation-option" id="login-2">سبد خرید</a>
            <a href="/#" className="navigation-option" onClick={handleShowMenusModal}>منو ها</a>
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
                <a href="/#" className="hidden-menu-item" onClick={handleShowUserModal}>حساب کاربری</a>
                <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={showUserModal}>
                    <UserModal handleShowUserModal={handleShowUserModal}/>
                </Modal>
                <a href="/#" className="hidden-menu-item">سبد خرید</a>
                <a href="/#" className="hidden-menu-item">رزرو میز</a>
                <a href="/#" className="hidden-menu-item">علاقه مندی ها</a>
                <a href="/#" className="hidden-menu-item">ارتباط با ما</a>
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
        </nav>
     );
}
 
export default MainNav ;