import "./component/css/bootstrap.min.css"
import "./component/fonts/font-awesome.min.css"
import "./component/fonts/simple-line-icons.css"
import "./component/css/slicknav.css"
import "./component/css/nivo-lightbox.css"
import "./component/css/animate.css"
import "./component/css/main.css"
import "./component/css/responsive.css"
import "./component/img/about/as.jpg"
import "./component/img/logo.png"


import React from 'react';

const projectIndividu = () =>{
    return (
        <body>

    <div>
  {/* Header Area wrapper Starts */}
  <header id="header-wrap">
    {/* Navbar Start */}
    <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            <span className="icon-menu" />
            <span className="icon-menu" />
            <span className="icon-menu" />
          </button>
          <a href="index.html" classname="navbar-brand"><img src="./component/img/logo.png" alt="logo"/></a>
        </div>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
            <li className="nav-item active">
              <a className="nav-link" href="#hero-area">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">
                Resume
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Menu Start */}
      <ul className="onepage-nev mobile-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#resume">resume</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* Mobile Menu End */}
    </nav>
    {/* Navbar End */}
    {/* Hero Area Start */}
    <div id="hero-area" className="hero-area-bg">
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-center">
            <div className="contents">
              <h5 className="script-font wow fadeInUp" data-wow-delay="0.2s">HI</h5>
              <h2 className="head-title wow fadeInUp" data-wow-delay="0.4s">Kaunang Yosafat Yulius Riders</h2>
              <p className="script-font wow fadeInUp" data-wow-delay="0.6s">Front-end Project Individu</p>
              <ul className="social-icon wow fadeInUp" data-wow-delay="0.8s">
                <li>
                  <a className="facebook" href="#"><i className="icon-social-facebook" /></a>
                </li>
                <li>
                  <a className="twitter" href="#"><i className="icon-social-twitter" /></a>
                </li>
                <li>
                  <a className="instagram" href="#"><i className="icon-social-instagram" /></a>
                </li>
                <li>
                  <a className="linkedin" href="#"><i className="icon-social-linkedin" /></a>
                </li>
                <li>
                  <a className="google" href="#"><i className="icon-social-google" /></a>
                </li>
              </ul>
              <div className="header-button wow fadeInUp" data-wow-delay="1s">
                <a href="#" className="btn btn-common">Get a Free Quote</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Hero Area End */}
  </header>
  {/* Header Area wrapper End */}
  {/* About Section Start */}
  <section id="about" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="img-thumb wow fadeInLeft" data-wow-delay="0.3s">
        <img className="img-fluid" img src="./component/img/about/as.jpg" alt />
          </div>
        </div> 
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="profile-wrapper wow fadeInRight" data-wow-delay="0.3s">
            <h3>Hello</h3>
            <p>Project Individu </p>
            <div className="about-profile">
              <ul className="admin-profile">
                <li><span className="pro-title"> Name </span> <span className="pro-detail"> Kaunang Yosafat Yulius Riders</span></li>
                <li><span className="pro-title"> Age </span> <span className="pro-detail">21 Years</span></li>
                <li><span className="pro-title"> Sertifikasi </span> <span className="pro-detail"> 2 Sertifikasi</span></li>
                <li><span className="pro-title"> Country </span> <span className="pro-detail">Indonesia</span></li>
                <li><span className="pro-title"> Location </span> <span className="pro-detail">Sulawesi Utara, Bitung, Aertembanga</span></li>
                <li><span className="pro-title"> e-mail </span> <span className="pro-detail">S21910579@student.unklab.ac.id</span></li>
                <li><span className="pro-title"> Phone </span> <span className="pro-detail">+ (62)21340122373</span></li>
                <li><span className="pro-title"> Freelance </span> <span className="pro-detail">Available</span></li>
              </ul>
            </div>
            <a href="#" className="btn btn-common"><i className="icon-paper-clip" /> Download Resume</a>
            <a href="#" className="btn btn-danger"><i className="icon-speech" /> Contact Me</a>
          </div>
        </div>   
      </div>
    </div>
  </section>
  {/* About Section End */}
  {/* Services Section Start */}
  <section id="services" className="services section-padding">
    <h2 className="section-title wow flipInX" data-wow-delay="0.4s">What I do</h2>
    <div className="container">
      <div className="row">
        {/* Services item */}
        <div className="col-md-6 col-lg-3 col-xs-12">
          <div className="services-item wow fadeInDown" data-wow-delay="0.3s">
            <div className="icon">
              <i className="icon-grid" />
            </div>
            <div className="services-content">
              <h3><a href="#">Front-end </a></h3>
              <p>Lulus Kelas.</p>
            </div>
          </div>
        </div>
        {/* Services item */}
        <div className="col-md-6 col-lg-3 col-xs-12">
          <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
            <div className="icon">
              <i className="icon-layers" />
            </div>
            <div className="services-content">
              <h3><a href="#">Front-end </a></h3>
              <p>Lulus Kelas.</p>
            </div>
          </div>
        </div>
        {/* Services item */}
        <div className="col-md-6 col-lg-3 col-xs-12">
          <div className="services-item wow fadeInDown" data-wow-delay="0.9s">
            <div className="icon">
              <i className="icon-briefcase" />
            </div>
            <div className="services-content">
              <h3><a href="#">Front-end</a></h3>
              <p>Lulus Kelas.</p>
            </div>
          </div>
        </div>
        {/* Services item */}
        <div className="col-md-6 col-lg-3 col-xs-12">
          <div className="services-item wow fadeInDown" data-wow-delay="1.2s">
            <div className="icon">
              <i className="icon-bubbles" />
            </div>
            <div className="services-content">
              <h3><a href="#">Front-end</a></h3>
              <p>Lulus Kelas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Services Section End */}
  {/* Resume Section Start */}
  <div id="resume" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="education wow fadeInRight" data-wow-delay="0.3s">
            <ul className="timeline">
              <li>
                <i className="icon-graduation" />
                <h2 className="timelin-title">Education</h2>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">SD GMIM KANAAN WINENET</h3>
                  <span></span>
                  <p className="line-text">Tamat.</p>
                </div>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">SMP N 2 BITUNG</h3>
                  <span>2012-2015</span>
                  <p className="line-text">Tamat.</p>
                </div>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">SMA N 2 BITUNG</h3>
                  <span>2016 - 2018</span>
                  <p className="line-text">Tamat.</p>
                </div>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">Universitas Klabat</h3>
                  <span>2019 - 2023</span>
                  <p className="line-text">Hampir Tamat :)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="Sertifikasi wow fadeInRight" data-wow-delay="0.6s">
            <ul className="timeline">
              <li>
                <i className="icon-briefcase" />
                <h2 className="timelin-title">Sertifikasi</h2>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">Cisco</h3>
                  <span>2022 </span>
                  <p className="line-text">NDG Linux unhatched</p>
                </div>
              </li>
              <li>
                <div className="content-text">
                  <h3 className="line-title">Workshop</h3>
                  <span>2023</span>
                  <p className="line-text">Cataliz.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Resume Section End */}
  
  {/* Counter Area Start*/}
  <section className="counter-section section-padding">
    <div className="container">
      <div className="row">
        {/* Counter Item */}
        <div className="col-md-3 col-sm-6 work-counter-widget text-center">
          <div className="counter wow fadeInDown" data-wow-delay="0.3s">
            <div className="icon"><i className="icon-briefcase" /></div>
            <div className="counterUp">14</div>
            <p>Project Working</p>
          </div>
        </div>
        {/* Counter Item */}
        <div className="col-md-3 col-sm-6 work-counter-widget text-center">
          <div className="counter wow fadeInDown" data-wow-delay="0.6s">
            <div className="icon"><i className="icon-check" /></div>
            <div className="counterUp">28</div>
            <p>Project Done</p>
          </div>
        </div>
        {/* Counter Item */}
        <div className="col-md-3 col-sm-6 work-counter-widget text-center">
          <div className="counter wow fadeInDown" data-wow-delay="0.9s">
            <div className="icon"><i className="icon-diamond" /></div>
            <div className="counterUp">05</div>
            <p>Awards Received</p>
          </div>
        </div>
        {/* Counter Item */}
        <div className="col-md-3 col-sm-6 work-counter-widget text-center">
          <div className="counter wow fadeInDown" data-wow-delay="1.2s">
            <div className="icon"><i className="icon-heart" /></div>
            <div className="counterUp">18</div>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Counter Area End*/}
  {/* Contact Section Start */}
  <section id="contact" className="section-padding">      
    <div className="contact-form">
      <div className="container">
        <div className="row contact-form-area wow fadeInUp" data-wow-delay="0.4s">          
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="contact-block">
              <h2>Contact Form</h2>
              <form id="contactForm">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Name" required data-error="Please enter your name" />
                      <div className="help-block with-errors" />
                    </div>                                 
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" placeholder="Email" id="email" className="form-control" name="email" required data-error="Please enter your email" />
                      <div className="help-block with-errors" />
                    </div> 
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" placeholder="Subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group"> 
                      <textarea className="form-control" id="message" placeholder="Your Message" rows={5} data-error="Write your message" required defaultValue={""} />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="submit-button">
                      <button className="btn btn-common" id="submit" type="submit">Send Message</button>
                      <div id="msgSubmit" className="h3 text-center hidden" /> 
                      <div className="clearfix" /> 
                    </div>
                  </div>
                </div>            
              </form>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="footer-right-area wow fadeIn">
              <h2>Contact Address</h2>
              <div className="footer-right-contact">
                <div className="single-contact">
                  <div className="contact-icon">
                    <i className="fa fa-map-marker" />
                  </div>
                  <p>Sulawesi Utara, Bitung, Aertembanga</p>
                </div>
                <div className="single-contact">
                  <div className="contact-icon">
                    <i className="fa fa-envelope" />
                  </div>
                  <p><a href="mailto:hello@tom.com">rk@tom.com</a></p>
                  <p><a href="mailto:tomsaulnier@gmail.com">rk@gmail.com</a></p>
                </div>
                <div className="single-contact">
                  <div className="contact-icon">
                    <i className="fa fa-phone" />
                  </div>
                  <p><a href="#">+ (00) 123 456 789</a></p>
                  <p><a href="#">+ (00) 123 344 789</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <object style={{border: 0, height: 450, width: '100%'}} data="https://www.google.co.id/maps/place/Aertembaga,+Bitung+City,+North+Sulawesi/@1.5013431,125.1201242,12z/data=!3m1!4b1!4m6!3m5!1s0x3287aaa5e0bd482f:0x59db4d0c035c4bf0!8m2!3d1.5049443!4d125.2038559!16s%2Fg%2F1hb_gnf5x?entry=ttu" />
          </div>
        </div>
      </div>
    </div>   
  </section>
  {/* Contact Section End */}
  {/* Footer Section Start */}
  <footer className="footer-area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="footer-text text-center wow fadeInDown" data-wow-delay="0.3s">
            <ul className="social-icon">
              <li>
                <a className="facebook" href="#"><i className="icon-social-facebook" /></a>
              </li>
              <li>
                <a className="twitter" href="#"><i className="icon-social-twitter" /></a>
              </li>
              <li>
                <a className="instagram" href="#"><i className="icon-social-instagram" /></a>
              </li>
              <li>
                <a className="linkedin" href="#"><i className="icon-social-linkedin" /></a>
              </li>
              <li>
                <a className="google" href="#"><i className="icon-social-google" /></a>
              </li>
            </ul>
            <p>Copyright © 2018 UIdeck All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer Section End */}
  {/* Go to Top Link */}
  <a href="#" className="back-to-top">
    <i className="icon-arrow-up" />
  </a>
</div>
</body>
    );
}

export default projectIndividu;