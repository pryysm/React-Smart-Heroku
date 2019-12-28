
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import UserComp from './UserComponent';
import { MDBRow , MDBInput, MDBFormInline } from 'mdbreact';
import axios from 'axios';
import { SegmentedControl } from 'segmented-control-react';

    let segments = [
      { name: "month" },
      { name: "ever" }
    ];
class PeoplesComp extends Component {
  state = {
    radio: "",
    persons: [],
    datas: [],
    segments: segments,
    selected: 0,
    flag: 0,
    gender: "",
    filterName: "",
    searchName:""
  };
  onClick = nr => () => {
    this.setState({
      radio: nr
    });
    if (nr === 1) this.state.gender = "all";
    else if (nr === 2) this.state.gender = "male";
    else if (nr === 3) this.state.gender = "female";
    this.onFilter();
  };
  onFilterByName = e => {
    this.setState({
      searchName: e.target.value
    })
    this.state.filterName = e.target.value;
    this.onFilter();
  } 
  componentDidMount() {
    // axios.get('./peoples.json').then(response => {
      axios.get("https://smartinfo.herokuapp.com").then(response => {
        this.setState({
          persons: response.data,
          datas: response.data
        });
      });
    }
    onFilter() {
    this.state.datas = [];
      this.state.persons.map(data => {
      if (this.state.gender !== "all") {
        if (this.state.gender === data.gender && data.name.toLowerCase().includes(this.state.filterName)) {
          this.state.datas.push(data);
        }
      } else {
        if (data.name.toLowerCase().includes(this.state.filterName))
          this.state.datas.push(data);
      }
    });
    console.log(this.state.datas);
  }
  render() {
    var user_lists = [];
    var i = 0;
    // console.log(this.state.radio)
    // console.log(this.state.gender);
    this.state.datas.map(Item =>
      user_lists.push(
        <UserComp
          key={i}
          id={(i = i + 1)}
          imgurl={Item.imgurl}
          name={Item.name}
          age={Item.age}
          score={Item.score}
          level={Item.level}
          goals={Item.goals}
          achived={Item.achived}
        />
      )
    );

    return (
      <Container className="users_container d-flex">
        <MDBRow className="users">
          <div className="users_list">
            <MDBRow className="list-header">
              <div className="_103qnYO-BQ">
                <p className="title">Bests For</p>

                <SegmentedControl
                  segments={this.state.segments}
                  selected={this.state.selected}
                  variant="select"
                />
              </div>
              <div className="ml-auto invite">
                <a href="/invite">Invite Friends</a>
                <p>PRO-account for 5 invites</p>
              </div>
            </MDBRow>
            {user_lists}
          </div>
          <div className="users_filter ml-auto">
            <div className="filters">
              <div>
                <div className="form__row">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form__inp"
                    onChange={this.onFilterByName}
                    value ={this.state.searchName}
                  />
                </div>
                <MDBRow className="filter__labels">
                  <MDBFormInline className="form__rows form__rows--half">
                    <label className="filter-label">Gender</label>
                    <MDBInput
                      gap
                      onClick={this.onClick(1)}
                      checked={this.state.radio === 1 ? true : false}
                      label="No matter"
                      type="radio"
                      id="radio1"
                      containerClass="mr-2"
                    />
                    <MDBInput
                      gap
                      onClick={this.onClick(2)}
                      checked={this.state.radio === 2 ? true : false}
                      label="Male"
                      type="radio"
                      id="radio2"
                      containerClass="mr-2"
                    />
                    <MDBInput
                      gap
                      onClick={this.onClick(3)}
                      checked={this.state.radio === 3 ? true : false}
                      label="Female"
                      type="radio"
                      id="radio3"
                      containerClass="mr-2"
                    />
                  </MDBFormInline>
                  <div className="form__rows form__rows--half">
                    <label className="filter-label">Age</label>
                    <div className="form__inp-w">
                      <input
                        type="text"
                        draggable="false"
                        className="form__inp  "
                        placeholder="From"
                      />
                    </div>
                    <div className="form__inp-w">
                      <input
                        type="text"
                        draggable="false"
                        className="form__inp  "
                        placeholder="To"
                      />
                    </div>
                  </div>
                </MDBRow>
                <div className="form__row">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    list="countryname"
                    className="filter_country"
                  />
                  <datalist id="countryname">
                    <option value="--No Selected--" />
                    <option value="Russia" />
                    <option value="Ukraine" />
                    <option value="Belarus" />
                    <option value="USA" />
                    <option value="Canada" />
                  </datalist>
                </div>
              </div>
            </div>
            <div className="sub-total">
              <div>
                <div className="Items-total">
                  <p className="totall">235 258</p>
                  <p className="itemm">users</p>
                </div>
                <div className="Items-total">
                  <p className="totall">220 699</p>
                  <p className="itemm">goals</p>
                </div>
                <div className="Items-total">
                  <p className="totall">63 958</p>
                  <p className="itemm">achives</p>
                </div>
              </div>
            </div>
          </div>
        </MDBRow>
      </Container>
    );
  }
}
export default PeoplesComp;