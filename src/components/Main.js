import React from "react";
import styled from "styled-components";
import Background from "../media/background.png";
import Sticky from "../media/sticky-note (2).png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../media/3Dark.png";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${Background});
  background-color: pink;

  img {
    height: 100px;
    width: 100px;
  }
`;

const HeaderMain = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url(${Background});

  img {
    height: 120px;
    padding-top: 1%;
  }
`;

const ImageContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

const Main = () => {
  return (
    <>
      <MainContainer>
        <HeaderMain>
          <img src={Logo} alt="logo" />
        </HeaderMain>
        <ImageContainer>
          <img src={Sticky} alt="sticky note" />
        </ImageContainer>
        <FooterMain>
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
          <TwitterIcon className="icon" />
        </FooterMain>
      </MainContainer>
    </>
  );
};

export default Main;
