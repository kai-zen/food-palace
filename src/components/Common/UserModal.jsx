import React from 'react';
import { Link } from 'react-router-dom';

const UserModal = ({handleShowUserModal, userInfo}) => {
    return (
        <div id="userModal">
            <img src="Images/user.jpg" alt="" className='rounded-circle'/>
            <p className="userModalP">سن: {userInfo.age}</p>
            <p className="userModalP">نام: {userInfo.name}</p>
            <p className="userModalP" id="userModalEmail">ایمیل:  {userInfo.email}</p>
            <div>
                <Link className="btn btn-warning" to='/foods' onClick={handleShowUserModal}>سبد خرید</Link>
                <Link className="btn btn-danger" to='/foods' onClick={handleShowUserModal}>علاقه مندی ها</Link>
            </div>
            <span onClick={handleShowUserModal} className="closeSpan"><i className='fas fa-times'></i></span>
        </div>
     );
};
 
export default UserModal;