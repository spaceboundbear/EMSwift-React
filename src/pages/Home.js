import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeCards from '../components/cards/HomeCards';
import HomeData from '../components/Data/HomeData';

const Home = () => {
  return (
    <div>
      <Container>
        <Row className="mx-auto py-3">
          {HomeData.map((listing) => (
            <HomeCards
              key={listing.id}
              id={listing.id}
              title={listing.title}
              info={listing.info}
              button={listing.button}
              link={listing.link}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
