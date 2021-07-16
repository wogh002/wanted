import React, { useRef } from "react";
import Nav from "./nav";
import WantedTitle from "./wantedTitle";
import styled from "styled-components";

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
  transition: all 110ms ease-in-out;
  @media ${({ theme: { tablet } }) => tablet} {
    &.hide {
      opacity: 0;
      height: 0;
    }
    //에니메이션
    &.show {
      display: block;
      opacity: 1;
      height: 300px;
      padding-top: 50px;
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
    margin-right: 20px;
  }
`;
const OrderListItem = styled.li`
  @media ${({ theme: { tablet } }) => tablet} {
    margin-bottom: 13px;
  }
`;
const Header = () => {
  const dropdownSection = useRef();
  const mouseLeave = () => {
    const {
      current: { classList },
    } = dropdownSection;
    classList.add("hide");
    classList.remove("show");
  };
  return (
    <>
      <HeaderContainer className="header" onMouseLeave={mouseLeave}>
        <HeaderInfo>
          <WantedTitle />
          <Nav />
        </HeaderInfo>
        <Section className="dropdown" ref={dropdownSection}>
          <DropdownDetail>
            <OrderList>
              <OrderListItem>기업영업</OrderListItem>
              <OrderListItem>외부영업</OrderListItem>
              <OrderListItem>영업관리자</OrderListItem>
              <OrderListItem>기술영업</OrderListItem>
              <OrderListItem>주요고객사 담당사</OrderListItem>
              <OrderListItem>솔루션 컨설턴트</OrderListItem>
              <OrderListItem>해외영업</OrderListItem>
              <OrderListItem>더보기</OrderListItem>
            </OrderList>
            <OrderList>
              <OrderListItem>콘텐츠 크리에이터</OrderListItem>
              <OrderListItem>PD</OrderListItem>
              <OrderListItem>영상 편집가</OrderListItem>
              <OrderListItem>에디터</OrderListItem>
              <OrderListItem>비디오 제작</OrderListItem>
              <OrderListItem>작가</OrderListItem>
              <OrderListItem>출판 기획자</OrderListItem>
              <OrderListItem>더보기</OrderListItem>
            </OrderList>
            <OrderList>
              <OrderListItem>인사담당</OrderListItem>
              <OrderListItem>리크루터</OrderListItem>
              <OrderListItem>조직 문화</OrderListItem>
              <OrderListItem>평가 보상</OrderListItem>
              <OrderListItem>헤드헌터</OrderListItem>
              <OrderListItem>HRD</OrderListItem>
              <OrderListItem>HRBP</OrderListItem>
              <OrderListItem>더보기</OrderListItem>
            </OrderList>
            <OrderList>
              <OrderListItem>게임 기획자</OrderListItem>
              <OrderListItem>게임 그래픽 디자이너</OrderListItem>
              <OrderListItem>모바일 게임 개발자</OrderListItem>
              <OrderListItem>게임 클라이언트 개발자</OrderListItem>
              <OrderListItem>게임 아티스트</OrderListItem>
              <OrderListItem>유니티 개발자</OrderListItem>
              <OrderListItem>게임 서버 개발자</OrderListItem>
              <OrderListItem>더보기</OrderListItem>
            </OrderList>
            <OrderList>
              <OrderListItem>회계 담당</OrderListItem>
              <OrderListItem>재무 담당자</OrderListItem>
              <OrderListItem>IR</OrderListItem>
              <OrderListItem>투자 증권</OrderListItem>
              <OrderListItem>재무 분석가 </OrderListItem>
              <OrderListItem>애널리스트</OrderListItem>
              <OrderListItem>내부통제 담당자</OrderListItem>
              <OrderListItem>더보기</OrderListItem>
            </OrderList>
            <OrderList>
              <OrderListItem>엔지니어링·설계</OrderListItem>
              <OrderListItem>물류·무역</OrderListItem>
              <OrderListItem>제조·생산</OrderListItem>
              <OrderListItem>의료·제약·바이오</OrderListItem>
              <OrderListItem>교육 </OrderListItem>
              <OrderListItem>법률·법집행기관</OrderListItem>
              <OrderListItem>식·음료</OrderListItem>
              <OrderListItem>건설·시설</OrderListItem>
              <OrderListItem>공공·복지</OrderListItem>
            </OrderList>
          </DropdownDetail>
        </Section>
      </HeaderContainer>
    </>
  );
};

export default Header;
