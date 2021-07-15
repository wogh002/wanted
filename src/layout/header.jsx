import React from "react";
import Nav from "./nav";
import WantedTitle from "./wantedTitle";
import styled from "styled-components";
const HeaderContainer = styled.header`
  padding: 25px 20px;
  border-bottom: 1px solid rgb(209, 204, 204);
  @media ${({ theme: { tablet } }) => tablet} {
    padding: 15px 20px;
  }
  @media ${({ theme: { desktop } }) => desktop} {
    padding: 13px 150px;
  }
  @media ${({ theme: { desktopL } }) => desktopL} {
    padding: 12px 220px;
  }
`;
const HeaderInfo = styled.div`
  @media ${({ theme: { tablet } }) => tablet} {
    display: flex;
    align-items: center;
    width: 100%;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderInfo>
        <WantedTitle />
        <Nav />
      </HeaderInfo>
    </HeaderContainer>
  );
};

export default Header;
