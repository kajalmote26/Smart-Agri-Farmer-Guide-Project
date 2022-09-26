import React, { Component } from "react";
import DailyDataService from '../services/daily.service';
import AdminHome from './adminhome';
export default class DailyRatesUpdate extends Component {
  constructor(props) {
    super(props);
    this.onChangeCrop_Name = this.onChangeCrop_Name.bind(this);
    this.onChangeCropType = this.onChangeCropType.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeMinPrice = this.onChangeMinPrice.bind(this);
    this.onChangeMaxPrice = this.onChangeMaxPrice.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeCdate = this.onChangeCdate.bind(this);
    this.updateDailyRate = this.updateDailyRate.bind(this);


    this.state = {
      currentDailyRate: {
        id: null,
        crop_Name: "",
        cropType: "",
        quantity: "",
        minPrice: "",
        maxPrice: "",
        location: "",
        cdate: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getDailyRate(this.props.match.params.id);
  }

  onChangeCrop_Name(e) {
    const crop_Name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentDailyRate: {
          ...prevState.currentDailyRate,
          crop_Name: crop_Name
        }
      };
    });
  }

  onChangeCropType(e) {
    const cropType = e.target.value;

    this.setState(prevState => ({
      currentDailyRate: {
        ...prevState.currentDailyRate,
        cropType: cropType
      }
    }));
  }

  onChangeQuantity(e) {
    const quantity = e.target.value;

    this.setState(prevState => ({
      currentDailyRate: {
        ...prevState.currentDailyRate,
        quantity: quantity
      }
    }));
  }
  onChangeMinPrice(e) {
    const minPrice = e.target.value;

    this.setState(prevState => ({
      currentDailyRate: {
        ...prevState.currentDailyRate,
        minPrice: minPrice
      }
    }));
  }
  onChangeMaxPrice(e) {
    const maxPrice = e.target.value;

    this.setState(prevState => ({
      currentDailyRate: {
        ...prevState.currentDailyRate,
        maxPrice: maxPrice
      }
    }));
  }

  onChangeLocation(e) {
    const location = e.target.value;

    this.setState(prevState => ({
      currentDailyRate: {
        ...prevState.currentDailyRate,
        location: location
      }
    }));
  }
  onChangeCdate(e) {
    const cdate = e.target.value;

    this.setState(prevState => ({
      currentDailyRate: {
        ...prevState.currentDailyRate,
        cdate: cdate
      }
    }));
  }

  getDailyRate(id) {
    DailyDataService.get(id)
      .then(response => {
        this.setState({
          currentDailyRate: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  updateDailyRate() 
  {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    if(this.state.currentDailyRate.crop_Name!="" && this.state.currentDailyRate.cropType!="" && this.state.currentDailyRate.quantity!="" && this.state.currentDailyRate.minPrice!="" && this.state.currentDailyRate.maxPrice!="" && this.state.currentDailyRate.location!="" && this.state.currentDailyRate.cdate!="")
    {
      if(textregex.test(this.state.currentDailyRate.crop_Name) && textregex.test(this.state.currentDailyRate.cropType) && textregex.test(this.state.currentDailyRate.location))
      {
        DailyDataService.update(
          this.state.currentDailyRate.id,
          this.state.currentDailyRate
        )
        .then(response => {
          console.log(response.data);
          this.setState({
            message: "The Daily Rates updated successfully!"
          });
          alert(this.state.message);
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



  render() {
    const { currentDailyRate } = this.state;


    return (
      <div>
        <div className='adminhome'>
          <AdminHome />
          {currentDailyRate ? (
            <div className="edit-form">
              <h4>Daily Rates</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Crop Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="crop_Name"
                    value={currentDailyRate.crop_Name}
                    onChange={this.onChangeCrop_Name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Crop Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cropType"
                    value={currentDailyRate.cropType}
                    onChange={this.onChangeCropType}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Quantity:</label>
                  <input
                    type="number"
                    min={0}
                    className="form-control"
                    id="quantity"
                    value={currentDailyRate.quantity}
                    onChange={this.onChangeQuantity}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Minimum Price:</label>
                  <input
                    type="number"
                    min={0}
                    className="form-control"
                    id="minPrice"
                    value={currentDailyRate.minPrice}
                    onChange={this.onChangeMinPrice}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Maximum Price:</label>
                  <input
                    type="number"
                    min={0}
                    className="form-control"
                    id="maxPrice"
                    value={currentDailyRate.maxPrice}
                    onChange={this.onChangeMaxPrice}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Location:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    value={currentDailyRate.location}
                    onChange={this.onChangeLocation}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Current Date:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="cdate"
                    value={currentDailyRate.cdate}
                    onChange={this.onChangeCdate}
                  />
                </div>
              </form>


              <button
                type="submit"
                className="btn btn-primary ml-2"
                onClick={this.updateDailyRate}
              >
                Update
              </button>


            </div>
          ) : (
            <div>
              <br />

            </div>
          )}
        </div>
      </div>
    );
  }
}

