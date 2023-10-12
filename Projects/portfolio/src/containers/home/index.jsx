import React from "react";
import "./styles.scss"
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";
const Home = () => {

    const navigate = useNavigate();
    
    const handleNavigateContactMePage = () => {
        navigate('/contact')
    }
    return(
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                Hello, I'm Suyash
                <br />
                Front end developer
                </h1>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: "translateY(550px)"
                }}
                end={{
                    transform: "translatex(0px)"
                }}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateContactMePage}>
                        Hire Me
                    </button>
                </div>
            </Animate>
        </section>
    )
}

export default Home;