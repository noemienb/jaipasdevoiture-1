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

import { reviews, titles, carousel, cities, map, presentation, keyFigures, contacts, navbar, logo, partners } from '../data/index.json';

const Index = () => {

  return (
    <main>
      <TopNav menus={navbar} logo={logo} />

      <Carousel data={carousel} />

      <Presentation presentation={presentation} title={titles.presentation} />

      <CityList cities={cities} map={map} title={titles.cityList} />

      <KeyFig keyFigures={keyFigures} />

      <Reviews reviews={reviews} />

      <Partners partners={partners} title={titles.partners} />

      <ContactForm title={titles.form} />

      <Footer contacts={contacts} />
    </main>
  );

}

export default Index;