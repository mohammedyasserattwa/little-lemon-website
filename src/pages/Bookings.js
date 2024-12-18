import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/bookings.css"
import { fetchAPI, submitAPI } from '../helpers/api';
import BookingForm from '../components/Bookings/bookingsForm';

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes; 
  };
  
const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings = () => {
    const [
      availableTimes, 
      dispatchOnDateChange
    ] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();
  
    const submitData = formData => {
      const response = submitAPI(formData);
      if (response) navigate('/confirmed');
    }; 
  
    return (
        <div>
            <Header />
            <div className="bookings">
                <h2>Table reservation</h2>
                <BookingForm 
                availableTimes={availableTimes} 
                dispatchOnDateChange={dispatchOnDateChange} 
                submitData={submitData} 
                />
            </div>
            <Footer/>
      </div>
    );
  };
  
  export default Bookings;