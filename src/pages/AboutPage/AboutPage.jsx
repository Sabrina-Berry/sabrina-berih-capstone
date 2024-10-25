// import "./HomePage.scss";
// import axios from "axios";
// import Causes from "../../components/Causes/Causes";
// import closeIcon from "../../assets/icons/close-24px.svg";

// const api_key = import.meta.env.VITE_API_KEY;
// import { useEffect, useState } from "react";

// function HomePage() {
//   const [orgList, setOrgList] = useState([]);
//   const [selectedOrg, setSelectedOrg] = useState(null);
//   const [search, setSearch] = useState("");
//   const [cause, setCause] = useState("first_render");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [modal, setModal] = useState(false);
//   const [orgDetails, setOrgDetails] = useState(null);

//   function handleCause(newCause) {
//     setCause(newCause);
//   }

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   const openModal = (item) => {
//     setSelectedOrg(item);
//     console.log(item.slug);
//     getOrgDetails(item.slug);
//     setModal(true);
//   };

//   const getOrgDetails = async (slug) => {
//     console.log(slug);
//     try {
//       const response = await axios.get(
//         `https://partners.every.org/v0.2/nonprofit/${slug}?apiKey=${api_key}`
//       );
//       console.log(response.data);
//       setOrgDetails(response.data);
//     } catch (error) {
//       if (error.status === 404) {
//         console.log("Error fetching Nonprofit details", error);
//       } else {
//         setError(error.message);
//       }
//     }
//   };

//   if (modal) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "unset";
//   }

//   console.log(cause);
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const response = await axios.get(
//           `https://partners.every.org/v0.2/browse/${cause}?apiKey=${api_key}`
//         );
//         console.log(response.data);
//         setOrgList(response.data.nonprofits);
//         setIsLoading(false);
//       } catch (error) {
//         if (error.status === 404) {
//           console.log("Error fetching Nonprofits", error);
//         } else {
//           setError(error.message);
//         }
//       }
//     };
//     getData();
//   }, [cause]);

//   if (isLoading) {
//     return <>Loading NonProfits...</>;
//   }

//   if (error) {
//     return <>{`${error} error...`}</>;
//   }

//   return (
//     <>
//       <h2>I want to help...</h2>
//       <Causes handleClick={handleCause} />
//       <input
//         type="text"
//         className="home-page__search"
//         placeholder="Filter search results..."
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {orgList
//         .filter((item) => {
//           if (search === "") {
//             return item;
//           } else if (item.tags.includes(search.toLowerCase())) {
//             return item;
//           }
//         })
//         .map((item, index) => {
//           return (
//             <ul key={index} className="nonprofit-list">
//               <li className="nonprofit-list__item">
//                 <button
//                   className="nonprofit-list__btn-modal"
//                   onClick={() => openModal(item)}
//                 >
//                   <h2>{item.name}</h2>
//                   <img
//                     className="nonprofit-list__image"
//                     src={item.coverImageUrl}
//                   />
//                 </button>
//                 {modal && selectedOrg && (
//                   <div className="modal">
//                     <div onClick={toggleModal} className="overlay"></div>
//                     <div className="modal-content">
//                       <h2>{selectedOrg.name}</h2>
//                       <img
//                         className="nonprofit-list__image"
//                         src={selectedOrg.coverImageUrl}
//                       />
//                       <h3>{selectedOrg.location}</h3>
//                       <h3>
//                         {orgDetails
//                           ? orgDetails.data.nonprofit.description
//                           : "Loading org details..."}
//                       </h3>
//                       <h3>
//                         {orgDetails
//                           ? `Check us out: ${orgDetails.data.nonprofit.websiteUrl}`
//                           : "Loading org details..."}
//                       </h3>
//                       <button className="close-modal" onClick={toggleModal}>
//                         <img src={closeIcon} alt="close icon" />
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </li>
//             </ul>
//           );
//         })}
//     </>
//   );
// }

// export default HomePage;
