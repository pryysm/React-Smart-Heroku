
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CartComp from '../CartComponent';
// import image from '../assets/img/17.jpg';
import '../../assets/css/goals.css';
import { MDBIcon } from "mdbreact";

class GoalsBodyComp extends Component{
   
    render() {
        let cart = [];

        for (let i = 0; i < 10; i++) {
            cart.push(
                <Col md={4} sm={6} xs={12} key={i}>
                    <p>Card {i}</p>
                    <CartComp  />
                </Col>
            )
        }
        return (
            <div>
                 {/* Submenu bar */}
                <div className="smart-menu">
                    <ul className="container smart-menu__list">
                        <li className="smart-menu__item">
                            <a className="smart-menu__link" href="/goal">Recommendations</a>
                        </li>
                        <li className="smart-menu__item">
                            <a className="smart-menu__link" href="/goal?section=all">New</a>
                        </li>
                        <li className="smart-menu__item">
                            <a className="smart-menu__link" href="/goal?section=promise">Word Value</a>
                        </li>
                        <li className="smart-menu__item">
                            <a className="smart-menu__link" href="/goalGroup">Groups</a>
                        </li>
                        <li className="smart-menu__item smart-menu__item--additional">
                            <a className="smart-menu__link" href="/goal?section=completed">Completed</a>
                        </li>
                    </ul>
                </div>
                <Container className="goals_body">
                    <div className="search-bar">
                        <form className="form-inline mt-4 mb-4 d-flex">
                            <MDBIcon icon="search" size="2x" />
                            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                            <div className="select-filter ml-auto">
                                <select className="mdb-select md-form" searchable="Search here..">
                                    <option>General</option>
                                    <option value="1">Business & Finance</option>
                                    <option value="2">Career & Work</option>
                                    <option value="3">Construction & Repair</option>
                                    <option value="4">Creativity & Hobbies</option>
                                </select>
                                <select className="mdb-select md-form" searchable="Search here..">
                                    <option>General</option>
                                    <option value="1">Business & Finance</option>
                                    <option value="2">Career & Work</option>
                                    <option value="3">Construction & Repair</option>
                                    <option value="4">Creativity & Hobbies</option>
                                </select>
                                <select className="mdb-select md-form" searchable="Search here..">
                                    <option>General</option>
                                    <option value="1">Business & Finance</option>
                                    <option value="2">Career & Work</option>
                                    <option value="3">Construction & Repair</option>
                                    <option value="4">Creativity & Hobbies</option>
                                </select>
                            </div>
                            <div className="setting-icon">
                                <MDBIcon className="ml-auto" icon="cog" size="2x" fixed />
                            </div>
                        </form>
                    </div>
                    < Row >
                        <div>{cart}</div>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default GoalsBodyComp;