import React from "react";

const CardCol2 = ({ text1, icon, text2, style1, style2, styleText2 }) => {
  return (
    <div className={`card-col-2 bg-slate-500 p-2 ${style1} ${style2}`}>
      {text1 ? (
        <p className="text-2xl">{text1}</p>
      ) : (
        <img src={icon} alt="" className="m-0 p-0 w-20" />
      )}

      <p className={`font-bold ${styleText2}`}>{text2}</p>
    </div>
  );
};

export default CardCol2;
