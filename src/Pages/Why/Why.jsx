import React from "react";
import { motion } from "framer-motion";
import CardCol2 from "../../Components/Card/CardCol2/CardCol2";

const Why = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <>
      <div className="w-wraper mt-[8rem] md:mt-10 sm:mt-[-8rem] flex flex-col flex-nowrap justify-start items-start h-auto">
        {/* Page Title */}
        <div className="w-title mb-10 ">
          <span className="font-bold text-[3.5rem] text-white">Why </span>
          <span className="font-extrabold text-[3.2rem] text-brandClr">
            UrbanFit
          </span>
        </div>

        {/* Content Section */}
        <div className="w-content p-2 flex flex-col flex-nowrap gap-12 justify-center items-start relative">
          {/* Left Side */}
          <motion.div
            initial={{ top: "0rem", left: "10rem" }}
            whileInView={{ top: "0rem", left: "0rem" }}
            transition={transition}
            className="w-left grid-col-2  md:grid-cols-3 lg:grid-cols-3 justify-items-center items-center z-1 "
          >
            {/* Not given absoulute * animation will not work */}
            <h2 className="w-c-subtitle ">
              Opportunity to take charge of your own successful business
            </h2>
            <h2 className="w-c-subtitle">
              Be a part of growing industry of health supplements
            </h2>
            <h2 className="w-c-subtitle justify-self-center">
              India’s most trustworthy and fastest growing fitness tech brand.
            </h2>
          </motion.div>

          {/* Right Side  */}

          <div className="w-right w-[90%] sm:w-[100vw] lg:w-[80%] mx-auto mt-6 text-white h-auto flex flex-col flex-nowrap justify-center  items-center">
            <img
              src="https://urbanfitkart.com/Franchises/homepages/fitness/images/brands.png"
              alt=""
              className=" w-[100%] md:w-auto scale-150 md:scale-110"
            />
            <div className="w-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-14 justify-items-stretch items-center">
              <CardCol2
                text1={15462}
                text2="Monthly Client"
                style1="w-c-subtitle"
                style2="why-card"
              />
              <CardCol2
                text1={3}
                text2="Stores Number"
                style1="w-c-subtitle"
                style2="why-card"
              />
              <CardCol2
                text1={15462}
                text2="Store Revenue"
                style1="w-c-subtitle"
                style2="why-card"
              />
              <CardCol2
                text1={15462}
                text2="Associated Brand"
                style1="w-c-subtitle"
                style2="why-card"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
