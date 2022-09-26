import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import MerchantDataService from '../services/merchant.service';
import AdminHome from './adminhome';

const MerchantList = () => {

  const [merchants, setMerchants] = useState([]);

  const init = () => {
   MerchantDataService.getAll()
      .then(response => {
        console.log('Printing Merchant List data', response.data);
        setMerchants(response.data);
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
    MerchantDataService.delete(id)
      .then(response => {
        console.log('Merchant deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <div className='adminhome'>
      <AdminHome/>
      <h3>List of Merchant</h3>
      <hr/>
      <div>
        <Link to="/addmerchant" className="btn btn-primary mb-2">Add Merchant </Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Merchant Name</th>
              <th>Market Name</th>
              <th>City</th>
              <th>Contact No</th>             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            merchants.map(merchant => (
              <tr key={merchant.id}>
                <td>{merchant.merchantName}</td>
                <td>{merchant.marketName}</td>
                <td>{merchant.city}</td>
                <td>{merchant.contact}</td>
                
                
                <td>
                  {/* <Link className="btn btn-info" to={`/admins/edit/${admin.id}`}>Edit</Link> */}
                  
                  <button className="btn btn-danger ml-0" onClick={() => {
                    handleDelete(merchant.id);
                  }}>Delete</button>
                  
                   <Link variant="info" to={"/merchantupdate/" + merchant.id}><button className="btn btn-primary ml-2">Edit</button></Link>
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

export default MerchantList;
