import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

import "./contact.styles.scss";

const Contact = () => {
  const contactOptions = [
    {
      contactMethod: "linkedin",
      url: "https://www.linkedin.com/in/muhammad-umar-nawaz-99a702233/",
      iconName: faLinkedin,
    },
    {
      contactMethod: "github",
      url: "https://github.com/umar052001",
      iconName: faGithubSquare,
    },
    {
      contactMethod: "gmail",
      url: "mailto:umar.111nawaz@gmail.com",
      iconName: faEnvelopeSquare,
    },
  ];

  return (
    <section className="contact page dev" id="contact">
      <div className="social-text-container">
        <h2>Contact Me</h2>
        <h3>Don't be a stranger!</h3>

        <p>
          If you have any questions or just want to say hi,
          <br /> shoot me an email. <br /> I'd love to hear from you!
        </p>
      </div>

      <div className="social-links-container">
        {contactOptions.map((contactOption) => {
          return (
            <CustomButton
              key={contactOption.contactMethod}
              className={`social-item ${contactOption.contactMethod}`}
              title={contactOption.contactMethod}
            >
              <a
                className="social-item-link"
                href={contactOption.url}
                target="_blank"
                rel="noreferrer noopener"
                title={contactOption.contactMethod}
              >
                <FontAwesomeIcon
                  icon={contactOption.iconName}
                  className="social-icon"
                />
              </a>
            </CustomButton>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
