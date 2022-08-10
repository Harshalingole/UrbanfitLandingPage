/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import FooterNav from "../../Components/FooterNav/FooterNav";
import Logo from "../../Data/Img/urbanfitlogo.png";
import FooterData from "./Footerdata";

const Footer = () => {
  const { Company, Products, Brands, Trending } = FooterData;
  return (
    <>
      <div className="F-wraper grid-col-2  md:grid-cols-2 lg:grid-cols-3 bg-[#181818] w-[100%] p-4 sm:p-2 md:px-20 md:py-12 ">
        {/* Left Side */}
        <div className="F-left flex flex-col flex-nowrap justify-center items-start gap-4">
          <div className="text-start text-md  text-[#999999] flex flex-col flex-nowrap justify-start items-center">
            <img
              src={Logo}
              alt="urbanfitlogo"
              className="w-[90%] lg:scale-90 lg:ml-[-2rem] md:ml[-2rem] mb-4"
            />
            <p className="addrees  ">
              Cerebrum IT Park, OFFICE NO. 1 E, WING NO. B3, SECOND FLOOR,
              Kalyani Nagar,Pune, Maharashtra-411014, India
            </p>
          </div>
          <div className="text-[14px]  text-[#b8b6b6]">
            <p>Ph: 8390836100,9921212116</p>
            <p>Email: info@urbanfitwellness.com</p>
          </div>
        </div>

        {/* Middle Side */}
        <div className="F-middle justify-self-start flex flex-row flex-nowrap justify-start items-start gap-10">
          <FooterNav title="COMPANY" data={Company} />
          <FooterNav title="PRODUCTS" data={Products} />
        </div>
        {/* End Side */}
        <div className="F-middle justify-self-start  flex flex-row flex-nowrap justify-start items-start gap-10">
          <FooterNav title="TOP BRANDS" data={Brands} />
          <FooterNav title="TRENDING" data={Trending} />
        </div>
      </div>
      {/* Social Links */}
      <div className="f-social flex flex-nowrap justify-evenly items-center border-t-2 border-zinc-400 bg-[#181818] p-4">
        <div className="flex flex-wrap justify-cemter items-center gap-6">
          <p className="text-[#999999]">
            @2022 Urbanfit Wellness Private Limited
          </p>
          <div className="icon flex flex-nowrap justify-cemter items-center gap-2">
            <p>F</p>
            <p>F</p>
          </div>
        </div>
        <p className="text-[#999999]">Privacy Policy</p>
      </div>
    </>
  );
};

export default Footer;
