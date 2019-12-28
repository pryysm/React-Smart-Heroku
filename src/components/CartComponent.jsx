
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';

class CartComp extends Component{
    render() {
        return (
          <div className="card">
            <div className="card_body">
              <img
                src={require("../assets/img/17.jpg")}
                width="100%"
                height="100%"
                alt=""
              />
              <br />
              <div>
                <p>Become Front-End Web Developer Senior Specialist</p>
              </div>
              <div>
                <a>Global:Life</a>
              </div>
              <div>
                <a>Global:Life</a>
              </div>
            </div>
            <div className="card_footer d-flex">
                <Button className="btn btn_them_gray btn_tiny">
                  <span className="btn__cntr">
                    <MDBIcon far icon="star" /> &nbsp;
                    <span className="count">22</span>
                  </span>
                  <span className="span">Subscribe</span>
                </Button>
                <div className="ml-auto">
                    <Button className="btn btn-heart ml-auto">
                        <span >
                            <MDBIcon icon="heart" size="2x" className="indigo-text pr-3" />
                            &nbsp;
                            <span className="count">22</span>
                        </span>
                    </Button>
                </div>
            </div>
          </div>
          // </Container>
        );
    }
}

export default CartComp