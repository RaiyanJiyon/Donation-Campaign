import React, { useState } from "react";
import bannerImage from "../../assets/banner.webp";

const Banner = ({donations}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDonations, setFilteredDonations] = useState(donations);

  const handleSearchInputChange =(event) => {
    setSearchQuery(event.target.value);
    console.log(searchQuery)
  }

  const handleSearchInput = () => {
    
  }

  return (
    <div
      className="w-11/12 mx-auto mt-6 hero"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="md:max-w-md space-y-4 pt-20 pb-20">
          <h1 className="mb-5 text-5xl font-bold">
            I Grow By Helping People In Need
          </h1>
          <div className="join w-full">
            <input
              type="text"
              placeholder="Search here...."
              className="input input-bordered join-item w-full"
              onChange={handleSearchInputChange}
            />
            <button onClick={handleSearchInput} className="btn bg-[#FF444A] text-white font-bold border-none join-item">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
