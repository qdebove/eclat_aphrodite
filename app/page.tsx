import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Hours from '../components/Hours';
import SemiPermanentMakeup from '../components/SemiPermanentMakeup';
import Services from '../components/Services';
import Treatments from '../components/Treatments';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Treatments />
      <Gallery />
      <Hours />
      <SemiPermanentMakeup />
      <Contact />
    </>
  );
}