import e from "cors";
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import AuthenticationService from "../../services/AuthenticationService";
import ProductDataService from  "../../services/product.service";
import { useEffect,useState } from "react";


// export default class GetShop extends Component 
// {
//   constructor(props) {
//     super(props);
 
//     this.onChangeId=this.onChangeId.bind(this);

   

//     this.state = {
//       id: ""      
//     };
//   }

//   onChangeId(e) {
//     this.setState({
//       id: e.target.value
//     });
//   } 

//   getShopById()
//   {
//     var data = {
//     id:this.state.Id
//     }
  

// ShopDataService.get(data)
// .then(response => {
//   this.setState({
//     id:response.data.id,
//     submitted:true
//   })
// })
// }

//   render() {
//     return (
//       <div>
//        <h1>Shop Login</h1>
//         <div className='container'>
//           {this.state.login && this.state.authenticated && (
//             <div>Get Shop Details Successfully</div>
//           )}
//           {this.state.login && !this.state.authenticated && (
//             <div className='alert alert-warning'>Invalid Id</div>
//           )}
//           Enter Shop Id :{' '}
//           <input
//             type='number'
//             name='id'
//             value={this.state.Id}
//             onChange={this.updateValues}
//           ></input><br/><br/>
//             <button className="btn btn-success" onClick={this.getShopById}>Get Shop Details</button>  
//           <br/><br/>
//           <Link to={"sreg"} className='nav-link'>Add Shop</Link>
//       </div>
//       </div>
//     );
//   }
// }


// const ShopProductList = () =>
// {
//   const [shops, setShops] = useState([]);

//   const init = () =>
//   {
//     ShopDataService.get(this.state.Id)
//     .then(response => {
//       console.log('Printing Shop data', response.data);
//       setShops(response.data);
//     })
//     .catch(error => {
//       console.log('Something went wrong', error);
//     }) 
// }

// useEffect(() => {
//   init();
// }, []);

// return (
//         <div>
//          <h1>Shop Login</h1>
//           <div className='container'>
//             {this.state.login && this.state.authenticated && (
//               <div>Get Shop Details Successfully</div>
//             )}
//             {this.state.login && !this.state.authenticated && (
//               <div className='alert alert-warning'>Invalid Id</div>
//             )}
//             Enter Shop Id :{' '}
//             <input
//               type='number'
//               name='id'
//               value={this.state.Id}
//               onChange={this.updateValues}
//             ></input><br/><br/>


          
//               <button className="btn btn-success" onClick={this.init(this.state.Id)}>Get Shop Details</button>  
//             <br/><br/>
//             <Link to={"sreg"} className='nav-link'>Add Shop</Link>
//         </div>
//         </div>
//       );

//   }
// export default ShopProductList;



import {useRef} from 'react';

const ShopProductList = () => {
  const inputRef = useRef(null);

  function handleClick() {

    ProductDataService.get(inputRef.current.value)
        .then(response => {
          console.log('Printing Shop data', response.data);
          
        })
        .catch(error => {
          console.log('Something went wrong', error);
        }) 


    console.log(inputRef.current.value);
  }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />

      <button onClick={handleClick}>Get Shop Details</button>
    </div>




  );
};

export default ShopProductList;
