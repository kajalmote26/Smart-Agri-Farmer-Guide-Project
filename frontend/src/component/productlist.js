import React, { Component } from "react";
import ProductDataService from "../services/product.service";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import ShopHome from "./shophome";
import {useRef} from 'react';


const ProductList = () => {
  const inputRef = useRef(null);
  const inputRef1=useRef(null);
  const [products, setProducts] = useState([]);



  const init = () => {
    //const mobregex = RegExp("^[0-9]{10}$");
    // if(inputRef.current.value!="" && inputRef1.current.value!="")
    // {
      // if(mobregex.test(inputRef1.current.value))
      // {
        ProductDataService.getByNameContact(inputRef.current.value,inputRef1.current.value)
        .then(response => 
        {
          console.log('Printing products data', response.data);
          setProducts(response.data);
         
          console.log(response.data.shop);
          // if(response.data==undefined)
          // {
          //   alert("Given data is not Present....\n Please enter valid UserName and Contact!!!");
          // }
        })
        .catch(error =>
        {
          console.log('Something went wrong', error);
        })
    //   }
    // else
    // {
    //   alert("Contact Number Should contain 10 digits");
    // }
    //}
    // else
    // {
    //   alert("Please enter all fields");
    // } 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    ProductDataService.delete(id)
      .then(response => {
        console.log('product deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

 

  return (
    <div className="container">
      <ShopHome/>
     
      <div className="shopimage1">
      <div>
        <br/>
        <table style={{border:"5px"}}>
          <tr>
            
           <td><b>Shop Name:</b></td>
            <td><input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
        placeholder="Enter Shop Name"
      /></td>
      </tr>
      <tr>
      <td>
        <b>Contact No:</b>
      </td>
      <td>
      <input
        ref={inputRef1}
        type="tel"
        minLength={10}
        maxLength={10}
        id="message"
        name="message"
        placeholder="Enter Contact No"
      />

      
      </td></tr>
      <tr>
      <td>
      <button onClick={init} className="btn btn-primary mb-2">Get  Shop Products List</button>  
        
      </td>
      </tr>
      <tr>
      
      
      <td>
         <Link to="/sreg" ><p><b>New User?? Shop Registration</b></p></Link>
      </td>


          </tr>
        </table>
       
      
    </div><br/>
   
      <h3>List of Products</h3>
      <hr/>
      <div>
        
        <Link to="/addproduct" className="btn btn-primary mb-2">Add Product</Link>
        
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Product Name</th>
              <th>Category Name</th>
              <th>Product Price</th> 
            

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            products.map(product => (
              <tr key={product.id}>
                <td>{product.productName}</td>
                <td>{product.categoryName}</td>
                <td>{product.productPrice}</td>  
                <td>   
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(product.id);
                  }}>Delete</button>

<Link variant="info" to={"/productupdate/" + product.id}><button className="btn btn-primary ml-2">Edit</button></Link>
                </td>
              </tr>
            ))
            
          }
          
          </tbody>
        </table>
        
      </div>
      </div>
    </div>
  );
}

export default ProductList;
