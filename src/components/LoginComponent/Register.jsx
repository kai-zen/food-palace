import React, {useState, useRef, useContext} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import MainContext from './../../ContextAPI';

const Register = () => {
    const context = useContext(MainContext);
    const handleSignUp = context.handleSignUp;

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

    const [signUpUsername , setSignUpUsername] = useState('');
    const [signUpEmail , setSignUpEmail] = useState('');
    const [signUpPass , setSignUpPass] = useState('');
    const [, forceUpdate] = useState();

    const runSignUp = () => {
       if(validator.current.allValid()){
            handleSignUp(signUpUsername, signUpEmail, signUpPass);
        }else{
        validator.current.showMessages();forceUpdate(1);
        } 
    }
     

    return ( 
        <div id="signUpSection" className="mainSections">
            <div className="eachInputGroup">
                <label htmlFor="user" className="typingInputLabel">نام کاربری</label>
                <input
                    id="user"
                    name='signup-username'
                    type="text"
                    className="typingInput"
                    value={signUpUsername}
                    onChange={e=>{
                    setSignUpUsername(e.target.value);
                    validator.current.showMessageFor('signup-username');
                    }}
                />
                {validator.current.message('signup-username', signUpUsername, 'required')}
            </div>
            <div className="eachInputGroup">
                <label htmlFor="pass" className="typingInputLabel">رمز عبور</label>
                <input
                    id="pass"
                    name='signup-pass'
                    type="password"
                    className="typingInput"
                    data-type="password"
                    value={signUpPass}
                    onChange={e=>{
                    setSignUpPass(e.target.value);
                    validator.current.showMessageFor('signup-pass');
                    }}
                />
                {validator.current.message('signup-pass', signUpPass, 'required|min:6')}
            </div>
            <div className="eachInputGroup">
                <label htmlFor="email" className="typingInputLabel">آدرس ایمیل</label>
                <input
                    id="email"
                    name='signup-email'
                    type="text"
                    className="typingInput"
                    value={signUpEmail}
                    onChange={e=>{
                    setSignUpEmail(e.target.value);
                    validator.current.showMessageFor('signup-email');
                    }}/>
                {validator.current.message('signup-email', signUpEmail, 'required|email')}
            </div>
            <div className="eachInputGroup">
                <input type="submit" onClick={runSignUp} className="button" value="ثبت نام"/>
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
                <label>قبلا ثبت نام کردید؟  وارد شوید</label>
            </div>
        </div>
    );
}
 
export default Register;