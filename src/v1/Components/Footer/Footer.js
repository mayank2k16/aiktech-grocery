import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Footer.scss";
import fbIcon from "../../Assets/Images/navbar/facebook.svg";
import instaIcon from "../../Assets/Images/navbar/instagram.svg";
import linkedinIcon from "../../Assets/Images/navbar/linkedin.svg";
import { SOCIALMEDIA_LINKS } from "../../Assets/Constant";
const mapStateToProps = ({ categories, auth }) => ({
  categories,
  auth,
});

const Footer = () => {
  //   const { auth } = useSelector(mapStateToProps);
  //   const { showLoginPopup = false, isLoggedIn, userDetails = {} } = auth;
  const current_year = new Date().getFullYear();
  const {
    categories: { list: categoryList = [] },
    auth,
  } = useSelector(mapStateToProps);
  const { isLoggedIn } = auth;

  const formattedCategories = categoryList;
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-content-wrapper">
          <div className="footer-content footer-aboutus">
            <p className="footer-head">About Us</p>
            <p>
             {auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.desc}
            </p>
          </div>

          <div className="footer-content footer-contact footer-links">
            <div>
              <ul>
                <li>
                  <p className="footer-head">Useful Link</p>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#Aboutus"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#TermsConditions"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#PhurtiDeliveryServices"
                  >
                    {auth.tenantDetails?.title} Delivery Services
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#PaymentMethods"
                  >
                    Payment Methods
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#ReturnPolicy"
                  >
                    Return Policy
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#PrivacyPolicy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="/privacy-policy#ContactUs"
                  >
                    Contact Information
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-content footer-contact">
            <div>
              <ul>
                <li>
                  <p className="footer-head">Contact</p>
                </li>
                {
             auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.social_media_links?.length !==0 && auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.social_media_links[0]?.facebook &&
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.social_media_links[0]?.facebook}
                  >
                    <img className="social" src={fbIcon} alt="" />
                    Facebook
                  </a>
                </li>
                 }
                 {
             auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.social_media_links?.length !==0 && auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.social_media_links[0]?.instagram &&
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.social_media_links[0]?.instagram}
                  >
                    <img className="social" src={instaIcon} alt="" />
                    Instagram
                  </a>
                </li>
                 }
                  {
             auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.social_media_links?.length !==0 && auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.social_media_links[0]?.linkedin &&
                <li>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.social_media_links[0]?.linkedin}
                  >
                    <img className="social" src={linkedinIcon} alt="" />
                    LinkedIn
                  </a>
                </li>
                 }
                
                {
             auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.contact_details?.length !==0 && auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.contact_details[0]?.email &&
                <li>
                  <a href={`mailto:${auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.contact_details[0]?.email}`}>
                    E-mail us at <br />  {auth.tenantDetails?.template_configs[0]?.config?.home?.footer?.contact_details[0]?.email}
                  </a>
                </li>
              }
              </ul>
            </div>
          </div>
        </div>
        {isLoggedIn && (
          <div className="footer-content footer-categories">
            <p className="footer-head">Categories</p>
            <div>
              <ul>
                {formattedCategories && formattedCategories.length > 0 ? (
                  <>
                    {formattedCategories.map((category, index) => {
                      if (index <= formattedCategories.length / 2) {
                        return (
                          <Link
                            className="cursor category-link"
                            to={`/categories/${category.name}`}
                            key={category.name}
                          >
                            <li>{category.name}</li>
                          </Link>
                        );
                      }
                    })}
                  </>
                ) : null}
              </ul>
              <ul>
                {formattedCategories && formattedCategories.length > 0 ? (
                  <>
                    {formattedCategories.map((category, index) => {
                      if (index > formattedCategories.length / 2) {
                        return (
                          <Link
                            className="cursor category-link"
                            to={`/categories/${category.name}`}
                            key={category.name}
                          >
                            <li>{category.name}</li>
                          </Link>
                        );
                      }
                    })}
                  </>
                ) : null}
              </ul>
            </div>
          </div>
        )}
      </div>
      <hr />
      <p>© {auth?.tenantDetails?.title} { current_year }</p>
    </div>
  );
};

export default Footer;
