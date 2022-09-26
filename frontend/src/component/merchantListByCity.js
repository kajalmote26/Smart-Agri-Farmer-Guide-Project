import React, { Component } from "react";
import MerchantDataService from "../services/merchant.service";
import { Link } from "react-router-dom";

export default class MerchantsByCity extends Component
 {
  constructor(props) {
    super(props);
    this.onChangeSearchCity = this.onChangeSearchCity.bind(this);
    this.retrieveMerchants = this.retrieveMerchants.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveMerchant = this.setActiveMerchant.bind(this);
    this.removeAllMerchants = this.removeAllMerchants.bind(this);
    this.searchCity = this.searchCity.bind(this);

    this.state = {
      merchants: [],
      currentMerchant: null,
      currentIndex: -1,
      searchCity: ""
    };
  }

  componentDidMount() {
    this.retrieveMerchants();
  }

  onChangeSearchCity(e) {
    const searchCity = e.target.value;

    this.setState({
      searchCity: searchCity
    });
  }

  retrieveMerchants() {
    MerchantDataService.findByCity()
      .then(response => {
        this.setState({
          merchants: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveMerchants();
    this.setState({
      currentMerchant: null,
      currentIndex: -1
    });
  }

  setActiveMerchant(merchant, index) {
    this.setState({
      currentMerchant: merchant,
      currentIndex: index
    });
  }

  removeAllMerchants() {
   MerchantDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchCity() {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    this.setState({
      currentMerchant: null,
      currentIndex: -1
    });

    if(this.state.searchCity!="")
    {
      if(textregex.test(this.state.searchCity))
      {
    MerchantDataService.findByCity(this.state.searchCity)
      .then(response => {
        this.setState({
          merchants: response.data
        });
        console.log(response.data);
        // if(response.data==)
        // {
        //   alert("City not present, please enter valid City");
        // }
      })
      .catch(e => {
        console.log(e);
      });
    }
    else
    {
      alert("City contains only Text");
    }
    }
    else
    {
      alert("Please enter City");
    }
  }

  render() {
    const { searchCity, merchants, currentMerchant, currentIndex } = this.state;

    return (
      <div className="merchantlistbycity">
      <div className="list row">
        <div className="col-md-8">
          <p><b style={{color:"black"}}>To get merchant List Enter the City</b></p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by City"
              value={searchCity}
              onChange={this.onChangeSearchCity}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchCity}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4><b style={{color:"black"}}>Merchants List</b></h4>

          <ul className="list-group">
            {merchants &&
              merchants.map((merchant, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveMerchant(merchant, index)}
                  key={index}
                >
                  {merchant.merchantName}
                </li>
              ))}
          </ul>

         
        </div>
        <div className="col-md-6">
          {currentMerchant ? (
            <div>
              <h4>Merchants</h4>
              <div>
                <label>
                  <strong>Merchant Name:</strong>
                </label>{" "}
                {currentMerchant.merchantName}
              </div>
              <div>
                <label>
                  <strong>Market Name:</strong>
                </label>{" "}
                {currentMerchant.marketName}
              </div>
              <div>
                <label>
                  <strong>City:</strong>
                </label>{" "}
                {currentMerchant.city}
              </div>
              <div>
                <label>
                  <strong>Contact Number:</strong>
                </label>{" "}
                {currentMerchant.contact}
              </div>
              <p><b>**To sell your Product u can contact the Merchant using given Contact number**</b></p>
              
            <br/>
            <p><b style={{color:"red"}}>To know the Drivers from any city to transport your Product Go to Driver List</b></p>
           <Link to={"/driverlistbytaluka"}> <button className="btn btn-success"> Drivers List</button></Link> 
             
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

