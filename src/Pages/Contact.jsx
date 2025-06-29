import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Address from "../assets/images/Communication/Address.png";
import Phone from "../assets/images/Communication/Phone.png";
import Mail from "../assets/images/Communication/Mail.png";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        formRef.current.reset(); // Clear form after submit
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      }
    );
  };

  return (
    <div id='Contact' className='contact scroll-mt-[4vh] h-screen text-white bg-[#0D0D0D] font-[Inter] p-2 w-full flex flex-col justify-evenly pt-4 lg:h-screen lg:flex-row lg:w-screen lg:scroll-mt-[12vh] lg:pt-2 lg:justify-center '>

      {/* Contact Form */}
      <div className="contact-left bg-[#222020] rounded-md p-2 w-[98%] pb-5 lg:w-[49%] lg:pl-8 lg:p-6 lg:h-[85%]">
        <form ref={formRef} onSubmit={sendEmail} className="form flex flex-col">
          <h3 className='font-bold text-lg mb-2 lg:text-2xl lg:mb-10'>Contact</h3>

          <label htmlFor="name" className='text-xs font-light text-[#929292] lg:text-lg'>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className='border-b border-white bg-transparent mb-1 lg:mb-6 focus:outline-none text-xs lg:text-lg'
            required
          />

          <label htmlFor="email" className='text-xs font-light text-[#929292] lg:text-lg'>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className='border-b border-white bg-transparent mb-1 lg:mb-6 focus:outline-none text-xs lg:text-lg'
            required
          />

          <label htmlFor="subject" className='text-xs font-light text-[#929292] lg:text-lg'>Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className='border-b border-white bg-transparent mb-1 lg:mb-6 focus:outline-none text-xs lg:text-lg'
            required
          />

          <label htmlFor="message" className='text-xs font-light text-[#929292] lg:text-lg mb-2'>Message</label>
          <textarea
            name="message"
            id="message"
            className='border-b border-white bg-transparent mb-1 lg:mb-6 lg:h-28 focus:outline-none text-xs lg:text-lg'
            required
          ></textarea>

          <div className="button text-center mt-2 rounded-sm">
            <button type="submit" className='text-xs p-2 lg:p-3 bg-[#FDEE53] text-black lg:text-lg cursor-pointer'>
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information */}
      <div className="contact-right bg-black rounded-md p-2 w-[98%] pl-3 pb-5 lg:w-[48%] lg:pl-8  lg:h-[85%] lg:p-5">
        <h3 className='font-bold text-lg mb-6 lg:text-2xl lg:mb-16'>Contact Information</h3>

        <div className="information flex flex-col gap-10 lg:gap-20 lg:pl-12">
          <div className="address flex gap-1">
            <img src={Address} alt="Address" className='w-4 h-4 lg:w-7 lg:h-7' />
            <h3 className='text-xs font-semibold lg:text-lg'>Address:</h3>
            <p className='text-xs font-light lg:text-lg'>dsadfsfsfdfdsfdsfdfdfdsadsadsdsdsddd</p>
          </div>
          <div className="phone flex gap-1">
            <img src={Phone} alt="Phone" className='w-4 h-4 lg:w-7 lg:h-7' />
            <h3 className='text-xs font-semibold lg:text-lg'>Phone:</h3>
            <p className='text-xs font-light lg:text-lg'>91 9030101173</p>
          </div>
          <div className="email flex gap-1">
            <img src={Mail} alt="Mail" className='w-4 h-4 lg:w-7 lg:h-7' />
            <h3 className='text-xs font-semibold lg:text-lg'>e-mail:</h3>
            <p className='text-xs font-light lg:text-lg'>khaja28mohiddin@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
