import "./HomePage.scss";
import axios from "axios";
import Causes from "../../components/Causes/Causes";
import Footer from "../../components/Footer/Footer";
import closeIcon from "../../assets/icons/close-24px.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const api_key = import.meta.env.VITE_API_KEY;

function HomePage() {
  const [orgList, setOrgList] = useState([]);
  const [search, setSearch] = useState("");
  const [cause, setCause] = useState("first_render");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  const [orgDetails, setOrgDetails] = useState(null);

  function handleCause(newCause) {
    setCause(newCause);
  }

  const closeModal = () => {
    setModal(false);
  };

  const openModal = (item) => {
    getOrgDetails(item.slug);
    setModal(true);
  };

  const getOrgDetails = async (slug) => {
    try {
      const response = await axios.get(
        `https://partners.every.org/v0.2/nonprofit/${slug}?apiKey=${api_key}`
      );
      setOrgDetails(response.data);
    } catch (error) {
      if (error.status === 404) {
        console.log("Error fetching Nonprofit details", error);
      } else {
        setError(error.message);
      }
    }
  };

  // prevent scroll if modal is open
  if (modal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://partners.every.org/v0.2/browse/${cause}?apiKey=${api_key}`
        );
        setOrgList(response.data.nonprofits);
        setIsLoading(false);
      } catch (error) {
        if (error.status === 404) {
          console.log("Error fetching Nonprofits", error);
        } else {
          setError(error.message);
        }
      }
    };
    getData();
  }, [cause]);

  if (isLoading) {
    return <>Loading NonProfits...</>;
  }

  if (error) {
    return <>{`${error} error...`}</>;
  }

  return (
    <>
      <h2 className="home-page__header">I Want To Help...</h2>
      <Causes handleClick={handleCause} />
      <input
        type="text"
        className="home-page__search"
        placeholder="Filter search results..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {orgList
        .filter((item) => {
          if (search === "") {
            return item;
          } else if (item.tags.includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item, index) => {
          return (
            <ul key={index} className="nonprofit-list">
              <li className="nonprofit-list__item">
                <button
                  className="nonprofit-list__btn-modal"
                  onClick={() => openModal(item)}
                >
                  <img
                    className="nonprofit-list__image"
                    src={item.coverImageUrl}
                  />
                  <h2 className="nonprofit-list__name">{item.name}</h2>
                </button>
                {modal && orgDetails && (
                  <div className="modal">
                    {/* If the overlay is clicked close the modal */}
                    <div onClick={closeModal} className="overlay"></div>
                    <div className="modal-content">
                      <h2>{orgDetails.data.nonprofit.name}</h2>
                      <img
                        className="nonprofit-list__image nonprofit-list__modal-image"
                        src={orgDetails.data.nonprofit.coverImageUrl}
                      />
                      <h3>{orgDetails.data.nonprofit.locationAddress}</h3>
                      <h3>
                        {orgDetails
                          ? orgDetails.data.nonprofit.description
                          : "Loading org details..."}
                      </h3>
                      <Link to={orgDetails.data.nonprofit.websiteUrl}>
                        <h3>
                          {orgDetails && orgDetails.data.nonprofit.websiteUrl
                            ? `Check us out: ${orgDetails.data.nonprofit.websiteUrl}`
                            : "URL not found"}
                        </h3>
                      </Link>
                      <Link to={orgDetails.data.nonprofit.websiteUrl}>
                        <button className="nonprofit-list__btn">Donate</button>
                      </Link>
                      <button className="close-modal" onClick={closeModal}>
                        <img src={closeIcon} alt="close icon" />
                      </button>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          );
        })}
      <Footer />
    </>
  );
}

export default HomePage;
