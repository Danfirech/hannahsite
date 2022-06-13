import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  height: 900px;
  width: 100%;
  display: flex;
  background-color: #c4baab;
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <div>Come back soon!</div>
        <div>~good things on the way~</div>
      </MainContainer>
    </>
  );
};

export default Main;
