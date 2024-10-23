// import "./HomePage.scss";
// import axios from "axios";
// import Causes from "../../components/Causes/Causes";

// const api_key = import.meta.env.VITE_API_KEY;
// import { useEffect, useState } from "react";

// function HomePage() {
//   const [nameList, setNameList] = useState([]);
//   const [search, setSearch] = useState("");
//   const [cause, setCause] = useState("first_render");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");

//   function handleCause(newCause) {
//     setCause(newCause);
//   }

//   console.log(cause);
//   useEffect(() => {
//     const getData = async (cause) => {
//       try {
//         const response = await axios.get(
//           `https://partners.every.org/v0.2/browse/${cause}?apiKey=${api_key}`
//         );
//         console.log(response.data);
//         setNameList(response.data.nonprofits);
//         setIsLoading(false);
//       } catch (error) {
//         if (error.status === 404) {
//           console.log("Error fetching Nonprofits", error);
//         } else {
//           setError(error.message);
//         }
//       }
//     };
//     getData(cause);
//   }, [cause]);

//   if (isLoading) {
//     return <>Loading NonProfits...</>;
//   }

//   if (error) {
//     return <>{`${error} error...`}</>;
//   }

//   return (
//     <>
//       <Causes handleClick={handleCause} />
//       <input
//         type="text"
//         className="home-page__search"
//         placeholder="Filter search results..."
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       {nameList
//         .filter((item) => {
//           if (search === "") {
//             return item;
//           } else if (item.tags.includes(search.toLowerCase())) {
//             return item;
//           }
//         })
//         .map((item) => {
//           return (
//             <>
//               <div className="nonprofit-list">
//                 <button className="nonprofit-list__btn-modal">
//                   <h2>{item.name}</h2>
//                   <img
//                     className="nonprofit-list__image"
//                     src={item.coverImageUrl}
//                   />
//                 </button>
//               </div>
//             </>
//           );
//         })}
//     </>
//   );
// }

// export default HomePage;
