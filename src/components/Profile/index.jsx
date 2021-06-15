import React from 'react';
import './index.scss'

function Profile(props) {
    return (
        <div id="profile" className="container">
            <h1 className="title" style={{marginBottom: 0}}>Zachary Seebeck</h1>
            <h3 className="subtitle" style={{marginTop: 0}}>Full-Stack Web Developer</h3>
            <div className="info">
                <div className="left">
                    <img src="/img/senior_lean.jpg" height="200px" alt="Senior"/>
                    <p><span className="dropCap">Hi,</span> I'm Zachary. 
                    I'm a college student working towards getting my associates in Business And Information Technologies. 
                    I currently work for Vascular Health Clinics as a full-stack web developer using a range of technology 
                    including Laravel, React, and MySql. Previously I've also worked on developing websites 
                    with all-in-one content management systems such as Wordpress and Big Commerce and developing 
                    plugins to meet customer's needs. 
                    </p>
                </div>
                <div className="right">
                </div>
            </div>
        </div>
    );
}

export default Profile;