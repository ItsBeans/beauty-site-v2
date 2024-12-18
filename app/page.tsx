
import Header from './components/Header';
import Footer from './components/Footer';
import IntroSection from './components/IntroSection';
import ServiceCard from './components/ServiceCard';
import MeetSection from './components/MeetSection';
import HandpickedProducts from './components/HandpickedProducts';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (
    <>
    <Header/>
    <IntroSection/>
    <ServiceCard/>
    <MeetSection/>
    <HandpickedProducts/>
    <CallToAction/>
    <Footer/>
    </>
  );
}
