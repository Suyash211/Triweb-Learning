import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss"
import { DiApple,DiAndroid } from "react-icons/di"
import { FaDev,FaDatabase} from "react-icons/fa"
const About = () => {
    const personalDetails = [
        {
          label: "Name",
          value: "Suyash Gehlot",
        },
        {
          label: "Age",
          value: "20",
        },
        {
          label: "Address",
          value: "India",
        },
        {
          label: "Email",
          value: "suyashgehlot2@gmail.com",
        },
      ];
      
      const jobSummary = "Passionate and highly motivated web developer with a strong foundation in web development technologies, including HTML, CSS, and JavaScript. Eager to contribute my creative problem-solving abilities and collaborative mindset to build responsive and user-friendly websites. Proficient in HTML,CSS,Node.js,React and committed to continuous learning to stay up-to-date with the latest industry trends. I look forward to working with a team of like-minded professionals who share my enthusiasm for web development and who are dedicated to pushing the boundaries of what is possible on the web. As I embark on this journey, my goal is to not only launch my career but also make a meaningful impact in the digital world, creating websites and applications that leave a lasting impression and enhance the online experience for all.";
    return(
        <section id="about" className="about">
            <PageHeaderContent 
            headerText="About me"
            icon={<BsInfoCircleFill size={40}/>}
            />

            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                        transform: "translateX(-900px)",
                        }}
                        end={{
                        transform: "translatex(0px)",
                        }}
                    >
                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                        transform: "translateX(600px)",
                        }}
                        end={{
                        transform: "translatex(0px)",
                        }}
                    >
                        <h3 className="personalInformationHeaderText">
                        Personal Information
                        </h3>
                        <ul>
                        {personalDetails.map((item, i) => (
                            <li key={i}>
                            <span className="title">{item.label}</span>
                            <span className="value">{item.value}</span>
                            </li>
                        ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                        transform: "translateX(600px)",
                        }}
                        end={{
                        transform: "translatex(0px)",
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var( --yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    )
}

export default About;