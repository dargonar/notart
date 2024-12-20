// import Link from 'next/link';
import Activations from "../components/activations";
import {ContactInfo} from "../components/footer";

export default function ActivationsPage() {

  return (
    <>
      <div className="page-cover">
        <div className="cover-bg bg-img" data-image-src="/img/bg-default.jpg"></div>
        <div className="cover-bg-mask bg-color" data-bgcolor="rgba(2, 3, 10, 0.7)"></div>

      </div>

      <main className="page-main page-fullpage main-anim " id="mainpage">
        
        {/* Begin of title section */}
        <div className="section section-description section-title-layout " data-section="activations">

          {/* Begin of section wrapper */}
          <div className="section-wrapper with-margin">
            {/* title */}
            <div className="section-title decor decor-anim text-center">
              <h5 className="title">Activaciones destacadas</h5>
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

        <Activations title="Activaciones destacadas" layout="3" show_soon="true"/>

        <ContactInfo />

      </main>
    </>
  );
}
