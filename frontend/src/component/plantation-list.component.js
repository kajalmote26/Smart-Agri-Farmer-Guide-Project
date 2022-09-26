import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import PlantationDataService from "../services/plantation.service";
import AdminHome from "./adminhome";

const PlantationList = () => {
    const[plantations, setPlantations] =useState([]);
    const init = () => {
        PlantationDataService.getAll()
           .then(response => {
             console.log('Printing Plantation data', response.data);
             setPlantations(response.data);
           })
           .catch(error => {
             console.log('Something went wrong', error);
           }) 
       }
    
       useEffect(() => {
         init();
       }, []);
     
    //    const handleDelete = (id) => {
    //      console.log('Printing id', id);
    //      PlantationDataService.delete(id)
    //        .then(response => {
    //          console.log('shop deleted successfully', response.data);
    //          init();
    //        })
    //        .catch(error => {
    //          console.log('Something went wrong', error);
    //        })
    //    }
     
       return (
         <div className="container">
           <AdminHome/>
           <h3>List of Plants</h3>
           <hr/>
           <div>
             <Link to="/addplantation" className="btn btn-primary mb-2">Add Plant</Link>
             <table className="table table-bordered table-striped">
               <thead className="thead-dark">
                 <tr>
                   <th>Crop Name</th>
                   <th>Crop Type</th>
                   <th>Month</th>
                   <th>Growth Duration</th>             
                   
                   <th>Weather Information</th>
                   <th>Minimum Price</th>
                   <th>Maximum Price</th>
                 </tr>
               </thead>
               <tbody>
               {
                 plantations.map(plantation => (
                   <tr key={plantation.id}>
                     <td>{plantation.cropName}</td>
                     <td>{plantation.cropType}</td>
                     <td>{plantation.month}</td>
                     <td>{plantation.growthDuration}</td>
                     
                     <td>{plantation.weatherInfo}</td>                
                     <td>{plantation.minPrice}</td>
                     <td>{plantation.maxPrice}</td>
                   </tr>
                 ))
               }
               </tbody>
             </table>             
           </div>
         </div>
       );
     }
     
     export default PlantationList;
     
