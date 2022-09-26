import React, { Component } from "react";
import ShopDataService from "../services/shop.service";
import { Switch, Route, Link } from "react-router-dom";
import ShopHome from "./shophome";


export default class Shopreg extends Component {
  constructor(props) {
    super(props);
    // this.onChangeuserName = this.onChangeuserName.bind(this);
    this.onChangeshopName = this.onChangeshopName.bind(this);
    this.onChangeownerName = this.onChangeownerName.bind(this);
    this.onChangelicenseNo = this.onChangelicenseNo.bind(this);
    this.onChangecontact = this.onChangecontact.bind(this);
    this.onChangedistrict = this.onChangedistrict.bind(this);
    this.onChangetaluka = this.onChangetaluka.bind(this);
    this.onChangevillage = this.onChangevillage.bind(this);
    this.onChangeuser = this.onChangeuser.bind(this);
    this.onChangerating = this.onChangerating.bind(this);
    this.saveShop = this.saveShop.bind(this);
    this.newShop = this.newShop.bind(this);

    this.state = {
      id: null,
      //   userName:"",
      shopName: "",
      ownerName: "",
      licenseNo: "",
      contact: "",
      district: "",
      taluka: "",
      village: "",
      user: "",
      rating: '',

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


  onChangecontact(e) {
    this.setState({
      contact: e.target.value
    });
  }



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


  onChangeuser(e) {
    this.setState({
      user: e.target.value
    });

  }
  onChangerating(e) {
    this.setState({
      rating: e.target.value
    })
  }
  saveShop() {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    //const shoplregex = RegExp("^[0-9]{10}$");
    const mobregex = RegExp("^[0-9]{10}$");
    const ratingregex = RegExp("^[0-5]{0,5}$");
    if (this.state.shopName != "" && this.state.ownerName != "" && this.state.licenseNo != "" && this.state.contact != "" &&
      this.state.district != "" && this.state.taluka != "" && this.state.village != "" && this.state.user != "" && this.state.rating != "") 
    {
     // if (shoplregex.test(this.state.licenseNo)) {
        if (mobregex.test(this.state.contact)) {
          if (ratingregex.test(this.state.rating)) {
            if(textregex.test(this.state.village) && textregex.test(this.state.taluka) && textregex.test(this.state.district)){
            var data =
            {
              //  userName: this.state.userName,
              shopName: this.state.shopName,
              ownerName: this.state.ownerName,
              licenseNo: this.state.licenseNo,
              contact: this.state.contact,
              district: this.state.district,
              taluka: this.state.taluka,
              village: this.state.village,
              user: this.state.user,
              rating: this.state.rating
            };
            ShopDataService.create(this.state.user, data)
              .then(response => {
                this.setState({
                  id: response.data.id,
                  //  userName: this.state.userName,
                  shopName: this.state.shopName,
                  ownerName: this.state.ownerName,
                  licenseNo: this.state.licenseNo,
                  contact: this.state.contact,
                  district: this.state.district,
                  taluka: this.state.taluka,
                  village: this.state.village,
                  user: this.state.user,
                  rating: this.state.rating,

                  submitted: true
                });
                console.log(response.data);
              })
              .catch(e => {
                console.log(e);
              });
            }
            else
            {
              alert("Shop name, Owner Name, Village, Taluka, District contains Text Only.");
            }
          }
          else {
            alert("please enter rating betweeen 0 to 5");
          }
        }
        else {
          alert("Enter Valid Contact Number");
        }
      // }
      // else {
      //   alert("Enter Valid Shop License Number")
      // }
    }
    else {
      alert("Please enter all fields data");
    }
  }

  newShop() {
    this.state = {
      id: null,
      //  userName:"",
      shopName: "",
      ownerName: "",
      licenseNo: "",
      contact: "",
      district: "",
      taluka: "",
      village: "",
      user: "",
      rating: '',
    };
  }

  render() {
    return (
      <div>
        <ShopHome />
        <div className="shopimage1">

          <div className="submit-form">
            {this.state.submitted ? (
              <div>
                <h4>Registration successfully!</h4>
                {/* <Link to={"/products"} className="navbar-brand">             
  
             <button className="btn btn-success">Back</button>
         </Link> */}
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
                    placeholder="Enter Owner Name"
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
                    placeholder="Enter Shop License Number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Contact No</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contact"
                    required
                    value={this.state.contact}
                    onChange={this.onChangecontact}
                    name="contact"
                    placeholder="Enter Mobile No"
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
                    onChange={this.onChangedistrict}
                    name="district"
                    placeholder="Enter District of Shop"
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
                    placeholder="Enter Taluka of Shop"
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
                    placeholder="Enter Village of Shop"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">User Id</label>
                  <input
                    type="number"
                    className="form-control"
                    id="user"
                    required
                    value={this.state.user}
                    onChange={this.onChangeuser}
                    name="user"
                    placeholder="Enter User Id"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description"> Shop Rating</label>
                  <input
                    type="number"
                    min={0}
                    max={5}
                    className="form-control"
                    id="rating"
                    required
                    value={this.state.rating}
                    onChange={this.onChangerating}
                    name="Rating"
                    placeholder="Enter Rating"
                  />
                </div>

                <button onClick={this.saveShop} className="btn btn-success">
                  Submit
                </button>{"\u00a0\u00a0"}

              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
