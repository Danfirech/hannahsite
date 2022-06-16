import React from 'react';
import styled from 'styled-components';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';

const FooterMain = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  background-color: pink;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <>
      <FooterMain>
        {/* <FacebookIcon />
        <InstagramIcon /> */}
      </FooterMain>
    </>
  );
};

export default Footer;
