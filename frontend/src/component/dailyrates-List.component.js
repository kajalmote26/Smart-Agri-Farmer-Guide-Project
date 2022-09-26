import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import DailyDataService from '../services/daily.service';
import AdminHome from './adminhome';

const DailyList = () => {

  const [dailyRates, setDailyRates] = useState([]);

  const init = () => {
    DailyDataService.getAll()
      .then(response => {
        console.log('Printing daily Rates data', response.data);
        setDailyRates(response.data);
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
    DailyDataService.delete(id)
      .then(response => {
        console.log('daily rates  deleted successfully', response.data);
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
      
      <h3>List of Daily Rates</h3>
      <hr/>
      <div>
        <Link to="/adddailyprice" className="btn btn-primary mb-2">Add Daily Rates</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Crop Name</th>
              <th>Crop Type</th>
              <th>Quantity</th>
              <th>Minimum Price</th>
              <th>Maximum Price</th>
              <th>Location</th>
              <th>Current Date</th>              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            dailyRates.map(daily => (
              <tr key={daily.id}>
                <td>{daily.crop_Name}</td>
                <td>{daily.cropType}</td>
                <td>{daily.quantity}</td>
                <td>{daily.minPrice}</td>
                <td>{daily.maxPrice}</td>
                <td>{daily.location}</td>
                <td>{daily.cdate}</td>
                <td>
                  {/* <Link className="btn btn-info" to={`/admins/edit/${admin.id}`}>Edit</Link> */}
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(daily.id);
                  }}>Delete</button>

<Link variant="info" to={"/dailyrateupdate/" + daily.id}><button className="btn btn-primary ml-2">Edit</button></Link>
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

export default DailyList;
