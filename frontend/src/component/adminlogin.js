
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { Link, Redirect } from "react-router-dom";

// import "./Style.css";

// function AdminLogin() {
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "Admin1",
//       password: "admin@123"
//     },
//     {
//       username: "Admin2",
//       password: "admin@123"
//     }
//   ];
//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
     
//       if (userData.password !== pass.value ) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//         alert("Enter correct Password");
//       } else {
//         setIsSubmitted(true);
//         this.props.history.push(`/adminhome`);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };


// // JSX code for login form
// const renderForm = (
//   <div className="form">
//     <form onSubmit={handleSubmit}>
//       <div className="input-container">
//         <label>Username </label>
//         <input type="text" name="uname" required />
       
//       </div>
//       <div className="input-container">
//         <label>Password </label>
//         <input type="password" name="pass" required />
//         {/* {renderErrorMessage("pass")} */}
//       </div>
//       <div className="button-container">
      
//         <input type="submit" />
       
//       </div>
//     </form>
//   </div>
// );
// return (
//   <div className="app">
//     <div className="login-form">
//       <div className="title">Sign In</div>
//       {isSubmitted ? <div> <Redirect to="/adminhome" />User is Successfully Logged in</div> : renderForm}
      

//     </div>
//   </div>
// );
// }

// export default AdminLogin;



import React, { Component } from 'react';
import AuthenticationService from '../services/AuthenticationService';

export default class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      pwd: '',
      role:'',
      authenticated: false,
      login: false,
    };
    //bind methods
    this.updateValues = this.updateValues.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  updateValues(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  //event handlers for login
  
  handleLogin(event) {
    if(this.state.email=="agreeadmin@smartagree.com"){
        this.setState({ login: true });
        if(this.state.userName!="" && this.state.pwd!="")
        {
        AuthenticationService.authenticateUser(this.state.userName, this.state.pwd)
          .then((response) => {
            console.log('auth success', response);
            AuthenticationService.storeUserDetails(
              this.state.userName,
              response.data.jwt
            );
            this.props.history.push(`/dailyprice1`);
          })
          .catch((error) => {
            console.log('auth failed ', error.message);
          });
        }
        else
        {
          alert("Please enter UserName Password");
        }


    }else{
        alert("incorrect Username or Password or Email");
        console.log("Incorrect Email");
       
    }
   
  }

  render() {
    return (
      <div className='login'>
       
       
        <div className='container'>
        <h1 className='a'>Login</h1> 
        <div className='textlogin'>
          {this.state.login && this.state.authenticated && (
            <div>Login Successful</div>
          )}
          {this.state.login && !this.state.authenticated && (
            <div className='alert alert-warning'>Invalid Login</div>
          )}
          <strong><h1><b>Login</b></h1></strong>
          <table  cellPadding={"5px"}>
            <tr>
              <td>
                <strong>User Name :</strong>{' '}
              </td>
              <td>
              <input
            type='text'
            name='userName'
            value={this.state.userName}
            onChange={this.updateValues}
            placeholder="Enter Username"
            
          ></input>

              </td>
              <td>
            <span style={{color:"red"}}><b>*</b></span>
          </td>
            </tr>
          
        <tr>
          <td>
          <strong>Password: </strong>{' '}
          </td>
          <td>
          <input
            type='password'
            name='pwd'
            value={this.state.pwd}
            onChange={this.updateValues}
            placeholder="Enter Password"
          ></input>

          </td><td>
            <span style={{color:"red"}}><b>*</b></span>
          </td>
        </tr>
         <tr>
          <td>
          <strong><label>Email:</label></strong>{' '}
          </td>
          <td>
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.updateValues}
            placeholder="Enter Admin Mail_Id"
          ></input>
          </td>
          <td>
            <span style={{color:"red"}}><b>*</b></span>
          </td>
         </tr>
          <tr>
            <td>
            <button className='btn btn-success' onClick={this.handleLogin}>
            Login
          </button>
            </td>
          </tr>    
         

         
          </table>
        </div>
        </div>
      </div>
    );
  }
}
//separate functional component to render login related  message

// function ValidateComponent(props) {
//   if (!props.login) return null;
//   if (props.auth) return <div>Login Successful</div>;
//   return <div>Login Failed</div>;
// }
