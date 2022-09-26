import React, { Component } from "react";
import AdminDataService from "../services/admin.service";
import { Switch, Route, Link } from "react-router-dom";
import AdminHome from "./adminhome";

//state and props are two ways which handles data in react

export default class AddAdmin extends Component {
  //props can be used in both class and function component
  //props is used to pass data to a component from outside
  constructor(props) {
    super(props); 
  this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
   this.onChangeContact = this.onChangeContact.bind(this);
    this.saveAdmin = this.saveAdmin.bind(this);
    this.newAdmin = this.newAdmin.bind(this);

    //state can only be used in Class component
    // state object is initialized in the constructor
    //state object can store multiple properties
    this.state = {
      id: null,
      name: "",
      email: "", 
      password: "",

      contact: ""
    };
  }

  onChangeName(e) {
    this.setState({       //this.setState() is used to change value of the state object
      name: e.target.value
    });
  }
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
  

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    });
  }

  saveAdmin() {
    var data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      contact: this.state.contact
    };

   AdminDataService.create(data)
      .then(response => {
        this.setState({           //setState function perform a shallow merge between new and previous state
          id: response.data.id,
          name: response.data.name,
          email: response.data.eamil,
          password: response.data.password,
          contact: response.data.contact,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newAdmin() {
    this.state = {
      id: null,
      name: "",
      email: "", 
      password: "",
      contact: ""
    };
  }
  

  render() {
    return (
      
      <div>
        <AdminHome/>
        <form>
      <div className="submit-form">
        {this.state.submitted ? (
          <div>

          
            <h4>You submitted successfully!</h4>
            
             
              <Link to={"/admin_tbl"} className="navbar-brand">
              

              <button className="btn btn-success">Show Admin List</button>
          </Link>
            
          </div>
        ) : (
          
          <div>
             
            <h4><b>Admin Registration</b></h4>
            <div className="form-group">
              <label htmlFor="title">name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={this.state.name}
                onChange={this.onChangeName}
                name="name" placeholder="Enter Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email" placeholder="Enter Email ID"
              />
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
                name="password" placeholder="Enter Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Contact</label>
              <input
                type="tel"
                className="form-control"
                id="contact"
                required
                value={this.state.contact}
                onChange={this.onChangeContact}
                name="contact" placeholder="Enter Contact No"
              />
            </div>

            <button onClick={this.saveAdmin} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
        
      </div>
      </form>
      </div>
    );
  }
}
