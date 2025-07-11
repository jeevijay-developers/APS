import React from "react";
import Paymentcards from "../components/Paymentcards";
import FooterLinks from "../components/FooterLinks";
import Socials from "../components/Socials";
import Image from "next/image";

export default function FooterOne() {
  return (
    <footer className="footer -type-1">
      <div className="footer__main">
        <div className="footer__bg">
          <Image
            width="1800"
            height="627"
            src="/img/footer/1/bg.svg"
            alt="image"
          />
        </div>

        <div className="container">
          <div className="footer__info">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="row y-gap-20 items-center">
                  <div className="col-auto">
                    <i className="icon-headphone text-50"></i>
                  </div>

                  <div className="col-auto">
                    <div className="text-20 fw-500">
                      Contact Us{" "}
                      <span className="text-accent-1">73400 24526</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="footerSocials">
                  <div className="footerSocials__title">Follow Us</div>

                  <div className="footerSocials__icons">
                    <Socials />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__content">
            <div className="row y-gap-40 justify-between">
              <div className="col-lg-4 col-md-6">
                <h4 className="text-20 fw-500">Contact</h4>

                <div className="y-gap-10 mt-20">
                  <div className="d-block" href="#">
                    Near Chambal Garden, Mauji Baba Dham, Kota - Rajasthan
                  </div>
                  <div className="d-block" href="#">
                    info@apskota.co.in
                  </div>
                  <div className="d-block" href="#">
                    +91 73400 24526
                  </div>
                </div>
              </div>

              {/* <FooterLinks /> */}

              {/* <div className="col-lg-3 col-md-6">
                <h4 className="text-20 fw-500">Newsletter</h4>
                <p className="mt-20">
                  Subscribe to the free newsletter and stay up to date
                </p>

                <div className="footer__newsletter">
                  <input type="Email" placeholder="Your email address" />
                  <button>Send</button>
                </div>

                <h4 className="text-20 fw-500 mt-30">Mobile Apps</h4>

                <div className="mt-10">
                  <a className="d-flex items-center" href="#">
                    <i className="icon-apple text-16 mr-10"></i>
                    iOS App
                  </a>

                  <a className="d-flex items-center mt-10" href="#">
                    <i className="icon-android text-16 mr-10"></i>
                    Android App
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="footer__bottom">
          <div className="row y-gap-5 justify-between items-center">
            <div className="col-auto">
              <div>© Copyright Viatours {new Date().getFullYear()}</div>
            </div>

            <div className="col-auto">
              <div className="footer__images d-flex items-center x-gap-10">
                <Paymentcards />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  );
}
