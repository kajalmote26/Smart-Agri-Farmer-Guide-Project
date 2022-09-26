import React, {Component} from "react";
import PlantationDataService from "../services/plantation.service";
import { Switch, Route, Link } from "react-router-dom";
import AdminHome from "./adminhome";

export default class AddPlantation extends Component
{
    //Taking Parameterized constructor
    constructor(props)
    {
        super(props);
        this.onChangecropName = this.onChangecropName.bind(this);
        this.onChangecropType = this.onChangecropType.bind(this);
        this.onChangemonth = this.onChangemonth.bind(this);
        this.onChangegrowthDuration = this.onChangegrowthDuration.bind(this);
        this.onChangeweatherInfo = this.onChangeweatherInfo.bind(this);
        this.onChangeminPrice = this.onChangeminPrice.bind(this);
        this.onChangemaxPrice = this.onChangemaxPrice.bind(this);
        this.savePlantation= this.savePlantation.bind(this);
        this.newPlantation = this.newPlantation.bind(this);
    
        //Assign initial null
        this.state = 
        {
            id: null,
            cropName:"",
            cropType:"",
            month:"",
            growthDuration:"",
            weatherInfo:"",
            minPrice:"",
            maxPrice:"",
        };
    }

    //setter
    onChangecropName(e) {
        this.setState({
          cropName: e.target.value
        });
      }

      onChangecropType(e) {
        this.setState({
          cropType: e.target.value
        });
      }

    onChangemonth(e)
    {
        this.setState({
            month:e.target.value
        });
    }

    onChangegrowthDuration(e)
    {
        this.setState({
            growthDuration:e.target.value
        });
    }

    onChangeweatherInfo(e)
    {
        this.setState({
            weatherInfo:e.target.value
        });
    }
    onChangeminPrice(e)
    {
        this.setState({
            minPrice:e.target.value
        });
    }
    onChangemaxPrice(e)
    {
        this.setState({
            maxPrice:e.target.value
        });
    }

    savePlantation()
    {
        var data = {
            cropName:this.state.cropName,
            cropType:this.state.cropType,
            month:this.state.month,
            growthDuration:this.state.growthDuration,
            weatherInfo:this.state.weatherInfo,
            minPrice:this.state.minPrice,
            maxPrice:this.state.maxPrice
        };

        PlantationDataService.create(data).then(response =>
            {
                this.setState
                ({
                    id:response.data.id,
                    cropName:this.data.cropName,
                    cropType:this.data.cropType,
                    month:this.data.month,
                    growthDuration:this.data.growthDuration,
                    weatherInfo:this.data.weatherInfo,
                    minPrice:this.data.minPrice,
                    maxPrice:this.data.maxPrice,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newPlantation()
    {
        this.state =
        {
            id: null,
            cropName:"",
            cropType:"",
            month:"",
            growthDuration:"",
            weatherInfo:"",
            minPrice:"",
            maxPrice:"",
        }
    }

    render()
    {
        return (
            <div>
                <AdminHome/>
                <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <Link to={"plantation"} className="navbar-brand">
              

              <button className="btn btn-success">Show Plantation List</button>
          </Link>
          </div>
        ) : (
          <div>
             <h4><b>Plantation Registration</b></h4>
            <div className="form-group">
              <label htmlFor="title">Crop Name</label>
              <input
                type="text"
                className="form-control"
                id="cropName"
                required
                value={this.state.cropName}
                onChange={this.onChangecropName}
                name="cropName"
                placeholder="Enter Crop Name"
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
                onChange={this.onChangecropType}
                name="cropType"
                placeholder="Enter Crop Type"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Month</label>
              <input
                type="text"
                className="form-control"
                id="month"
                required
                value={this.state.month}
                onChange={this.onChangemonth}
                name="month"
                placeholder="Enter Month"
              />
            </div>

            <div className="form-group">
              <label htmlFor="title">Growth Duration</label>
              <input
                type="text"
                className="form-control"
                id="growthDuration"
                required
                value={this.state.growthDuration}
                onChange={this.onChangegrowthDuration}
                name="growthDuration"
                placeholder="Enter Growth Duration"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Weather Information</label>
              <input
                type="text"
                className="form-control"
                id="weatherInfo"
                required
                value={this.state.weatherInfo}
                onChange={this.onChangeweatherInfo}
                name="weatherInfo"
                placeholder="Enter Weather Information"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Minimum Price</label>
              <input
                type="number"
                className="form-control"
                id="minPrice"
                required
                value={this.state.minPrice}
                onChange={this.onChangeminPrice}
                name="minPrice"
                placeholder="Enter Minimum Price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Maximum Price</label>
              <input
                type="number"
                className="form-control"
                id="maxPrice"
                required
                value={this.state.maxPrice}
                onChange={this.onChangemaxPrice}
                name="maxPrice"
                placeholder="Enter Maximum Price"
              />
            </div>

            <button onClick={this.savePlantation} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
     
            </div>
        )
    }

}