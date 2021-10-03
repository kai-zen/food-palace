import React, {useEffect} from 'react'

const Login = () => {
    const closeLoginRequset = () => {
        document.getElementById('loginRequest').style.display = 'none';
    }
    useEffect(closeLoginRequset, []);
    return ( 
    <div id="wholeFormContainer">
        <div id="fadeLayer">
            <input id="switchToSignIn" className="switcherRadio" type="radio" name="switcherRadio" defaultChecked/>
            <label htmlFor="switchToSignIn" className="switcherLabel">ورود</label>
            <input id="switchToSignUp" className="switcherRadio" type="radio" name="switcherRadio"/>
            <label htmlFor="switchToSignUp" className="switcherLabel">ثبت نام</label>
            <div id="sectionsContainer">
                <div id="signInSection" className="mainSections">
                    <div className="eachInputGroup">
                        <label htmlFor="user" className="typingInputLabel">نام کاربری</label>
                        <input id="user" type="text" className="typingInput"/>
                    </div>
                    <div className="eachInputGroup">
                        <label htmlFor="pass" className="typingInputLabel">رمزعبور</label>
                        <input id="pass" type="password" className="typingInput" data-type="password"/>
                    </div>
                    <div className="eachInputGroup">
                        <input id="invisibleCheckbox" type="checkbox" className="check"/>
                        <label htmlFor="invisibleCheckbox">
                            <span className="checkboxReplacingIcon"></span>
                            مرا به خاطر بسپار
                        </label>
                    </div>
                    <div className="eachInputGroup">
                        <input type="submit" className="button" value="ورود"/>
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                        <a href="#wholeFormContainer">خوش آمدید</a>
                    </div>
                </div>
                <div id="signUpSection" className="mainSections">
                    <div className="eachInputGroup">
                        <label htmlFor="user" className="typingInputLabel">نام کاربری</label>
                        <input id="user" type="text" className="typingInput"/>
                    </div>
                    <div className="eachInputGroup">
                        <label htmlFor="pass" className="typingInputLabel">رمز عبور</label>
                        <input id="pass" type="password" className="typingInput" data-type="password"/>
                    </div>
                    <div className="eachInputGroup">
                        <label htmlFor="pass" className="typingInputLabel">آدرس ایمیل</label>
                        <input id="pass" type="text" className="typingInput"/>
                    </div>
                    <div className="eachInputGroup">
                        <input type="submit" className="button" value="ثبت نام"/>
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                        <label>قبلا ثبت نام کردید؟  وارد شوید</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Login;