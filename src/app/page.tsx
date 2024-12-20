'use client'

import Image from "next/image";
import Header from "./components/header";
import { useRouter } from 'next/navigation';
import Services from "./components/services";
import Activations from "./components/activations";

export default function Home() {
  const router = useRouter();
  return (
    <>
      
      {/* BEGIN OF page cover */}
      <div className="page-cover">
        {/* Cover Background */}
        <div className="cover-bg bg-img" data-image-src="img/bg-default.jpg"></div>

        {/*BEGIN OF Static video bg - uncomment below to use Video as Background*/}
        <div id="container" className="video-container d-none d-sm-block">
          <video autoPlay="autoplay" loop="loop" muted={true} width="640" height="360">
            <source src="vid/stvideo.mp4" type="video/mp4" />
          </video>
        </div>
        {/*END OF Static video bg*/}

        {/* Transluscent mask as filter */}
        <div className="cover-bg-mask bg-color" data-bgcolor="rgba(29, 29, 29, 0.2)"></div>
      </div>
      {/*END OF page cover */}
      


      {/* BEGIN OF page main content */}
      <main className="page-main page-fullpage main-anim " id="mainpage">

        {/* Begin of home section */}
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

                  {/* Action button */}
                  <div className="btns-action anim-3" style={{display:'none'}}>
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


        {/* Begin of title section */}
        <div className="section section-description section-title-layout " data-section="about" style={{display:'none'}}>

          {/* Begin of section wrapper */}
          <div className="section-wrapper with-margin">
            {/* title */}
            <div className="section-title decor decor-anim text-center">
              <h5 className="title">About us</h5>
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

        {/* Begin of title section */}
        <div style={{display:'none'}} className="section section-description section-title-layout " data-section="services">

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

        <Services />
        

        {/* Begin of title section */}
        <div className="section section-description section-title-layout " data-section="activations">

          {/* Begin of section wrapper */}
          <div className="section-wrapper with-margin">
            {/* title */}
            <div className="section-title decor decor-anim text-center">
              <h5 className="title">Activaciones realizadas</h5>
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

        <div style={{display:'none'}}>
        {/* Begin of projects/two-column section */}
        <div className="section section-twoside fp-auto-height-responsive content-white" data-section="projects-page-1">
          {/* Begin of a side : left*/}
          <div className="section-side side-left side-anim">
            <div className="section-cover mask-black bg-img" data-image-src="./img/items/img-sample2.jpg">
            </div>
            <div className="section-wrapper">
              {/* content */}
              <div className="section-content anim">
                <div className="row">
                  <div className="col-12 text-left text-white">
                    {/* title and description */}
                    <div className="title-desc">
                      <h2 className="display-3 display-title anim-2 decor">Héroes del brillo</h2>
                      <p className="anim-3">This is just a placeholder text. We help people to achieve brand
                        awareness throught this template.</p>
                    </div>

                    {/* Action button */}
                    <div className="btns-action anim-4">
                      <a className="btn btn-outline-white" href="gallery.html#project-item">
                        <span className="text">View Project</span>
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
          {/* End of a side*/}

          {/* Begin of a side : right*/}
          <div className="section-side side-right side-anim">
            <div className="section-cover mask-black bg-img" data-image-src="./img/items/img-sample10.jpg">
            </div>
            <div className="section-wrapper">
              {/* content */}
              <div className="section-content anim">
                <div className="row">
                  <div className="col-12 text-left text-white">
                    {/* title and description */}
                    <div className="title-desc">
                      <h2 className="display-3 display-title anim-2 decor">FIFV 2024</h2>
                      <p className="anim-3">This is just a placeholder text. We help people to achieve brand
                        awareness throught this template.</p>
                    </div>

                    {/* Action button */}
                    <div className="btns-action anim-4">
                      <a className="btn btn-outline-white" href="gallery.html#project-item">
                        <span className="text">View Project</span>
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
          {/* End of a side*/}

          {/* Begin of section wrapper */}
          <div className="section-wrapper">
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
        {/* End of projects/two-column section */}

        {/* Begin of projects/two-column section */}
        <div className="section section-twoside fp-auto-height-responsive content-white" data-section="projects-page-2">
          {/* Begin of a side : left*/}
          <div className="section-side side-left side-anim">
            <div className="section-cover bg-img" data-image-src="./img/items/img-sample1.jpg">
            </div>
            <div className="section-wrapper">
              {/* content */}
              <div className="section-content anim">
                <div className="row">
                  <div className="col-12 text-left text-white">
                    {/* title and description */}
                    <div className="title-desc">
                      <h2 className="display-3 display-title anim-2 decor">Pinta
                        <span className="lite"></span>
                        <br/>Miami</h2>
                      <p className="anim-3">This is just a placeholder text. We help people to achieve brand
                        awareness throught this template.</p>
                    </div>

                    {/* Action button */}
                    <div className="btns-action anim-4">
                      <a className="btn btn-outline-white" href="#project-item">
                        <span className="text">View Project</span>
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
          {/* End of a side*/}

          {/* Begin of a side : right*/}
          <div className="section-side side-right side-anim">
            <div className="section-cover bg-img" data-image-src="./img/items/img-sample3.jpg">
            </div>
            <div className="section-wrapper">
              {/* content */}
              <div className="section-content anim">
                <div className="row">
                  <div className="col-12 text-left text-white">
                    {/* title and description */}
                    <div className="title-desc">
                      <h2 className="display-3 display-title anim-2 decor">San José
                        <span className="lite"></span>
                        <br/>Foto</h2>
                      <p className="anim-3">This is just a placeholder text. We help people to achieve brand
                        awareness throught this template.</p>
                    </div>

                    {/* Action button */}
                    <div className="btns-action anim-4">
                      <a className="btn btn-outline-white" href="#project-item">
                        <span className="text">View Project</span>
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
          {/* End of a side*/}

          {/* Begin of section wrapper */}
          <div className="section-wrapper">
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
        {/* End of projects/two-column section */}

        {/* Begin of projects/two-column section */}
        <div className="section section-twoside fp-auto-height-responsive content-white" data-section="projects-page-2">
          {/* Begin of a side : left*/}
          <div className="section-side side-left side-anim">
            <div className="section-cover bg-img" data-image-src="./img/items/img-sample1.jpg">
            </div>
            <div className="section-wrapper">
              {/* content */}
              <div className="section-content anim">
                <div className="row">
                  <div className="col-12 text-left text-white">
                    {/* title and description */}
                    <div className="title-desc">
                      <h2 className="display-3 display-title anim-2 decor">Covid
                        <span className="lite"></span>
                        <br/>LATAM</h2>
                      <p className="anim-3">This is just a placeholder text. We help people to achieve brand
                        awareness throught this template.</p>
                    </div>

                    {/* Action button */}
                    <div className="btns-action anim-4">
                      <a className="btn btn-outline-white" href="#project-item">
                        <span className="text">View Project</span>
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
          {/* End of a side*/}

          {/* Begin of a side : right*/}
          <div className="section-side side-right side-anim">
            <div className="section-cover bg-img" data-image-src="./img/items/img-sample3.jpg">
            </div>
            <div className="section-wrapper">
              {/* content */}
              <div className="section-content anim">
                <div className="row">
                  <div className="col-12 text-left text-white">
                    {/* title and description */}
                    <div className="title-desc">
                      <h2 className="display-3 display-title anim-2 decor">Soon</h2>
                      <p className="anim-3">You will surely be noticed by our next activation! :)</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          {/* End of a side*/}

          {/* Begin of section wrapper */}
          <div className="section-wrapper">
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
        {/* End of projects/two-column section */}
        </div>
        
        {/* Begin of title section */}
        <div style={{display:'none'}} className="section section-description section-title-layout " data-section="products">

          {/* Begin of section wrapper */}
          <div className="section-wrapper with-margin">
            {/* title */}
            <div className="section-title decor decor-anim text-center">
              <h5 className="title">Products</h5>
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
        <div style={{display:'none'}} className="section section-list-products fp-auto-height " data-section="products-page-1">
          {/* Begin of section wrapper */}
          <div className="section-wrapper with-margin">
            {/* content */}
            <div className="section-content anim">
              {/* title content */}
              <div className="row">
                <div className="col-12 col-lg-6 text-left">
                  {/* title and description */}
                  <div className="title-desc">
                    <h2 className="display-3 display-title anim-1">Arts</h2>
                    <p className="anim-2">This is just a placeholder text. We help people to achieve brand
                      awareness throught this template.</p>
                  </div>
                </div>
              </div>

              {/* decor */}
              <div className="title-decor"></div>

              {/* an item */}
              <div id="product-item-1" className="row no-gutters row-product">
                <div className="col-12 col-lg-6 order-1 order-lg-1 side-left center-vh">
                  <div className="content-wrapper">
                    <div className="img-frame-normal">
                      <div className="img-1">
                        <img className="img" src="img/items/img-sample8.jpg" alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-2 order-lg-2 side-right center-vh">
                  <div className="content-wrapper">
                    <div className="title-desc">
                      <h3 className="display-3 display-title anim-1 decor">Paint</h3>
                      <h4 className="display-subtitle anim-2">200 USD</h4>
                      <p className="anim-2">This is just a placeholder text. We help people to achieve brand
                        awareness throught this template.</p>
                    </div>
                    {/* Action button */}
                    <div className="btns-action anim-4">
                      <a className="btn btn-outline-white" href="#">
                        <span className="text">Buy now</span>
                        <span className="icon">
                          <i className="arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* an item */}
              <div id="product-item-2" className="row no-gutters row-product">
                <div className="col-12 col-lg-6 order-1 order-lg-2 side-right center-vh">
                  <div className="content-wrapper">
                    <div className="img-frame-normal">
                      <div className="img-1">
                        <img className="img" src="img/items/img-sample9.jpg" alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-2 order-lg-1 side-left  center-vh">
                  <div className="content-wrapper">
                    <div className="title-desc">
                      <h3 className="display-3 display-title anim-1 decor">Software</h3>
                      <h4 className="display-subtitle anim-2">100 EUR</h4>
                      <p className="anim-2">This is just a placeholder text. We help people to achieve brand
                        awareness throught this template.</p>
                    </div>
                    {/* Action button */}
                    <div className="btns-action anim-4">
                      <a className="btn btn-outline-white" href="#">
                        <span className="text">Buy now</span>
                        <span className="icon">
                          <i className="arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* an item */}
              <div id="product-item-3" className="row no-gutters row-product mb-0">
                <div className="col-12 col-lg-6 order-1 order-lg-1 side-left center-vh">
                  <div className="content-wrapper">
                    <div className="img-frame-normal">
                      <div className="img-1">
                        <img className="img" src="img/items/img-sample10.jpg" alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 order-2 order-lg-2 side-right  center-vh">
                  <div className="content-wrapper">
                    <div className="title-desc">
                      <h3 className="display-3 display-title anim-1 decor">Design
                        <span className="lite"></span>
                      </h3>
                      <h4 className="display-subtitle anim-2">300 RMB</h4>
                      <p className="anim-2">This is just a placeholder text. We help people to achieve brand
                        awareness throught this template.</p>
                    </div>
                    {/* Action button */}
                    <div className="btns-action anim-4">
                      <a className="btn btn-outline-white" href="#">
                        <span className="text">Buy now</span>
                        <span className="icon">
                          <i className="arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

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

        {/* Begin of title section */}
        <div style={{display:'none'}} className="section section-description section-title-layout " data-section="news-event">

          {/* Begin of section wrapper */}
          <div className="section-wrapper with-margin">
            {/* title */}
            <div className="section-title decor decor-anim text-center">
              <h5 className="title">News And Events</h5>
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

        <Activations title="Activaciones destacadas" layout="2"/>

        <Activations title="Activaciones destacadas" layout="1"/>

        {/* Begin of title section */}
        <div style={{display:'none'}}className="section section-description section-title-layout " data-section="contact">

          {/* Begin of section wrapper */}
          <div className="section-wrapper with-margin">
            {/* title */}
            <div className="section-title decor decor-anim text-center">
              <h5 className="title">Contact</h5>
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
        
        {/* Begin of contact section */}
        <div className="section section-contact fp-auto-height-responsive no-slide-arrows " data-section="contact-info">

          {/* Begin of section wrapper */}
          <div className="section-wrapper  with-margin">
            <div className="row justify-content-between">
              {/* begin of left content */}
              <div className="col-12 col-lg-12">
                {/* content */}
                <div className="section-content anim text-left">
                  {/* title and description */}
                  <div className="title-desc">
                    <div className="anim-2">
                      <p>GET IN TOUCH!</p>
                    </div>
                    <div className="address-container anim-3">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                          <h4 className="display-condensed lite">Contact</h4>
                          <p><a href="tel:+5491131272458">Call: +5491131272458</a></p>
                          <p><a href="https://wa.me/5491131272458"> Whatsapp: +5491131272458</a></p>
                          <p> <a href="mailto:notart@gmail.com">Email: notart@gmail.com</a></p>

                          <div className="icons icons-margin">
                            <a className="btn-icon" href="http://instagram.com/notart">
                              <i className="icon fa fa-instagram"></i>
                            </a>
                            <a className="btn-icon" href="http://twitter/notart">
                              <i className="icon fa fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                          <h4 className="display-condensed lite">Address</h4>
                          <p>
                            Galería Florida Art
                            <br/>Florida 971
                            <br/>Ciudad de Buenos Aires, Argentina
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of left content */}
            </div>

          </div>
          {/* End of section wrapper */}

          {/* Arrows scroll down/up */}
          <footer style={{display:'none'}} className="section-footer scrolldown">
            <a className="down">
              <span className="icon"></span>
              <span className="txt">Subscribe</span>
            </a>
          </footer>
        </div>
        {/* End of contact section */}
        
        {/* Begin of register/login/signin section */}
        <div style={{display:'none'}} className="section section-register " data-section="register">

          {/* Begin of section wrapper */}
          <div className="section-wrapper with-margin">

            {/* content */}
            <div className="section-content no-anim">

              <div className="row">

                <div className="col-12">
                  {/* Registration form container*/}
                  <form className="send_email_form form-container form-container-transparent form-container-white"
                  method="post" action="http://demo.highhay.com/atelieux/ajaxserver/serverfile.php">
                    <div className="form-desc">
                      <p className="invite  anim-3">Don't miss any news via email ! Register email if you agree :</p>
                    </div>
                    <div className="form-input  anim-4">
                      <div className="row">
                        <div className="col-12 col-md-8 col-lg-10">
                          <div className="form-group form-success-gone">
                            <input id="reg-email" name="email" className="form-control-line form-control-white" type="email"
                            required placeholder="your@email.address" data-validation-type="email"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-2">
                          <div className="btns-action anim-3 mt-md-0">
                            <button id="submit-email" name="submit_email" className="btn btn-outline-white btn-full form-success-gone">
                              <span className="text">Accept</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <div>
                          <p className="email-ok invisible form-text-feedback form-success-visible">Your email has been registred, thank you.</p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* end of content */}
          </div>
          {/* End of section wrapper */}
        </div>
        {/* End of register/login/signin section */}
      </main>
      {/* END OF page main content */}
    </>
  );
}
