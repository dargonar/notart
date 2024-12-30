import { ServiceModel } from "../model/service";
import { getServices } from "../data/services";
import Link from 'next/link';

function Service(props:ServiceModel) {
  // <a className="item media media-service" href="/services/{{props.slug}}"> 
  // href={`/services/${encodeURIComponent(props.slug)}`}
  // href={{ pathname: '/services/[slug]', query: { slug: props.slug } }}
  // key="{props.slug}" 
  return (
       <div className="col-12 col-lg-4" >
          <Link href={`/services/${encodeURIComponent(props.slug)}`} className="item media media-service">
            <div className="img">
              <i className="icon ion-code-working"></i>
            </div>
            <div className="media-body">
              <h4 className="" dangerouslySetInnerHTML={{__html: props.title}} />
              <p style={{display:'none'}} dangerouslySetInnerHTML={{__html: props.action}} />
            </div>
          </Link>
        </div>
  )
};

export default function Services() {
	
  const listServices = getServices().map((service:ServiceModel, index:number) =>
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
