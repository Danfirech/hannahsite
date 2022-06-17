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

const Footer = () => {
  return (
    <>
      <FooterMain>
        <FacebookIcon className="icon" />
        <InstagramIcon className="icon" />
        <TwitterIcon className="icon" />
      </FooterMain>
    </>
  );
};

export default Footer;
