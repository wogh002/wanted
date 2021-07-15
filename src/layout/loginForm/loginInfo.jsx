import React from "react";
import styled from "styled-components";
const LoginInfoContainer = styled.div`
  display: none;
  @media ${({ theme: { tablet } }) => tablet} {
    display: flex;
    align-items: center;
    font-size: 16px;
    opacity: 0.8;
    letter-spacing: -0.05em;
    flex-shrink: 0;
  }
`;
const Span = styled.span`
  opacity: 0.6;
  font-size: 18px;
  cursor: pointer;
  margin: 0 20px 0 18px;
`;
const Link = styled.a`
  font-weight: 700;
  ::after {
    margin: 0 23px;
    content: "|";
    opacity: 0.4;
    cursor: none;
  }
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 15px;
  background-color: transparent;
  border: 1px solid darkgray;
  padding: 5px 10px;
  opacity: 0.8;
  border-radius: 16px;
`;

const LoginInfo = () => (
  <LoginInfoContainer>
    <Span>
      <i className="fas fa-search"></i>
    </Span>
    <Link href="/">회원가입/로그인</Link>
    <Button type="button">기업 서비스</Button>
  </LoginInfoContainer>
);

export default LoginInfo;
