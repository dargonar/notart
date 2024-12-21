export default function Team(){
	return(
    <>
	    <div className="section section-description section-title-layout fp-auto-height no-footer" data-section="team">

	      <div className="section-wrapper with-margin">
	        <div className="section-title decor decor-anim text-center">
	          <h5 className="title">Team</h5>
	        </div>

	        <footer className="section-footer scrolldown">
	          <a className="down">
	            <span className="icon"></span>
	            <span className="txt">Scroll</span>
	          </a>
	        </footer>
	      </div>

	    </div>

	    <div className="section section-team fp-auto-height-responsive fp-auto-height no-footer" data-section="team-list">

	      <div className="section-cover-full bg-img bg-pos-right cover-anim" data-image-src="/img/sections/bg-2.png"></div>

	      <div className="section-wrapper with-margin">
	        <div className="section-content anim">
	          <div className="row">
	            <div className="col-12 col-lg-4 center-vh end-h">
	              
	              <div className="img-frame-normal portrait">
	                <a href="#">
	                  <img className="img" src="/img/team/vero.png" alt="Image" />
	                  <div className="legend decor text-center">
	                    <h5 className="display-geo">Verónica Santalla</h5>
	                    <p className="small">Founder &amp; Director</p>
	                    <div>
				                <a href="http://instagram.com/verosantalla">
				                  <i className="icon fa fa-instagram"></i>
				                </a>
						          </div>
	                  </div>
	                </a>
	              </div>
	            </div>

	            <div className="col-12 col-lg-4 center-vh end-h">
	              <div className="img-frame-normal portrait">
	                <a href="#">
	                  <img className="img" src="/img/team/fede.png" alt="Image" />
	                  <div className="legend decor text-center">
	                    <h5 className="display-geo">Federico Estol</h5>
	                    <p className="small">Creative Director / Visual Artist</p>
	                    <div>
				                <a href="http://instagram.com/federicoestol">
				                  <i className="icon fa fa-instagram"></i>
				                </a>
						          </div>
	                  </div>
	                </a>
	              </div>
	            </div>

	            <div className="col-12 col-lg-4 center-vh end-h">
	              <div className="img-frame-normal portrait">
	                <a href="#">
	                  <img className="img" src="/img/team/tuti.png" alt="Image" />
	                  <div className="legend decor text-center">
	                    <h5 className="display-geo">Pablo Tutino</h5>
	                    <p className="small">Photographer / Programer</p>
	                    <div>
				                <a href="http://github.com/dargonar">
				                  <i className="icon fa fa-github"></i>
				                </a>&nbsp;
				                <a href="http://instagram.com/pablotutino">
				                  <i className="icon fa fa-instagram"></i>
				                </a>
						          </div>  
	                  </div>
	                </a>
	              </div>
	            </div>

	          </div>
	        </div>
	      </div>
	    </div>
    </>
    )
}