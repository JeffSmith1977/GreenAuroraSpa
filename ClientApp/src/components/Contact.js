import React from "react";
import 'boxicons';


export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
          We need the information for this part.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i class="bx bx-hot">
                  <box-icon name='map'></box-icon>
                </i>

                <h4>Location:</h4>
                <p>34-09 Steinway Street, Queens NY 11101, Estados Unidos</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope">
                <box-icon name='envelope' ></box-icon>
                </i>
                <h4>Email:</h4>
                <p>info@greenauraspa.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone">
                <box-icon name='mobile-alt' ></box-icon>
                </i>
                <h4>Call:</h4>
                <p>+1 929-624-2688</p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2629021181206!2d-73.92308408428669!3d40.756242042844065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f04a4acdaed%3A0x6b18acf41678e0f7!2sGreen%20Aura%20Spa!5e0!3m2!1ses!2sni!4v1645414218696!5m2!1ses!2sni"
                width="400"
                height="300"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="name">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
