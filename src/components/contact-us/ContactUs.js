import React from "react";
import { StyledContactUs } from "../../styles/contact-us/ContactUs.styled";
// import {
//   Map,
//   Placemark,
//   YMaps,
//   TypeSelector,
//   GeolocationControl,
//   FullscreenControl,
//   RouteButton,
//   SearchControl,
//   TrafficControl,
//   ZoomControl,
// } from "react-yandex-maps";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagramSquare,
  FaTelegramPlane,
  FaFacebookSquare,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <StyledContactUs>
      <h1>Biz bilan bog’lanish</h1>

      <div>
        {/* <YMaps size={(10, 10)}>
          <Map
            style={{ width: "100%", height: "300px" }}
            defaultState={{
              center: [41.316907, 69.248481],
              zoom: 14,
              controls: [],
            }}
          >
            <Placemark geometry={[41.316907, 69.248481]} />
            <TypeSelector options={{ float: "right" }} />
            <GeolocationControl options={{ float: "left" }} />
            <FullscreenControl />
            <RouteButton options={{ float: "right" }} />
            <SearchControl options={{ float: "right" }} />
            <TrafficControl options={{ float: "right" }} />
            <ZoomControl options={{ float: "right" }} />
          </Map>
        </YMaps> */}
      </div>
      <div className="contact-details">
        <span>
          <div>
            <FaMapMarkerAlt className="icon" />
          </div>{" "}
          Toshkent shahri,Chilonzor tumani, Ustzolar ko'chasi, 13-uy
        </span>
        <span>
          <div>
            <FaPhoneAlt className="icon" />
          </div>{" "}
          +998 90 350 55 55
        </span>
        <span>
          <div>
            <FaEnvelope className="icon" />
          </div>{" "}
          apexedu@gmail.com
        </span>
        <span>
          Ijtimoiy tarmoqdagi sahifalarimiz:
          <FaInstagramSquare className="social-icons" />
          <FaTelegramPlane className="social-icons" />
          <FaFacebookSquare className="social-icons" />
        </span>
      </div>
    </StyledContactUs>
  );
};

export default ContactUs;
