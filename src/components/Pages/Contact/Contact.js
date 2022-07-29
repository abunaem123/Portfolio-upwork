import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="bg-secondary font-ralway text-white md:px-12 px-8 py-8">
          <div className="bg-secondary container font-ralway py-16">
            <div className=" ">
              <h1 className="text-5xl  font-bold  text-white">
                Contact <span className="text-primary">Me</span>{" "}
              </h1>
              <p className="ml-1 mt-2 text-gray-400">Get in touch with me</p>
              {/* <p className="w-full ml-1  bg-orange-500 rounded-full mt-2 h-[1px]"></p> */}
            </div>
            
          </div>
          <div className='grid md:grid-cols-2 grid-cols'>
          <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-5/12 space-y-5">
                <div className="text-white flex gap-4">
                  <span>
                    <MailIcon className="w-8 text-primary" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold">Have a question?</h2>
                    <p className="text-gray-400">I am here to help</p>
                    <p className="text-primary">
                      Email: <a href="mailto:123abunaem@gmail.com">123abunaem@gmail</a>
                    </p>
                  </div>
                </div>
                <div className="text-white flex gap-4">
                  <span>
                    <LocationMarkerIcon className="w-8 text-primary" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold">Current Location</h2>
                    <p className="text-gray-400">Dhaka,Bangladesh.</p>
                    <p className="text-primary">Serving clients worldwide</p>
                  </div>
                </div>
                <div className="text-white flex gap-4">
                  <span>
                    <PhoneIcon className="w-8 text-primary" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold">Contact with me</h2>
                    <p className="text-primary">Email: <a href="mailto:123abunaem@gmail.com">123abunaem@gmail.com</a></p>
                    <p className="text-primary">Phone : <a href="tel:+880 1874632355">+880 1874632355</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div>
            <form className='md-pt-0 pt-8' action="">
          <div className="flex gap-4 w-full">
                <input
                  name="user_name"
                  type="text"
                  placeholder="Your Name "
                  className="block bg-[#EFEFEF] p-3 h-14 rounded  w-full focus:outline-none"
                />
                <input
                  name="user_email"
                  type="email"
                  placeholder="Your Email"
                  className="block bg-[#EFEFEF] h-14 p-3 rounded  w-full focus:outline-none"
                />
              </div>
              <input
                name="user_subject"
                type="text"
                placeholder="Subject"
                className="block bg-[#EFEFEF] p-3 h-14 rounded  w-full mt-5 focus:outline-none"
              />
              <textarea
                name="message"
                className="h-36 bg-[#EFEFEF] resize-none p-3 rounded block w-full mt-5 focus:outline-none"
                placeholder="Type Your Message"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-600 py-3 px-8 mt-5 text-white font-bold rounded-sm"
              >
                Send Message
              </button>
          </form>
            </div>
          </div>
          
        </div>
    );
};

export default Contact;