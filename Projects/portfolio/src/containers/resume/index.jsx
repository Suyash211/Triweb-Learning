import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from 'react-icons/bs'
const Resume = () => {
    return(
        <section id="resume" className="resume">
            <PageHeaderContent 
            headerText="Resume"
            icon={<BsInfoCircleFill size={40}/>}
            />
        </section>
    )
}

export default Resume;