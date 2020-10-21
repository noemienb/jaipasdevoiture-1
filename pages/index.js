import TopNav from '../components/TopNav';
import Presentation from '../components/Presentation';
import KeyFigures from '../components/KeyFigures';
import Review from '../components/Review';
import CityList from '../components/CityList';
import CarCarrousel from '../components/CarCarrousel';

import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {

  return (
    <main>
      <TopNav />

      <CarCarrousel />
      <Presentation />
      <CityList />
      <KeyFigures />
      {/* 


      </div>

      } />

      <Presentation id="reviews" title="Avis clients" text={
        <div id="review-grid">
          <Review link="" rating={5} text="j'adore les voitures" user="micheline" />
          <Review link="" rating={4} text="trop cool la vie" user="jean jacqueq" />
          <Review link="" rating={3} text="vroom vroom" user="albert" />
        </div>
      } />

      <Presentation id="partners" title="Ils nous font confiance" text={
        <div id="partners-logos">
          <img src="img/logos/01.png" alt="déménageurs bretons" />
          <img src="img/logos/02.png" alt="eluma trans" />
          <img src="img/logos/03.png" alt="gpc logistics" />
          <img src="img/logos/04.png" alt="kompass" />
          <img src="img/logos/05.png" alt="système u" />
          <img src="img/logos/06.png" alt="upply" />
        </div>
      } />

      {/* <ContactForm /> */}
    </main>
  );

}

export default Index;