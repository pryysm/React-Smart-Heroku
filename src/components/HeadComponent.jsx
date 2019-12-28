
import React, { Component } from 'react';

// import { Container, Row, Col } from 'bootstrap';
import { Nav,  Row, Image, Container } from 'react-bootstrap';
import '../App.css';
// import logo from '../assets/img/logo.PNG';

class HeaderNavbars extends Component {
    render() {
      return (
          
          <Container className="header-menu">
            <Row className="d-flex">
              <Nav>
                <Nav.Link href="/" >Main</Nav.Link>
                <Nav.Link href="/goals" className="st-active">GOALS</Nav.Link>
                <Nav.Link href="#coaching">CHOACHING</Nav.Link>
                <Nav.Link href="/user">PEOPLE</Nav.Link>
              </Nav>
              <a href="/" className="header_logo">
                <Image src={require("../assets/img/logo.jpg")} />
              </a>
              <div className="top-right row">
                  <select className="browser-default custom-select">
                    <option value="1">EN</option>
                    <option value="2">RU</option>
                    <option value="3">ES</option>
                    <option value="4">UK</option>
                  </select>
            </div>
            <div className="ml-auto">
              <p className="top-menu ">
                <a href="/user/signup/" className="registration" data-form="registration">Sign Up</a>
                <a href="/user/login/" className="login" data-form="login" id="login_link">Login</a>
              </p>
            </div>
            </Row>
          </Container>
        );
    };
}

export default HeaderNavbars;