import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import DriverDataService from '../services/driver.service';
import AdminHome from './adminhome';

const DriverList = () => {

  const [drivers, setDrivers] = useState([]);

  const init = () => {
    DriverDataService.getAll()
      .then(response => {
        console.log('Printing Driver data', response.data);
        setDrivers(response.data);
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
    DriverDataService.delete(id)
      .then(response => {
        console.log('Driver deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className='adminhome'>
      <AdminHome/>
      <h3>List of Drivers</h3>
      <hr/>
      <div>
        {/* <Link to="/adddriver" className="btn btn-primary mb-2">Add Driver</Link> */}
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Driver First Name</th>
              <th>Driver Last Name</th>
              <th>Contact</th>
              <th>License Number</th>
              <th>Village</th>
              <th>Taluka</th>
              <th>District</th>
              <th>Vehicale Number</th>
              <th>Capacity</th>
              <th>Rate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            drivers.map(driver => (
              <tr key={driver.id}>
                <td>{driver.driverFname}</td>
                <td>{driver.driverLname}</td>
                <td>{driver.contact}</td>
                <td>{driver.licenseNo}</td>
                <td>{driver.village}</td>
                <td>{driver.taluka}</td>
                <td>{driver.district}</td>
                <td>{driver.vehicleNo}</td>
                <td>{driver.capacity}</td>
                <td>{driver.ratePerKm}</td>
                <td>
                  {/* <Link className="btn btn-info" to={`/admins/edit/${admin.id}`}>Edit</Link> */}
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(driver.id);
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

export default DriverList;
