import Activations from "../../components/activations";
import ActivationDataItem from "./activation_data_item";
import { activations } from "../../data/activations";
import {ActivationModel, ActivationDataModel} from "../../model/activation";

export default function ActivationPage(props:ActivationModel) {
	const activation : ActivationModel = props;
  // const activation : ActivationModel = activations.find(obj => obj.slug == props.slug);
  const listItems : ActivationDataModel[] = activation.data.map((item, index) =>
    <ActivationDataItem {...item } key={index} />
  );
  
  return (
  		 <>
      <div className="page-cover">
        <div className="cover-bg bg-img" data-image-src={activation.img_big}></div>
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
                      {activation.title}
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
                <span className="txt">More about {activation.title}</span>
              </a>
            </footer>
          </div>
        </div>

        { activation.tagline && 
        <div className="section section-description fp-auto-height-responsive section-about-1" data-section="what-we-do">
          <div className="section-cover-full bg-img bg-pos-right cover-anim" data-image-src="/img/sections/bg-2.png"></div>
          <div className="section-wrapper with-margin">
            <div className="section-content anim">
              <div className="row">
                <div className="col-12 col-md-10 text-left">
                  <div className="title-desc">
                    <h2 className="display-4 display-title anim-2 decor" dangerouslySetInnerHTML={{__html: activation.tagline}} />
                    <p className="anim-3"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

        <div className="section section-list-products fp-auto-height fp-auto-height no-footer" data-section="skills">
          <div className="section-wrapper with-margin">
            <div className="section-content anim">
              <div className="row">
                <div className="col-12 col-lg-12 text-left">

                  {listItems}

                  { activation.link && 
                    <div className="btns-action anim-4">
                      <a className="btn btn-outline-white" href={activation.link}>
                        <span className="text">More about {activation.title}</span>
                        <span className="icon">
                          <i className="arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  }

                </div>
              </div>
            </div>
          </div>
        </div>

        <Activations title="Related activations" exclude_slug={activation.slug} layout="1"/>
        
      </main>
    </>

  )
};
