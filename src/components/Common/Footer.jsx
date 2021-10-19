import React, {useRef, useState} from 'react'
import SimpleReactValidator from 'simple-react-validator';

const Footer  = () => {

  const validator = useRef(new SimpleReactValidator({
    messages: {
      required: 'پر کردن این فیلد الزامیست',
      email: 'لطفا ایمیل معتبر وارد کنید'
    },
    element: message => <div style={{
      color: 'red'
    }}>{message}</div>
  }));

  const [userName , setUserName] = useState('');
  const [email , setEmail] = useState('');
  const [, forceUpdate] = useState();

  const handleSubmit = () => {
    if(validator.current.allValid()){
      alert('اطلاعات شما با موفقیت ثبت شد');
    }else{
      validator.current.showMessages();forceUpdate(1);
    }
  }

  

    return ( 
    <footer id='footer'>
    <div className="container">
      <div className="row">
        {/* بخش درباره ما */}
        <div id="footer-p1" className="offset-1 col-10 col-md-5 offset-lg-0 col-lg-4 footer-div">
          <h1>درباره ما</h1>
          <p>اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم امتنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده
            میشود.
          </p>
          <div id="footer-p1-icons">
            <a href="/#" className="iconStyle"><span className="fab fa-instagram" /></a>
            <a href="/#" className="iconStyle"><span className="fab fa-twitter" /></a>
            <a href="/#" className="iconStyle"><span className="fab fa-telegram-plane" /></a>
            <a href="/#" className="iconStyle"><span className="fab fa-whatsapp" /></a>
          </div>
        </div>
        {/* بخش تماس با ما */}
        <div id="footer-p2" className="offset-1 col-10 col-md-5 offset-lg-0 col-lg-4 footer-div">
          <h1>تماس با ما</h1>
          <div id="footer-address" className="footer-p2-info">
            <span className="fas fa-map-marker-alt" />
            <span>ایران، بوشهر، میدان امام </span>
          </div>
          <div id="footer-phone" className="footer-p2-info">
            <span className="fas fa-phone-alt" />
            <span>021-9876</span>
          </div>
          <div id="footer-email" className="footer-p2-info">
            <span className="fas fa-envelope" />
            <span>email@example.com</span>
          </div>
        </div>
        {/* بخش خبرنامه */}
        <div id="footer-p3" className="offset-1 col-10 offset-md-6 col-md-6 offset-lg-1 col-lg-3 footer-div">
          <h1>خبرنامه</h1>
          <div id="footer-form-username">
            <p>نام دلخواه *</p>
            <input type="text"
            required
            className="form-control"
            name='footer-username'
            value={userName}
            onChange={e=>{
              setUserName(e.target.value);
              validator.current.showMessageFor('footer-username');
            }}
            />
            {validator.current.message('footer-username', userName, 'required')}
          </div>
          <div id="footer-form-email">
            <p>ایمیل *</p>
            <input 
            type="email" 
            required 
            className="form-control" 
            name='footer-email'
            value={email}
            onChange={e=>{
              setEmail(e.target.value);
              validator.current.showMessageFor('footer-email');
            }}
            />
            {validator.current.message('footer-email', email, 'required|email')}
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-secondary">ثبت ایمیل</button>
        </div>
        {/* بخش کپی رایت */}
        <div id="copyright" className="col-12">
          <p>© All designed and created by kai-zen</p>
        </div>
      </div>
    </div>
    </footer>
     );
}
 
export default Footer;