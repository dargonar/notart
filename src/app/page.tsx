'use client'

import Services from "./components/services";
import Activations from "./components/activations";
import { ContactInfo } from "./components/footer";
import { ActivationFilter, defaultActivationFilter} from "./model/activation";

export default function Home() {

  const activations_list_title = "Activaciones destacadas";
  const activationFilter1:ActivationFilter = {
    ...defaultActivationFilter, 
    title:activations_list_title,
    layout:1,
  }

  const activationFilter2:ActivationFilter = {
    ...defaultActivationFilter, 
    title:activations_list_title,
    layout:2,
  }

  const activationFilter3:ActivationFilter = {
    ...defaultActivationFilter, 
    title:activations_list_title,
    layout:3,
    show_soon:true,
  }
  return (
    <>
      <div className="page-cover">
        <div className="cover-bg bg-img" data-image-src="img/bg-default.jpg"></div>
        <div id="container" className="video-container d-none d-sm-block">
          <video autoPlay={true} loop={true} muted={true} width="640" height="360">
            <source src="/vid/stvideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="cover-bg-mask bg-color" data-bgcolor="rgba(29, 29, 29, 0.2)"></div>
      </div>

      <main className="page-main page-fullpage main-anim " id="mainpage">
        <div className="section section-home fullscreen-md fp-auto-height-responsive main-home section-centered" data-section="home">
          {/* Begin of section wrapper */}
          <div className="section-wrapper with-margin">
            {/* content */}
            <div className="section-content anim">
              <div className="row justify-content-center c-wrapper">
                <div className="col-12 col-lg-12 text-center">
                  {/* title and description */}
                  <div className="title-desc mb-0">
                    <h1 className="display-4 display-title home-title anim-blur anim-2 mt-4 mb-4">
                      NotArt
                      <span className="lite"></span>
                    </h1>
                    <div className="mb-4">
                      <p className="anim-3">Creative studio at the<br/>
                        intersection of photography, social<br/>
                        impact and public engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrows scroll down/up */}
            <footer className="section-footer scrolldown">
              <a className="down">
                <span className="icon"></span>
                <span className="txt">Learn more about us</span>
              </a>
            </footer>
          </div>
          {/* End of section wrapper */}
        </div>
        {/* End of home section */}


        {/* Begin of description section */}
        <div className="section section-description fp-auto-height-responsive section-about-1"
        data-section="about-us">

          <div className="section-cover-full bg-img bg-pos-right cover-anim" data-image-src="./img/sections/bg-2.png"></div>
          {/* Begin of section wrapper */}
          <div className="section-wrapper with-margin">

            {/* content */}
            <div className="section-content anim">
              <div className="row">
                <div className="col-12 col-md-10 text-left">
                  {/* title and description */}
                  <div className="title-desc">
                    <h2 className="display-4 display-title anim-2 decor">NotArt is a media organization focused on conceiving and producing campaigns, experiences, and content based on photography aimed at engaging the public and fostering impact. </h2>
                    <p className="anim-3">Con una experiencia de mas de 20 años en fotografía activista con foco en el desarrollo de identidad cultural y comunitaria; y en organización y planificación de proyectos culturales y eventos de artes visuales y escénicas: creamos NotArt para fomentar el diálogo y la reflexión sobre temas socio-ambientales a través de narrativas visuales. Para llevar el arte a las calles e intentar conectar, inspirar y transformar a través del poder de la imagen.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Arrows scroll down/up */}
            <footer className="section-footer scrolldown">
              <a className="down">
                <span className="icon"></span>
                <span className="txt">MISSION</span>
              </a>
            </footer>
          </div>
          {/* End of section wrapper */}
        </div>
        {/* End of description section */}

        {/* Begin of description section */}
        <div className="section section-description fp-auto-height-responsive section-about-2"
        data-section="mission">

          <div className="section-cover-full bg-img bg-pos-right cover-anim" data-image-src="./img/sections/bg-1.png" style={{transform: 'rotateY(180deg)'}}></div>
          {/* Begin of section wrapper */}
          <div className="section-wrapper with-margin">

            {/* content */}
            <div className="section-content anim">
              <div className="row">
                <div className="col-12 col-md-10 text-left">
                  {/* title and description */}
                  <div className="title-desc">
                    <h4 className="anim-1 display-subtitle">MISSION</h4>
                    <h2 className="display-4 display-title anim-2 decor">Sacar a pasear el arte por las calles, imaginar nuevas realidades e impulsar cambios.</h2>
                    <p className="anim-3">NotArt se apoya en el poder de las narrativas visuales y el trabajo con la gente (comunidades?) para fomentar el diálogo y la reflexión sobre temas sociales, culturales, políticos y ambientales a través de narrativas visuales.<br/>
                    Buscamos crear campañas y contenidos con propósito.</p>
                  </div>
                  {/* Action button */}
                  <div style={{display:'none'}} className="btns-action anim-4">
                    <a className="btn btn-outline-white" href="#activations">
                      <span className="text">Our works</span>
                      <span className="icon">
                        <i className="arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Arrows scroll down/up */}
            <footer className="section-footer scrolldown">
              <a className="down">
                <span className="icon"></span>
                <span className="txt">Services</span>
              </a>
            </footer>
          </div>
          {/* End of section wrapper */}
        </div>
        {/* End of description section */}

        <Services />
        
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

        <Activations {...activationFilter3} />

        <Activations {...activationFilter2} />

        <Activations {...activationFilter1} />

        
        
        <ContactInfo />
      </main>
    </>
  );
}
