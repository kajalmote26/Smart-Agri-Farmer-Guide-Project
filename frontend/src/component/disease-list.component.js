import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import DiseasesDataService from '../services/diseases.service';
import AdminHome from './adminhome';

const DiseasesList = () => {

  const [diseases, setDiseases] = useState([]);

  const init = () => {
    DiseasesDataService.getAll()
      .then(response => {
        console.log('Printing Diseases data', response.data);
        setDiseases(response.data);
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
    DiseasesDataService.delete(id)
      .then(response => {
        console.log('Disease  deleted successfully', response.data);
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
      <h3>List of Diseases</h3>
      <hr/>
      <div>
        <Link to="/adddiseases" className="btn btn-primary mb-2">Add Diseases</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Crop Name</th>
              <th>Disease Name</th>
              <th>Disease Information</th>
              <th>Pesticide</th>
              <th>Plant Protection</th>             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            diseases.map(disease => (
              <tr key={disease.id}>
                <td>{disease.cropName}</td>
                <td>{disease.diseaseName}</td>
                <td>{disease.diseaseInfo}</td>
                <td>{disease.pesticide}</td>
                <td>{disease.plantProtection}</td>
                <td>
                  {/* <Link className="btn btn-info" to={`/admins/edit/${admin.id}`}>Edit</Link> */}
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(disease.id);
                  }}>Delete</button>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                   <Link variant="info" to={"/diseaseupdate/" + disease.id}><button className="btn btn-primary ml-2">Edit</button></Link>
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

export default DiseasesList;
