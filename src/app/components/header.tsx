'use client'

import { useRouter , usePathname} from 'next/navigation';

function Linkor(name, pathname, link) {
	const is_on = pathname == link;
	if (is_on){
		return (
			<li className="nav-item active"> {name}
        <a className="nav-link" href={link}>
          <span className="sr-only">(current) </span>
        </a>
      </li>
    );
	}
		return (
			<li className="nav-item">
        <a className="nav-link" href={link}>{name}</a>
      </li>
    );
}

export default function Header() {
	const router = useRouter();
	const pathname = usePathname();
	const is_home = pathname == '/';
	// const is_home = false;

  return (
  		<header className="page-header navbar page-header-alpha scrolled-white menu-left logo-center topmenu-right">

        {/* Begin of menu icon toggler */}
        <button className="navbar-toggler site-menu-icon" id="navMenuIcon">
          {/* Available class : menu-icon-dot / menu-icon-thick /menu-icon-random */}
          <span className="menu-icon menu-icon-random">
            <span className="bars">
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
            </span>
          </span>
        </button>
        {/* End of menu icon toggler */}

        {/* Begin of logo/brand */}
        <a className="navbar-brand" href="index.html#">
          <span className="logo">
            <img className="light-logo" src="/img/logo.png" alt="Logo" />
          </span>
        </a>
        {/* End of logo/brand */}

        {/* begin of menu wrapper */}
        <div className="all-menu-wrapper" id="navbarMenu">
          {/* Begin of top menu */}
          {/*
          <nav className="navbar-topmenu d-none d-lg-flex">
            <ul className="navbar-nav navbar-nav-menu">
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="demo.html">Demo</a>
              </li>
            </ul>
          </nav>
          */}
          {/* End of top menu */}

          {/* Begin of hamburger mainmenu menu */}
          <nav className="navbar-mainmenu">
            <ul className="navbar-nav">
            	{Linkor('Home', pathname, "/")}
              {Linkor('Services', pathname, "/services")}
              {Linkor('Activations', pathname, "/activations")}
              {Linkor('Team', pathname, "/team")}
            </ul>
          </nav>
          {/* End of hamburger mainmenu menu */}

          {/* Begin of sidebar nav menu params class: text-only / icon-only*/}
          { is_home && <nav className="navbar-sidebar icon-only">
            <ul className="navbar-nav" id="qmenu">
              <li className="nav-item" data-menuanchor="home">
                <a href="#home">
                  <i className="icon ion-android-home"></i>
                  <span className="txt">Home</span>
                </a>
              </li>
              <li className="nav-item" data-menuanchor="activations">
                <a href="#activations">
                  <i className="icon ion-android-apps"></i>
                  <span className="txt">Activations</span>
                </a>
              </li>
              <li className="nav-item" data-menuanchor="contact-info">
                <a href="#contact-info">
                  <i className="icon ion-android-mail"></i>
                  <span className="txt">Contact</span>
                </a>
              </li>
            </ul>
          </nav> }
          {/* End of sidebar nav menu */}

        </div>
        {/* end of menu wrapper */}
      </header>
  )
};
