import React, { Component } from "react";
import DiseasesDataService from "../services/diseases.service";
import AdminHome from './adminhome';
export default class DiseasesUpdate extends Component {
  constructor(props) {
    super(props);
    this.onChangeCropName = this.onChangeCropName.bind(this);
    this.onChangeDiseaseName = this.onChangeDiseaseName.bind(this);
    this.onChangeDiseaseInfo = this.onChangeDiseaseInfo.bind(this);
    this.onChangePesticide = this.onChangePesticide.bind(this);
    this.onChangePesticideInfo = this.onChangePesticideInfo.bind(this);

    this.updateDisease = this.updateDisease.bind(this);


    this.state = {
      currentDisease: {
        id: null,
        cropName: "",
        diseaseName: "",
        diseaseInfo: "",
        pesticide: "",
        pesticideInfo: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getDisease(this.props.match.params.id);
  }

  onChangeCropName(e) {
    const cropName = e.target.value;

    this.setState(function (prevState) {
      return {
        currentDisease: {
          ...prevState.currentDisease,
          cropName: cropName
        }
      };
    });
  }

  onChangeDiseaseName(e) {
    const diseaseName = e.target.value;

    this.setState(prevState => ({
      currentDisease: {
        ...prevState.currentDisease,
        diseaseName: diseaseName
      }
    }));
  }

  onChangeDiseaseInfo(e) {
    const diseaseInfo = e.target.value;

    this.setState(prevState => ({
      currentDisease: {
        ...prevState.currentDisease,
        diseaseInfo: diseaseInfo
      }
    }));
  }
  onChangePesticide(e) {
    const pesticide = e.target.value;

    this.setState(prevState => ({
      currentDisease: {
        ...prevState.currentDisease,
        pesticide: pesticide
      }
    }));
  }
  onChangePesticideInfo(e) {
    const pesticideInfo = e.target.value;

    this.setState(prevState => ({
      currentDisease: {
        ...prevState.currentDisease,
        pesticideInfo: pesticideInfo
      }
    }));
  }



  getDisease(id) {
    DiseasesDataService.get(id)
      .then(response => {
        this.setState({
          currentDisease: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  updateDisease()
  {
    const textregex = RegExp("^[a-zA-Z\s]*$");
    if(this.state.currentDisease.cropName!="" && this.state.currentDisease.diseaseName!="" && this.state.currentDisease.diseaseInfo!="" && this.state.currentDisease.pesticide!="" && this.state.currentDisease.pesticideInfo)
    {
      if(textregex.test(this.state.currentDisease.cropName) && textregex.test(this.state.currentDisease.diseaseName))
      {
        DiseasesDataService.update(
        this.state.currentDisease.id,
        this.state.currentDisease
        )
        .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Disease data updated successfully!"
        });
        alert(this.state.message);
        })
        .catch(e => {
          console.log(e);
        });
      }
      else
      {
        alert("Crop name and Disease name contain Text only");
      }
    }
    else
    {
      alert("All fields are Mandatory... \n Please fill data in all fields.");
    }
  }



  render() {
    const { currentDisease } = this.state;


    return (
      <div>
        <div className='adminhome'>
          <AdminHome />
          {currentDisease ? (
            <div className="edit-form">
              <h4>Disease Details</h4>
              <form>
                <div className="form-group">
                  <label htmlFor="title">Crop Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cropName"
                    value={currentDisease.cropName}
                    onChange={this.onChangeCropName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Disease Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="diseaseName"
                    value={currentDisease.diseaseName}
                    onChange={this.onChangeDiseaseName}
                  />
                </div>


                <div className="mb-3 pt-0">
                  <label htmlFor="title">Disease Information</label>
                  <textarea cols={50}
                    placeholder="Disease Information"
                    name="diseaseInfo"
                    id="diseaseInfo"
                    type="text"
                    value={currentDisease.diseaseInfo}
                    onChange={this.onChangeDiseaseInfo}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>

                <div className="mb-3 pt-0">
                  <label htmlFor="title">Pesticide</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Pesticide"
                    name="pesticide"
                    id="pesticide"
                    value={currentDisease.pesticide}
                    onChange={this.onChangePesticide}
                    required
                  />
                </div>

                <div className="mb-3 pt-0">
                  <label htmlFor="title">Pesticide Information</label>
                  <textarea cols={50}
                    placeholder="Pesticide Information"
                    name="pesticideInfo"
                    id="pesticideInfo"
                    type="text"
                    value={currentDisease.pesticideInfo}
                    onChange={this.onChangePesticideInfo}
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    required
                  />
                </div>


              </form>


              <button
                type="submit"
                className="btn btn-primary ml-2"
                onClick={this.updateDisease}
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

