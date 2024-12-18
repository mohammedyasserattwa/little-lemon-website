import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/construction.css';
import Header from '../components/header';
import Footer from '../components/footer';

const UnderConstruction = () => {
  return (
    <div>
        <Header />
        <div className="container under-construction">
            <FontAwesomeIcon icon={faPersonDigging} size="3x" />
            <h2>Page under construction</h2>
        </div>
        <Footer />
    </div>
  );
};

export default UnderConstruction;