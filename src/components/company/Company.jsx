import React from "react";
import "./Company.css";

// logo
import brand1 from '../../assets/companyBrands/bridgestone.png'
import brand2 from '../../assets/companyBrands/yokohama.png'
import brand3 from '../../assets/companyBrands/sailun.png'
import brand4 from '../../assets/companyBrands/caltex.png'
import brand5 from '../../assets/companyBrands/motul.png'



const Company = () => {
  return (
    <div className="company mb-5">
      <div className="wrapper container">
        <h1 className="companyTitle pt-4">Our Partners</h1>

        <div className="companyBrand d-flex flex-nowrap row justify-content-center align-items-center my-5 mx-auto py-5 gap-md-5 gap-sm-5">
          <img src={brand1} className="brand" alt="bridgestone" />
          <img src={brand2} className="brand" alt="yokohama" />
          <img src={brand3} className="brand" alt="sailun" />
          <img src={brand4} className="brand" alt="caltex" />
          <img src={brand5} className="brand" alt="motul" />
        </div>
      </div>
    </div>
  );
};

export default Company;
