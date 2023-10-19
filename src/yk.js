import React from "react";
// import logo from "./img/logo.png";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

// import { Navbar as BootstrapNavbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyNavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{
          backgroundColor: "lightblue",
          paddingBottom: 0,
          paddingTop: 0,
          width: "100%",
        }}
      >
        <Container style={{ backgroundColor: "lightblue" }}>
          <img
            src="/img/home"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
