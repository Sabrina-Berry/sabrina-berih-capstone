import "./AboutPage.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;
const port = import.meta.env.VITE_PORT;

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [aboutDetails, setAboutDetails] = useState([]);

  useEffect(() => {
    const getAbout = async () => {
      try {
        const response = await axios.get(`${url}:${port}/about`);
        setAboutDetails(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching about page details", error);
      }
    };
    getAbout();
  }, []);
  if (isLoading) {
    return <>Loading data...</>;
  }

  return (
    <ul className="about-page">
      <h3 className="about-page__header">About Us</h3>
      {aboutDetails.map((item) => {
        return (
          <li className="about-page__item" key={item.id}>
            <div className="about-page__container--left">
              <img className="about-page__image" src={item.image} />
            </div>
            <div className="about-page__container--right">
              <div className="about-page__title">{item.title}</div>
              <div className="about-page__channel">{item.description}</div>
              <div className="about-page__channel">{item.stack}</div>
              <div className="about-page__channel">{item.fact}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
