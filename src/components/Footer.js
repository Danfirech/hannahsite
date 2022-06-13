import React from 'react';
import styled from 'styled-components';

const FooterMain = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  background-color: pink;
`;

const Footer = () => {
  return (
    <>
      <FooterMain>Contact Info</FooterMain>
    </>
  );
};

export default Footer;
