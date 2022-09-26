import React, { Component } from "react";
import CropDetailDataService from "../services/cropdetail.service";
import { Link } from "react-router-dom";
import ShopListByProduct from "./shop-list-byproduct.component";

export default class CropDetailList extends Component 
{
  constructor(props) {
    super(props);
   // this.onChangeSearch = this.onChangeSearchContact.bind(this);
    this.retrieveDaily = this.retrieveDaily.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveDaily = this.setActiveDaily.bind(this);
    // this.removeAllAdmin = this.removeAllAdmin.bind(this);
    // this.searchEmail = this.searchEmail.bind(this);

    this.state = {
      cropdetail: [],
      currentDaily: null,
      currentIndex: -1,
    //   searchEmail: ""
    };
  }

  componentDidMount() {
    this.retrieveDaily();
  }

//   onChangeSearchContact(e) {
//     const searchContact = e.target.value;

//     this.setState({
//       searchContact: this.searchContact
//     });
//   }

  retrieveDaily() {
    CropDetailDataService.getAll()
      .then(response => {
        this.setState({
          cropdetail: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveDaily();
    this.setState({
      currentDaily: null,
      currentIndex: -1
    });
  }

  setActiveDaily(daily, index) {
    this.setState({
      currentDaily: daily,
      currentIndex: index
    });
  }
  render() {
    const { cropdetail, currentDaily, currentIndex } = this.state;

    return (
      <div className="cropdetail">
      <div className="list row">
        
        <div className="col-md-4">
        <label><b style={{color: "skyblue"}}>Click on Crop Name</b></label>
        

          <h4>List of Crop</h4>

          <ul className="list-group">
            {
            cropdetail &&
              cropdetail.map((daily, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveDaily(daily, index)}
                  key={index}
                >
                  {daily.cropName}
                 
                
                </li>
                
                
              ))}
       
           
          </ul>

          {/* <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllAdmin}
          >
            Remove All
          </button> */}
        </div>
        {"\u00a0\u00a0"}{"\u00a0\u00a0"}{"\u00a0\u00a0"}{"\u00a0\u00a0"}{"\u00a0\u00a0"}{"\u00a0\u00a0"}
        {"\u00a0\u00a0"}
        <div className="col-lg-7">
          {currentDaily ? (
            <div>
              <h4>Crop Information</h4>
              <div>
                <label>
                  <strong>Crop Name:</strong>
                </label>{" "}
                {currentDaily.cropName}
              </div>
              <div>
                <label>
                  <strong> Crop Type:</strong>
                </label>{" "}
                {currentDaily.cropType}
              </div>
              <div>
                <label>
                  <strong>Plantation Information:</strong>
                </label>{" "}
                {currentDaily.plantationInfo}
              </div>
              <div>
                <label>
                  <strong>Phase1:</strong>
                </label>{" "}
                {currentDaily.phase1}
                
                <br/>
                {/* <Link to={"/shoplistbyproduct"}>
                <button className="btn btn-success">Shop List</button> 
                </Link> */}
              
                 
              </div>
              <hr/>

              <div>
                <label>
                  <strong>Phase2</strong>
                </label>{" "}
                {currentDaily.phase2}
                {/* <br/>
                <button className="btn btn-success"> <Link to={"/shoplistbyproduct"}></Link>Shop List</button>   */}
              </div>
              <hr/>
              <div>
                <label>
                  <strong>Phase3:</strong>
                </label>{" "}
                {currentDaily.phase3}
                {/* <br/>
                <button className="btn btn-success"> <Link to={"/shoplistbyproduct"}></Link>Shop List</button> */}
              </div>
              <hr/>
              
              <div>
                <label>
                  <strong>Phase4:</strong>
                </label>{" "}
                {currentDaily.phase4}
                <br/>
                <Link to={"/shoplistbyproduct"}> <button className="btn btn-success"> Shop List</button></Link>
              </div>
         
            </div>
          ) : (
            <div>
              <br />
             
            </div>
          )}
        </div>      
      </div>
      </div>
    );
  }
}
