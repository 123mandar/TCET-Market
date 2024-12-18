import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../assets/css/Footers.css";

const Footers = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Right */}
          <div>
            <a href="https://facebook.com" className="me-4 text-reset">
              <FaFacebook style={{ fontSize: "24px" }} />
            </a>
            <a href="https://instagram.com" className="me-4 text-reset">
              <FaInstagramSquare style={{ fontSize: "24px" }} />
            </a>
            <a href="https://whatsapp.com" className="me-4 text-reset">
              <FaWhatsappSquare style={{ fontSize: "24px" }} />
            </a>
          </div>
        </section>

        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column for logo and description */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="fw-bold mb-4">
                  <img
                    src="/tcetshieldlogo-removebg-preview.png" // Replace with your logo image path
                    alt="TCET Marketplace Logo"
                    style={{
                      margin: "auto",
                      height: "60px",
                      width: "auto",
                    }}
                  />
                </h6>
                <p>
                  TCET Marketplace is your go-to platform for renting a variety
                  of products and services. Whether you're looking for
                  electronics, furniture, or professional services, we've got
                  you covered.
                </p>
              </div>

              {/* Grid column for Product Categories */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Rent Categories</h6>
                <p>
                  <NavLink to="/rent" className="text-reset">
                    Products for Rent
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/services" className="text-reset">
                    Services for Rent
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/about" className="text-reset">
                    About Us
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/contact" className="text-reset">
                    Contact Us
                  </NavLink>
                </p>
              </div>

              {/* Grid column for Useful Links */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <NavLink
                    to={"/"}
                    className="text-reset"
                    style={{ textDecoration: "None" }}
                  >
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to={"/about"}
                    className="text-reset"
                    style={{ textDecoration: "None" }}
                  >
                    About
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to={"/contact"}
                    className="text-reset"
                    style={{ textDecoration: "None" }}
                  >
                    Contact
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to={"/policy"}
                    className="text-reset"
                    style={{ textDecoration: "None" }}
                  >
                    Privacy Policy
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    to={"/register"}
                    className="text-reset"
                    style={{ textDecoration: "None" }}
                  >
                    Login/Register
                  </NavLink>
                </p>
              </div>

              {/* Grid column for Contact Info */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" />
                  Thakur Village, Kandivali(400101), Maharashtra, India
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  mandardhage2201@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> +91 9325720803
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © {currentYear} Copyright:&nbsp;
          <a className="text-reset fw-bold" href="https://www.tcetmarket.xyz/">
            tcetmarket.xyz
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footers;
