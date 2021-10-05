import React from "react";
import { StyledContactUs } from "../../styles/contact-us/ContactUs.styled";
import {
  Map,
  Placemark,
  YMaps,
  TypeSelector,
  GeolocationControl,
  FullscreenControl,
  RouteButton,
  SearchControl,
  TrafficControl,
  ZoomControl,
} from "react-yandex-maps";

const ContactUs = () => {
  return (
    <StyledContactUs id="contact">
      <h1>Biz bilan bog’lanish</h1>

      <div>
        <YMaps size={(10, 10)}>
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
        </YMaps>
      </div>

      <div className="contact-details">
        <a href="https://yandex.uz/maps/-/CCUqa0SnXA" target="_blank">
          <i class="fas fa-map-marker-alt icon"></i>
          <p>Toshkent shahri,Chilonzor tumani, Ustzolar ko'chasi, 13-uy</p>
        </a>

        <a href="tel:+44-785-7895">
          <i class="fas fa-phone-alt icon"></i>
          <p>+44-785-7895</p>
        </a>

        <a href="mailto: davlatshermatov111@gmail.com">
          <i class="fas fa-envelope icon"></i>
          <p>apexedu@gmail.com</p>
        </a>

        <div className="social-links">
          <p>Ijtimoiy tarmoqdagi sahifalarimiz:</p>
          <div className="social-icons">
            <a href="#" className="icon">
              <i class="fab fa-instagram  icon"></i>
            </a>
            <a href="#" className="icon telegram">
              <i class="fab fa-telegram-plane icon"></i>
            </a>
            <a href="#" className="icon facebook">
              <i class="fab fa-facebook-square icon"></i>
            </a>
          </div>
        </div>
      </div>
    </StyledContactUs>
  );
};

export default ContactUs;
