import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Driverlogin extends Component {
  constructor(props) {
    super(props);
 
    this.onChangeContact = this.onChangeUsername.bind(this);
   this.onChangePassword=this.onChangePassword.bind(this);
   

    this.state = {
      id: null,      
      Username: "",
      password:""
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
            <h4>You submitted successfully!</h4>
            
          </div>
        ) : (
          <div>
             <h4><b>Driver Login</b></h4>
           

            <div className="form-group">
              <label htmlFor="description">Username</label>
              <input
                type="tel"
                className="form-control"
                id="username"
                required
                value={this.state.contact}
                onChange={this.onChangeUsername}
                name="username"
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
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
                placeholder="Enter Password"
              />
            </div>

            <button onClick={this.saveFarmer} className="btn btn-success">
              Submit
            </button>{"\u00a0\u00a0"}
            <Link to={"commonreg"}>
            <button className="btn btn-success">Back</button>
            </Link>
            
            
          </div>
        )}
      </div>
    
      </div>
    );
  }
}
