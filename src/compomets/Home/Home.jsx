import React from 'react'
import './Home.css'
import img1 from '/Design uten navn.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Home() {
    return (<div id="home"className="Home">
        <img src={img1} alt="" />
        <h1><span>I'm Navaneethakrishnan,</span> frontend developer based in India.</h1>
        <p>I am frontend devloper from Coimbatore,</p>
        <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchorLink' offset={50} href='#contact'>connect with me</AnchorLink></div>
            <div className="myresume">My resume</div>
        </div>
    </div>
        
    )
}

export default Home
