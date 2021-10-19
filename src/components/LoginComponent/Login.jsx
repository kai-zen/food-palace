import React, {useState, useRef, useContext} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import MainContext from './../../ContextAPI';

const Login = () => {
    const context = useContext(MainContext);
    const handleLogin = context.handleLogin;

    const validator = useRef(new SimpleReactValidator({
        messages: {
          required: 'پر کردن این فیلد الزامیست',
          email: 'لطفا ایمیل معتبر وارد کنید',
          min: 'کمتر از شش کاراکتر نباید باشد'
        },
        element: message => <div style={{
          color: 'red'
        }}>{message}</div>
    }));
    
    const [loginEmail , setLoginEmail] = useState('');
    const [loginPass , setLoginPass] = useState('');
    const [, forceUpdate] = useState();

    const runLogin = () => {
        if(validator.current.allValid()){
            handleLogin(loginEmail, loginPass)
        }else{
            validator.current.showMessages();forceUpdate(1);
        }
    }

    return ( 
        <div id="signInSection" className="mainSections">
            <div className="eachInputGroup">
                <label htmlFor="user" className="typingInputLabel">آدرس ایمیل</label>
                <input
                    id="user"
                    name='login-email'
                    type="email"
                    className="typingInput"
                    value={loginEmail}
                    onChange={e=>{
                    setLoginEmail(e.target.value);
                    validator.current.showMessageFor('login-email');
                    }}
                />
                {validator.current.message('login-email', loginEmail, 'required|email')}
            </div>
            <div className="eachInputGroup">
                <label htmlFor="pass" className="typingInputLabel">رمزعبور</label>
                <input
                    id="pass"
                    name='login-pass'
                    type="password"
                    className="typingInput"
                    data-type="password"
                    value={loginPass}
                    onChange={e=>{
                    setLoginPass(e.target.value);
                    validator.current.showMessageFor('login-pass');
                    }}
                />
                {validator.current.message('login-pass', loginPass, 'required|min:6')}
            </div>
            <div className="eachInputGroup">
                <input id="invisibleCheckbox" type="checkbox" className="check"/>
                <label htmlFor="invisibleCheckbox">
                    <span className="checkboxReplacingIcon"></span>
                    مرا به خاطر بسپار
                </label>
            </div>
            <div className="eachInputGroup">
                <input type="submit" onClick={runLogin} className="button" value="ورود"/>
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
                <a href="#wholeFormContainer">خوش آمدید</a>
            </div>
        </div>
    );
}
 
export default Login;