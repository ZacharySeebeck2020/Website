import React from "react";
import ExperienceItem from "../components/ExperienceItem";
import styles from "../styles/Experience.module.scss";

function Experience(props) {
  return (
    <div className={styles.container}>
      <h4 className="text-center pt-3 text-xl">My Experience</h4>
      <h6 className="text-center pt-3 text-xs">Click to show more information</h6>
      <div className={styles.expHead}>
        <ExperienceItem className={styles.expItem} name="Newtech Dealer Services" timeframe="Jan 2019 - Present"/>
        <ExperienceItem className={styles.expItem} name="Digital Fox" timeframe="Oct 2020 - Present"/>
      </div>
      <div className={styles.content}>
        <div className="glass">
            <div className="p-3 flex flex-row justify-items-center">
                <img className="ml-1 h-10" src="/employment/newtech.png" alt=""/>
                <h5 className="ml-auto my-auto">Newtech Dealer Services (Jan 2019 - Present)</h5>
            </div>
            <div className="flex flex-row pb-10">
                <div className="flex-col w-6/12 p-4">
                    <h5 className="ml-auto my-auto">Tools used</h5>
                </div>
                <div className="flex-col w-6/12 p-4">
                    <h5 className="ml-auto my-auto w-50">Overview</h5>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
