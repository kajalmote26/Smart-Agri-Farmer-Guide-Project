import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import CropDetailDataService from '../services/cropdetail.service';
import AdminHome from './adminhome';

const CropDetail = () => {

  const [cropdetails, setCropdetails] = useState([]);

  const init = () => {
    CropDetailDataService.getAll()
      .then(response => {
        console.log('Printing Crop Detail data', response.data);
        setCropdetails(response.data);
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
    CropDetailDataService.delete(id)
      .then(response => {
        console.log('Crop Detail deleted successfully', response.data);
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
      <h3>List of Crop Detail</h3>
      <hr/>
      <div>
        <Link to="/addcropdetail" className="btn btn-primary mb-2">Add Crop </Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Crop Name</th>
              <th>Crop Type</th>
              <th>Crop Information</th>
              <th>Plantation Information</th>
              <th> Phase 1</th>
              <th> Phase 2</th>
              <th> Phase 3</th>
              <th> Phase 4</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            cropdetails.map(cropdetail => (
              <tr key={cropdetail.id}>
                <td>{cropdetail.cropName}</td>
                <td>{cropdetail.cropType}</td>
                <td>{cropdetail.cropInfo}</td>
                <td>{cropdetail.plantationInfo}</td>
                <td>{cropdetail.phase1}</td>
                <td>{cropdetail.phase2}</td>
                <td>{cropdetail.phase3}</td>
                <td>{cropdetail.phase4}</td>
                
                <td>
                  {/* <Link className="btn btn-info" to={`/admins/edit/${admin.id}`}>Edit</Link> */}
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(cropdetail.id);
                  }}>Delete</button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link variant="info" to={"/cropdetailupdate/" + cropdetail.id}><button className="btn btn-primary ml-2">Edit</button></Link>

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

export default CropDetail;
