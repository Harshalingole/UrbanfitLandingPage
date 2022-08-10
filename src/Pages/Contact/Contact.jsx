import React from "react";

const Contact = () => {
  return (
    // Contact Container
    <div className="flex flex-nowrap justify-center items-center py-14 px-24  h-auto mt-8">
      <div className="c-form flex flex-col flex-nowrap justify-center items-start gap-6 bg-[#61bdd17e] md:bg-[#242d49]  rounded-md w-auto md:w-[70%] lg:w-[60%] p-4 md:p-0">
        {/* Form title */}
        <h1 className="text-[3rem] font-extrabold text-white m-auto">
          Start Business Today
        </h1>
        {/* Form */}
        <form
          action="#"
          className="flex flex-col flex-nowrap justify-start items-start p-0 md:px-14 lg:px-14 gap-2 mb-[2rem]"
        >
          {/* Name */}
          <label htmlFor="name" className=" text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-1 border-none w-full md:w-[25rem] text-[#242d49] text-sm bg-white hover:border-blue-300"
            required
          />
          {/* Mobile Number */}
          <label htmlFor="name" className="text-white ">
            Mobile Number
          </label>
          <input
            type="number"
            name="name"
            id="name"
            className="p-1 border-none w-full md:w-[25rem] text-[#242d49] text-sm bg-white hover:border-blue-300"
            required
          />
          {/* Select State */}
          <label htmlFor="city" className="text-white ">
            Select State
          </label>
          <select
            name="SelectCity"
            id="city"
            className="p-1 text-black w-full md:w-[25rem] text-md bg-white hover:border-blue-300"
          >
            <option value="Select City">Select City</option>
            <option value="Select City" className="text-white">
              Maharashtra
            </option>
          </select>
          {/* Select City */}
          <label htmlFor="city" className="text-white ">
            Select State
          </label>
          <select
            name="SelectCity"
            id="city"
            className="p-1 text-black w-full md:w-[25rem] text-md bg-white hover:border-blue-300"
          >
            <option value="Select City">Select City</option>
            <option value="Select City" className="text-white">
              Mumbai
            </option>
          </select>
          <button type="submit" className="button mt-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
