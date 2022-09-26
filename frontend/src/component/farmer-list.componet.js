import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserDataService from '../services/user.service';
import AdminHome from './adminhome';
const FarmerList = () => {

  const [farmers, setFarmers] = useState([]);

  const init = () => {
    UserDataService.getAll()
      .then(response => {
        console.log('Printing Farmer data', response.data);
        setFarmers(response.data);
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
    UserDataService.delete(id)
      .then(response => {
        console.log('Farmer deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <AdminHome/>
      <h3>List of Farmer</h3>
      <hr/>
      <div>
        <Link to="/addfarmer" className="btn btn-primary mb-2">Add Farmer</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Village</th>
              <th>Taluka</th>
              <th>District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            farmers.map(farmer => (
              <tr key={farmer.id}>
                <td>{farmer.name}</td>
                <td>{farmer.contact}</td>
                <td>{farmer.village}</td>
                <td>{farmer.taluka}</td>
                <td>{farmer.district}</td>
                <td>
                  {/* <Link className="btn btn-info" to={`/admins/edit/${admin.id}`}>Edit</Link> */}
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(farmer.id);
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

export default FarmerList;
