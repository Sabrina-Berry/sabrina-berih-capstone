// import "./Modal.scss";
// import axios from "axios";
// import { useState } from "react";

// function Modal({ toggleModal, modal, slug }) {
//   //   const [modal, setModal] = useState(false);
//   const [orgDetails, setOrgDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");

//   // const openModal = (item) => {
//   //   console.log(slug);
//   //   getOrgDetails(slug);
//   //   setModal(true);
//   // };

//   const api_key = import.meta.env.VITE_API_KEY;

//   const getOrgDetails = async (slug) => {
//     console.log(slug);
//     try {
//       const response = await axios.get(
//         `https://partners.every.org/v0.2/nonprofit/${slug}?apiKey=${api_key}`
//       );
//       console.log(response.data);
//       setOrgDetails(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       if (error.status === 404) {
//         console.log("Error fetching Nonprofit details", error);
//       } else {
//         setError(error.message);
//       }
//     }
//   };
//   getOrgDetails(slug);

//   //   prevent scroll when modal is open
//   if (modal) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "unset";
//   }

//   if (isLoading) {
//     return <>Loading nonprofit details...</>;
//   }

//   if (error) {
//     return <>{`${error} error...`}</>;
//   }

//   return (
//     <>
//       {" "}
//       {modal && orgDetails && (
//         <div className="modal">
//           <div onClick={toggleModal} className="overlay"></div>
//           <div className="modal-content">
//             <h2>{orgDetails.data.nonprofit.name}</h2>
//             <img
//               className="nonprofit-list__image"
//               src={orgDetails.data.nonprofit.coverImageUrl}
//             />
//             <h3>{orgDetails.data.nonprofit.locationAddress}</h3>
//             <h3>
//               {orgDetails
//                 ? orgDetails.data.nonprofit.description
//                 : "Loading org details..."}
//             </h3>
//             <h3>
//               {orgDetails && orgDetails.data.nonprofit.websiteUrl
//                 ? `Check us out: ${orgDetails.data.nonprofit.websiteUrl}`
//                 : "URL not found"}
//             </h3>
//             <button className="close-modal" onClick={toggleModal}>
//               <img src={closeIcon} alt="close icon" />
//             </button>
//           </div>
//         </div>
//       )}{" "}
//     </>
//   );
// }

// export default Modal;
