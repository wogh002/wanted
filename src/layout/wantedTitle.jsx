import React from "react";
import styled from "styled-components";

const WantedTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  margin-bottom: 17px;
  @media ${({ theme: { tablet } }) => tablet} {
    margin-bottom: 0;
  }
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 23px;

  letter-spacing: -0.05em;
  @media ${({ theme: { tablet } }) => tablet} {
    margin-right: 50px;
  }
`;
const Button = styled.button`
  font-size: 15px;
  border: none;
  padding: 6px 15px;
  color: #0066ff;
  border: 1px solid #0066ff;
  background-color: white;
  border-radius: 16px;
  cursor: pointer;
  @media ${({ theme: { tablet } }) => tablet} {
    display: none;
  }
`;
const WantedTitle = () => (
  <WantedTitleContainer>
    <Title>
      <a href="/">wanted</a>
    </Title>
    <Button type="button"> 회원가입하기 </Button>
  </WantedTitleContainer>
);

export default WantedTitle;
