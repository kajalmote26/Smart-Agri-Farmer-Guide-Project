import React, { Component } from "react";
import MerchantDataService from '../services/merchant.service';
import AdminHome from "./adminhome";
export default class MerchantUpdate extends Component {
  constructor(props) {
    super(props);
    this.onChangeMerchantName = this.onChangeMerchantName.bind(this);
    this.onChangeMarketName = this.onChangeMarketName.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);

    this.updateMerchant = this.updateMerchant.bind(this);


    this.state = {
      currentMerchant: {
        id: null,
        merchantName: "",
        marketName: "",
        city: "",
        contact: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getMerchant(this.props.match.params.id);
  }

  onChangeMerchantName(e) {
    const merchantName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentMerchant: {
          ...prevState.currentMerchant,
          merchantName: merchantName
        }
      };
    });
  }

  onChangeMarketName(e) {
    const marketName = e.target.value;

    this.setState(prevState => ({
      currentMerchant: {
        ...prevState.currentMerchant,
        marketName: marketName
      }
    }));
  }

  onChangeCity(e) {
    const city = e.target.value;

    this.setState(prevState => ({
      currentMerchant: {
        ...prevState.currentMerchant,
        city: city
      }
    }));
  }
  onChangeContact(e) {
    const contact = e.target.value;

    this.setState(prevState => ({
      currentMerchant: {
        ...prevState.currentMerchant,
        contact: contact
      }
    }));
  }

  getMerchant(id) {
    MerchantDataService.get(id)
      .then(response => {
        this.setState({
          currentMerchant: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  updateMerchant() {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    const mobregex = RegExp("^[0-9]{10}$");
    if (this.state.currentMerchant.merchantName != "" && this.state.currentMerchant.marketName != "" && this.state.currentMerchant.city != "" && this.state.currentMerchant.contact) {
      if (mobregex.test(this.state.currentMerchant.contact)) {
        if (textregex.test(this.state.currentMerchant.merchantName) && textregex.test(this.state.currentMerchant.marketName) && textregex.test(this.state.currentMerchant.city)) {
          MerchantDataService.update(
            this.state.currentMerchant.id,
            this.state.currentMerchant
          )
            .then(response => {
              console.log(response.data);
              this.setState({
                message: "The Merchant  updated successfully!"
              });
              alert(this.state.message);
            })
            .catch(e => {
              console.log(e);
            });
        }
        else {
          alert("Merchant Name, Market Name, City should be Text only.");
        }
      }
      else {
        alert("Contact number should contain 10 Digits...");
      }
    }
    else {
      alert("All fields are Mandatory... \n Please fill data in all fields.");
    }
  }



  render() {
    const { currentMerchant } = this.state;


    return (
      <div>
        <div className='adminhome'>
          <AdminHome />
          {currentMerchant ? (
            <div className="edit-form">
              <h4>Merchant</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Merchant Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="merchantName"
                    value={currentMerchant.merchantName}
                    onChange={this.onChangeMerchantName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Market Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="marketName"
                    value={currentMerchant.marketName}
                    onChange={this.onChangeMarketName}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">City:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    value={currentMerchant.city}
                    onChange={this.onChangeCity}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Contact No</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contact"
                    value={currentMerchant.contact}
                    onChange={this.onChangeContact}
                  />
                </div>
              </form>


              <button
                type="submit"
                className="btn btn-primary ml-2"
                onClick={this.updateMerchant}
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

