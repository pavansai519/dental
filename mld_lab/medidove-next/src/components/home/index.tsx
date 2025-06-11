import Header from "@/layout/header/Header"; 
import HeroBannerHome from "./HomeBannerArea";
import HomeTeamArea from "./HomeTeamArea";
import HomeServiceArea from "./HomeServiceArea";
import HomePartnerArea from "./HomePartnerArea";
import HomeQuoteArea from "./HomeQuoteArea"
import HomeAboutArea from "./HomeAboutArea";
import Footer from "@/layout/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroBannerHome />
        <HomeTeamArea />
        <HomeServiceArea />
        <HomePartnerArea />
        <HomeQuoteArea />
        <HomeAboutArea />
      </main>
      <Footer />
    </>
  );
};

export default Home;
