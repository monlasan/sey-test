import Header from "./components/Header";
import HeroSectionsSessions from "./components/HeroSectionsSessions";
import AllSessions from "./components/AllSessions";
import Footer from "./components/Footer";

export default function Sessions() {
  return (
    <>
      <div className=''>
       <Header />
       <HeroSectionsSessions />
       <AllSessions />
       <Footer />
      </div>
    </>
  );
}
