import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { CgMenu } from "react-icons/cg";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 스타일드 컴포넌트를 생성
const HeaderContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid #80808070;

  font-family: "Galmuri9";
  @media (max-width: 768px) {
    padding: 10px;
    height: 55px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 80px;
  @media (max-width: 768px) {
    margin: 0 10vw;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  color: #ea5e76;
`;

const MenuButton = styled.div`
  font-size: 24px;
  display: none;
  text-align: center;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    padding-bottom: 5px;
  }
`;

const TapMenu = styled.div`
  cursor: pointer;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  /* width: 30px; */
  height: 30px;
  margin: 0 30px;
  line-height: 30px;
`;

const Login = styled.div`
  width: 50%;
  padding: 1rem;
  box-sizing: border-box;
  border: 1px solid white;
  background-color: #ff4d5e;
  color: #fff;
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
`;

const OffMenu = styled.div`
  display: block;
  margin: 0 1rem;
  padding: 1.2rem 0rem;
  font-size: 1.5rem;
  color: #000;
`;

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <HeaderContainer>
        <Container>
          <Logo>
            <Link
              style={{ color: "#ea5e76", textDecorationLine: "none" }}
              to="/"
            >
              나혼자안산다
            </Link>
          </Logo>

          <TapMenu>
            <MenuItem>
              <Link
                style={{ color: "black", textDecorationLine: "none" }}
                to="/search"
              >
                방 찾기
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                style={{ color: "black", textDecorationLine: "none" }}
                to="/about"
              >
                서비스 소개
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                style={{ color: "black", textDecorationLine: "none" }}
                to="/enroll"
              >
                방 내놓기
              </Link>
            </MenuItem>
          </TapMenu>
          <MenuButton onClick={handleShow}>
            <CgMenu />
          </MenuButton>
        </Container>
      </HeaderContainer>

      {/* 오프캔버스  */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ fontFamily: "Galmuri9", padding: "20px", width: "25rem" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>나혼자안산다</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link
            style={{ color: "black", textDecorationLine: "none" }}
            to="/login"
          >
            <div style={{ display: "flex" }}>
              <Login>로그인</Login>
              <Login>회원가입</Login>
            </div>
          </Link>
          <OffMenu>
            <Link
              style={{ color: "black", textDecorationLine: "none" }}
              to="/search"
            >
              방 찾기
            </Link>
          </OffMenu>
          <OffMenu>
            <Link
              style={{ color: "black", textDecorationLine: "none" }}
              to="/about"
            >
              서비스 소개
            </Link>
          </OffMenu>
          <OffMenu>
            <Link
              style={{ color: "black", textDecorationLine: "none" }}
              to="/enroll"
            >
              방 내놓기
            </Link>
          </OffMenu>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
