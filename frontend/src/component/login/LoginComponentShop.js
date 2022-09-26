import React, { Component } from 'react';
import AuthenticationService from '../../services/AuthenticationService';
import ShopHome from '../shophome';
export default class LoginComponentShop extends Component {
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
    if(this.state.role=="Farmer"){
        this.setState({ login: true });
        AuthenticationService.authenticateUser(this.state.userName, this.state.pwd)
          .then((response) => {
            console.log('auth success', response);
            AuthenticationService.storeUserDetails(
              this.state.userName,
              response.data.jwt
            );
            this.props.history.push(`/welcome/${this.state.userName}`);
          })
          .catch((error) => {
            console.log('auth failed ', error.message);
          });


    }else if (this.state.role=="Shop"){

         this.setState({ login: true });
        AuthenticationService.authenticateUser(this.state.userName, this.state.pwd)
          .then((response) => {
            console.log('auth success', response);
            AuthenticationService.storeUserDetails(
              this.state.userName,
              response.data.jwt
            );
            this.props.history.push(`/shophome/${this.state.userName}`);
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
            this.props.history.push(`/driverreg`);
          })
          .catch((error) => {
            console.log('auth failed ', error.message);
          });
        
        
    }else{
        alert("incorrect Username or Password or Role");
        console.log("Incorrect Role");
        console.log(this.state.role)
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
          <strong>User Name :</strong>{' '}
          <input
            type='text'
            name='userName'
            value={this.state.userName}
            onChange={this.updateValues}
          ></input><br/><br/>
          <strong>Password </strong>:{' '}
          <input
            type='password'
            name='pwd'
            value={this.state.pwd}
            onChange={this.updateValues}
          ></input><br/><br/>
          <strong><label>Role</label></strong>:{' '}
          {/* <select>
            <option name="role"  value={this.state.role="Farmer"}>Farmer</option>
            <option name="role"  value={this.state.role}>Shop</option>
            <option name="role"  value={this.state.role}>Driver</option>
          </select><br/><br/> */}
          <input
            type='text'
            name='role'
            value={this.state.role}
            onChange={this.updateValues}
          ></input><br/><br/>

          <button className='btn btn-success' onClick={this.handleLogin}>
            Login
          </button>
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
