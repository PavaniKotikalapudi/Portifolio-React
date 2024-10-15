//import React from "react";

import "./style.scss";

import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../Components/PageHeaderContent/Index";
import React from "react";

// import { DiAndroid, DiApple } from "react-icons/di";
// import { FaDatabase, FaDev } from "react-icons/fa";





//import { BsInfoCircleFill } from "react-icons/bs";



const personalDetails = [
  {
    label: "Name",
    value: "Pavani Kotikalapudi",
  },
  {
    label: "Age",
    value: "23",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "Email",
    value: "pavanikotikalapudi@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 8179737099",
  },
];

const jobSummary =
"An enthusiastic and dedicated front-end developer with a strong foundation in HTML5, CSS3, JavaScript (ES6+), and React. Equipped with hands-on experience from personal projects, coursework, and coding challenges, I am passionate about creating clean, efficient, and responsive web applications."
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        //icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.0}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Passinated Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
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
          {/* <Animate
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
          </Animate> */}
        </div>
      </div>
    </section>
  );
};
export default About;
