import React, { Component } from 'react';
import AuthenticationService from '../../services/AuthenticationService';
import ShopHome from '../shophome';
import { Switch, Route, Link } from "react-router-dom";
export default class LoginComponent extends Component {
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
    if(this.state.userName.length>=5 ){
      if(this.state.pwd.length>=6)  {

        

    if(this.state.role=="Farmer"){

    
        this.setState({ login: true });
        AuthenticationService.authenticateUser(this.state.userName, this.state.pwd)
          .then((response) => {
            console.log('auth success', response);
            AuthenticationService.storeUserDetails(
              this.state.userName,
              response.data.jwt
            );
            this.props.history.push(`/dailyprice`);
            
          })
          .catch((error) => {
            console.log('auth failed ', error.message);
          });


    }else if (this.state.role=="Shopowner"){

         this.setState({ login: true });
        AuthenticationService.authenticateUser(this.state.userName, this.state.pwd)
          .then((response) => {
            console.log('auth success', response);
            AuthenticationService.storeUserDetails(
              this.state.userName,
              response.data.jwt
            );
            this.props.history.push(`/products`);
          })
          .catch((error) => {
            console.log('auth failed ', error.message);
          });

    }else if(this.state.role=="Driver"){
        this.setState({ login: true });
        AuthenticationService.authenticateUser(this.state.userName, this.state.pwd)
          .then((response) => {
            console.log('auth success', response);
            AuthenticationService.storeUserDetails(
              this.state.userName,
              response.data.jwt
            );
            //this.props.history.push(`/driverhome/${this.state.userName}`);
            this.props.history.push(`/driverhome`);
          })
          .catch((error) => {
            console.log('auth failed ', error.message);
          });
        
        
    }
    else{
        alert("Enter Valid Role");
        console.log("Incorrect Role");
        console.log(this.state.role)
    }
  }else
  {
    alert("Enter Valid Password ");
  }
}else
{
  alert("Enter Valid Username ");
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
                <strong><label className='loginlabel'>User Name: </label></strong>{' '}
              </td>
              <td>
              <input
            type='text'
            name='userName'
            value={this.state.userName}
            onChange={this.updateValues}
            placeholder="Enter Username"
            className='logininput'
          ></input>

              </td>
              <td>
            <span style={{color:"red"}}><b>*</b></span>
          </td>
            </tr>
          
        <tr>
          <td>
          <strong><label className='loginlabel'>Password: </label></strong>{' '}
          </td>
          <td>
          <input
            type='password'
            name='pwd'
            value={this.state.pwd}
            onChange={this.updateValues}
            placeholder="Enter Password"
            className='logininput'
          ></input>

          </td><td>
            <span style={{color:"red"}}><b>*</b></span>
          </td>
        </tr>
         <tr>
          <td>
          <strong><label className='loginlabel'>Role:</label></strong>{' '}
          </td>
          <td>
          <input
            type='text'
            name='role'
            value={this.state.role}
            onChange={this.updateValues}
            placeholder="Farmer / Shopowner / Driver"
            className='logininput'
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

