import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TestService from '../../services/TestService';
export default class WelcomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mesg: '',
    };
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData() {
    console.log('in fetch data');
    TestService.getMessageFromAPI(this.props.match.params.name)
      .then((response) => {
        console.log(response);
        this.setState({ mesg: response.data.message });
        console.log(this.state.mesg);
        alert(this.state.mesg);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.message);
          this.setState({ mesg: error.response.data.message });
        }
      });
  }
  render() {
    return (
      <>
        Welcome !
        <div className='container'>
          Login Successful , Hello {this.props.match.params.name}
        </div>
        <h4>
          Admin Home <Link to='/adminhome'>Here</Link>
        </h4>
        <div>
          <button className='btn btn-success' onClick={this.fetchData}>
            Click Me
          </button>
        </div>
        <div>{this.state.mesg}</div>
      </>
    );
  }
}
