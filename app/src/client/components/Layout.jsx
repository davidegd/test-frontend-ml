import React from "react";
import { Header } from "./Header";
// import Footer from "./Footer";
import { Container } from "react-bootstrap";
import "../assets/styles/components/Layout.scss";

const Layout = ({ children }) => (
  <Container fluid className="layout__container">
    <Header />
    {children}
  </Container>
);

export default Layout;
