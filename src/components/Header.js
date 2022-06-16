import React from 'react';
import styled from 'styled-components';
import Logo from '../media/3Dark.png';
import Background from '../media/background.png';

const HeaderMain = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url(${Background});

  img {
    height: 130px;
    padding-top: 1%;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderMain>
        <img src={Logo} alt="logo" />
      </HeaderMain>
    </>
  );
};

export default Header;
