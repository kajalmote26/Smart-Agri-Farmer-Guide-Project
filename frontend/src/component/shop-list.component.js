import React, { Component } from "react";
import ShopDataService from "../services/shop.service";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import AdminHome from "./adminhome";

const ShopList = () => {

  const [shops, setShops] = useState([]);

  const init = () => {
   ShopDataService.getAll()
      .then(response => {
        console.log('Printing shop data', response.data);
        setShops(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    ShopDataService.delete(id)
      .then(response => {
        console.log('shop deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className='adminhome'>
      <AdminHome/>
      <h3>List of Shop</h3>
      <hr/>
      <div>
        {/* <Link to="/addshop" className="btn btn-primary mb-2">Add Shop</Link> */}
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr> 
              <th>Shop Name</th>
              <th>Shop Owner Name</th>             
              <th>Shop License Number</th>
              <th>Contact</th>
              <th>Village</th>
              <th>Taluka</th>
              <th>District</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            shops.map(shop => (
              <tr key={shop.id}>
                <td>{shop.shopName}</td>
                <td>{shop.ownerName}</td>
                <td>{shop.licenseNo}</td>
                <td>{shop.contact}</td>                
                <td>{shop.village}</td>
                <td>{shop.taluka}</td>
                <td>{shop.district}</td>
               
                <td>
                  {/* <Link className="btn btn-info" to={`/admins/edit/${admin.id}`}>Edit</Link> */}
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(shop.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
  );
}

export default ShopList;
