import React, { Component } from "react";
import { Link } from "react-router-dom";
import DriverDataService from '../services/driver.service';
export default class VehicleUpdate extends Component {
  constructor(props) {
    super(props);
    this.onChangeDriverFname = this.onChangeDriverFname.bind(this);
    this.onChangeDriverLname= this.onChangeDriverLname.bind(this);
    this.onChangeContact=this.onChangeContact.bind(this); 
    this.onChangeLicenseNo = this.onChangeLicenseNo.bind(this);
    this.onChangeVillage= this.onChangeVillage.bind(this);
    this.onChangeTaluka=this.onChangeTaluka.bind(this);   
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onChangeCapacity=this.onChangeCapacity.bind(this);
   this.onChangeVehicleNo=this.onChangeVehicleNo.bind(this);
   this.onChangeRatePerKm=this.onChangeRatePerKm.bind(this);     
    this.updateVehicle = this.updateVehicle.bind(this);
    

    this.state = {
    currentVehicle: {
        id: null,
        driverFname: "",
        driverLname: "",
        contact: "", 
        village: "",
        taluka: "",
        district:"",
        licenseNo:"",
        vehicleNo:"",
        ratePerKm:"",
        capacity:"",
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getVehicle(this.props.match.params.id);
  }

  onChangeDriverFname(e) {
    const driverFname = e.target.value;

    this.setState(function(prevState) {
      return {
        currentVehicle: {
          ...prevState.currentVehicle,
          driverFname: driverFname
        }
      };
    });
  }

  onChangeDriverLname(e) {
    const driverLname = e.target.value;
    
    this.setState(prevState => ({
      currentVehicle: {
        ...prevState.currentVehicle,
        driverLname: driverLname
      }
    }));
  }

  onChangeContact(e) {
    const contact = e.target.value;
    
    this.setState(prevState => ({
      currentVehicle: {
        ...prevState.currentVehicle,
        contact: contact
      }
    }));
  }

  onChangeLicenseNo(e) {
    const licenseNo = e.target.value;

    this.setState(function(prevState) {
      return {
        currentVehicle: {
          ...prevState.currentVehicle,
          licenseNo: licenseNo
        }
      };
    });
  }

  onChangeVillage(e) {
    const village = e.target.value;
    
    this.setState(prevState => ({
      currentVehicle: {
        ...prevState.currentVehicle,
        village: village
      }
    }));
  }

  onChangeDistrict(e) {
    const district = e.target.value;
    
    this.setState(prevState => ({
      currentVehicle: {
        ...prevState.currentVehicle,
        district: district
      }
    }));
  }

  onChangeTaluka(e) {
    const taluka = e.target.value;

    this.setState(function(prevState) {
      return {
        currentVehicle: {
          ...prevState.currentVehicle,
          taluka: taluka
        }
      };
    });
  }

  onChangeVehicleNo(e) {
    const vehicleNo = e.target.value;
    
    this.setState(prevState => ({
      currentVehicle: {
        ...prevState.currentVehicle,
        vehicleNo: vehicleNo
      }
    }));
  }

  onChangeCapacity(e) {
    const capacity = e.target.value;
    
    this.setState(prevState => ({
      currentVehicle: {
        ...prevState.currentVehicle,
        capacity: capacity
      }
    }));
  }
  
  onChangeRatePerKm(e) {
    const ratePerKm = e.target.value;
    
    this.setState(prevState => ({
      currentVehicle: {
        ...prevState.currentVehicle,
        ratePerKm: ratePerKm
      }
    }));
  }
  

  getVehicle(id) {
    DriverDataService.get(id)
      .then(response => {
        this.setState({
          currentVehicle: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

 
  updateVehicle() {
   
    const textregex = RegExp("^[a-zA-Z\s]*$");
    const mobregex = RegExp("^[0-9]{10}$");
    if(this.state.currentVehicle.driverFname!="" && this.state.currentVehicle.driverLname!="" && this.state.currentVehicle.contact!="" && this.state.currentVehicle.village!="" && this.state.currentVehicle.taluka!="" && this.state.currentVehicle.district!="" && this.state.currentVehicle.licenseNo!="" && this.state.currentVehicle.vehicleNo!="" && this.state.currentVehicle.ratePerKm!="" && this.state.currentVehicle.capacity!="" && this.state.currentVehicle.user!="")
    {
      if(textregex.test(this.state.currentVehicle.driverFname) && textregex.test(this.state.currentVehicle.driverLname) && textregex.test(this.state.currentVehicle.village) && textregex.test(this.state.currentVehicle.taluka) && textregex.test(this.state.currentVehicle.district)){
        if(mobregex.test(this.state.currentVehicle.contact)){


    DriverDataService.update(
      this.state.currentVehicle.id,
       this.state.currentVehicle
     
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Vehicle  updated successfully!"
          
          
        });
        alert(this.state.message);
      })
      .catch(e => {
        console.log(e);
      });
    }
    else
    {
      alert("Contact should contain 10 digits");
    }
  }
    else
    {
      alert("Driver First name,Last name, Village, Taluka, District should contain only Text");
    }
  }
    else
    {
      alert("All fields are mandatory..Please enter all fields");
    }
  }

 

  render() {
    const { currentVehicle } = this.state;
   

    return (
      <div>
         
        <div className="shopimage1">
        <Link to="/driverhome">
              <button className="btn btn-primary ml-2">Back Driver Panel</button>
            </Link>
        {currentVehicle ? (
          <div className="edit-form">
            <h4>Vehicle</h4>
            <form>

              <div className="form-group">
              <label htmlFor="title">First Name</label>
              <input
                type="text"
                className="form-control"
                id="driverFname"
                required
                value={currentVehicle.driverFname}
                onChange={this.onChangeDriverFname}
                name="driverFname"
                placeholder="Enter First Name"
              />
            </div>

 <div className="form-group">
              <label htmlFor="title">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="driverLname"
                required
                value={currentVehicle.driverLname}
                onChange={this.onChangeDriverLname}
                name="driverLname"
                placeholder="Enter Last Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Contact</label>
              <input
                type="tel"
                className="form-control"
                id="contact"
                required
                value={currentVehicle.contact}
                onChange={this.onChangeContact}
                name="contact"
                placeholder="Enter mobile No"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Village</label>
              <input
                type="text"
                className="form-control"
                id="village"
                required
                value={currentVehicle.village}
                onChange={this.onChangeVillage}
                name="village"
                placeholder="Enter Village"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Taluka</label>
              <input
                type="text"
                className="form-control"
                id="taluka"
                required
                value={currentVehicle.taluka}
                onChange={this.onChangeTaluka}
                name="taluka"
                placeholder="Enter Taluka"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">District</label>
              <input
                type="text"
                className="form-control"
                id="district"
                required
                value={currentVehicle.district}
                onChange={this.onChangeDistrict}
                name="district"
                placeholder="Enter District"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">License Number</label>
              <input
                type="text"
                className="form-control"
                id="licenseNo"
                required
                value={currentVehicle.licenseNo}
                onChange={this.onChangeLicenseNo}
                name="licenseNo"
                placeholder="Enter License No"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Vehicle Number</label>
              <input
                type="text"
                className="form-control"
                id="vehicleNo"
                required
                value={currentVehicle.vehicleNo}
                onChange={this.onChangeVehicleNo}
                name="vehicleNo"
                placeholder="Enter Vehicle Number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Vehicale Capacity</label>
              <input
                type="number"
                min={0}
                className="form-control"
                id="capacity"
                required
                value={currentVehicle.capacity}
                onChange={this.onChangeCapacity}
                name="capacity"
                placeholder="Enter Capacity of Vehicle"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Rate Per KM</label>
              <input
                type="number"
                min={0}
                className="form-control"
                id="ratePerKm"
                required
                value={currentVehicle.ratePerKm}
                onChange={this.onChangeRatePerKm}
                name="ratePerKm"
                placeholder="Enter Rate Per Km"
              />
            </div>
            </form> 
            
            <button
              type="submit"
              className="btn btn-primary ml-2"
              onClick={this.updateVehicle}
              
            >
              Update
            </button> 
            {/* <link to="/products">
         <button>
        View Updated Product List
         </button>
            </link> */}
            
            
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

