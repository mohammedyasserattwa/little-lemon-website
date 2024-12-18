import { Link } from 'react-router-dom';
import bruschettaImage from "../assets/home/bruschetta.jpg"
import greekSaladImage from "../assets/home/greek-salad.jpg"
import lemonDessertImage from "../assets/home/lemon-dessert.jpg"
import "../styles/weekSpecial.css"
import MealCard from "./mealCard"

const WeekSpecial = () => {
    const meals = [
        {
          name: 'Greek Salad',
          image: greekSaladImage,
          price: '$12.99',
          description: `The famous greek salad of crispy lettuce, peppers, olives and 
            our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
            croutons.`,
        },
        {
          name: 'Bruschetta',
          image: bruschettaImage,
          price: '$5.99',
          description: `Our Bruschetta is made from grilled bread that has been 
            smeared with garlic and seasoned with salt and olive oil.`,
        },
        {
          name: 'Lemon Dessert',
          image: lemonDessertImage,
          price: '$5.00',
          description: `This comes straight from grandma's recipe book, every last 
            ingredient has been sourced and is as authentic as can be imagined.`,
        },
      ];

      return (
        <section className="container grid week-specials">
            <div className="week-specials-header">
                <h2>This week specials!</h2>
                <Link className="button-primary" to="/construction">
                Online Menu
                </Link>
            </div>
            {meals.map((meal, index) => 
                <MealCard key={index} meal={meal} />
            )}
        </section>
      )
}

export default WeekSpecial