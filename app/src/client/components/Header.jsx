import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import logoLg from "../assets/images/logo-lg.png";
import "../assets/styles/components/Header.scss";
import { SearchBar } from "../components/SearchBar";

export const Header = () => {
  return (
    <Row className="header">
      <Col
        className="d-flex align-items-center justify-content-start p-0 "
        xs={{ span: 2, offset: 1 }}
        lg={{ span: 1, offset: 1 }}
      >
        <Link to="/">
          <img className="header__logo" src={logoLg} alt="logo" />
        </Link>
      </Col>
      <Col
        className="d-flex align-items-center justify-content-start p-0"
        xs={8}
        lg={9}
      >
        <SearchBar />
      </Col>
    </Row>
  );
};
