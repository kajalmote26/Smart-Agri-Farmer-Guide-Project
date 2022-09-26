import React, { Component } from "react";
import DiseasesDataService from "../services/diseases.service";
import { Switch, Route, Link } from "react-router-dom";
import AdminHome from "./adminhome";

export default class AddDiseases extends Component {
  constructor(props) {
    super(props);
    this.onChangeCropName = this.onChangeCropName.bind(this);
    this.onChangeDiseaseName = this.onChangeDiseaseName.bind(this);
    this.onChangeDiseaseInfo = this.onChangeDiseaseInfo.bind(this);
    this.onChangePesticide = this.onChangePesticide.bind(this);
    this.onChangePlantProtection = this.onChangePlantProtection.bind(this);
    this.saveDisease = this.saveDisease.bind(this);
    this.newDisease = this.newDisease.bind(this);

    this.state = {
      id: null,
      cropName: "",
      diseaseName: "",
      diseaseInfo: "",
      pesticide: "",
      plantProtection: ""
    };
  }

  onChangeCropName(e) {
    this.setState({
      cropName: e.target.value
    });
  }

  onChangeDiseaseName(e) {
    this.setState({
      diseaseName: e.target.value
    });
  }
  onChangeDiseaseInfo(e) {
    this.setState({
      diseaseInfo: e.target.value
    });
  }

  onChangePesticide(e) {
    this.setState({
      pesticide: e.target.value
    });
  }


  onChangePlantProtection(e) {
    this.setState({
      plantProtection: e.target.value
    });
  }

  saveDisease() 
  {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    if(this.state.cropName!="" && this.state.diseaseName!="" && this.state.diseaseInfo!="" && this.state.pesticide!="" && this.state.plantProtection)
    {
      if(textregex.test(this.state.cropName))
      {
        var data = {
          cropName: this.state.cropName,
          diseaseName: this.state.diseaseName,
          diseaseInfo: this.state.diseaseInfo,
          pesticide: this.state.pesticide,
          plantProtection: this.state.plantProtection
        };

        DiseasesDataService.create(data)
        .then(response => {
          this.setState({
            id: response.data.id,
            cropName: this.state.cropName,
            diseaseName: this.state.diseaseName,
            diseaseInfo: this.state.diseaseInfo,
            pesticide: this.state.pesticide,
            plantProtection: this.state.plantProtection,
            submitted: true
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      }
      else
      {
        alert("Crop name contain Text only");
      }
    }
    else
    {
      alert("All fields are Mandatory... \n Please fill data in all fields.");
    }
  }

  newDisease() {
    this.state = {
      id: null,
      cropName: "",
      diseaseName: "",
      diseaseInfo: "",
      pesticide: "",
      plantProtection: ""
    };
  }

  render() {
    return (
      <div>
        <div className='adminhome'>
          <AdminHome />

          <div className="submit-form">
            {this.state.submitted ? (
              <div>
                <h4>You submitted successfully!</h4>
                <Link to={"/diseaseslist1"} className="navbar-brand">


                  <button className="btn btn-success">Show Diseases List</button>
                </Link>
              </div>
            ) : (
              <div>

                <h4><b>Disease</b></h4>
                <div className="form-group">
                  <label htmlFor="title">Crop Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cropName"
                    required
                    value={this.state.cropName}
                    onChange={this.onChangeCropName}
                    name="cropName"
                    placeholder="Enter Crop Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Disease Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="diseaseName"
                    required
                    value={this.state.diseaseName}
                    onChange={this.onChangeDiseaseName}
                    name="diseaseName"
                    placeholder="Enter Disease Name"
                  />
                </div>

                <div className="mb-3 pt-0">
                  <label htmlFor="title">Disease Information</label>
                  <textarea cols={50}
                    placeholder="Disease Information"
                    name="diseaseInfo"
                    id="diseaseInfo"
                    type="text"
                    value={this.state.diseaseInfo}
                    onChange={this.onChangeDiseaseInfo}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Pesticide</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pesticide"
                    required
                    value={this.state.pesticide}
                    onChange={this.onChangePesticide}
                    name="pesticide"
                    placeholder="Enter Pesticide"
                  />
                </div>


                <div className="mb-3 pt-0">
                  <label htmlFor="title">Plant Protection</label>
                  <textarea cols={50}
                    placeholder="Plant Protection"
                    name="plantProtection"
                    id="plantProtection"
                    type="text"
                    value={this.state.plantProtection}
                    onChange={this.onChangePlantProtection}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>

                <button onClick={this.saveDisease} className="btn btn-success">
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
