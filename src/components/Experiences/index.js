import React from "react";
import "./index.scss";

function ExperiencesObject({title, subtitle, date, children}) {
  return (
    <div className="individualExperience">
      <div className="left">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>
          {children}
        </p>
      </div>
      <div className="right">
        {date}
      </div>
    </div>
  );
}

function EducationObject({title, subtitle, date, children}) {
  return (
    <div className="individualEducation">
      <div className="left">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <div className="right">
        {date}
      </div>
    </div>
  );
}

function Experiences(props) {
  return (
    <div id="resume" className="container">
      <div className="resume">
        <div className="resumeHeading">
          <h1>Resume</h1>
          <a href="/files/resume.pdf" style={{textAlign: 'right'}} className="btn">Download Resume</a>
        </div>
        <div className="experience">
          <div className="title">
            <h2>Experience</h2>
          </div>
          <div className="experiences">
            <ExperiencesObject title="Vascular Health Clinics" subtitle="Full Stack Developer" date="May 2021 - Present">
             If it fits, i sits scratch so owner bleeds. Lick butt rub my belly hiss or jump around on couch,
             meow constantly until given food, . Slap the dog because cats rule jump on fridge fight an 
             alligator and win chase mice no, you can't close the door, i haven't decided whether or not i 
             wanna go out and a nice warm laptop for me to sit on cough hairball on conveniently placed pants. 
             Toilet paper attack claws fluff everywhere meow miao french ciao litterbox nyaa nyaa and sit by 
             the fire scratch leg; meow for can opener
            </ExperiencesObject>
              
            <ExperiencesObject title="Newtech Dealer Services" subtitle="Junior Developer" date="Jan 2019 - May 2021">
             If it fits, i sits scratch so owner bleeds. Lick butt rub my belly hiss or jump around on couch,
             meow constantly until given food, . Slap the dog because cats rule jump on fridge fight an 
             alligator and win chase mice no, you can't close the door, i haven't decided whether or not i 
             wanna go out and a nice warm laptop for me to sit on cough hairball on conveniently placed pants. 
             Toilet paper attack claws fluff everywhere meow miao french ciao litterbox nyaa nyaa and sit by 
             the fire scratch leg; meow for can opener
            </ExperiencesObject>
          </div>
        </div>
        <div className="experience">
          <div className="title">
            <h2>Education</h2>
          </div>
          <div className="experiences">
            <EducationObject title="Delta College" subtitle="Business & IT Associates" date="May 2021 - Present"/>
            <EducationObject title="Bay-Arenac Career Center" subtitle="Computer Programming" date="Sep 2018 - May 2020"/>
            <EducationObject title="Central High School" subtitle="Diploma" date="Sep 2016 - May 2020"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
