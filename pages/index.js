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
        <meta name="description" content="The coolest NFT page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
