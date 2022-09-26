import React, { Component } from "react";
import ShopDataService from "../services/shop.service";

export default class ShopListByProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchProductName = this.onChangeSearchProductName.bind(this);
    this.retrieveShops = this.retrieveShops.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveShop = this.setActiveShop.bind(this);
    this.removeAllShops = this.removeAllShops.bind(this);
    this.searchProductName = this.searchProductName.bind(this);

    this.state = {
      shops: [],
      currentShop: null,
      currentIndex: -1,
      searchProductName: ""
    };
  }

  componentDidMount() {
    this.retrieveShops();
  }

  onChangeSearchProductName(e) {
    const searchProductName = e.target.value;

    this.setState({
      searchProductName: searchProductName
    });
  }

  retrieveShops() {
    ShopDataService.findByProductName()
      .then(response => {
        this.setState({
          shops: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveShops();
    this.setState({
      currentShop: null,
      currentIndex: -1
    });
  }

  setActiveShop(shop, index) {
    this.setState({
      currentShop: shop,
      currentIndex: index
    });
  }

  removeAllShops() {
    ShopDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchProductName() {
    this.setState({
      currentShop: null,
      currentIndex: -1
    });

    if(this.state.searchProductName!="")
    {
    ShopDataService.findByProductName(this.state.searchProductName)
      .then(response => {
        this.setState({
          shops: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }
    else
    {
      alert("Please enter Product Name");
    }
  }

  render() {
    const { searchProductName, shops, currentShop, currentIndex } = this.state;

    return (
      <div className="shoplistbyproduct">
      <div className="list row">
        <div className="col-md-8">
        <div>
          <label><strong>Enter Product Name You Want to Get</strong> </label>
          </div>
          <div className="input-group mb-3">         
            <input
              type="text"
              className="form-control"
              placeholder="Search by Product Name"
              value={searchProductName}
              onChange={this.onChangeSearchProductName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={this.searchProductName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Shops List</h4>

          <ul className="list-group">
            {shops &&
              shops.map((shop, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveShop(shop, index)}
                  key={index}
                >
                  {shop.shopName}
                </li>
              ))}
          </ul>

         
        </div>
        <div className="col-md-6">
          {currentShop ? (
            <div>
              <h4>Shops</h4>
              <div>
                <label>
                  <strong>Shop Name:</strong>
                </label>{" "}
                {currentShop.shopName}
              </div>
              <div>
                <label>
                  <strong>Owner Name:</strong>
                </label>{" "}
                {currentShop.ownerName}
              </div>
              <div>
                <label>
                  <strong>Village:</strong>
                </label>{" "}
                {currentShop.village}
              </div>

              <div>
                <label>
                  <strong>Taluka:</strong>
                </label>{" "}
                {currentShop.taluka}
              </div>
              <div>
                <label>
                  <strong>District:</strong>
                </label>{" "}
                {currentShop.district}
              </div>
              <div>
                <label>
                  <strong>Contact:</strong>
                </label>{" "}
                {currentShop.contact}
              </div>
              <div>
                <label>
                  <strong>Rating:</strong>
                </label>{" "}
                {currentShop.rating}
              </div>
              
              <p><b style={{color: "black"}}>*You can contact to shop owner to get the product using given Contact number*</b></p>
             
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

