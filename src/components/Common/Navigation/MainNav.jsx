import React, {useContext, Fragment} from 'react';
import {Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainContext from '../../../ContextAPI';

import LoginRequest from '../Others/LoginRequest';
import MenusModal from './../Modals/MenusModal';
import UserModal from './../Modals/UserModal';

const MainNav = () => {
    const context = useContext(MainContext);
    return (
        <Fragment>
            <nav id="fixed-top-menu" className="fixed-top row">
                <Link to="/" id="logo"><i className="fa fa-utensils" /> Food Palace</Link>
                <div id="navigation-options" className="offset-1 col-7 d-none d-lg-flex justify-content-around">
                <a href="#footer" className="navigation-option">تماس با ما</a>
                <Link to="/favorites" className="navigation-option" id="login-1">علاقه مندی ها</Link>
                <Link to="/shopping-cart" className="navigation-option" id="login-2">سبد خرید</Link>
                <p className="navigation-option" onClick={context.handleShowMenusModal} style={{cursor: 'pointer'}}>منو ها</p>
                <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={context.showMenusModal}>
                    <MenusModal handleShowMenusModal={context.handleShowMenusModal}/>
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
                    <p className="hidden-menu-item" onClick={context.handleShowUserModal} style={{cursor: 'pointer'}}>حساب کاربری</p>
                    <Modal
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={context.showUserModal}>
                        <UserModal handleShowUserModal={context.handleShowUserModal} userInfo={context.userInfo[0]}/>
                    </Modal>
                    <Link to="/shopping-cart" className="hidden-menu-item">سبد خرید</Link>
                    <p className="hidden-menu-item"  style={{cursor: 'pointer'}}>رزرو میز</p>
                    <Link to="/favorites" className="hidden-menu-item">علاقه مندی ها</Link>
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
            </nav>
            <LoginRequest/>
        </Fragment>   
    );
}
 
export default MainNav ;