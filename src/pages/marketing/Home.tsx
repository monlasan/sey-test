import Header from './components/Header';
import Herosection from './components/HeroSection';
import Sessionslayout from './components/Sessionslayout';
import Alaune from './components/Alaune';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <div className=''>
        <Header />
        <Herosection />
        <Sessionslayout />
        <Alaune />
        <Footer />
      </div>
    </>
  );
}
