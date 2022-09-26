import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductDataService from '../services/product.service';
import ShopHome from "./shophome";
export default class ProductUpdate extends Component {
  constructor(props) {
    super(props);
    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
    this.updateProduct = this.updateProduct.bind(this);


    this.state = {
      currentProduct: {
        id: null,
        productName: "",
        categoryName: "",
        productPrice: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getProduct(this.props.match.params.id);
  }

  onChangeProductName(e) {
    const productName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentProduct: {
          ...prevState.currentProduct,
          productName: productName
        }
      };
    });
  }

  onChangeCategoryName(e) {
    const categoryName = e.target.value;

    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        categoryName: categoryName
      }
    }));
  }

  onChangeProductPrice(e) {
    const productPrice = e.target.value;

    this.setState(prevState => ({
      currentProduct: {
        ...prevState.currentProduct,
        productPrice: productPrice
      }
    }));
  }


  getProduct(id) {
    ProductDataService.get1(id)
      .then(response => {
        this.setState({
          currentProduct: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  updateProduct() {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    if (this.state.currentProduct.productName != "" && this.state.currentProduct.categoryName != "" && this.state.currentProduct.productPrice != "") {
      if (textregex.test(this.state.currentProduct.productName) && textregex.test(this.state.currentProduct.categoryName)) {
        ProductDataService.update(
          this.state.currentProduct.id,
          this.state.currentProduct)
          .then(response => {
            console.log(response.data);
            this.setState({
              message: "The Product  updated successfully!"
            });
            alert(this.state.message);
          })
          .catch(e => {
            console.log(e);
          });
      }
      else {
        alert("Product Name, Category Name contains Text only.");
      }
    }
    else {
      alert("Please enter all fields data");
    }
  }



  render() {
    const { currentProduct } = this.state;


    return (
      <div>
        <ShopHome />
        <div className="shopimage1">
          {currentProduct ? (
            <div className="edit-form">
              <h4>Products</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    value={currentProduct.productName}
                    onChange={this.onChangeProductName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryName"
                    value={currentProduct.categoryName}
                    onChange={this.onChangeCategoryName}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Product Price:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    value={currentProduct.productPrice}
                    onChange={this.onChangeProductPrice}
                  />
                </div>

              </form>

              <button
                type="submit"
                className="btn btn-primary ml-2"
                onClick={this.updateProduct}

              >
                Update
              </button>
              {/* <link to="/products">
         <button>
        View Updated Product List
         </button>
            </link> */}


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

