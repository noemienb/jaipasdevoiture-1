import TopNav from '../components/TopNav';
import Presentation from '../components/Presentation';
import KeyFig from '../components/KeyFig';
import Reviews from '../components/Reviews';
import CityList from '../components/CityList';
import Carousel from '../components/Carousel';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

import 'bootstrap/dist/css/bootstrap.min.css';

import { carousel, cities, map, presentation, keyFigures, contacts, navbar, logo, partners } from '../data/index.json';

const Index = () => {

  return (
    <main>
      <TopNav menus={navbar} logo={logo} />

      <Carousel data={carousel} />
      <Presentation presentation={presentation} />
      <CityList cities={cities} map={map} />
      <KeyFig keyFigures={keyFigures} />

      <Reviews id={"reviews"} />

      <Partners partners={partners} />

      <ContactForm />

      <Footer contacts={contacts} />
    </main>
  );

}

export default Index;