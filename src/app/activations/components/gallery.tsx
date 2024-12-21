import {ActivationModel} from "../../../model/activation";

export default function Gallery(props:ActivationModel){

	const gallery_items = props.gallery.map((item, index)=>
		(<div className="slide slide-gallery" key={index}>
	      <div className="section-cover-full mask-layer mask-black bg-img" data-image-src={item.img}>
	      </div>
	      <div className="section-wrapper  with-margin">
	        <div className="section-content anim">
	          <div className="row">
	            <div className="col-12 col-lg-6 text-left">
	              <div className="title-desc">
	                <h2 className="display-3 display-title anim-2 decor">{item.title}</h2>
	                <p className="anim-3">{item.desc}</p>
	              </div>

	              {/*<div className="btns-action anim-4">
	                <a className="btn btn-outline-white" href="#item-url">
	                  <span className="text">View Item</span>
	                </a>
	              </div>*/}
	            </div>
	          </div>
	        </div>
	      </div>
    </div>)
    
	);
	return (	
		<main className="page-main page-fullpage main-anim" id="mainpage">
    
	    <div className="section section-gallery  content-white" data-section="">
	 			{gallery_items}

{/*	      <div className="slide slide-gallery">
	        <div className="section-cover-full mask-layer mask-black bg-img" data-image-src="./img/items/img-sample7.jpg">
	        </div>
	        <div className="section-wrapper  with-margin">
	          <div className="section-content anim">
	            <div className="row">
	              <div className="col-12 col-lg-6 text-left">
	                <div className="title-desc">
	                  <h2 className="display-3 display-title anim-2 decor">Music</h2>
	                  <p className="anim-3">Here is a page showing an amazing project, product or anything
	                    awesome. Replace this text by yours.</p>
	                </div>

	                <div className="btns-action anim-4">
	                  <a className="btn btn-outline-white" href="#item-url">
	                    <span className="text">View Item</span>
	                  </a>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>

	      <div className="slide slide-gallery">
	        <div className="section-cover-full mask-layer mask-black bg-img" data-image-src="./img/items/img-sample6.jpg">
	        </div>
	        <div className="section-wrapper  with-margin">
	          <div className="section-content anim">
	            <div className="row">
	              <div className="col-12 col-lg-6 text-left">
	                <div className="title-desc">
	                  <h2 className="display-3 display-title anim-2 decor">Cuisine</h2>
	                  <p className="anim-3">Here is a page showing an amazing project, product or anything
	                    awesome. Replace this text by yours.</p>
	                </div>

	                <div className="btns-action anim-4">
	                  <a className="btn btn-outline-white" href="#item-url">
	                    <span className="text">View Item</span>
	                  </a>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>

	      <div className="slide slide-gallery">
	        <div className="section-cover-full mask-layer mask-black bg-img" data-image-src="./img/items/img-sample5.jpg">
	        </div>
	        <div className="section-wrapper  with-margin">
	          <div className="section-content anim">
	            <div className="row">
	              <div className="col-12 col-lg-6 text-left">
	                <div className="title-desc">
	                  <h2 className="display-3 display-title anim-2 decor">Photo</h2>
	                  <p className="anim-3">Here is a page showing an amazing project, product or anything
	                    awesome. Replace this text by yours.</p>
	                </div>

	                <div className="btns-action anim-4">
	                  <a className="btn btn-outline-white" href="#item-url">
	                    <span className="text">View Item</span>
	                  </a>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>*/}
	    </div>


	  </main>
  )
}