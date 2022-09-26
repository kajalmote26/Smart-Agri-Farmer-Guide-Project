import React, { Component } from "react";
import DailyDataService from "../services/daily.service";
import { Switch, Route, Link } from "react-router-dom";
import AdminHome from "./adminhome";

export default class AddDailyRate extends Component {
  constructor(props) {
    super(props);
    this.onChangeCrop_Name = this.onChangeCrop_Name.bind(this);
    this.onChangeCropType = this.onChangeCropType.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeMinPrice = this.onChangeMinPrice.bind(this);
    this.onChangeMaxPrice = this.onChangeMaxPrice.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeCDate = this.onChangeCDate.bind(this);
    this.saveDailyRate = this.saveDailyRate.bind(this);
    this.newDailyRate = this.newDailyRate.bind(this);

    this.state = {
      id: null,
      crop_Name: "",
      cropType: "",
      quantity: "",
      minPrice: "",
      maxPrice: "",
      location: "",
      cdate: ""
    };
  }

  onChangeCrop_Name(e) {
    this.setState({
      crop_Name: e.target.value
    });
  }

  onChangeCropType(e) {
    this.setState({
      cropType: e.target.value
    });
  }
  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }

  onChangeMinPrice(e) {
    this.setState({
      minPrice: e.target.value
    });
  }


  onChangeMaxPrice(e) {
    this.setState({
      maxPrice: e.target.value
    });
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onChangeCDate(e) {
    this.setState({
      cdate: e.target.value
    });
  }

  saveDailyRate() 
  {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    if(this.state.crop_Name!="" && this.state.cropType!="" && this.state.quantity!="" && this.state.minPrice!="" && this.state.maxPrice!="" && this.state.location!="" && this.state.cdate!="")
    {
      if(textregex.test(this.state.crop_Name) && textregex.test(this.state.cropType) && textregex.test(this.state.location))
      {
        var data = {
          crop_Name: this.state.crop_Name,
          cropType: this.state.cropType,
          quantity: this.state.quantity,
          minPrice: this.state.minPrice,
          maxPrice: this.state.maxPrice,
          location: this.state.location,
          cdate: this.state.cdate
        };

        DailyDataService.create(data)
        .then(response => {
          this.setState({
            id: response.data.id,
            crop_Name: this.state.crop_Name,
            cropType: this.state.cropType,
            quantity: this.state.quantity,
            minPrice: this.state.minPrice,
            maxPrice: this.state.maxPrice,
            location: this.state.location,
            cdate: this.state.cdate,

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
        alert("Crop Name, Crop Type and Location should contain text only.");
      }
    }
    else
    {
      alert("All fields are Mandatory... \n Please fill data in all fields.");
    }
  }

  newDailyRate() {
    this.state = {
      id: null,
      crop_Name: "",
      cropType: "",
      quantity: "",
      minPrice: "",
      maxPrice: "",
      location: "",
      cdate: ""
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
                <Link to={"/dailyprice1"} className="navbar-brand">


                  <button className="btn btn-success">Show Daily Price List</button>
                </Link>
              </div>
            ) : (
              <div>

                <h4><b>Daily Crop Rate</b></h4>
                <div className="form-group">
                  <label htmlFor="title">Crop Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="crop_Name"
                    required
                    value={this.state.crop_Name}
                    onChange={this.onChangeCrop_Name}
                    name="crop_Name"
                    placeholder="Enter Crop"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Crop Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cropType"
                    required
                    value={this.state.cropType}
                    onChange={this.onChangeCropType}
                    name="cropType"
                    placeholder="Enter Crop Type"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Quantity</label>
                  <input
                    type="number"
                    min={0}
                    className="form-control"
                    id="quantity"
                    required
                    value={this.state.quantity}
                    onChange={this.onChangeQuantity}
                    name="quantity"
                    placeholder="Enter Quantity"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Minimum Price</label>
                  <input
                    type="number"
                    min={0}
                    className="form-control"
                    id="minPrice"
                    required
                    value={this.state.minPrice}
                    onChange={this.onChangeMinPrice}
                    name="minPrice"
                    placeholder="Enter Minimum Price"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Maximum Price</label>
                  <input
                    type="number"
                    min={0}
                    className="form-control"
                    id="maxPrice"
                    required
                    value={this.state.maxPrice}
                    onChange={this.onChangeMaxPrice}
                    name="maxPrice"
                    placeholder="Enter Maximum Price"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    required
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    name="location"
                    placeholder="Enter Location"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="cdate"
                    required
                    value={this.state.cdate}
                    onChange={this.onChangeCDate}
                    name="cdate"
                    placeholder="Enter Current Date"
                  />
                </div>


                <button onClick={this.saveDailyRate} className="btn btn-success">
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
