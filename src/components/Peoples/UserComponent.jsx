
import React, { Component } from 'react';
import { MDBRow} from 'mdbreact';
import '../../assets/css/Users.css';
import { Circle } from "rc-progress";

class UserComp extends Component{
  
  render() {
    let exp;
    if (this.props.age*1 > 0) {
      exp = this.props.age + "years";
    }
        return (
          <MDBRow className="user_item d-flex">
            <p className="row-id">{this.props.id}.</p>
            <div>
              <img
                src={this.props.imgurl}
                className="img-fluid z-depth-1 rounded-circle"
                alt=""
              />
            </div>
            <div className="user-prop">
              <h3>
                <a href="/user/user">
                  <span>{this.props.name}</span>
                  <i className="s s--pro_small "></i>
                </a>
              </h3>
              <p>{exp}</p>
              <a className="change_friendstatus">Add to friends</a>
            </div>
            <div className="ml-auto personal-rate">
              <div>
                <p>{this.props.score}</p>
                <p className="personal-level">Level {this.props.level}</p>
              </div>

              <div >
                <Circle
                  percent={(this.props.achived*1 / this.props.goals*1) * 100}
                  strokeWidth="20"
                  trailWidth="20"
                  strokeColor="#2ab8d5"
                />
                <p className="percent-rate">{this.props.goals}/{this.props.achived}</p>
              </div>
            </div>
          </MDBRow>
        );
    }
}
export default UserComp;