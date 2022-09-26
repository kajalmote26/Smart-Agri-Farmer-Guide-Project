import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";


export default class Farmerlogin extends Component {
  constructor(props) {
    super(props);
 
    //this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
   this.onChangePassword=this.onChangePassword.bind(this);
   

    this.state = {
      id: null,      
      //contact: "",
      email:"",
      password:""
    };
  }

 
  // onChangeContact(e) {
  //   this.setState({
  //     contact: e.target.value
  //   });
  // }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
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
        <form>
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            
            <h4>You submitted successfully!</h4>
            
          </div>
        ) : (
          <div>
             <h4><b>Farmer Login</b></h4>
           

           

          <div className="form-group">
              <label htmlFor="description">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
                placeholder="Enter Email"
              />
            </div>

           
            <div className="form-group">
              <label htmlFor="description">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
                placeholder="Enter Password"
              />
            </div>

            <button onClick={this.saveFarmer} className="btn btn-success">
              Submit
            </button>
            {"\u00a0\u00a0"}
            <Link to={"commonreg"}>
            <button className="btn btn-success">Back</button>
            </Link>
          </div>
        )}
      </div>
      </form>
      </div>
    );
  }
}
