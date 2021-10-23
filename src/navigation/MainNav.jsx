import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './components/HamburgerMenu';
import NavigationOptions from './components/NavigationOptions';
import FloatingMenu from './components/FloatingMenu';
import LoginRequest from './../others/LoginRequest';
import './nav.css'

const MainNav = () => {
    return (
        <Fragment>
            <nav id="fixed-top-menu" className="fixed-top row">
                <Link to="/" id="logo">
                    <i className="fa fa-utensils" />
                    Food Palace
                </Link>
                <NavigationOptions/>
                <HamburgerMenu/>
            </nav>
            <FloatingMenu/>
            <LoginRequest/>
        </Fragment>   
    );
}
 
export default MainNav ;