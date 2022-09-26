import React, { Component } from "react";
import DriverDataService from "../services/driver.service";
import { Switch, Route, Link } from "react-router-dom";
import AdminHome from "./adminhome";
export default class AddDriver extends Component {
  constructor(props) {
    super(props);
  this.onChangeDriver_FName = this.onChangeDriver_FName.bind(this);
  this.onChangeDriver_LName = this.onChangeDriver_LName.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
   this.onChangeTaluka = this.onChangeTaluka.bind(this);
   this.onChangeVillage=this.onChangeVillage.bind(this);
   this.onChangeL_no=this.onChangeL_no.bind(this);
   this.onChangeCapacity=this.onChangeCapacity.bind(this);
   this.onChangeV_no=this.onChangeV_no.bind(this);
   this.onChangeRate_per_km=this.onChangeRate_per_km.bind(this);
   this.onChangePassword=this.onChangePassword.bind(this);
       this.saveDriver = this.saveDriver.bind(this);
    this.newDriver = this.newDriver.bind(this);

    this.state = {
      id: null,
      driver_Fname: "",
      driver_Lname: "",
      contact: "", 
      village: "",
      taluka: "",
      district:"",
      l_no:"",
      v_no:"",
      rate_per_km:"",
      capacity:"",
      password:""

    };
  }

  onChangeDriver_FName(e) {
    this.setState({
      driver_Fname: e.target.value
    });
  }

  onChangeDriver_LName(e) {
    this.setState({
      driver_Lname: e.target.value
    });
  }
  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    });
  }

  onChangeVillage(e) {
    this.setState({
      village: e.target.value
    });
  }
  

  onChangeTaluka(e) {
    this.setState({
      taluka: e.target.value
    });
  }
  onChangeDistrict(e) {
    this.setState({
      district: e.target.value
    });
  }

  onChangeL_no(e) {
    this.setState({
      l_no: e.target.value
    });
  }

  onChangeV_no(e) {
    this.setState({
      v_no: e.target.value
    });
  }
  onChangeCapacity(e) {
    this.setState({
      capacity: e.target.value
    });
  }
  onChangeRate_per_km(e) {
    this.setState({
      rate_per_km: e.target.value
    });

  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });

  }
  saveDriver() {
    var data = {
      driver_Fname: this.state.driver_Fname,
      driver_Lname: this.state.driver_Lname,
      contact: this.state.contact,
      village: this.state.village,
      taluka: this.state.taluka,
      district:this.state.district,
      l_no:this.state.l_no,
      v_no:this.state.v_no,
      rate_per_km:this.state.rate_per_km,
      capacity:this.state.capacity,
      password:this.state.password
      
    };

   DriverDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          driver_Fname: this.state.driver_Fname,
            driver_Lname: this.state.driver_Lname,
            contact: this.state.contact,
            village: this.state.village,
            taluka: this.state.taluka,
            district:this.state.district,
            l_no:this.state.l_no,
            v_no:this.state.v_no,
            rate_per_km:this.state.rate_per_km,
            capacity:this.state.capacity,
            password:this.state.password,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newDriver() {
    this.state = {
        id: null,
        driver_Fname: "",
      driver_Lname: "",
      contact: "", 
      village: "",
      taluka: "",
      district:"",
      l_no:"",
      v_no:"",
      rate_per_km:"",
      capacity:"",
      password:""
    };
  }

  render() {
    return (
      <div>
        <AdminHome/>
       
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <Link to={"/driver_t"} className="navbar-brand">
              

              <button className="btn btn-success">Show Driver List</button>
          </Link>
          </div>
        ) : (
          <div>
             <h4><b>Driver Registration</b></h4>
            <div className="form-group">
              <label htmlFor="title">First Name</label>
              <input
                type="text"
                className="form-control"
                id="driver_Fname"
                required
                value={this.state.driver_Fname}
                onChange={this.onChangeDriver_FName}
                name="driver_Fname"
                placeholder="Enter First Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="driver_Fname"
                required
                value={this.state.driver_Lname}
                onChange={this.onChangeDriver_LName}
                name="driver_Lname"
                placeholder="Enter Last Name"
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
                name="contact"
                placeholder="Enter Mobile No"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Village</label>
              <input
                type="text"
                className="form-control"
                id="village"
                required
                value={this.state.village}
                onChange={this.onChangeVillage}
                name="village"
                placeholder="Enter Village"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Taluka</label>
              <input
                type="text"
                className="form-control"
                id="taluka"
                required
                value={this.state.taluka}
                onChange={this.onChangeTaluka}
                name="taluka"
                placeholder="Enter Taluka"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">District</label>
              <input
                type="text"
                className="form-control"
                id="district"
                required
                value={this.state.district}
                onChange={this.onChangeDistrict}
                name="district"
                placeholder="Enter District"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">License Number</label>
              <input
                type="text"
                className="form-control"
                id="l_no"
                required
                value={this.state.l_no}
                onChange={this.onChangeL_no}
                name="l_no"
                placeholder="Enter License No"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Vehicale Number</label>
              <input
                type="text"
                className="form-control"
                id="v_no"
                required
                value={this.state.v_no}
                onChange={this.onChangeV_no}
                name="v_no"
                placeholder="Enter Vehicle No"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Vehicale Capacity</label>
              <input
                type="text"
                className="form-control"
                id="capacity"
                required
                value={this.state.capacity}
                onChange={this.onChangeCapacity}
                name="capacity"
                placeholder="Enter Vehicle Capacity"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Rate Per KM</label>
              <input
                type="text"
                className="form-control"
                id="rate_per_km"
                required
                value={this.state.rate_per_km}
                onChange={this.onChangeRate_per_km}
                name="rate_per_km"
                placeholder="Enter Rate per Km"
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
                name="password"
                placeholder="Enter Password"
              />
            </div>

            <button onClick={this.saveDriver} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
        </div>
        
      </div>
    );
  }
}
