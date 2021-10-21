import React from 'react';
import { Link } from 'react-router-dom';

const LoginRequest = () => {
    const clickToClose = () => {
        document.getElementById('loginRequest').style.display = 'none';
    }
    return (
    <div id="loginRequest">
        <p>وارد حساب کاربری خود شوید</p>
        <Link id='loginRequestButton' className='btn btn-dark' to='/login' onClick={clickToClose}>ورود/ثبت نام</Link>
        <span className="closeSpan" onClick={clickToClose} style={{marginRight: '8%'}}><i className='fas fa-times'></i></span>
    </div>
    );
}
 
export default LoginRequest;