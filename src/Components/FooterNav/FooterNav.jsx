import React from "react";

const FooterNav = ({ title, data }) => {
  return (
    <div className="f-comapny">
      <h4 className="text-white text-lg mb-4">{title}</h4>
      <div className="flex flex-col flex-nowrap gap-1">
        {data.map((el, ind) => {
          return (
            <a
              href="https://urbanfitkart.com/Franchises/"
              target={"_blank"}
              rel="noreferrer"
              className="text-[#999999]"
            >
              {el}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNav;
