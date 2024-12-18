import customer1Image from "../assets/home/customer1.jpg"
import customer2Image from "../assets/home/customer2.jpg"
import customer3Image from "../assets/home/customer3.jpg"
import customer4Image from "../assets/home/customer4.jpg"
import "../styles/testimonial.css"
import TestimonialCard from "./testimonialCard"


const customers = [
    {
      fullName: 'Maria Sanchez',
      image: customer1Image,
      rating: [1, 1, 1, 1, 0.5],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Antony Clifton',
      image: customer2Image,
      rating: [1, 1, 1, 1, 1],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Tamika Jackson',
      image: customer3Image,
      rating: [1, 1, 1, 1, 0.5],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      fullName: 'Brandon Ming',
      image: customer4Image,
      rating: [1, 1, 1, 1],
      says: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  const testimonial = () => {
    return (
        <section className="testimonials">
          <div className="container grid">
            <h2>What people say about us!</h2>
            {customers.map((customer, index) => 
              <TestimonialCard key={index} customer={customer} />
            )}
         </div>
        </section>
      );
};

export default testimonial;