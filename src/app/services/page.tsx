import Link from 'next/link';
import { services } from "../data/services";
import { ContactInfo } from "../components/footer";

export default function Services() {

  const listServices = services.map((service, index) =>
    (
      <div id="product-item-1" className="row no-gutters row-product" key={index}>
        <div className="col-12 col-lg-6 order-1 order-lg-1 side-left center-vh">
          <div className="content-wrapper">
            <div className="img-frame-normal">
              <div className="img-1">
                <img className="img" src={service.img_big} alt="Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 order-2 order-lg-2 side-right center-vh">
          <div className="content-wrapper">
            <div className="title-desc">
              <h3 className="display-3 display-title anim-1 decor" dangerouslySetInnerHTML={{__html: service.title}} />
              {/*<h4 className="display-subtitle anim-2">200 USD</h4>*/}
              <p className="anim-2" dangerouslySetInnerHTML={{__html: service.tagline}} />
            </div>
            {/* Action button */}
            <div className="btns-action anim-4">
              <Link href={`/services/${encodeURIComponent(service.slug)}`} className="btn btn-outline-white" >
                <span className="text">Read more!</span>
                <span className="icon">
                  <i className="arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>)    
  );

  return (
    <>
      <div className="page-cover">
        <div className="cover-bg bg-img" data-image-src="/img/bg-default.jpg"></div>
        <div className="cover-bg-mask bg-color" data-bgcolor="rgba(2, 3, 10, 0.7)"></div>

      </div>

      <main className="page-main page-fullpage main-anim " id="mainpage">
        {/* Begin of title section */}
        <div className="section section-description section-title-layout " data-section="services">

          {/* Begin of section wrapper */}
          <div className="section-wrapper with-margin">
            {/* title */}
            <div className="section-title decor decor-anim text-center">
              <h5 className="title">Services</h5>
            </div>

            {/* Arrows scroll down/up */}
            <footer className="section-footer scrolldown">
              <a className="down">
                <span className="icon"></span>
                <span className="txt">Scroll</span>
              </a>
            </footer>
          </div>
          {/* End of section wrapper */}
        </div>
        {/* End of title section */}
        
        {/* Begin of list products section */}
        <div className="section section-list-products fp-auto-height " data-section="service-page-1">
          {/* Begin of section wrapper */}
          <div className="section-wrapper with-margin">
            {/* content */}
            <div className="section-content anim">
              {/* title content */}
              <div className="row">
                <div className="col-12 col-lg-6 text-left">
                  {/* title and description */}
                  <div className="title-desc">
                    <h2 className="display-3 display-title anim-1">Photography</h2>
                    <p className="anim-2">This is just a placeholder text. We help people to achieve brand
                      awareness throught this template.</p>
                  </div>
                </div>
              </div>

              {/* decor */}
              <div className="title-decor"></div>

              {listServices}

            </div>

            {/* Arrows scroll down/up */}
            <footer className="section-footer scrolldown">
              <a className="down">
                <span className="icon"></span>
                <span className="txt">Scroll</span>
              </a>
            </footer>
          </div>
          {/* End of section wrapper */}
        </div>
        {/* End of list products section */}

        <ContactInfo />

      </main>
    </>
  );
}
