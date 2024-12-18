import { Link } from 'react-router-dom'
import restaurantImage from '../assets/home/restaurant-food.jpg'
import '../styles/hero.css'


const Hero = () => {
    return <section className="hero">
        <div className="container grid">
            <div className="hero-information">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned by the mediterranean restaurant located in the heart of Chicago. We offer a variety of dishes from different countries in the mediterranean region. 
                </p>
                <Link className="button-primary" to="/bookings">Reserve A Table</Link>
            </div>
            <img className="hero-image" src={restaurantImage} alt="Restaurant Food" />
        </div>
    </section>
}

export default Hero