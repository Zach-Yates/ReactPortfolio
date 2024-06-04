import React from 'react'
import './CompContact.css'
import CompNav from '../Components/Navbar/CompNav'
import CompFooter from '../Components/Footer/CompFooter'


const CompContact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "919398d5-321f-42fd-8faa-c6c8a33ff16f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      // console.log("Success", res);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='comp-contact'>
      <CompNav/>
      <div className="comp-contact-main">
        <h1>Get In Touch</h1>

        <form onSubmit={onSubmit} className='comp-contact-form'>
              <label>Your Name</label>
              <input type='text' name='name' placeholder='Enter your name' required/>
              <label>Phone Number</label>
              <input type='tel' name='phone' placeholder='Enter your phone number' required/>
              <label>Write your message here</label>
              <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
              <button type='submit' className='btn dark-btn'> Submit </button>
        </form>
      </div>
      <CompFooter/>
    </div>
  )
}

export default CompContact
