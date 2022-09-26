import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TestService from "../services/TestService";


 export default class DriverHome extends Component{ 
  
  constructor(props) {
    super(props);
    this.state = {
      mesg: '',
      mesg1: '',
      userName:'',
      licenseNo:"",
    };
    this.fetchData = this.fetchData.bind(this);
    this.fetchData1 = this.fetchData1.bind(this);
    this.updateValues =this.updateValues.bind(this);
    this.newValues =this.newValues.bind(this);
  }
  updateValues(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  fetchData() {
    console.log('in fetch data');
    if(this.state.userName!="")
    {
    TestService.getMessageFromAPI(this.state.userName)
      .then((response) => {
        console.log(response);
        this.setState({ mesg: response.data.message });
        console.log(this.state.mesg);
        if(this.state.mesg!=null)
        {
        alert("Your User Id is required for Vehicle Registration  "+"\n user_id="+this.state.mesg);
        }
        else
        {
          alert("Username not present... \n Please enter valid Username.");
        }
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
    else
    {
      alert("Please enter Username");
    }
  }


  fetchData1() {
    console.log('in fetch data');
    if(this.state.licenseNo!="")
    {
    TestService.getMessageFromAPI2(this.state.licenseNo)
      .then((response) => {
        console.log(response);
        this.setState({ mesg1: response.data.message });
        console.log(this.state.mesg1);
        if(this.state.mesg1!=null)
        {
          alert("Your Vehicle Id is required if you want to update your details  "+"\n vehicle_id="+this.state.mesg1);
        }
        else
        {
          alert("License Number not present... \n Please enter valid License Number.");
        }
        
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.message);
          this.setState({ mesg1: error.response.data.message });
        }
      });
    }
    else
    {
      alert("Please enter License Number");
    }
  }

  newValues()
  {
    this.state = {
    userName:'',
      licenseNo:""
    };
  }

    render(){
        return(
            <div className="driverhome" >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="logo1">
                        <Link to={"/driverreg"} className="navbar-brand">
                            <h2 >            
                            

                                <span>D</span>river
                                <span>P</span>anel
                               
                            </h2>
                        </Link>
                        {/* <div className="navbar-nav mr-auto">


            <li className="nav-item">
              <button><Link to={"/products"} className="nav-link">
                Home
              </Link></button>
            </li>
            </div> */}
                    </div>

                    <div className="navbar-nav mr-auto">
                    {/* <li className="nav-item">
              <button><Link to={"/products"} className="nav-link">
                Product List
              </Link></button>
            </li> */}
            {/* <li className="nav-item">
              <button><Link to={"/addproduct"} className="nav-link">
                Add Product
              </Link></button>
            </li> */}

                    </div>
                    

                </nav>
                <table cellPadding={10} cellSpacing={50}>
                  <tr>
                    <td>
                    <input
            type='text'
            name='userName'
            value={this.state.userName}
            onChange={this.updateValues}
            placeholder="Enter Username"
            
          /></td>
          
          <td>
          <button className='btn btn-success' onClick={this.fetchData}>
            Know your User Id
          </button></td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
          <td>
          <input
            type='text'
            name='licenseNo'
            value={this.state.licenseNo}
            onChange={this.updateValues}
            placeholder="Enter Your License No"
            
          />

          </td>
         
          <td>
          <button className='btn btn-success' onClick={this.fetchData1}>
            Know your Vehicle Id
          </button><br/>
          
          </td>
          
                  </tr>


<tr>
    <td>
        <Link to="/driverreg" ><p><b>New User?? Vehicle Registration</b></p></Link>
    </td>
    <td></td>
    <td></td>
    <td>
        <Link variant="info" to={"/vehicleupdate/" + this.state.mesg1}><button className="btn btn-primary ml-2">Update Vehicle Details</button></Link>
    </td>
    <td>
        <p>**To update your Vehicle details, First Get your Vehicle Id..**</p>
    </td>
</tr>


                </table>
                <div style={{visibility:"hidden"}}>
                    {this.state.mesg1}
                </div>
                <div>
              
        </div>
            </div>
        )};
    }