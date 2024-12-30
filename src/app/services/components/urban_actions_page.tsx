import Activations from "../../components/activations";
import { ActivationFilter, defaultActivationFilter} from "../../model/activation";
import { ServiceModel } from "../../model/service";

export default function ServiceUrbanActionsPage(props:ServiceModel) {
  const service:ServiceModel = props;
  
  const activationFilter:ActivationFilter = {
    ...defaultActivationFilter, 
    title:"Related activations",
    category:service.slug,
    layout:1,
  }

  const items = [
    "Gigantografias a nivel de calle",
    "Galerías a cielo abierto",
    "Acciones performáticas",
    "Activaciones y Pop-Ups",
    "Periódicos y fanzines para difundir las acciones"
  ];

  const _items = items.map((item)=>(
      <>{item}<br/></>
    )
  );

  return (
  		 <>
      <div className="page-cover">
        <div className="cover-bg bg-img" data-image-src={service.img_big}></div>
        <div className="cover-bg-mask bg-color" data-bgcolor="rgba(2, 3, 10, 0.7)"></div>
      </div>

      <main className="page-main page-fullpage main-anim " id="mainpage">
        
        <div className="section section-home fp-auto-height-responsive main-home section-centered" data-section="home">
          <div className="section-wrapper with-margin">
            <div className="section-content anim">
              <div className="row justify-content-center c-wrapper">
                <div className="col-12 col-lg-12 text-center">
                  <div className="title-desc mb-0">
                    <h1 className="display-4 display-title home-title anim-blur anim-2 mt-4 mb-4">
                    {service.title}
                      <span className="lite"></span>
                    </h1>
                    <div className="mb-4">
                      <p className="anim-3"></p>
                    </div>
                  </div>

                  <div style={{display:'none'}} className="btns-action anim-3">
                    <a className="btn btn-outline-white btn-round" href="#about-us">
                      About
                    </a>
                    <a className="btn btn-outline-white btn-round" href="#projects-page-1">
                      Works
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <footer className="section-footer scrolldown">
              <a className="down">
                <span className="icon"></span>
                <span className="txt">More about {service.title}</span>
              </a>
            </footer>
          </div>
        </div>

        <div className="section section-description fp-auto-height-responsive section-about-1" data-section="what-we-do">
          <div className="section-cover-full bg-img bg-pos-right cover-anim" data-image-src="/img/sections/bg-2.png"></div>
          <div className="section-wrapper with-margin">
            <div className="section-content anim">
              <div className="row">
                <div className="col-12 col-md-10 text-left">
                  <div className="title-desc">
                    <h2 className="display-4 display-title anim-2 decor">{service.tagline}</h2>
                    <p className="anim-3"></p>
                  </div>
                  <div style={{display:'none'}} className="btns-action anim-4">
                    <a className="btn btn-outline-white" href="#projects">
                      <span className="text">Our works</span>
                      <span className="icon">
                        <i className="arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-list-products fp-auto-height fp-auto-height no-footer" data-section="skills">
          <div className="section-wrapper with-margin">
            <div className="section-content anim">
              <div className="row">
                <div className="col-12 col-lg-12 text-left">
                  <div className="title-desc">
                    <h2 className="display-4 display-title anim-2 decor">Cómo lo hacemos?</h2>
                    <p className="anim-2">
                      {_items}                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Activations {...activationFilter} />
        
      </main>
    </>

  )
};
