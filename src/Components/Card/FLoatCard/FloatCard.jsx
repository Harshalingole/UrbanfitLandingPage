import React from "react";
const FloatCard = ({ img, text1, text2 }) => {
  return (
    <>
      <div className="floatingdiv flex justify-around items-center bg-[#2F313C] w-[12rem] h-[4.5rem] rounded-md  shadow-md">
        <img
          src={img}
          alt=""
          style={{ transform: "scale(0.5 )" }}
          className="basis-1/2 w-5 "
        />
        <span className="basis-1/2 font-serif text-xl text-white">
          {text1} <br />
          {text2}
        </span>
      </div>
    </>
  );
};

export default FloatCard;
