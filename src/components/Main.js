import React from "react";
import styled from "styled-components";
import Background from "../media/background.png";
import Sticky from "../media/sticky-note (2).png";
import Footer from "./Footer";
import Header from "./Header";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${Background});

  img {
    height: 100px;
    width: 100px;
  }
`;

const ImageContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .stickyNotes {
    height: 450px;
    width: 450px;

    @media screen and (max-width: 900px) {
      height: 300px;
      width: 300px;
    }
  }
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <Header></Header>
        <ImageContainer>
          <img className="stickyNotes" src={Sticky} alt="sticky note" />
        </ImageContainer>
        <Footer></Footer>
      </MainContainer>
    </>
  );
};

export default Main;
