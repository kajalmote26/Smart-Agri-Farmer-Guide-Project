import React, { Component } from "react";
import CropDetailService from "../services/cropdetail.service";
import AdminHome from './adminhome';
export default class CropDetailUpdate extends Component {
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
    this.updateCropDetail = this.updateCropDetail.bind(this);


    this.state = {
      currentCropDetail: {
        id: null,
        cropName: "",
        cropType: "",
        cropInfo: "",
        plantationInfo: "",
        phase1: "",
        phase2: "",
        phase3: "",
        phase4: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getCropDetail(this.props.match.params.id);
  }

  onChangeCropName(e) {
    const cropName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCropDetail: {
          ...prevState.currentCropDetail,
          cropName: cropName
        }
      };
    });
  }

  onChangeCropType(e) {
    const cropType = e.target.value;

    this.setState(prevState => ({
      currentCropDetail: {
        ...prevState.currentCropDetail,
        cropType: cropType
      }
    }));
  }

  onChangeCropInfo(e) {
    const cropInfo = e.target.value;

    this.setState(prevState => ({
      currentCropDetail: {
        ...prevState.currentCropDetail,
        cropInfo: cropInfo
      }
    }));
  }
  onChangePlantationInfo(e) {
    const plantationInfo = e.target.value;

    this.setState(prevState => ({
      currentCropDetail: {
        ...prevState.currentCropDetail,
        plantationInfo: plantationInfo
      }
    }));
  }
  onChangePhase1(e) {
    const phase1 = e.target.value;

    this.setState(prevState => ({
      currentCropDetail: {
        ...prevState.currentCropDetail,
        phase1: phase1
      }
    }));
  }

  onChangePhase2(e) {
    const phase2 = e.target.value;

    this.setState(prevState => ({
      currentCropDetail: {
        ...prevState.currentCropDetail,
        phase2: phase2
      }
    }));
  }
  onChangePhase3(e) {
    const phase3 = e.target.value;

    this.setState(prevState => ({
      currentCropDetail: {
        ...prevState.currentCropDetail,
        phase3: phase3
      }
    }));
  }
  onChangePhase4(e) {
    const phase4 = e.target.value;

    this.setState(prevState => ({
      currentCropDetail: {
        ...prevState.currentCropDetail,
        phase4: phase4
      }
    }));
  }

  getCropDetail(id) {
    CropDetailService.get(id)
      .then(response => {
        this.setState({
          currentCropDetail: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }


  updateCropDetail() {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    if (this.state.currentCropDetail.cropName != "" && this.state.currentCropDetail.cropType != "" && this.state.currentCropDetail.cropInfo != "" && this.state.currentCropDetail.plantationInfo != "" && this.state.currentCropDetail.phase1 != "" && this.state.currentCropDetail.phase2 != "" && this.state.currentCropDetail.phase3 != "" && this.state.currentCropDetail.phase4) {
      if(textregex.test(this.state.currentCropDetail.cropName)){
      CropDetailService.update(
        this.state.currentCropDetail.id,
        this.state.currentCropDetail

      )
        .then(response => {
          console.log(response.data);
          this.setState({
            message: "The Crop Details updated successfully!"
          });
          alert(this.state.message);
        })
        .catch(e => {
          console.log(e);
        });
      }
      else
      {
        alert("Crop name should contain Text only.");
      }
    }
    else {
      alert("All fields are Mandatory!!");
    }
  }



  render() {
    const { currentCropDetail } = this.state;


    return (
      <div>
        <div className='adminhome'>
          <AdminHome />
          {currentCropDetail ? (
            <div className="edit-form">
              <h4>Crop Details</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Crop Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cropName"
                    value={currentCropDetail.cropName}
                    onChange={this.onChangeCropName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Crop Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cropType"
                    value={currentCropDetail.cropType}
                    onChange={this.onChangeCropType}
                  />
                </div>


                <div className="mb-3 pt-0">
                  <label htmlFor="title">Crop Information</label>
                  <textarea cols={50}
                    placeholder="Crop Information"
                    name="cropInfo"
                    id="cropInfo"
                    type="text"
                    value={currentCropDetail.cropInfo}
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
                    value={currentCropDetail.plantationInfo}
                    onChange={this.onChangePlantationInfo}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>

                <div className="mb-3 pt-0">
                  <label htmlFor="title">Phase1</label>
                  <textarea cols={50}
                    placeholder="Phase1"
                    name="phase1"
                    id="phase1"
                    type="text"
                    value={currentCropDetail.phase1}
                    onChange={this.onChangePhase1}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>

                <div className="mb-3 pt-0">
                  <label htmlFor="title">Phase2</label>
                  <textarea cols={50}
                    placeholder="Phase2"
                    name="phase2"
                    id="phase2"
                    type="text"
                    value={currentCropDetail.phase2}
                    onChange={this.onChangePhase2}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>


                <div className="mb-3 pt-0">
                  <label htmlFor="title">Phase3</label>
                  <textarea cols={50}
                    placeholder="Phase3"
                    name="phase3"
                    id="phase3"
                    type="text"
                    value={currentCropDetail.phase3}
                    onChange={this.onChangePhase3}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <label htmlFor="title">Phase4</label>
                  <textarea cols={50}
                    placeholder="Phase4"
                    name="phase4"
                    id="phase4"
                    type="text"
                    value={currentCropDetail.phase4}
                    onChange={this.onChangePhase4}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>
              </form>


              <button
                type="submit"
                className="btn btn-primary ml-2"
                onClick={this.updateCropDetail}
              >
                Update
              </button>


            </div>
          ) : (
            <div>
              <br />

            </div>
          )}
        </div>
      </div>
    );
  }
}

