import React, { Component } from "react";
import UserDataService from "../services/user.service";
import { Switch, Route, Link } from "react-router-dom";

export default class Users extends Component {
  constructor(props) {
    super(props);
  this.onChangeUserName = this.onChangeUserName.bind(this);
      this.onChangeEmail=this.onChangeEmail.bind(this);   
    this.onChangeRoles=this.onChangeRoles.bind(this);    
   this.onChangePassword=this.onChangePassword.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      id: null,
      userName: "",
      email:"",
      roles:[],      
      password:""
    };
  }

  onChangeUserName(e) {
    this.setState({
      userName: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
 
  onChangeRoles(e) {
    this.setState({
      roles: [e.target.value]
    });
  }

  
  
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  saveUser() 
  {
    const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    const strongRegex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
    if(this.state.userName!="")
    {
        if(this.state.userName.length>=6)
        {
            if(this.state.password!="")
            {
              if(this.state.password.length>=6 && strongRegex.test(this.state.password))
              {
                if(this.state.email!="" && regExp.test(this.state.email))
                {
                  if(this.state.roles=="FARMER" || this.state.roles=="SHOPOWNER" || this.state.roles=="DRIVER")
                  {
                var data = 
                {
                  userName: this.state.userName,
                  email:this.state.email,     
                  roles:this.state.roles,      
                  password:this.state.password
                  
                };   
                UserDataService.create(data)
                    .then(response => {
                      this.setState({
                        id: response.data.id,
                        userName: response.data.userName,
                        email:response.data.email,         
                        roles:response.data.roles,
                        password:response.data.password,

                        submitted: true
                      });
                      console.log(response.data);
                      console.log(this.state.userName);
                    })
                    .catch(e => {
                      console.log(e);
                      console.log(this.state.roles);
                    });
                  }
                  else
                  {
                    alert("Roles should be \n FARMER or SHOP or DRIVER");
                  }
                }
                else
                {
                  alert("Please enter a Valid Email!!!");
                }
              }
              else
              {
                alert("Password should contain minimum 6 characters & it contain Digit, Special symbol and Small and capital Letter")
              }
            }
            else
            {
              alert("Please enter Password");
            }
        }
        else
        {
          alert("Username should contain minimum 6 character")
        }
    }
    else
    {
      alert("Please enter Username")
    }
  }

  newUser() {
    this.state = {
        id: null,
        userName: "",
        email:"",
        roles:[],           
        password:""
    };
  }

  render() {
    return (
      <div className="users">
       
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Registration successfully!</h4>
            <Link to={"login"} className="navbar-brand">
              

              <button className="btn btn-success">Login</button>
          </Link>
          </div>
        ) : (
          <div>
             <h4><b>User Registration</b></h4>
            <div className="form-group">
              <label htmlFor="title">Username</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                required
                value={this.state.userName}
                onChange={this.onChangeUserName}
                name="userName"
                placeholder="Enter Username"
              />
              {/* <small className="text-danger">Username is required.</small> */}
            </div>
            
            <div className="form-group">
              <label htmlFor="title">Email</label>
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
              {/* <small className="text-danger">Email is required.</small> */}
            </div>

            

            <div className="form-group">
              <label htmlFor="description">Roles</label>
              <input
                type="text"
                className="form-control"
                id="roles"
                required
                value={this.state.roles}
                onChange={this.onChangeRoles}
                name="roles"
                placeholder="FARMER / SHOPOWNER / DRIVER"
              />
              {/* <small className="text-danger">Role is required.</small> */}
            </div>

            <div className="form-group">
              <label htmlFor="description">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="password"
                placeholder="Enter Password"
              />
              {/* <small className="text-danger">Password is required.</small> */}
            </div>

            <button onClick={this.saveUser} className="btn btn-success">
              Submit
            </button>
            {"\u00a0\u00a0"}
            <Link to={"/"}>
            <button className="btn btn-success">Back</button>
            </Link>
          </div>
        )}
      </div>
   
      </div>
    );
  }
}
