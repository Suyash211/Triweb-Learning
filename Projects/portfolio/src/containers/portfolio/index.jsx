import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from 'react-icons/bs'
import ImageOne from "../images/image1.jpg";
import ImageTwo from "../images/image2.jpg";
import "./styles.scss";
import { useState } from "react"
const portfolioData = [
    {
      id: 1,
      name: "QuizApp  Backend",
      image: ImageOne,
      link: "https://github.com/Suyash211/Triweb-Learning/tree/main/Projects/QuizApp",
    },
    {
      id: 1,
      name: "Tic-Tac-Toe",
      link: "https://github.com/Suyash211/Triweb-Learning/tree/main/Projects/Tic-Tac-Toe",
      image: ImageTwo,
    },
  ];
  
  const filterData = [
    {
      filterId: 1,
      label: "Developement",
    },
  ];

const Portfolio = () => {
    const [filteredvalue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    }

    function handleHover(index) {
        setHoveredValue(index);
    }

    console.log("====================================");
    console.log(hoveredValue);
    console.log("====================================");

    const filteredItems =
        filteredvalue === 1
        ? portfolioData
        : portfolioData.filter((item) => item.id === filteredvalue);

    console.log(filteredItems);
    return(
        <section id="portoflio" className="portfolio">
            <PageHeaderContent 
            headerText="Portfolio"
            icon={<BsInfoCircleFill size={40}/>}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                {filterData.map((item) => (
                    <li
                    className={item.filterId === filteredvalue ? "active" : ""}
                    onClick={() => handleFilter(item.filterId)}
                    key={item.filterId}
                    >
                    {item.label}
                    </li>
                ))}
                </ul>
                <div className="portfolio__content__cards">
                {filteredItems.map((item, index) => (
                    <div
                    className="portfolio__content__cards__item"
                    key={`cardItem${item.name.trim()}`}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleHover(null)}
                    >
                    <div className="portfolio__content__cards__item__img-wrapper">
                        <a>
                        <img alt="dummy data" src={item.image} />
                        </a>
                    </div>
                    <div className="overlay">
                        {index === hoveredValue && (
                        <div>
                            <p>{item.name}</p>
                            <a href={item.link}>
                              <button>Visit</button>
                            </a>
                        </div>
                        )}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio;