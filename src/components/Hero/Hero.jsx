import React, { useState } from 'react';
import Aos, { init } from 'aos';
// import 'aos/dist/aos.css';


const SearchForm = () => {
  const [priceValue, setPriceValue] = useState(40);

  const handlePriceChange = (event) => {
    setPriceValue(event.target.value);
  };

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          {/* text content section */}
          <div className="text-white">
            <p data-aos="fade-up">Our Packages</p>
            <p data-aos="fade-up" data-aos-delay="300" className="font-bold text-3xl">Search Your Destination</p>
          </div>
          {/* Form Section */}
          <div
          data-aos='fade-up'
          data-aos-delay='600' 
           className="space-y-4 bg-white rounded-md p-4 relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 py-3">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Search your Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:ring-primary
                   focus:ring outline-none rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="date" className="opacity-70">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2 range accent-primary focus:ring-primary
                   focus:ring outline-none rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="price" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Prize</p>
                    <p className="font-bold text-xl">GH₵ {priceValue}</p>
                  </div>
                </label>
                <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                  <input
                    type="range"
                    id="price"
                    min={5000}
                    max={10000}
                    value={priceValue}
                    step={10}
                    onChange={handlePriceChange}
                    className={`appearance-none w-full bg-gradient-to-r from-primary to-secondary-to-r
                     h-2 rounded-full my-2`}
                  />
                </div>
              </div>
            </div>
              {/* Button Section */}
       <button className='bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 
       py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 transition-x1/2'>
        Search
       </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;