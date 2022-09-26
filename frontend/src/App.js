import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import Home from './component/home';
import Users from './component/users';
import Commonreg from './component/commonreg';
import Farmerlogin from './component/farmerlogin';
import Driverreg from './component/driverreg';
import Driverlogin from './component/driverlogin';
import Shopreg from './component/shopreg';
import Shoplogin from './component/shoplogin';
import Adminlogin from './component/adminlogin';
import AdminHome from './component/adminhome';
import AdminList from './component/admin-list.component';
import AddAdmin from './component/add-admin.component';
import AddFarmer from './component/add-farmer.component';
import FarmerList from './component/farmer-list.componet';
import AddDriver from './component/add-driver.component.';
import DriverList from './component/driver-list.component'
import AddShop from './component/add-shop.component';
import ShopList from './component/shop-list.component';
import AddDailyRate from './component/add-daily-market-price.component';
import DailyList from './component/dailyrates-List.component';
import Contact from './component/contact';
import CropDetailList from './component/cropdetail-list.component';
import AddCropDetail from './component/add-cropdetail.component';
import ShopHome from './component/shophome';
import CropDetail from './component/cropdetaillist';
import ProductList from './component/productlist';
import AddProduct from './component/add-product.component';
import ShopListByProduct from './component/shop-list-byproduct.component';
//import AddPlantation from './component/add-plantation.component';
//import PlantationList from './component/plantation-list.component';
import WelcomeComponent from './component/login/WelcomeComponent';
import LoginComponent from './component/login/LoginComponent';
import LogOutComponent from './component/login/LogOutComponent';
import ErrorComponent from './component/login/ErrorComponent';
import FooterComponent from './component/login/FooterComponent';
import HeaderComponent from './component/login/HeaderComponent';
import AuthenticatedRoute from './component/login/AuthenticatedRoute';
import AuthenticationService from './services/AuthenticationService';
import ShopProductList from './component/shop/ShoplComponent';
import SProductList from './component/shop/productlcompo';
import DiseasesByCrop from './component/diseases-list';
import DriverByTaluka from './component/driverlistByCity';
import MerchantsByCity from './component/merchantListByCity';
import DiseasesList from './component/disease-list.component';
import AddDiseases from './component/add-disease.component';
import AdminLogin from './component/adminlogin';
import AddMerchant from './component/add-merchant';
import MerchantList from './component/Merchantlist';
import MerchantUpdate from './component/MerchantUpdate';
import ProductUpdate from './component/ProductUpdate';
import DailyRatesUpdate from './component/DailyRatesUpdate';
import CropDetailUpdate from './component/CropDetailUpdate';
import DiseasesUpdate from './component/DiseasesUpdate';
import VehicleUpdate from './component/VehicleUpdate';
import DriverHome from './component/DriverHome';
import Aboutus from './component/Aboutus';

class App extends Component{
  render(){
    return(
      <div>
       
      

        <HeaderComponent />
        
        <div className='container mt-3'>
          <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path={["/", "/dailyprice"]} component={Home} />
          <Route exact path="/commonreg" component={Commonreg} />
          <Route exact path="/userreg" component={Users} />         
          {/* <Route exact path="/driverreg/:name" component={Driverreg} />          */}
          <Route exact path="/driverreg" component={Driverreg} />
          <Route exact path="/sreg" component={Shopreg} />        
          <Route exact path='/login' component={LoginComponent} />         
          <AuthenticatedRoute
            exact
            path='/welcome/:name'
            component={WelcomeComponent}
          />

<AuthenticatedRoute
            exact
            path='/getshop'
            component={ShopProductList}
          />
          
          <AuthenticatedRoute
            exact
            path='/diseaselistbycrop'
            component={DiseasesByCrop}
          />

<AuthenticatedRoute
            exact
            path='/driverlistbytaluka'
            component={DriverByTaluka}
          />

<AuthenticatedRoute
            exact
            path='/merchantlistbycity'
            component={MerchantsByCity}
          />

<AuthenticatedRoute
            exact
            path='/users'
            component={AdminList}
          />
          <AuthenticatedRoute
            exact
            path='/merchantlist'
            component={MerchantList} /> 
            <AuthenticatedRoute
            exact
            path='/addmerchant'
            component={AddMerchant} /> 
            {/* <AuthenticatedRoute
            exact
            path='/merchantupdate'
            component={MerchantUpdate} />  */}
            <AuthenticatedRoute
            exact
            path='/productupdate/:id'
            component={ProductUpdate}
          />
           <AuthenticatedRoute
            exact
            path='/dailyrateupdate/:id'
            component={DailyRatesUpdate}
          />

<AuthenticatedRoute
            exact
            path='/cropdetailupdate/:id'
            component={CropDetailUpdate}
          />

<AuthenticatedRoute
            exact
            path='/diseaseupdate/:id'
            component={DiseasesUpdate}
          />

<AuthenticatedRoute
            exact
            path='/vehicleupdate/:id'
            component={VehicleUpdate}
          />

<AuthenticatedRoute
            exact
            path='/shoplist'
            component={ShopList}
          />

<AuthenticatedRoute
            exact
            path='/driverlist'
            component={DriverList}
          />

          <Route exact path="/merchantupdate/:id" component={MerchantUpdate} />
          <Route exact path="/adminhome" component={AdminHome} />
          <Route exact path="/adddailyprice" component={AddDailyRate} />
          <Route exact path={[ "/dailyprice1"]} component={DailyList} />
          <Route exact path={[ "/contact"]} component={Contact} />
          <Route exact path={[ "/aboutus"]} component={Aboutus} />
          <Route exact path={[ "/cropdetail"]} component={CropDetailList} />
          <Route exact path={[ "/addcropdetail"]} component={AddCropDetail} />
          <Route exact path={["/", "/cropdetail1"]} component={CropDetail} />
          <Route exact path="/shophome" component={ShopHome} />
          <Route exact path={["/", "/products"]} component={ProductList} /> 
          <Route exact path="/addproduct" component={AddProduct} />
          <Route exact path="/shoplistbyproduct" component={ShopListByProduct} />
          <Route exact path={[ "/adddiseases"]} component={AddDiseases} />
          <Route exact path={["/", "/diseaseslist1"]} component={DiseasesList} />
          <Route exact path={["/adminlogin"]} component={AdminLogin} />
          <Route exact path="/driverhome" component={DriverHome} />
          <AuthenticatedRoute
            exact
            path='/logout'
            component={LogOutComponent}
          />
          <Route component={ErrorComponent}></Route>
          </Switch>

        </div>
      </div>
      
    )
  }
}

export default App;
