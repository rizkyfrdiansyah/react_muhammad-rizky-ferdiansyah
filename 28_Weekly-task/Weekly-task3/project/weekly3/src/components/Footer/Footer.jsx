import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <main />
        <footer id="footer">
          <div className="container">
            <div className="content_footer">
              <div className="profil">
                <div className="logo_area">
                  <img src="./assets/img/logo.png" alt="" />
                  <span className="logo_name">FOURSQUARE</span>
                  <button id="dark-mode" className="moon">
                    <i className="bx bxs-moon" />
                  </button>
                  <button id="light-mode" className="sun hide">
                    <i className="bx bxs-sun" />
                  </button>
                </div>
                <div className="desc_area">
                  <div style={{ maxWidth: 320 }}>
                    <p className="mb-1.25rem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa rem aspernatur, id voluptates quas dolores assumenda dignissimos laboriosam exercitationem eligendi velit.</p>
                  </div>
                </div>
                <div className="social_media">
                  <a href="https://www.linkedin.com/in/muhammad-rizky-ferdiansyah-602671226/">
                    <i className="bx bxl-linkedin-square" />
                  </a>
                  <a href="https://www.instagram.com/rizkyfrdiansyah_08/">
                    <i className="bx bxl-facebook-square" />
                  </a>
                  <a href="https://www.facebook.com/robin.perdi">
                    <i className="bx bxl-instagram" />
                  </a>
                  <a href="https://github.com/rizkyfrdiansyah">
                    <i className="bx bxl-github" />
                  </a>
                </div>
              </div>
              <div className="service_area">
                <ul className="service_header">
                  <li className="service_name">Services</li>
                  <li>
                    <a href="https://www.integraindonesia.co.id/">IT Consultant</a>
                  </li>
                  <li>
                    <a href="https://blog.rumahweb.com/development-adalah/">Development</a>
                  </li>
                  <li>
                    <a href="https://cloud.google.com/">Cloud</a>
                  </li>
                  <li>
                    <a href="https://devopssupport.com/">DevOps &amp; Support</a>
                  </li>
                </ul>
                <ul className="service_header">
                  <li className="service_name">Programs</li>
                  <li>
                    <a href="https://www.figma.com/design/">UI/UX</a>
                  </li>
                  <li>
                    <a href="https://reactjs.org/">REACT JS</a>
                  </li>
                  <li>
                    <a href="https://go.dev/">GO-LANG</a>
                  </li>
                  <li>
                    <a href="https://flutter.dev/">FLUTTER</a>
                  </li>
                </ul>
                <ul className="service_header">
                  <li className="service_name">Explore</li>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/">Join Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="footer_bottom">
              <div className="copy_right">
                <i className="bx bxs-copyright" />
                <span>2022 FOURSQUARE</span>
              </div>
              <div className="terms">
                <a href="https://www.termsfeed.com/blog/sample-terms-of-use-template/">Terms of Use</a>
                <a href="https://www.clickadu.com/privacy?gclid=CjwKCAiA68ebBhB-EiwALVC-Nrl5LVOi7Owht82ou9yDL5cy03cgFeryiG0FrYgS25TGZz46F8U_yRoCgmsQAvD_BwE">Privacy Policy</a>
                <a href="https://support.google.com/accounts/answer/61416?hl=id&co=GENIE.Platform%3DAndroid">Cookie</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
