import React, { Component } from "react";
import UserDataService from "../services/user.service";
import { Switch, Route, Link } from "react-router-dom";
import AdminHome from "./adminhome";
export default class AddFarmer extends Component {
  constructor(props) {
    super(props);
  this.onChangeName = this.onChangeName.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
   this.onChangeTaluka = this.onChangeTaluka.bind(this);
   this.onChangeVillage=this.onChangeVillage.bind(this);
    this.saveFarmer = this.saveFarmer.bind(this);
    this.newFarmer = this.newFarmer.bind(this);

    this.state = {
      id: null,
      name: "",
      contact: "", 
      village: "",
      taluka: "",
      district:""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
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

  saveFarmer() {
    var data = {
      name: this.state.name,
      contact: this.state.contact,
      village: this.state.village,
      taluka: this.state.taluka,
      district:this.state.district
      
    };

   UserDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          contact: response.data.contact,
          village: response.data.village,
          taluka: response.data.taluka,
          district:response.data.district,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newFarmer() {
    this.state = {
        id: null,
        name: "",
        contact: "", 
        village: "",
        taluka: "",
        district:""
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
            <Link to={"farmer_tbl"} className="navbar-brand">
              

              <button className="btn btn-success">Show Farmer List</button>
          </Link>
          </div>
        ) : (
          <div>
             <h4><b>Farmer Registration</b></h4>
            <div className="form-group">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
                placeholder="Enter Name"
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
                placeholder="Enter Contact No"
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
                placeholder="Eneter Taluka"
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
                placeholder="Eneter District"
              />
            </div>

            <button onClick={this.saveFarmer} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
     
      </div>
    );
  }
}
