import React from "react";
import "./Franchise.css";
import CardCol2 from "../../Components/Card/CardCol2/CardCol2";
import Title from "../../Components/Title/Title";
import Boss from "../../Data/Img/boss.png";

const Franchise = () => {
  return (
    <>
      <div className="w-wraper mt-[8rem] md:mt-10 sm:mt-[-8rem] flex flex-col flex-nowrap justify-start items-start h-auto">
        {/* Title */}
        <Title text1="Franchise" text2="Vision" />
        {/* CardList */}
        <div className="F-cardlist w-[100%] md:w-[90%] lg:w-[80%] grid grid-col-2  md:grid-cols-2 lg:grid-cols-3 m-auto">
          <CardCol2
            icon={Boss}
            text2="We aim to bring the change in fitness industry by establishing network of state of the art health supplement storess"
            style1="vision-card"
          />
          <CardCol2
            icon={Boss}
            text2="There is no possibility of fake products with UrbanFit due to our vast tie network of premium supplement brands"
            style1="vision-card"
          />
          <CardCol2
            icon={Boss}
            text2="Our priority will always be our customer. We aim to build trust, happiness and loyalty for our customers"
            style1="vision-card"
          />
        </div>
      </div>
    </>
  );
};

export default Franchise;
