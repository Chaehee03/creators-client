import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "/public/images/header/Rectangle 1506.jpg";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderContainer>
      <Image src={Logo} alt="" />
      <div>
        <Title>creators</Title>
      </div>
      <Nav>
        <TabList>
          <TabItem>
            <Link href="/ideaNote/coworker/main">
              <TabLink>아이디어 노트</TabLink>
            </Link>
          </TabItem>
          <TabItem>
            <Link href="/creationShare/main">
              <TabLink>창작물 공유</TabLink>
            </Link>
          </TabItem>
          <TabItem>
            <Link href="/immersionMentor/advice/main">
              <TabLink>몰입 멘토</TabLink>
            </Link>
          </TabItem>
        </TabList>
      </Nav>
      <Nav>
        <TabList>
          <TabItem>
            <Link href="/login">
              <TabLink>로그인</TabLink>
            </Link>
          </TabItem>
          <TabItem>
            <Link href="/auth">
              <TabLink>회원가입</TabLink>
            </Link>
          </TabItem>
        </TabList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  height: 64.61px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
`;

const Title = styled.h1``;

const Nav = styled.nav``;

const TabList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const TabItem = styled.li``;

const TabLink = styled.a`
  text-decoration: none;
  color: #000000;
`;
