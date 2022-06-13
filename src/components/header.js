import React from 'react';
import styled from 'styled-components';

const HeaderMain = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  background-color: pink;
`;

const Header = () => {
  return (
    <>
      <HeaderMain>
        <div>Home</div>
        <div>Contact</div>
      </HeaderMain>
    </>
  );
};

export default Header;
