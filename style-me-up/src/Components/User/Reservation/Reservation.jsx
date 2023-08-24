import React, { useState, useEffect } from "react";
import ReactWhatsapp from "react-whatsapp";
import "./Reservation.css";

const Reservation = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const  [message,setMessages] = useState("");
  const [isSubmitted,setIsSubmitted] = useState(false);

  // Fetch selectedService from local storage on component mount
  useEffect(() => {
    const storedService = localStorage.getItem("selectedService");
    setSelectedService(storedService);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the message with the form data
    const message = `Hello, I am ${name}. I want to take a ${selectedService} appointment on ${selectedDate} `;
    setMessages(message);

    // Set isSubmitted to true to show the WhatsApp message
    setIsSubmitted(true);

    // Clear local storage after form submission
    localStorage.clear();
  };

  const handleReload = () => {
    // Reload the page on "Close" button click
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formBook">
        <div>
          <h1 className="selectedServiceTitle">{selectedService}</h1>
        </div>
        <div className="contentts">
          <div>
            <label>Name:</label>
            <input
              className="inputBook"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              className="inputBook"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              className="inputBook"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="btnss">
          <ReactWhatsapp
            className="booking"
            number="+971 527943415"
            message={`Hello, I am ${name}. I want to take a ${selectedService} appointment on ${selectedDate}`} // Show the WhatsApp message when isSubmitted is true
          >
            Submit
          </ReactWhatsapp>

          <button className=" booking" onClick={handleReload}>
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default Reservation;
