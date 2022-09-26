import React, { Component } from "react";
import CropDetailDataService from "../services/cropdetail.service";
import { Switch, Route, Link } from "react-router-dom";
import AdminHome from "./adminhome";

export default class AddCropDetail extends Component {
  constructor(props) {
    super(props);
    this.onChangeCropName = this.onChangeCropName.bind(this);
    this.onChangeCropType = this.onChangeCropType.bind(this);
    this.onChangeCropInfo = this.onChangeCropInfo.bind(this);
    this.onChangePlantationInfo = this.onChangePlantationInfo.bind(this);
    this.onChangePhase1 = this.onChangePhase1.bind(this);
    this.onChangePhase2 = this.onChangePhase2.bind(this);
    this.onChangePhase3 = this.onChangePhase3.bind(this);
    this.onChangePhase4 = this.onChangePhase4.bind(this);
    this.saveCropDetail = this.saveCropDetail.bind(this);
    this.newCropDetail = this.newCropDetail.bind(this);


    this.state = {
      id: null,
      cropName: "",
      cropType: "",
      cropInfo: "",
      plantationInfo: "",
      phase1: "",
      phase2: "",
      phase3: "",
      phase4: ""
    };
  }

  onChangeCropName(e) {
    this.setState({
      cropName: e.target.value
    });
  }

  onChangeCropType(e) {
    this.setState({
      cropType: e.target.value
    });
  }
  onChangeCropInfo(e) {
    this.setState({
      cropInfo: e.target.value
    });
  }

  onChangePlantationInfo(e) {
    this.setState({
      plantationInfo: e.target.value
    });
  }


  onChangePhase1(e) {
    this.setState({
      phase1: e.target.value
    });
  }
  onChangePhase2(e) {
    this.setState({
      phase2: e.target.value
    });
  }

  onChangePhase3(e) {
    this.setState({
      phase3: e.target.value
    });
  }
  onChangePhase4(e) {
    this.setState({
      phase4: e.target.value
    });
  }

  saveCropDetail() {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    if (this.state.cropName != "" && this.state.cropType != "" && this.state.cropInfo != "" && this.state.plantationInfo != "" && this.state.phase1 != "" && this.state.phase2 != "" && this.state.phase3 != "" && this.state.phase4) {
      if(textregex.test(this.state.cropName)){
      var data =
      {
        cropName: this.state.cropName,
        cropType: this.state.cropType,
        cropInfo: this.state.cropInfo,
        plantationInfo: this.state.plantationInfo,
        phase1: this.state.phase1,
        phase2: this.state.phase2,
        phase3: this.state.phase3,
        phase4: this.state.phase4
      };

      CropDetailDataService.create(data)
        .then(response => {
          this.setState({
            id: response.data.id,
            cropName: this.state.cropName,
            cropType: this.state.cropType,
            cropInfo: this.state.cropInfo,
            plantationInfo: this.state.plantationInfo,
            phase1: this.state.phase1,
            phase2: this.state.phase2,
            phase3: this.state.phase3,
            phase4: this.state.phase4,

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
        alert("Crop Name should contain text only.");
      }
    }
    else {
      alert("Please enter data all fields");
    }
  }

  newCropDetail() {
    this.state = {
      id: null,
      cropName: "",
      cropType: "",
      cropInfo: "",
      plantationInfo: "",
      phase1: "",
      phase2: "",
      phase3: "",
      phase4: ""
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
                <Link to={"/cropdetail1"} className="navbar-brand">


                  <button className="btn btn-success">Crop Detail List</button>
                </Link>
              </div>
            ) : (
              <div>

                <h4><b> Crop Details</b></h4>
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
                    placeholder="Enter Crop"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="title">Crop Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cropType"
                    required
                    value={this.state.cropType}
                    onChange={this.onChangeCropType}
                    name="cropType"
                    placeholder="Enter Crop Type"
                  />
                </div>

                <div className="mb-3 pt-0">
                  <label htmlFor="title">Crop Information</label>
                  <textarea cols={50}
                    placeholder="Crop Information"
                    name="cropInfo"
                    id="cropInfo"
                    type="text"
                    value={this.state.cropInfo}
                    onChange={this.onChangeCropInfo}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>

                <div className="mb-3 pt-0">
                  <label htmlFor="title">Plantation Information</label>
                  <textarea cols={50}
                    placeholder="Plantation Information"
                    name="plantationInfo"
                    id="plantationInfo"
                    type="text"
                    value={this.state.plantationInfo}
                    onChange={this.onChangePlantationInfo}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>


                <div className="mb-3 pt-0">
                  <label htmlFor="title">Phase 1 of cultivation</label>
                  <textarea cols={50}
                    placeholder="Cultivation Information"
                    name="phase1"
                    id="phase1"
                    type="text"
                    value={this.state.phase1}
                    onChange={this.onChangePhase1}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>



                <div className="mb-3 pt-0">
                  <label htmlFor="title">Phase 2 of cultivation</label>
                  <textarea cols={50}
                    placeholder="Cultivation Information"
                    name="phase2"
                    id="phase2"
                    type="text"
                    value={this.state.phase2}
                    onChange={this.onChangePhase2}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>


                <div className="mb-3 pt-0">
                  <label htmlFor="title">Phase 3 of cultivation</label>
                  <textarea cols={50}
                    placeholder="Cultivation Information"
                    name="phase3"
                    id="phase3"
                    type="text"
                    value={this.state.phase3}
                    onChange={this.onChangePhase3}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>



                <div className="mb-3 pt-0">
                  <label htmlFor="title">Phase 4 of cultivation</label>
                  <textarea cols={50}
                    placeholder="Cultivation Information"
                    name="phase4"
                    id="phase4"
                    type="text"
                    value={this.state.phase4}
                    onChange={this.onChangePhase4}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>


                <button onClick={this.saveCropDetail} className="btn btn-success">
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
