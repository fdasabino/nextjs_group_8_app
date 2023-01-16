import { ModalContextProvider } from "../context/modalContext";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/globals.scss";
import "../styles/Button.scss";
import "../styles/Navbar.scss";
import "../styles/Hero.scss";
import "../styles/Banner.scss";
import "../styles/Gallery.scss";
import "../styles/Card.scss";
import "../styles/Marketplace.scss";
import "../styles/Footer.scss";
import "../styles/Timer.scss";

export default function App({ Component, pageProps }) {
  return (
    <ModalContextProvider>
      <Component {...pageProps} />
    </ModalContextProvider>
  );
}
