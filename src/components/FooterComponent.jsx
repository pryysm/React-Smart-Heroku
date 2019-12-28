
import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../App.css';
class FooterComp extends Component{
    render() {
        return (
                <div className="footer_pos">
                    <Container>
                        <Row className="footer_bl">
                            <div className="footer_column">
                                <hr />
                                <p>@2012 - 2019 SmartProgress Inc</p>
                                <p>Service to achieve goals</p>
                            </div>
                        <div className="footer_column">
                            <hr />
                                <p>@2012 - 2019 SmartProgress Inc</p>
                                <p>Service to achieve goals</p>
                            </div>
                            <div className="footer_column">
                                <a href="goals"> GOALS </a> <br />
                                <a href="coaching">COACHING</a><br />
                                <a href="people">PEOPLE</a><br />
                            </div>
                            <div className="footer_column">
                                <br />
                                <a href="/user/pro">PRO</a><br />
                                <a href="/site/faq">FAQ</a><br />
                                <a href="/site/agreement">THE AGREEMENT</a><br />
                            </div>
                            <div className="footer_column">
                                <br />
                                <a href="/contact">CONTACT</a><br />
                                <a href="/affiliate">AFFILIATE PROGRAM</a><br />
                                <a href="/about">ABOUT US</a><br />
                            </div>
                        </Row>
                    </Container>  
                </div>
        );
    }
}

export default FooterComp;