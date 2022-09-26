import React, { Component } from "react";
import MerchantDataService from "../services/merchant.service";
import { Switch, Route, Link } from "react-router-dom";
import AdminHome from "./adminhome";

export default class AddMerchant extends Component {
  constructor(props) {
    super(props);
    this.onChangeMerchantName = this.onChangeMerchantName.bind(this);
    this.onChangeMarketName = this.onChangeMarketName.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);

    this.saveMerchant = this.saveMerchant.bind(this);
    this.newMerchant = this.newMerchant.bind(this);


    this.state = {
      id: null,
      merchantName: "",
      marketName: "",
      city: "",
      contact: ""
    };
  }

  onChangeMerchantName(e) {
    this.setState({
      merchantName: e.target.value
    });
  }

  onChangeMarketName(e) {
    this.setState({
      marketName: e.target.value
    });
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    });
  }



  saveMerchant() {
   // const textregex = RegExp("^[a-zA-Z\s]*$");
    const mobregex = RegExp("^[0-9]{10}$");
    if (this.state.merchantName != "" && this.state.marketName != "" && this.state.city != "" && this.state.contact) {
      if (mobregex.test(this.state.contact)) {
       // if (textregex.test(this.state.merchantName) && textregex.test(this.state.marketName) && textregex.test(this.state.city)) {
          var data = {
            merchantName: this.state.merchantName,
            marketName: this.state.marketName,
            city: this.state.city,
            contact: this.state.contact
          };

          MerchantDataService.create(data)
            .then(response => {
              this.setState({
                id: response.data.id,
                merchantName: this.state.merchantName,
                marketName: this.state.marketName,
                city: this.state.city,
                contact: this.state.contact,

                submitted: true
              });
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
        // }
        // else {
        //   alert("Merchant Name, Market Name, City should be Text only.");
        // }
      }
      else {
        alert("Contact number should contain 10 Digits...");
      }
    }
    else {
      alert("All fields are Mandatory... \n Please fill data in all fields.");
    }
  }

  newMerchant() {
    this.state = {
      id: null,
      merchantName: "",
      marketName: "",
      city: "",
      contact: ""

    };
  }

  render() {
    return (
      <div>
        <div className='adminhome'>
          <AdminHome />

          <div className="submit-form">
            {this.state.submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <Link to={"/merchantlist"} className="navbar-brand">


                  <button className="btn btn-success">Merchant  List</button>
                </Link>
              </div>
            ) : (
              <div>

                <h4><b> Merchant Details</b></h4>
                <div className="form-group">
                  <label htmlFor="title">Merchant Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="merchantName"
                    required
                    value={this.state.merchantName}
                    onChange={this.onChangeMerchantName}
                    name="merchantName"
                    placeholder="Enter Merchant Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Market Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="marketName"
                    required
                    value={this.state.marketName}
                    onChange={this.onChangeMarketName}
                    name="marketName"
                    placeholder="Enter Market Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">City Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    required
                    value={this.state.city}
                    onChange={this.onChangeCity}
                    name="city"
                    placeholder="Enter City Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Contact No</label>
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

                <button onClick={this.saveMerchant} className="btn btn-success">
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
