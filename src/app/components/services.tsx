import { services } from "../data/services";
import  Service  from "./service";

export default function Services() {
	
  const listServices = services.map((service, index) =>
    <Service {...service} key={index}/>
  );
  return (
  		<div className="section section-list-feature fp-auto-height-responsive " data-section="services-list">
          <div className="section-wrapper with-margin">
            <div className="section-content anim">
              <div className="title-desc">
                <h4 className="anim-1 display-subtitle">Services</h4>
              </div>    
              <div className="list-items row">
                {listServices}
              </div>
            </div>

            <footer className="section-footer scrolldown">
              <a className="down">
                <span className="icon"></span>
                <span className="txt">Scroll</span>
              </a>
            </footer>
          </div>
        </div>
  )
};
