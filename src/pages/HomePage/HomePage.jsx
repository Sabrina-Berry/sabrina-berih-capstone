import "./HomePage.scss";
import axios from "axios";
import Causes from "../../components/Causes/Causes";

const url = import.meta.env.VITE_BACKEND_URL;
const port = import.meta.env.VITE_PORT;
const api_key = import.meta.env.VITE_API_KEY;
import { useEffect, useState } from "react";

function HomePage() {
  const [nameList, setNameList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://partners.every.org/v0.2/browse/environment?apiKey=${api_key}`
      )
      .then((response) => {
        setNameList(response.data.nonprofits);
      });
  }, []);

  return (
    <>
      <Causes />
      <input
        type="text"
        className="home-page__search"
        placeholder="Search for a cause..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {nameList
        .filter((item) => {
          if (search === "") {
            return item;
          } else if (item.tags.includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return (
            <>
              <h2>{item.name}</h2>
              <img className="nonprofit-list__image" src={item.coverImageUrl} />
            </>
          );
        })}
    </>
  );

  // const [input, setInput] = useState("");
  // const getData = async (value) => {
  //   try {
  //     const response = await axios.get(
  //       `https://partners.every.org/v0.2/search/animals?apiKey=${api_key}`
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log("Error fetching Nonprofits", error);
  //   }
  // };
  // const handleChange = (value) => {
  //   setInput(value);
  //   getData(value);
  // };
  // return (
  //   <>
  //     <input
  //       type="search"
  //       className="home-page__search"
  //       placeholder="Search for a cause..."
  //       value={input}
  //       onChange={(e) => handleChange(e.target.value)}
  //     />
  //   </>
  // );
}

export default HomePage;
