import React, { useRef } from "react";
import Nav from "./nav";
import WantedTitle from "./wantedTitle";
import styled from "styled-components";
import {
  sale,
  media,
  humanAffair,
  game,
  finance,
  categories,
} from "../json/dropdownMenu/menu";

const HeaderContainer = styled.header`
  padding: 25px 20px;
  border-bottom: 1px solid rgb(209, 204, 204);

  @media ${({ theme: { tablet } }) => tablet} {
    padding: 15px 20px;
    &.removeBottom {
      border-bottom: 0;
    }
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

const Section = styled.section`
  opacity: 0;
  height: 0;
  transition: all 200ms ease-in-out;
  @media ${({ theme: { tablet } }) => tablet} {
    &.hide {
      opacity: 0;
      height: 0;
    }
    &.show {
      display: block;
      opacity: 1;
      height: 300px;
      padding-top: 60px;
    }
  }
`;
const DropdownDetail = styled.div`
  @media ${({ theme: { tablet } }) => tablet} {
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
  }
`;
const OrderList = styled.ol`
  @media ${({ theme: { tablet } }) => tablet} {
    width: 16%;
    margin-right: 20px;
    letter-spacing: -0.06em;
    font-size: 15px;
    opacity: 0.7;
    :last-child li div {
      font-size: 17px;
      font-weight: 700;
    }
  }
`;
const OrderListItem = styled.li`
  @media ${({ theme: { tablet } }) => tablet} {
    margin-bottom: 15px;
  }
`;
const MoreContainer = styled.div`
  @media ${({ theme: { tablet } }) => tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    & span {
      opacity: 0.5;
      font-size: 13px;
    }
  }
`;

const Dimmed = styled.div`
  opacity: 0;
  @media ${({ theme: { tablet } }) => tablet} {
    &.show {
      opacity: 0.1;
      position: fixed;
      background-color: black;
      height: 100%;
      width: 100%;
    }
  }
`;

const Header = () => {
  const dropdownSection = useRef();
  const header = useRef();
  const dimmed = useRef();
  const doDestructuring = (item) => {
    const {
      current: { classList },
    } = item;
    return classList;
  };
  const mouseOverAddClass = () => {
    doDestructuring(dropdownSection).add("show");
    doDestructuring(header).add("removeBottom");
    dimmed.current.classList.add("show");
  };
  const mouseOverRemoveClass = () => {
    doDestructuring(dropdownSection).remove("show");
    doDestructuring(header).remove("removeBottom");
    dimmed.current.classList.remove("show");
  };
  const mouseOver = ({ target }) =>
    target.name === "탐색" ? mouseOverAddClass() : mouseOverRemoveClass();

  const mouseLeave = () => {
    const dropdownClassList = doDestructuring(dropdownSection);
    const headerClassList = doDestructuring(header);
    headerClassList.remove("removeBottom");
    dropdownClassList.add("hide");
    dropdownClassList.remove("show");
    dimmed.current.classList.remove("show");
  };
  return (
    <>
      <HeaderContainer
        className="header"
        onMouseLeave={mouseLeave}
        ref={header}
      >
        <HeaderInfo>
          <WantedTitle />
          <Nav mouseOver={mouseOver} />
        </HeaderInfo>
        <Section className="dropdown" ref={dropdownSection}>
          <DropdownDetail>
            <OrderList>
              {sale.map((item) => (
                <OrderListItem key={item.id}>
                  <a href="/">{item.title !== "더보기" && item.title}</a>
                  {item.title === "더보기" && (
                    <MoreContainer>
                      <a href="/">{item.title}</a>
                      <span>
                        <i className="fas fa-chevron-right"></i>
                      </span>
                    </MoreContainer>
                  )}
                </OrderListItem>
              ))}
            </OrderList>
            <OrderList>
              {media.map((item) => (
                <OrderListItem key={item.id}>
                  <a href="/">{item.title !== "더보기" && item.title}</a>
                  {item.title === "더보기" && (
                    <MoreContainer>
                      <a href="/">{item.title}</a>
                      <span>
                        <i className="fas fa-chevron-right"></i>
                      </span>
                    </MoreContainer>
                  )}
                </OrderListItem>
              ))}
            </OrderList>
            <OrderList>
              {humanAffair.map((item) => (
                <OrderListItem key={item.id}>
                  <a href="/">{item.title !== "더보기" && item.title}</a>
                  {item.title === "더보기" && (
                    <MoreContainer>
                      <a href="/">{item.title}</a>
                      <span>
                        <i className="fas fa-chevron-right"></i>
                      </span>
                    </MoreContainer>
                  )}
                </OrderListItem>
              ))}
            </OrderList>
            <OrderList>
              {game.map((item) => (
                <OrderListItem key={item.id}>
                  <a href="/">{item.title !== "더보기" && item.title}</a>
                  {item.title === "더보기" && (
                    <MoreContainer>
                      <a href="/">{item.title}</a>
                      <span>
                        <i className="fas fa-chevron-right"></i>
                      </span>
                    </MoreContainer>
                  )}
                </OrderListItem>
              ))}
            </OrderList>
            <OrderList>
              {finance.map((item) => (
                <OrderListItem key={item.id}>
                  <a href="/">{item.title !== "더보기" && item.title}</a>
                  {item.title === "더보기" && (
                    <MoreContainer>
                      <a href="/">{item.title}</a>
                      <span>
                        <i className="fas fa-chevron-right"></i>
                      </span>
                    </MoreContainer>
                  )}
                </OrderListItem>
              ))}
            </OrderList>
            <OrderList>
              {categories.map((item) => (
                <OrderListItem key={item.id}>
                  <MoreContainer>
                    <a href="/">{item.title}</a>
                    <span>
                      <i className="fas fa-chevron-right"></i>
                    </span>
                  </MoreContainer>
                </OrderListItem>
              ))}
            </OrderList>
          </DropdownDetail>
        </Section>
      </HeaderContainer>
      <Dimmed ref={dimmed} className="dimmed" />
    </>
  );
};

export default Header;
