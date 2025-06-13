import Header from "@/layout/header/Header"; 
import HeroBannerHome from "./HomeBannerArea";
import HomeTeamArea from "./HomeTeamArea";
import HomeServiceArea from "./HomeServiceArea";
import HomePartnerArea from "./HomePartnerArea";
import HomeQuoteArea from "./HomeQuoteArea"
import MedicalTabHomeFive from "./MedicalTabHomeFive";
import FactAreaHomeFour from "./FactAreaHomeFour";
import HomeAboutArea from "./HomeAboutArea";
import Footer from "@/layout/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroBannerHome />
        <HomeTeamArea />
          <HomeAboutArea />

        <HomeServiceArea />
       <HomePartnerArea />

        <FactAreaHomeFour/>
        <MedicalTabHomeFive/>
        
    
        <HomeQuoteArea />
      </main>
      <Footer />
    </>
  );
};

export default Home;
