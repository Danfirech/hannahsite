import React from 'react';
import styled from 'styled-components';
import Background from '../media/background.png';
import Sticky from '../media/sticky-note (2).png';

const MainContainer = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url(${Background});

  img {
    height: 600px;
    padding-top: 5%;
  }
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <img src={Sticky} alt="sticky note" />
      </MainContainer>
    </>
  );
};

export default Main;
