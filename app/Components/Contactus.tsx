"use client"
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  const [service, setService] = useState('');
  const [otherService, setOtherService] = useState('');

//   useEffect(() => {
//     gsap.from('.form-container', { duration: 1, opacity: 0, y: -50 });
//     gsap.from('.map-container', { duration: 1, opacity: 0, x: 50, delay: 0.5 });
//   }, []);

  const handleServiceChange = (e:any) => {
    setService(e.target.value);
    if (e.target.value !== 'Other') {
      setOtherService('');
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-5 z-5 bg-white teaxt-white space-y-10 md:space-y-0">
      <div className="form-container flex-1 p-5 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-5">Let's Have A <span className="text-[#7a2536]">Discussion</span>?</h1>
        <p className="mb-5">Drop us a line! We are here to answer your questions 24/7.</p>
        <form className="flex flex-col space-y-4">
          <label className="font-semibold">Which Services do You Want?</label>
          <select value={service} onChange={handleServiceChange} className="p-2 border rounded">
            <option value="" disabled>Select a Service</option>
            <option value="Software App Development">Software App Development</option>
            <option value="Web Designing">Web Designing</option>
            <option value="Web Development">Web Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Other">Other</option>
          </select>
          {service === 'Other' && (
            <input
              type="text"
              value={otherService}
              onChange={(e) => setOtherService(e.target.value)}
              placeholder="Please specify the service"
              className="p-2 border rounded mt-2"
            />
          )}
          <input type="text" name="fullName" placeholder="Full Name" className="p-2 border rounded" />
          <input type="text" name="company" placeholder="Company" className="p-2 border rounded" />
          <input type="email" name="workEmail" placeholder="Work Email" className="p-2 border rounded" />
          <input type="tel" name="workPhone" placeholder="Work Phone" className="p-2 border rounded" />
          <textarea name="message" placeholder="How Can We Help You?" className="p-2 border rounded"></textarea>
          <button type="submit" className="bg-[#7a2536] text-white py-2 rounded">Submit</button>
        </form>
      </div>
      <div className="map-container flex-1 p-5 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-5">INDIA (HQ)</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.92848147923!2d77.0266387296727!3d28.4594963890179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19bc3b9d6f67%3A0x8b8b8b8b8b8b8b8!2sGurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1592841428398!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
