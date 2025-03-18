import "./AboutPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;
const port = import.meta.env.VITE_PORT;

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [aboutDetails, setAboutDetails] = useState([]);

  useEffect(() => {
    const getAbout = async () => {
      try {
        const response = await axios.get(
          `https://about-page444.netlify.app/.netlify/functions/about`
        );
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
            <div className="about-page__container--top">
              <img className="about-page__image" src={item.image} />
            </div>
            <div className="about-page__container--bottom">
              <div className="about-page__title">{item.title}</div>
              <div className="about-page__title-text">{item.title_text}</div>
              <br></br>
              <div className="about-page__description">{item.description}</div>
              <div className="about-page__description-text">
                {item.description_text}
              </div>
              <br></br>
              <div className="about-page__stack">{item.stack}</div>
              <div className="about-page__stack-text">{item.stack_text}</div>
              <br></br>
              <div className="about-page__credits">{item.credits}</div>
              <div className="about-page__credits-text">
                {item.credits_text}
              </div>
              <br></br>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
