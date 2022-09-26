import React, { Component } from "react";
import ShopDataService from "../services/shop.service";
import { Switch, Route, Link } from "react-router-dom";
import AdminHome from "./adminhome";

export default class AddShop extends Component {
  constructor(props) {
    super(props);
    //this.onChangeuserName = this.onChangeuserName.bind(this);
    this.onChangeshopName = this.onChangeshopName.bind(this);
    this.onChangeownerName = this.onChangeownerName.bind(this);
    this.onChangelicenseNo = this.onChangelicenseNo.bind(this);
    //this.onChangecontactNo=this.onChangecontactNo.bind(this);
    this.onChangedistrict = this.onChangedistrict.bind(this);
   this.onChangetaluka = this.onChangetaluka.bind(this);
   this.onChangevillage=this.onChangevillage.bind(this);
   //this.onChangepassword=this.onChangepassword.bind(this);
       this.saveShop = this.saveShop.bind(this);
    this.newShop = this.newShop.bind(this);

    this.state = {
      id: null,
     // userName:"",
      shopName:"",
      ownerName:"",
      licenseNo:"",
      //contactNo:"",
      district:"",
      taluka:"",
      village:"",
     // password:"",

    };
  }

  // onChangeuserName(e) {
  //   this.setState({
  //     userName: e.target.value
  //   });
  // }

  onChangeshopName(e) {
    this.setState({
      shopName: e.target.value
    });
  }

  onChangeownerName(e) {
    this.setState({
      ownerName: e.target.value
    });
  }

onChangelicenseNo(e) {
    this.setState({
      licenseNo: e.target.value
    });
  }


  // onChangecontactNo(e) {
  //   this.setState({
  //     contactNo: e.target.value
  //   });
  // }


  
  onChangevillage(e) {
    this.setState({
      village: e.target.value
    });
  }
  

  onChangetaluka(e) {
    this.setState({
      taluka: e.target.value
    });
  }
  onChangedistrict(e) {
    this.setState({
      district: e.target.value
    });
  }


  // onChangepassword(e) {
  //   this.setState({
  //     password: e.target.value
  //   });

  // }
  saveShop() {
    var data = {
      //userName: this.state.userName,
      shopName: this.state.shopName,
      ownerName: this.state.ownerName,
      licenseNo:this.state.licenseNo,
     // contactNo:this.state.contactNo,
      district:this.state.district,
      taluka: this.state.taluka,
      village: this.state.village,         
     // password:this.state.password
      
    };

   ShopDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
        //  userName: this.state.userName,
          shopName: this.state.shopName,
          ownerName: this.state.ownerName,
          licenseNo:this.state.licenseNo,
         // contactNo:this.state.contactNo,
          district:this.state.district,
          taluka: this.state.taluka,
          village: this.state.village,         
         // password:this.state.password,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newShop() {
    this.state = {
        id: null,
      //  userName:"",
      shopName:"",
      ownerName:"",
      licenseNo:"",
      //contactNo:"",
      district:"",
      taluka:"",
      village:"",
      //password:"",
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
            <Link to={"shops"} className="navbar-brand">
              

              <button className="btn btn-success">Show Shop List</button>
          </Link>
          </div>
        ) : (
          <div>
             <h4><b>Shop Registration</b></h4>
            {/* <div className="form-group">
              <label htmlFor="title">Username</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                required
                value={this.state.userName}
                onChange={this.onChangeuserName}
                name="userName"
                placeholder="Enter Username"
              />
            </div> */}

            <div className="form-group">
              <label htmlFor="title">Shop Name</label>
              <input
                type="text"
                className="form-control"
                id="shopName"
                required
                value={this.state.shopName}
                onChange={this.onChangeshopName}
                name="shopName"
                placeholder="Enter Shop Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Owner Name</label>
              <input
                type="text"
                className="form-control"
                id="ownerName"
                required
                value={this.state.ownerName}
                onChange={this.onChangeownerName}
                name="ownerName"
                placeholder="Enter Owner name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">License No</label>
              <input
                type="text"
                className="form-control"
                id="licenseNo"
                required
                value={this.state.licenseNo}
                onChange={this.onChangelicenseNo}
                name="licenseNo"
                placeholder="Enter License No"
              />
            </div>

            {/* <div className="form-group">
              <label htmlFor="description">Contact No</label>
              <input
                type="tel"
                className="form-control"
                id="contactNo"
                required
                value={this.state.contactNo}
                onChange={this.onChangecontactNo}
                name="contactNo"
                placeholder="Enter Mobile No"
              />
            </div> */}

            <div className="form-group">
              <label htmlFor="description">District</label>
              <input
                type="text"
                className="form-control"
                id="district"
                required
                value={this.state.district}
                onChange={this.onChangedistrict}
                name="district"
                placeholder="Enter Shop District"
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
                onChange={this.onChangetaluka}
                name="taluka"
                placeholder="Enter Shop Taluka"
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
                onChange={this.onChangevillage}
                name="village"
                placeholder="Enter Shop Village"
              />
            </div>                          
            {/* <div className="form-group">
              <label htmlFor="description">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangepassword}
                name="password"
                placeholder="Enter Password"
              />
            </div> */}

            <button onClick={this.saveShop} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
     
      </div>
    );
  }
}
