import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";


export default class Shoplogin extends Component {
  constructor(props) {
    super(props);

    this.onChangeContact = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);


    this.state = {
      id: null,
      Username: "",
      password: ""
    };
  }


  onChangeUsername(e) {
    this.setState({
      contact: e.target.value
    });
  }


  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }




  render() {
    return (
      <div>

        <div className="submit-form">
          {this.state.submitted ? (
            <div>


            </div>
          ) : (
            <div>
              <h4><b>Shop Login</b></h4>


              <div className="form-group">
                <label htmlFor="description">Username</label>
                <input
                  type="tel"
                  className="form-control"
                  id="contact"
                  required
                  value={this.state.contact}
                  onChange={this.onChangeContact}
                  name="contact"
                  placeholder="Enter Username"
                />
              </div>


              <div className="form-group">
                <label htmlFor="description">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  required
                  value={this.state.district}
                  onChange={this.onChangeDistrict}
                  name="password"
                  placeholder="Enter Password"
                />
              </div>

              <button onClick={this.saveFarmer} className="btn btn-success">
                Submit
              </button>{"\u00a0\u00a0"}
              <Link to={"shophome"}>
                <button className="btn btn-success">Back</button>
              </Link>
            </div>
          )}
        </div>

      </div>
    );
  }
}
