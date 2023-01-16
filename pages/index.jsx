import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Gallery from "../components/Gallery/Gallery";
import Marketplace from "../components/Marketplace/Marketplace";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Monaki NFT</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Marketplace />
      </main>
      <Footer />
    </>
  );
}
