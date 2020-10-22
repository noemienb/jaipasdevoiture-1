import TopNav from '../components/TopNav';
import Presentation from '../components/Presentation';
import KeyFigures from '../components/KeyFigures';
import Reviews from '../components/Reviews';
import CityList from '../components/CityList';
import Carousel from '../components/Carousel';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {

  return (
    <main>
      <TopNav />

      <Carousel />
      <Presentation />
      <CityList />
      <KeyFigures />

      <Reviews id={"reviews"} />


      <Partners />

      <ContactForm />

      <Footer />
    </main>
  );

}

export default Index;