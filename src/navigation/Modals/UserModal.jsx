import React from 'react';
import { Link } from 'react-router-dom';
import './userModal.css'

const UserModal = ({handleShowUserModal, userInfo}) => {
    const goToAdminPanelButton = ()=>{
        if(userInfo.isAdmin){
            return (
                <Link className='btn btn-info btn-lg m-3 w-75' to='/admin-panel' onClick={handleShowUserModal}>
                    برو به پنل ادمین
                </Link>
            )
        }
    }

    return (
        <div id="userModal">
            <img src="Images/user.jpg" alt="" className='rounded-circle' style={{
                border: '2px solid black'
            }}/>
            <p className="userModalP">نام: {userInfo.name}</p>
            <p className="userModalP" id="userModalEmail">ایمیل:  {userInfo.email}</p>
            <div>
                <Link className="btn btn-warning" to='/shopping-cart' onClick={handleShowUserModal}>سبد خرید</Link>
                <Link className="btn btn-danger" to='/favorites' onClick={handleShowUserModal}>علاقه مندی ها</Link>
            </div>
            {goToAdminPanelButton()}
            <span onClick={handleShowUserModal} className="closeSpan"><i className='fas fa-times'></i></span>
        </div>
     );
};
 
export default UserModal;