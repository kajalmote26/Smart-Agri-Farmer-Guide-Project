import React, { Component } from "react";
import DiseasesDataService from "../services/diseases.service";
import { Link } from "react-router-dom";

export default class DiseasesByCrop extends Component
 {
  constructor(props) {
    super(props);
    this.onChangeSearchCropName = this.onChangeSearchCropName.bind(this);
    this.retrieveDiseases = this.retrieveDiseases.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveDisease = this.setActiveDisease.bind(this);
    this.removeAllDiseases = this.removeAllDiseases.bind(this);
    this.searchCropName = this.searchCropName.bind(this);

    this.state = {
      diseases: [],
      currentDisease: null,
      currentIndex: -1,
      searchCropName: ""
    };
  }

  componentDidMount() {
    this.retrieveDiseases();
  }

  onChangeSearchCropName(e) {
    const searchCropName = e.target.value;

    this.setState({
      searchCropName: searchCropName
    });
  }

  retrieveDiseases() {
    DiseasesDataService.findByCropName()
      .then(response => {
        this.setState({
          diseases: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveDiseases();
    this.setState({
      currentDisease: null,
      currentIndex: -1
    });
  }

  setActiveDisease(disease, index) {
    this.setState({
      currentDisease: disease,
      currentIndex: index
    });
  }

  removeAllDiseases() {
    DiseasesDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchCropName() {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    this.setState({
      currentDisease: null,
      currentIndex: -1
    });
    if(this.state.searchCropName!="")
    {
      if(textregex.test(this.state.searchCropName)){
    DiseasesDataService.findByCropName(this.state.searchCropName)
      .then(response => {
        this.setState({
          diseases: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    }
    else
    {
      alert("Crop Name must be Text");
    }
    }
    else
    {
      alert("Please enter Crop Name");
    }
  }

  render() {
    const { searchCropName, diseases, currentDisease, currentIndex } = this.state;

    return (
      <div className="disease">
      <div className="disease">
      <div className="list row">
        <div className="col-md-8">
          <p><b>To get Disease list enter Crop Name</b></p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Crop Name"
              value={searchCropName}
              onChange={this.onChangeSearchCropName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={this.searchCropName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Disease List</h4>

          <ul className="list-group">
            {diseases &&
              diseases.map((disease, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveDisease(disease, index)}
                  key={index}
                >
                  {disease.diseaseName}
                </li>
              ))}
          </ul>

         
        </div>

        <div className="col-md-6">
          {currentDisease ? (
            <div>
              <h4>Diseases</h4>
              <div>
                <label>
                  <strong>Disease Name:</strong>
                </label>{" "}
                {currentDisease.diseaseName}
              </div>
              <div>
                <label>
                  <strong>Disease Information:</strong>
                </label>{" "}
                {currentDisease.diseaseInfo}
              </div>
              <div>
                <label>
                  <strong>Pesticide:</strong>
                </label>{" "}
                {currentDisease.pesticide}
              </div>

              <div>
                <label>
                  <strong>PlantProtection:</strong>
                </label>{" "}
                {currentDisease.plantProtection}
              </div>
              <br/>
             <p><b style={{color:"black"}}>You can get Pesticides and Fertilizers from the Shops given in the Shop List</b></p> 
            
            <Link to={"/shoplistbyproduct"}> <button className="btn btn-success"> Shop List</button></Link>
             
            </div>
          ) : (
            <div>
              
            </div>
          )}
        </div>
      </div>
    
      </div>
      </div>
    );
  }
}

