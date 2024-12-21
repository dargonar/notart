export function ContactInfo(){
  return (
    <div className="section section-contact fp-auto-height-responsive no-slide-arrows " data-section="contact-info">
      <div className="section-wrapper  with-margin">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-12">
            <div className="section-content anim text-left">
              <div className="title-desc">
                <div className="anim-2">
                  <p>GET IN TOUCH!</p>
                </div>
                <div className="title-decor"></div>
                <br/>
                <div className="address-container anim-3">
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                      <h4 className="display-condensed lite">Contact</h4>
                      <p><a href="tel:+5491131272458">Call: +5491131272458</a></p>
                      <p><a href="https://wa.me/5491131272458"> Whatsapp: +5491131272458</a></p>
                      <p> <a href="mailto:notart@gmail.com">Email: notart@gmail.com</a></p>

                      <div className="icons icons-margin">
                        <a className="btn-icon" href="http://instagram.com/notart">
                          <i className="icon fa fa-instagram"></i>
                        </a>
                        <a className="btn-icon" href="http://twitter/notart">
                          <i className="icon fa fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <h4 className="display-condensed lite">Address</h4>
                      <p>
                        Galería Florida Art
                        <br/>Florida 971
                        <br/>Ciudad de Buenos Aires, Argentina
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function Footer() {
    return (<footer id="site-footer" className="page-footer d-none d-lg-block">
          <div className="footer-left">
            <p className="note">NotArt by
              <a href="https://github.com/dargonar">
                <span className="marked">dargonar</span>
              </a>
            </p>
          </div>
    
          <div className="footer-right">
            <ul className="social">
              <li>
                <a href="http://twitter/notart">
                  <i className="icon fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="http://instagram.com/notart">
                  <i className="icon fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>);
};