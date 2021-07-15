import React from "react";
import styled from "styled-components";
import IconItems from "./iconItems";
import LoginInfo from "./loginForm/loginInfo";
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Lists = styled.ul`
  display: flex;
  align-items: center;
  white-space: nowrap;
  @media ${({ theme: { tablet } }) => tablet} {
    white-space: pre-wrap;
    width: 100%;
  }
`;
const ListItem = styled.li`
  margin-right: 23px;
  flex-shrink: 0;
  letter-spacing: -0.05em;
  a {
    padding: 0 0 21px 0;
  }
  :hover {
    a {
      border-bottom: 3.5px solid rgb(209, 204, 204);
    }
  }
  &.desktop {
    display: none;
  }
  @media ${({ theme: { tablet } }) => tablet} {
    & {
      position: relative;
      margin-right: 5px;
      flex-shrink: 0;
      flex-grow: 1;
    }
    a {
      padding: 0 0 18px 0;
    }
    &.desktop {
      display: block;
    }
    &.mobileHome {
      display: none;
    }
    .beta {
      position: absolute;
      cursor: pointer;
      margin-left: 2px;
      transform: translateY(-30%);
      color: #0066ff;
      font-size: 5px;
    }
  }
  @media ${({ theme: { desktopL } }) => desktopL} {
    a {
      padding: 0 0 15px 0;
    }
  }
`;
const headerTitle = [
  { id: 1, title: "홈", type: "mobileHome" },
  { id: 2, title: "탐색", type: "mobileSearch" },
  { id: 3, title: "커리어 성장", type: "mobileGrowUp" },
  { id: 4, title: "직군별 연봉", type: "desktop" },
  { id: 5, title: "이력서", type: "desktop" },
  { id: 6, title: "매치업", type: "desktop" },
  { id: 7, title: "프리랜서", type: "desktop" },
  { id: 8, title: "Ai 합격예측", type: "desktop" },
];

const Nav = () => (
  <Navigation>
    <Lists>
      {headerTitle.map((item) => {
        return (
          <ListItem key={item.id} className={item.type}>
            <a href="/">{item.title}</a>
            {item.id === 8 && <span className="beta">Beta</span>}
          </ListItem>
        );
      })}
    </Lists>
    <LoginInfo />
    <IconItems />
  </Navigation>
);

export default Nav;
