import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
 import DailyDataService from '../services/daily.service';
// //import background from "./images/1.jpeg";

const Home = () => {

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
  

  // const searchbydate=(value)=>{

  //   DailyDataService.getByDate(value)
  //   .then(response => {
  //     console.log('Printing daily Rates data', response.data);
  //     setDailyRates(response.data);
      
  //   })
  //   .catch(error => {
  //     console.log('Something went wrong', error);
  //   }) 
    
  // }
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
    <div >
      
      {/* <div className='ui segment search-bar'>
        <form className='ui-form'>
          <div className='field'>
            <label>Search</label>
            <input type="text" id='ser' value={onchange.bind.searchbydate} />
            <button onClick={searchbydate}>Submit</button>
          </div>
        </form>
      </div>
      */}
      
    <div className="container">
      <div className='img' >
      {/* <img src={process.env.PUBLIC_URL+"/images/1.jpeg"} alt="active" width="100%" height="100%" /> */}

      <h3>List of Daily Rates</h3>
      <hr />
      <div>
     
        
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
            <th>Current Date</th>
              <th>Crop Name</th>
              <th>Crop Type</th>
              <th>Quantity</th>
              <th>Minimum Price</th>
              <th>Maximum Price</th>
              <th>Location</th>
             
              
             
            </tr>
          </thead>
          <tbody>
          {
            dailyRates.map(daily => (
              <tr key={daily.id}>
                 <td>{daily.cdate}</td>
                <td>{daily.crop_Name}</td>
                <td>{daily.cropType}</td>
                <td>{daily.quantity}</td>
                <td>{daily.minPrice}</td>
                <td>{daily.maxPrice}</td>
                <td>{daily.location}</td>
               
                
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
      </div>
    </div>
    </div>
  );
}

export default Home;




// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.onChangeSearchCdate = this.onChangeSearchCdate.bind(this);
//     this.retrieveDailyRates = this.retrieveDailyRates.bind(this);
//     this.refreshList = this.refreshList.bind(this);
//     this.setActiveDailyRate = this.setActiveDailyRate.bind(this);
//     // this.removeAllDailyRates = this.removeAllTutorials.bind(this);
//     this.searchCdate = this.searchCdate.bind(this);

//     this.state = {
//       DailyRates: [],
//       currentDailyRate: null,
//       currentIndex: -1,
//       searchCdate: ""
//     };
//   }

//   componentDidMount() {
//     this.retrieveDailyRates();
//   }

//   onChangeSearchCdate(e) {
//     const searchCdate = e.target.value;

//     this.setState({
//       searchCdate: searchCdate
//     });
//   }

//   retrieveDailyRates() {
//     DailyDataService.getAll()
//       .then(response => {
//         this.setState({
//           dailyRates: response.data
//         });
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }

//   refreshList() {
//     this.retrieveDailyRates();
//     this.setState({
//       currentDailyRate: null,
//       currentIndex: -1
//     });
//   }

//   setActiveDailyRate(dailyRate, index) {
//     this.setState({
//       currentDailyRate: dailyRate,
//       currentIndex: index
//     });
//   }

 

//   searchCdate() {
//     this.setState({
//       currentDailyRate: null,
//       currentIndex: -1
//     });

//     DailyDataService.findByDate(this.state.searchCdate)
//       .then(response => {
//         this.setState({
//           dailyRates: response.data
//         });
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }

//   render() {
//     const { searchCdate, dailyRates, currentDailyRate, currentIndex } = this.state;

//     return (
//       <div className="list row">
//         <div className="col-md-8">
//           <div className="input-group mb-3">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search by title"
//               value={searchCdate}
//               onChange={this.onChangeSearchCdate}
//             />
//             <div className="input-group-append">
//               <button
//                 className="btn btn-outline-secondary"
//                 type="button"
//                 onClick={this.searchCdate}
//               >
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <h4>Daily Market Rate List</h4>

//           <ul className="list-group">
//             {dailyRates &&
//               dailyRates.map((dailyRate, index) => (
//                 <li
//                   className={
//                     "list-group-item " +
//                     (index === currentIndex ? "active" : "")
//                   }
//                   onClick={() => this.setActiveDailyRate(dailyRate, index)}
//                   key={index}
//                 >
//                   {dailyRate.cdate}
//                 </li>
//               ))}
//           </ul>

          
//         </div>
//         <div className="col-md-6">
//           {currentDailyRate ? (
//             <div>
//               <h4>Daily Market Rate List</h4>
//               {/* <div>
//                 <label>
//                   <strong>Date:</strong>
//                 </label>{" "}
//                 {currentDailyRate.cdate}
//               </div>
//               <div>
//                 <label>
//                   <strong>Crop Name:</strong>
//                 </label>{" "}
//                 {currentDailyRate.crop_Name}
//               </div>
//               <div>
//                 <label>
//                   <strong>Crop Type:</strong>
//                 </label>{" "}
//                 {currentDailyRate.cropType}
//               </div>
//               <div>
//                 <label>
//                   <strong>Quantity:</strong>
//                 </label>{" "}
//                 {currentDailyRate.quantity}
//               </div>
//               <div>
//                 <label>
//                   <strong>Min Price:</strong>
//                 </label>{" "}
//                 {currentDailyRate.minPrice}
//               </div>
//               <div>
//                 <label>
//                   <strong>Max Price:</strong>
//                 </label>{" "}
//                 {currentDailyRate.maxPrice}
//               </div>
//               <div>
//                 <label>
//                   <strong>Location:</strong>
//                 </label>{" "}
//                 {currentDailyRate.location}
//               </div> */}

       

//          <table className="table table-bordered table-striped">
//            <thead className="thead-dark">
//             <tr>
//              <th>Current Date</th>
//               <th>Crop Name</th>
//                <th>Crop Type</th>
//               <th>Quantity</th>
//                <th>Minimum Price</th>
//                <th>Maximum Price</th>
//               <th>Location</th>
             
              
             
//             </tr>
//            </thead>
//            <tbody>
//            {
//             dailyRates.map(daily => (
//               <tr key={daily.id}>
//                  <td>{daily.cdate}</td>
//                 <td>{daily.crop_Name}</td>
//                 <td>{daily.cropType}</td>
//                 <td>{daily.quantity}</td>
//                 <td>{daily.minPrice}</td>
//                 <td>{daily.maxPrice}</td>
//                 <td>{daily.location}</td>
               
                
//               </tr>
//             ))
//           }
//           </tbody>
//         </table>










//             </div>
//           ) : (
//             <div>
//               <br />
             
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

