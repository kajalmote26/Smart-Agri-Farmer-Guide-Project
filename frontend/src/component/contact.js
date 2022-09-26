// import React, { useState } from "react";
// import ContactDataService from '../services/contact.service';

// const FORM_ENDPOINT = ""; // TODO - fill on the later step

// const ContactForm = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const handleSubmit = () => {
    
//       var data = {
//         name: this.name,
//         email: this.email,
//         msg:this.msg
        
//       };
//     ContactDataService.create(data)
//     .then(response => {
//       console.log("Printing contact data", response.data);
//       setSubmitted(response.data);
//     }).catch(error => {
//       console.log('Something went wrong', error);
//     })
//     setTimeout(() => {
//       setSubmitted(true);
//     }, 100);
//   };

//   if (submitted) {
//     return (
//       <>
//         <div className="text-2xl">Thank you!</div>
//         <div className="text-md">We'll be in touch soon.</div>
//       </>
//     );
//   }

//   return (
//     <div className="contact">
//     <form
//       action={FORM_ENDPOINT}
//       onSubmit={handleSubmit}
//       method="POST"
//       target="_blank"
//       className="contactform"
//     >

       
       
//       <div className="mb-2 pt-5">
//       <h2 style={{color:"black"}}><b/> Contact Form</h2> 
//      <hr/>
//              <input
//           type="text"
//           placeholder="Your name"
//           name="name"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-2 pt-0">
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-3 pt-0">
//         <textarea
//           placeholder="Your message"
//           name="msg"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-3 pt-0">
//         <button
//           className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//           type="submit"
//         >
//           Send a message
//         </button>
//       </div>
//     </form>
//     </div>
//   );
// };

// export default ContactForm;

// import React, { Component } from "react";
// export default class Contact extends Component 
// {
//   render()
//   {
//     return
//     ({
//       <div>
//           <h1>Contact Us</h1>

//       </div>
//   });
//   }
// }

import React, { Component } from "react";
class Contact extends Component {
        render() {
            return(
               <div className="contact">
                <table cellSpacing={50} cellPadding={7} className="contacttable">
                  <thead>
                   <h1 className="head">Contact Us</h1>
                   </thead>
                   <tbody>
                   <tr>
                    <td>
                   <b>Email:</b>smartagree@agree.commonreg
                   </td>
                   </tr>
                   <tr>
                   <td>
                   <b>Contact No.:</b>9856743213
                   </td>
                   </tr>
                   </tbody>
                   </table>
               </div>
            )
        }
}
export default Contact
