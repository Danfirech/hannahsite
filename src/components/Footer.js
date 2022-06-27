import React from "react";
import styled from "styled-components";
import Background from "../media/background.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterMain = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  background-image: url(${Background});
  align-items: center;
  justify-content: center;

  .icon {
    height: 100%;
    color: #445245;
    padding: 5px;
  }
`;

const FooterMainMiddle = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .color {
    color: #445245;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterMain>
        <FooterMainMiddle>
          <div className="color">kristen@southernadirondackmidwifery.com</div>
          <div className="color">(518) 289-5240</div>
        </FooterMainMiddle>
      </FooterMain>
    </>
  );
};

export default Footer;
