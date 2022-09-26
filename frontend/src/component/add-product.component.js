import React, { Component } from "react";
import ProductDataService from "../services/product.service";
import { Switch, Route, Link } from "react-router-dom";
import ShopHome from "./shophome";
import {useRef} from 'react';
import { useEffect,useState } from "react";
import e from "cors";
import SProductList from "./shop/productlcompo";
export default class AddProduct extends Component {
   
  constructor(props) {
    super(props);
  this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
    this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
    this.onChangeShopId = this.onChangeShopId.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);

    this.state = {
      id: null,
      productName: "",
      categoryName: "", 
      productPrice: "",
      shopId:"",
    };
  }

  onChangeProductName(e) {
    this.setState({
      productName: e.target.value
    });
  }
  onChangeCategoryName(e) {
    this.setState({
      categoryName: e.target.value
    });
  }

  onChangeProductPrice(e) {
    this.setState({
      productPrice: e.target.value
    });
  }
  onChangeShopId(e) {
    this.setState({
      shopId: e.target.value
    });
   

  }
  

  saveProduct() 
  {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    if(this.state.productName!="" && this.state.categoryName!="" && this.state.productPrice!="" && this.state.shopId!="")
    {
      if (textregex.test(this.state.categoryName)) {
      var data = 
      {
        productName: this.state.productName,
        categoryName: this.state.categoryName,
        productPrice: this.state.productPrice ,
        shopId: this.state.shopId      
      };

      ProductDataService.create(data,this.state.shopId)
      .then(response => 
      {
        this.setState({
          id: response.data.id,
          productName: response.data.productName,
          categoryName: response.data.categoryName,
          productPrice: response.data.productPrice,
          shopId: this.state.shopId ,  
          submitted: true
        });
        console.log(this.state.shopId);
        console.log(response.data);
      })
      .catch(e => 
      {
        console.log(e);
      });
    }
    else
    {
      alert("Category Name contains Text only.");
    }
    }
    else
    {
      alert("Please enter all fields!!!");
    }
  }

  newProduct() {
    this.state = {
        id: null,
        productName: "",
        categoryName: "", 
        productPrice: "",
        shopId:""
    };
  }

   
  
    

  render() {
    return (
      <div>
        <ShopHome/>  

      <div className="shopimage1">
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h5>Product added successfully!</h5>
            <Link to={"/products"} className="navbar-brand">
              

              <button className="btn btn-success">Show Products List</button>
          </Link>
          </div>
        ) : (
          <div>
             <h4><b>Add Product</b></h4>
            <div className="form-group">
              <label htmlFor="title">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.productName}
                onChange={this.onChangeProductName}
                name="productName"
                placeholder="Enter Product Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Category Name</label>
              <input
                type="text"
                className="form-control"
                id="category"
                required
                value={this.state.categoryName}
                onChange={this.onChangeCategoryName}
                name="category"
                placeholder="Enter Category Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Product Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                required
                value={this.state.productPrice}
                onChange={this.onChangeProductPrice}
                name="price"
                placeholder="Enter Product Price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Shop Id</label>
              <input
              
                type="number"
                className="form-control"
                id="shopId"
                required
                value={this.state.shopId}
                onChange={this.onChangeShopId}
                name="shopId"
                placeholder="Enter Shop Id"
              />
            </div>


            <button onClick={this.saveProduct} className="btn btn-success">
              Add
            </button>
          </div>
        )}
      </div>
      </div>
     
      </div>
    );
  }
}
