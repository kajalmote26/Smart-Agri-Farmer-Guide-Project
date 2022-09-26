import {useRef} from 'react';
import React from 'react';

const SProductList = () => {
  const inputRef = useRef(null);
  var sid=inputRef.current.value;

//   function handleClick() {

//     ProductDataService.get(inputRef.current.value)
//         .then(response => {
//           console.log('Printing Shop data', response.data);
          
//         })
//         .catch(error => {
//           console.log('Something went wrong', error);
//         }) 


//     console.log(inputRef.current.value);
//   }

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        id="message"
        name="message"
      />

      <button >Get Shop Details</button>
    </div>




  );
  
};


export default SProductList;

