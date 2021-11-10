import React, {useState, useContext} from 'react';
import LoginContext from '../../structure/contexts/loginContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router';

const LoginState = props => {
    //اطلاعات کاربر
    const [users, setUsers] = useState([
        {
        'id': 1,
        'name' : 'علی رضی پور',
        'email' : 'alirazipur2001@gmail.com',
        'password': '123456',
        'isAdmin': true,
        }
    ]);

    // متود مدیریت ثبت نام
    const handleSignUp = (name, email, pass) => {        
        let currentUsers = [...users];
        let itsNotUnique = currentUsers.filter(currentUser => currentUser.email === email);
        if(itsNotUnique.length > 0){
          toast.error('این ایمیل در سیستم ثبت شده', {
            position: 'top-right',
            closeButton: true
          });
          return;
        }
        let iteration = currentUsers.length;
        let userId = users[--iteration].id
        let user = {
            'id': ++userId,
            'name': name,
            'email': email,
            'password': pass,
            'isAdmin': false,
        };
        currentUsers.push(user);
        setUsers(currentUsers);
        toast.success('ثبت نام با موفقیت انجام شد', {
          position: 'top-right',
          closeButton: true
        });
    }
    
    // متود ورود
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [redirectToHome, setRedirectToHome] = useState(false);

    const handleLogin = (email, pass) => {
      let currentUsers = [...users];
      let emailIsOkay = currentUsers.filter(currentUser => currentUser.email === email);
      if(emailIsOkay[0]){
        let passIsOkay = emailIsOkay[0].password === pass;
        if(emailIsOkay.length > 0 && passIsOkay){
          setLoggedInUser(emailIsOkay[0]);
          setRedirectToHome(true);
        }else{
          toast.error('رمز وارد شده صحیح نیست', {
            position: 'top-right',
            closeButton: true
          });
        }
      }else{
        toast.error('ایمیل وارد شده در سیستم ثبت نشده', {
          position: 'top-right',
          closeButton: true
        });
      }
    }

    // متود لاگ عوت
    const handleLogout = () => {
      setLoggedInUser(null);
      setRedirectToHome(false);
      return <Redirect to='/'/>
    }

    return ( 
        <LoginContext.Provider value={{
            handleSignUp: handleSignUp,
            handleLogin: handleLogin,
            users: users,
            redirectToHome: redirectToHome,
            setRedirectToHome: setRedirectToHome,
            loggedInUser: loggedInUser,
            handleLogout: handleLogout
        }}> 
            {props.children}
        </LoginContext.Provider>
     );
}
 
export default LoginState;