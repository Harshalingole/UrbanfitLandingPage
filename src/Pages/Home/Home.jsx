import React from "react";
import Button from "../../Components/Button/Button";
import Partner from "../../Data/Img/gym-partner.png";
// import Boss from "../../Data/Img/boss.png";
// import Money from "../../Data/Img/boss.png";
// import FloatCard from "../../Components/Card/FLoatCard/FloatCard";
// import { motion } from "framer-motion";

const Home = () => {
  // const transition = { duration: 2, type: "spring" };

  return (
    <>
      <div className="h-wraper grid-col-2  md:grid-cols-2 lg:grid-cols-2  bg-body-black h-auto">
        {/* Left Side  */}
        <div className="h-left  flex flex-col flex-wrap justify-start items-start gap-8 mt-[3rem] w-[auto]">
          <h1 className="h-title text-[3.2rem] text-white lg:w-[100%] sm:w-[90%]">
            Lets Grow{" "}
            <span className="text-[3.2rem] ml-2 rounded-full text-brandClr p-1">
              Togother!
            </span>
          </h1>
          <h2 className="h-title text-[2.4rem] text-white lg:w-[100%] sm:w-[70%]">
            Be Your Own Boss
          </h2>
          <div>
            <h2 className="text-2xl text-white">
              You Found Right Partener
              <span className="text-[#99FF33] text-3xl"> Congrats!</span>
            </h2>
          </div>

          <Button text={"Get Franchise"} />
        </div>

        {/* Right Side */}
        <div className="h-right relative  grid-cols-1 mt-[4rem] md:mt-[2rem] lg:mt-0  scale-125 lg:scale-100">
          <img
            src={Partner}
            alt="partner"
            className=" scale-(0.8)  justify-self-start"
          />
          {/* Profitabel Business */}
          {/* <motion.div
            initial={{ top: "5rem", left: "0rem" }}
            whileInView={{ top: "5rem", left: "20rem" }}
            transition={transition}
            className="float-card absolute z-1"
          >
            <FloatCard img={Money} text1="Profitable" text2={"Business"} />
          </motion.div> */}
          {/* Business Opportunity*/}

          {/* <motion.div
            initial={{ left: "20rem", top: "22rem" }}
            whileInView={{ left: "-5rem", top: "22rem" }}
            transition={transition}
            className="float-card absolute z-1"
          >
            <FloatCard img={Boss} text1="Business" text2={"Opportunity"} />
          </motion.div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
