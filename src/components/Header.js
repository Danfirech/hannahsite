import React from "react";
import styled from "styled-components";
import Logo from "../media/3Dark.png";
import Background from "../media/background.png";

const HeaderMain = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url(${Background});

  .logo {
    height: 140px;
    width: 300px;
    padding-top: 25px;
    @media screen and (max-width: 900px) {
      height: 120px;
      width: 230px;
      display: flex;
      justify-content: center;
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderMain>
        <div>
          <img className="logo" src={Logo} alt="logo" />
        </div>
      </HeaderMain>
    </>
  );
};

export default Header;
