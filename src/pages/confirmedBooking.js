import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/header';
import Footer from '../components/footer';
const ConfirmedBooking = () => {
  return (
    <div>
      <Header />
      <div className="container confirmed-booking">
        <FontAwesomeIcon icon={faCircleCheck} size="3x" />
        <h2>Your reservation has been confirmed.</h2>
        <p>You will receive an email with all the details.</p>
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmedBooking;