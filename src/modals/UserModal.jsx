import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import LoginContext from './../structure/contexts/loginContext';
import './CSS/userModal.css'

const UserModal = ({setShowUserModal, userInfo}) => {
    const {handleLogout} = useContext(LoginContext)
    const goToAdminPanelButton = ()=>{
        if(userInfo.isAdmin){
            return (
                <Link className='btn btn-info btn-lg m-3 w-75' to='/admin-panel' onClick={()=>setShowUserModal(false)}>
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
            <h1 className="userModalP">{userInfo.name}</h1>
            <p className="userModalP" id="userModalEmail">ایمیل:  {userInfo.email}</p>
            <div>
                <Link className="btn btn-warning" to='/shopping-cart' onClick={()=>setShowUserModal(false)}>سبد خرید</Link>
                <Link className="btn btn-danger" to='/favorites' onClick={()=>{
                    setShowUserModal(false);
                }}>علاقه مندی ها</Link>
            </div>
            <Link className='btn btn-dark btn-lg m-3 w-75' to='/login' onClick={()=>{
                setShowUserModal(false);
                handleLogout();
            }}>
                    خروج از حساب کاربری
                </Link>
            {goToAdminPanelButton()}
            <span onClick={()=>setShowUserModal(false)} className="closeSpan"><i className='fas fa-times'></i></span>
        </div>
     );
};
 
export default UserModal;