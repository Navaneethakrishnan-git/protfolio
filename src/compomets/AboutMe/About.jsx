import React from 'react'
import './Aboutme.css'
import img1 from '/Design uten navn.png'
function About() {
    return (<div id="about" className='about'>
        <div className="abouttittle">
            <h1>About me</h1>
            
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={img1} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quisquam sapiente, recusandae iste explicabo iusto enim non vitae eius voluptatem totam unde asperiores, 
                        placeat ipsa suscipit incidunt perferendis consequuntur illum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, enim.
        
                    </p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'90%'}}/></div>
                        <div className="about-skill"><p>React Js</p><hr style={{width:'70%'}}/></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:'80%'}}/></div>
                        <div className="about-skill"><p>Bootstrab</p><hr style={{width:'75%'}}/></div>
                    </div>
                
                
                </div>

            </div>
            <div className="about-acheivements">
                    <div className="about-acheivement">
                        <h1>10+</h1>
                        <p>PROJECT COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about-acheivement">
                        <h1>5</h1>
                        <p>Collaborate with UX designers and back-end develpoers</p>
                    </div>
                    <hr />
                    <div className="about-acheivement">
                        <h1>git</h1>
                        <p>Proficiency with Git commands such as branching, merging, and conflict resulution </p>
                    </div>
                    
        </div>

    </div>
        
    )
}

export default About
