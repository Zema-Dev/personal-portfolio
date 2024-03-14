import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="main-contacts">
      <div className="main-contact-title">
        <h1>Contact Me</h1>
      </div>
      <div className="main-contacts-icons">
        <div className="contacts-item">
          <FacebookOutlined />
        </div>
        <div className="contacts-item">
          <TwitterOutlined />
        </div>
        <div className="contacts-item">
          <LinkedinOutlined />
        </div>
        <div className="contacts-item">
          <WhatsAppOutlined />
        </div>
      </div>
      <div className="main-contact">
        <div className="main-contact-eamil">
          <div className="main-contact-email-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="main-contact-email-text">
            <a href="mailto:zema-dev@gmail.com">zema-dev@gmail.com</a>
          </div>
        </div>
        <div className="main-contact-tel">
          <div className="main-contact-tel-icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="main-contact-tel-text">
            <a href="tel:+2250757709188">+225 07 57 70 91 88</a>
          </div>
        </div>
        <div className="main-contact-address">
          <div className="main-contact-address-icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <div className="main-contact-address-text">
            <a href="address">
              <p>Bondoukou, Côte d'Ivoire</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
