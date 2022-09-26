import React, { Component } from "react";
import DriverDataService from "../services/driver.service";
import { Link } from "react-router-dom";

export default class DriverByTaluka extends Component
 {
  constructor(props) {
    super(props);
    this.onChangeSearchTaluka = this.onChangeSearchTaluka.bind(this);
    this.retrieveDrivers = this.retrieveDrivers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveDriver = this.setActiveDriver.bind(this);
    this.removeAllDrivers = this.removeAllDrivers.bind(this);
    this.searchTaluka = this.searchTaluka.bind(this);

    this.state = {
      drivers: [],
      currentDriver: null,
      currentIndex: -1,
      searchTaluka: ""
    };
  }

  componentDidMount() {
    this.retrieveDrivers();
  }

  onChangeSearchTaluka(e) {
    const searchTaluka = e.target.value;

    this.setState({
      searchTaluka: searchTaluka
    });
  }

  retrieveDrivers() {
    DriverDataService.findByTaluka()
      .then(response => {
        this.setState({
          drivers: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveDrivers();
    this.setState({
      currentDriver: null,
      currentIndex: -1
    });
  }

  setActiveDriver(driver, index) {
    this.setState({
      currentDriver: driver,
      currentIndex: index
    });
  }

  removeAllDrivers() {
    DriverDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTaluka() {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    this.setState({
      currentDriver: null,
      currentIndex: -1
    });
    if(this.state.searchTaluka!="")
    {
      if(textregex.test(this.state.searchTaluka))
      {
    DriverDataService.findByTaluka(this.state.searchTaluka)
      .then(response => {
        this.setState({
          drivers: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }
    else
    {
      alert("Taluka Contains only Text");
    }
    }
    else
    {
      alert("Please enter Taluka");
    }
  }

  render() {
    const { searchTaluka, drivers, currentDriver, currentIndex } = this.state;

    return (
      <div className="driverlistbytaluka">
      <div className="list row">
        <div className="col-md-8">
          <label><b style={{color:"black"}}>Enter Taluka from where you want to get Drivers To transport your Product</b></label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Taluka"
              value={searchTaluka}
              onChange={this.onChangeSearchTaluka}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTaluka}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Drivers List</h4>

          <ul className="list-group">
            {drivers &&
              drivers.map((driver, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveDriver(driver, index)}
                  key={index}
                >
                  {driver.driverFname}
                </li>
              ))}
          </ul>

         
        </div>
        <div className="col-md-6">
          {currentDriver ? (
            <div>
              <h4>Drivers</h4>
              <div>
                <label>
                  <strong>Driver First name:</strong>
                </label>{" "}
                {currentDriver.driverFname}
              </div>
              <div>
                <label>
                  <strong>Driver Last Name:</strong>
                </label>{" "}
                {currentDriver.driverLname}
              </div>
              <div>
                <label>
                  <strong>Contact Number:</strong>
                </label>{" "}
                {currentDriver.contact}
              </div>
              <div>
                <label>
                  <strong>License Number:</strong>
                </label>{" "}
                {currentDriver.licenseNo}
              </div>
              <div>
                <label>
                  <strong>Village:</strong>
                </label>{" "}
                {currentDriver.village}
              </div>

              <div>
                <label>
                  <strong>Taluka:</strong>
                </label>{" "}
                {currentDriver.taluka}
              </div>
              <div>
                <label>
                  <strong>District:</strong>
                </label>{" "}
                {currentDriver.district}
              </div>

              <div>
                <label>
                  <strong>Vehicle Number:</strong>
                </label>{" "}
                {currentDriver.vehicleNo}
              </div>
              <div>
                <label>
                  <strong>Capacity:</strong>
                </label>{" "}
                {currentDriver.capacity}
              </div>

              <div>
                <label>
                  <strong>Rate Per Km:</strong>
                </label>{" "}
                {currentDriver.ratePerKm}
              </div>
              
            <br/>
           
            <p><b>**To transport your Product u can contact the Driver using given Contact number**</b></p>
            </div>
          ) : (
            <div>
              
            </div>
          )}
        </div>
      </div>
      </div>
    );
  }
}

