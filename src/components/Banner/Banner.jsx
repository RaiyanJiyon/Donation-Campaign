import React from "react";
import bannerImage from "../../assets/banner.webp";

const Banner = () => {
  return (
    <div
      className="w-11/12 mx-auto mt-6 hero"
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/happy-volunteers-hugging-each-other-while-preparing-donation-boxes_23-2148732640.jpg?t=st=1731312145~exp=1731315745~hmac=97c1a6cfa842a1b6dc759678c688e251a108f99e0d8c4f3c348b0de9cf9f52b8&w=826)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md pt-20 pb-20">
          <h1 className="mb-5 text-5xl font-bold">
            I Grow By Helping People In Need
          </h1>
          <div className="join w-full">
            <input
              type="text"
              placeholder="Search here...."
              className="input input-bordered join-item w-full"
            />
            <button className="btn bg-[#FF444A] text-white font-bold border-none join-item">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
