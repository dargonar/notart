import { activations } from "../data/activations";
import Link from 'next/link';

/* RENDER large blocks 2 by 2 ***************************** */
function renderActivationLayout3(activation, index){

  return( 
    <>
      <div className="section-cover bg-img" data-image-src={activation.img_big} key={index}>
      </div>
      <div className="section-wrapper">
        {/* content */}
        <div className="section-content anim">
          <div className="row">
            <div className="col-12 text-left text-white">
              {/* title and description */}
              <div className="title-desc">
                <h2 className="display-3 display-title anim-2 decor" dangerouslySetInnerHTML={{__html: activation.title}} />
                <p className="anim-3" dangerouslySetInnerHTML={{__html: activation.tagline}} />
              </div>
              <div className="btns-action anim-4">
              { activation.slug &&
                <Link href={`/activations/${encodeURIComponent(activation.slug)}`} className="btn btn-outline-white" >
                  <span className="text">View Project</span>
                  <span className="icon">
                    <i className="arrow-right"></i>
                  </span>
                </Link>
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}

function RenderActivationsLayout3Pair(pair, index, show_soon) {
  const soon_activation = {
    "img_big": "/img/activations/soon.jpg",
    "title": "Soon!",
    "tagline": "You will surely be noticed by our next activation! :)"
  };
  return (<>
      <div className="section section-twoside fp-auto-height-responsive content-white" data-section="activations-page-">
        <div className="section-side side-right side-anim">
          { renderActivationLayout3(pair[0], index*2) }
        </div>
        {pair[1] && <div className="section-side side-right side-anim">
          { renderActivationLayout3(pair[1], index*2+1) }
        </div>}
        {!pair[1] && show_soon && <div className="section-side side-right side-anim">
          { renderActivationLayout3(soon_activation, index*2+1) }
        </div>}
        <div className="section-wrapper">
          <footer className="section-footer scrolldown">
            <a className="down">
              <span className="icon"></span>
              <span className="txt">Scroll</span>
            </a>
          </footer>
        </div>
      </div>      
    </>);
}

function ActivationsLayout3(_activations, title, show_soon=false) {

  const pairs = _activations.reduce((acc, _, i) => {
    if (i % 2 === 0) {
        acc.push([_activations[i], _activations[i + 1]]);
    }
      return acc;
    }, []);
  const _pairs = pairs.map((pair, index) =>
    RenderActivationsLayout3Pair(pair, index, show_soon)
  );

  return (
    <div key={1114}>
      {_pairs}
    </div>
  );
}

/* RENDER small blocks 2 by 2 ***************************** */
function renderActivationLayout2(activation, index){
  return(
    <div className="item media media-post" key={index}>
      <div className="media-img mask-black">
        <img className="img img-block" src={activation.img_big} alt="Image" />
      </div>
      <div className="media-body text-white">
        <div className="title-desc">
          <h3 className="display-title anim-2" dangerouslySetInnerHTML={{__html: activation.title}} />
          { activation.tagline &&
            <h4 className="anim-1 display-subtitle" dangerouslySetInnerHTML={{__html: activation.tagline}} />
          }
        </div>

        <div className="btns-action anim-4">
          <Link href={`/activations/${encodeURIComponent(activation.slug)}`} className="btn btn-outline-white" >
            <span className="text">Read More</span>
            <span className="icon">
              <i className="arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ActivationsLayout2(_activations, title, show_soon=false) {
  const listActivations = _activations.map((activation, index) =>
    renderActivationLayout2(activation, index)    
  );
  return (
      <div className="section section-list-feature fp-auto-height " data-section="activations_layout_2">
        <div className="section-wrapper with-margin">
          <div className="section-content anim">
            <div className="row">
              <div className="col-12 col-lg-6 text-left">
                <div className="title-desc">
                  <h2 className="display-3 display-title anim-1">{title}</h2>
                  {/*<p className="anim-2">Esta es otra manera de mostrar las activaciones.</p>*/}
                </div>
              </div>
            </div>

            <div className="title-decor"></div>

            <div className="post-list grid-1 grid-lg-2 anim-list">
              {listActivations}
              
              { show_soon && 
                <div className="item media media-post" key="10">
                  <div className="media-img mask-black">
                    <img className="img img-block" src="/img/soon/soon.png" alt="Image" />
                  </div>
                  <div className="media-body text-white">
                    <div className="title-desc">
                      <h3 className="display-title anim-2">Soon</h3>
                      <h4 className="anim-1 display-subtitle">You will surely notice our next activation! :)</h4>
                      <p className="anim-3">Keep in touch!</p>
                    </div>
                  </div>
                </div>
              }
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
}

/* RENDER small blocks 1 by 1 ***************************** */
function renderActivationLayout1(activation, index){
  return(
    <div className="item media media-line" key={index}>
      <div className="media-img mask-black">
        <img className="img img-block" src={activation.img_big} alt="Image" />
      </div>
      <div className="media-body text-white">
        <div className="title-desc">
          {/*<h3 className="display-3 display-title anim-2">{activation.title}</h3>*/}
          <h2 className="display-3 display-title anim-1">{activation.title}</h2>
          { activation.tagline &&
            <h4 className="anim-1 display-subtitle" dangerouslySetInnerHTML={{__html: activation.tagline}} />
          }
          {/*<p className="anim-3">????</p>*/}
        </div>

        <div className="btns-action anim-4">
          <Link href={`/activations/${encodeURIComponent(activation.slug)}`} className="btn btn-outline-white" >
            <span className="text">Details</span>
            <span className="icon">
              <i className="arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ActivationsLayout1(_activations, title, show_soon=false) {
  const listActivations = _activations.map((activation, index) =>
    renderActivationLayout1(activation, index)    
  );
  return (
        <div className="section section-list-products fp-auto-height fp-auto-height no-footer" data-section="featured-activations">
          <div className="section-wrapper with-margin">
            <div className="section-content anim">
              
              <div className="row">
                <div className="col-12 col-lg-12 text-left">
                  <div className="title-desc">
                    <h2 className="display-4 display-title anim-2 decor">{title}</h2>
                  </div>
                </div>
              </div>

              <div className="title-decor"></div>

              <div className="lines-list grid-1 anim-list">
                
                {listActivations}

                { show_soon && 
                  <div className="item media media-line">
                    <div className="media-img mask-black">
                      <img className="img img-block" src="/img/soon/soon.png" alt="Image" />
                    </div>
                    <div className="media-body text-white">
                      <div className="title-desc">
                        <h3 className="display-3 display-title anim-2">Soon</h3>
                        <h4 className="anim-1 display-subtitle">You will surely notice our next activation! :)</h4>
                        <p className="anim-3">Keep in touch!</p>
                      </div>
                    </div>
                  </div>
                }
              </div>

            </div>
          </div>
        </div>
  )
}

export default function Activations({title, exclude_slug="", category="", show_soon=false, layout=1}) {
  
  const _int_layout = parseInt(layout);
  const _activations = category ? activations.filter(activation => activation.categories.includes(category)) : (exclude_slug ? activations.filter(activation => activation.slug !=exclude_slug ): activations); 
  if (_int_layout==2)
    return ActivationsLayout2(_activations, title, show_soon);
  if (_int_layout==3)
    return ActivationsLayout3(_activations, title, show_soon);
  return  ActivationsLayout1(_activations, title, show_soon);
  
};
