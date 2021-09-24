import React from 'react';

const UserModal = ({handleShowUserModal}) => {
    return ( 
        <div id="userModal">
            <img src="Images/user.jpg" alt="" className='rounded-circle'/>
            <p className="userModalP">سن: 20</p>
            <p className="userModalP">نام: رضا مولایی</p>
            <p className="userModalP" id="userModalEmail">ایمیل:  rezamoalei@gmail.com</p>
            <div>
                <button className="btn btn-warning">سبد خرید</button>
                <button className="btn btn-danger">علاقه مندی ها</button>
            </div>
            <span onClick={handleShowUserModal} className="closeSpan"><i className='fas fa-times'></i></span>
        </div>
     );
};
 
export default UserModal;