import React from 'react'

const Footer  = () => {
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
            <input type="text" required className="form-control" />
          </div>
          <div id="footer-form-email">
            <p>ایمیل *</p>
            <input type="email" required className="form-control" />
          </div>
          <button type="submit" className="btn btn-secondary">ثبت ایمیل</button>
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