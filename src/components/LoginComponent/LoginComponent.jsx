import React, {useEffect} from 'react';
import Login from './Login';
import Register from './Register';

const LoginComponent = () => {

    const closeLoginRequset = () => {
        document.getElementById('loginRequest').style.display = 'none';
    }
    useEffect(closeLoginRequset, []);

    return ( 
    <div id="wholeFormContainer">
        <div id="fadeLayer">
            <input id="switchToSignIn" className="switcherRadio" type="radio" name="switcherRadio" defaultChecked/>
            <label
                htmlFor="switchToSignIn" 
                className="switcherLabel"
            >ورود</label>
            <input id="switchToSignUp" className="switcherRadio" type="radio" name="switcherRadio"/>
            <label
                htmlFor="switchToSignUp"
                className="switcherLabel"
            >ثبت نام</label>
            <div id="sectionsContainer">
                <Login/>
                <Register/>
            </div>
        </div>
    </div>
     );
}
 
export default LoginComponent;