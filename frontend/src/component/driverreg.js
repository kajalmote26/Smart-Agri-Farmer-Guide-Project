import React, { Component } from "react";
import DriverDataService from "../services/driver.service";
import { Switch, Route, Link } from "react-router-dom";
import TestService from "../services/TestService";

export default class Driverreg extends Component {
  constructor(props) {
    super(props);
  this.onChangeDriverFname = this.onChangeDriverFname.bind(this);
  this.onChangeDriverLname = this.onChangeDriverLname.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
   this.onChangeTaluka = this.onChangeTaluka.bind(this);
   this.onChangeVillage=this.onChangeVillage.bind(this);
   this.onChangeLicenseNo=this.onChangeLicenseNo.bind(this);
   this.onChangeCapacity=this.onChangeCapacity.bind(this);
   this.onChangeVehicleNo=this.onChangeVehicleNo.bind(this);
   this.onChangeRatePerKm=this.onChangeRatePerKm.bind(this);
   this.onChangeUser=this.onChangeUser.bind(this);
       this.saveDriver = this.saveDriver.bind(this);
    this.newDriver = this.newDriver.bind(this);
    this.fetchData=this.fetchData.bind(this);

    this.state = {
      id: null,
      driverFname: "",
      driverLname: "",
      contact: "", 
      village: "",
      taluka: "",
      district:"",
      licenseNo:"",
      vehicleNo:"",
      ratePerKm:"",
      capacity:"",
      user:"",
      mesg:'',

    };
  }

  onChangeDriverFname(e) {
    this.setState({
      driverFname: e.target.value
    });
  }

  onChangeDriverLname(e) {
    this.setState({
      driverLname: e.target.value
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

  onChangeLicenseNo(e) {
    this.setState({
      licenseNo: e.target.value
    });
  }

  onChangeVehicleNo(e) {
    this.setState({
      vehicleNo: e.target.value
    });
  }
  onChangeCapacity(e) {
    this.setState({
      capacity: e.target.value
    });
  }
  onChangeRatePerKm(e) {
    this.setState({
      ratePerKm: e.target.value
    });

  }
  onChangeUser(e) {
    this.setState({
      user: e.target.value
    });

  }

  updateValues(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  fetchData() {
    console.log('in fetch data');
    TestService.getMessageFromAPI2(this.props.match.params.name)
      .then((response) => {
        console.log(response);
        this.setState({ mesg: response.data.message });
        console.log(this.state.mesg);
        
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
  

  saveDriver() {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    const mobregex = RegExp("^[0-9]{10}$");
    if(this.state.driverFname!="" && this.state.driverLname!="" && this.state.contact!="" && this.state.village!="" && this.state.taluka!="" && this.state.district!="" && this.state.licenseNo!="" && this.state.vehicleNo!="" && this.state.ratePerKm!="" && this.state.capacity!="" && this.state.user!="")
    {
      if(textregex.test(this.state.driverFname) && textregex.test(this.state.driverLname) && textregex.test(this.state.village) && textregex.test(this.state.taluka) && textregex.test(this.state.district)){
        if(mobregex.test(this.state.contact)){
        var data = {
      driverFname: this.state.driverFname,
      driverLname: this.state.driverLname,
      contact: this.state.contact,
      village: this.state.village,
      taluka: this.state.taluka,
      district:this.state.district,
      licenseNo:this.state.licenseNo,
      vehicleNo:this.state.vehicleNo,
      ratePerKm:this.state.ratePerKm,
      capacity:this.state.capacity,
      user:this.state.user
      
    };

   DriverDataService.create(this.state.user,data)
      .then(response => {
        this.setState({
          id: response.data.id,
          driverFname: this.state.driverFname,
      driverLname: this.state.driverLname,
            contact: this.state.contact,
            village: this.state.village,
            taluka: this.state.taluka,
            district:this.state.district,
            licenseNo:this.state.licenseNo,
            vehicleNo:this.state.vehicleNo,
            ratePerKm:this.state.ratePerKm,
            capacity:this.state.capacity,
            user:this.state.user,

          submitted: true
        });
        console.log(response.data);
        //console.log(this.state.mesg);
      })
      .catch(e => {
        console.log(e);
      });
    }
    else
    {
      alert("Contact should contain 10 digits");
    }
    }
    else
    {
      alert("Driver First name,Last name, Village, Taluka, District should contain only Text");
    }
    }
    else
    {
      alert("All fields are mandatory..Please enter all fields");
    }
  }
  

  newDriver() {
    this.state = {
        id: null,
        driverFname: "",
      driverLname: "",
      contact: "", 
      village: "",
      taluka: "",
      district:"",
      licenseNo:"",
      vehicleNo:"",
      ratePerKm:"",
      capacity:"",
      user:""
    };
  }

  render() {
    return (
      

      <div className="driverreg">
       <Link to="/driverhome">
              <button className="btn btn-primary ml-2">Back Driver Panel</button>
            </Link>
      <div className="submit-form">
        {this.state.submitted ? (
         <div>
         <h4>Vehicle Added successfully!</h4>
         
       <div style={{border:"2px" , color:"rgb(22, 212, 70);"}}>You have completed the process of Registration!!! 
       Farmer will contact you by using your given Contact number as per their Need. </div>
       </div>
        ) : (
          <div>
             <h4><b>Vehicle Registration</b></h4>
            <div className="form-group">
              <label htmlFor="title">First Name</label>
              <input
                type="text"
                className="form-control"
                id="driverFname"
                required
                value={this.state.driverFname}
                onChange={this.onChangeDriverFname}
                name="driverFname"
                placeholder="Enter First Name"
              />
            </div>
            

            <div className="form-group">
              <label htmlFor="title">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="driverLname"
                required
                value={this.state.driverLname}
                onChange={this.onChangeDriverLname}
                name="driverLname"
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
                placeholder="Enter mobile No"
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
                id="licenseNo"
                required
                value={this.state.licenseNo}
                onChange={this.onChangeLicenseNo}
                name="licenseNo"
                placeholder="Enter License No"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Vehicle Number</label>
              <input
                type="text"
                className="form-control"
                id="vehicleNo"
                required
                value={this.state.vehicleNo}
                onChange={this.onChangeVehicleNo}
                name="vehicleNo"
                placeholder="Enter Vehicle Number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Vehicale Capacity</label>
              <input
                type="number"
                min={0}
                className="form-control"
                id="capacity"
                required
                value={this.state.capacity}
                onChange={this.onChangeCapacity}
                name="capacity"
                placeholder="Enter Capacity of Vehicle"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Rate Per KM</label>
              <input
                type="number"
                min={0}
                className="form-control"
                id="ratePerKm"
                required
                value={this.state.ratePerKm}
                onChange={this.onChangeRatePerKm}
                name="ratePerKm"
                placeholder="Enter Rate Per Km"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">User Id</label>
              <input
                type="number"
                min={0}
                className="form-control"
                id="user"
                required
                value={this.state.user}
                onChange={this.onChangeUser}
                name="user"
                placeholder="Enter User Id"
              />
            </div>

            <button onClick={()=>{this.saveDriver();this.fetchData();}} className="btn btn-success">
            {/* <button onClick={this.saveDriver} className="btn btn-success"> */}
              Submit
            </button>
            {"\u00a0\u00a0"}
            {/* <Link to={"commonreg"}>
            <button className="btn btn-success">Back</button>
            </Link> */}
          </div>
        )}
      </div>
      
      </div>
    );
  }
}
