/** @format */

import "../styles/globals.scss";
import "../styles/Button.scss";
import "../styles/Navbar.scss";
import "../styles/Hero.scss";
import "../styles/Banner.scss";
import "../styles/Gallery.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App({
	Component,
	pageProps,
}) {
	return <Component {...pageProps} />;
}
