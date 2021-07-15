import React from "react";
import styled from "styled-components";
const IconContainer = styled.div`
  white-space: nowrap;
  @media ${({ theme: { tablet } }) => tablet} {
    &.disappear {
      display: none;
    }
  }
`;
const Span = styled.span`
  opacity: 0.5;
  font-size: 18px;
  cursor: pointer;
  :first-child {
    margin-right: 20px;
  }
`;
const IconItems = (props) => (
  <IconContainer className="disappear">
    <Span>
      <i className="fas fa-search"></i>
    </Span>
    <Span>
      <i className="fas fa-bars"></i>
    </Span>
  </IconContainer>
);

export default IconItems;
