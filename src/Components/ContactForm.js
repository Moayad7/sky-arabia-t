import React, { useState } from 'react';
import StyledGoogleMap from './StyledGoogleMap';

const ContactForm = () => {
 const [formState, setFormState] = useState({ name: '', email: '', message: '' });

 const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    setFormState({ name: '', email: '', message: '' });
 };

 return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-100 container-fluid px-5 lg:mx-5'>
    
    <form onSubmit={handleSubmit} className="text-start bg-white  px-8 pt-6 pb-8 mb-4">
    <div>
        <h1 className='text-blue-700 text-4xl p-3'>Contact Us Now!</h1>
        <p className='text-slate-500 text-xl p-3'>Our team will answer your inquiries and questions as quickly as possible</p>
    </div>
      <div className="mb-4">
        <input
          className="appearance-none border-b border-b-blue-700 w-full py-2 px-3 text-gray-700 leading-tight outline-none "
          id="name"
          type="text"
          placeholder="Name"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <input
          className="appearance-none border-b border-b-blue-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <textarea
          className=" appearance-none border-b border-b-blue-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Message"
          name="message"
          value={formState.message}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="w-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
    <div className='w-full flex justify-center'>
        <StyledGoogleMap/>
    </div>
    </div>
 );
};

export default ContactForm;
