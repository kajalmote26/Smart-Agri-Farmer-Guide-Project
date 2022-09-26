import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import AdminDataService from '../services/admin.service';
import AdminHome from './adminhome';

const AdminList = () => {

  const [admins, setAdmins] = useState([]);

  const init = () => {
    AdminDataService.getAll()
      .then(response => {
        console.log('Printing Admin data', response.data);
        setAdmins(response.data);
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
    AdminDataService.delete(id)
      .then(response => {
        console.log('Admin deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div className="container">
      <AdminHome/>
      <h3>List of Admin</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Admin</Link>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
             
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            admins.map(admin => (
              <tr key={admin.id}>
                <td>{admin.userName}</td>
                <td>{admin.email}</td>
                {/* <td>{admin.contact}</td> */}
                <td>{admin.password}</td>
                
                <td>
                  {/* <Link className="btn btn-info" to={`/admins/edit/${admin.id}`}>Edit</Link> */}
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(admin.id);
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

export default AdminList;
