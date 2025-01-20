import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navabar() {

    return (<div className='navbar'>
        <h1>NK</h1>
        <ul className='nav-menu'>
            <li><AnchorLink className='anchorlink' href='#home'>Home </AnchorLink></li>
            <li><AnchorLink className='anchorlink'offset={50} href='#about'>About Me</AnchorLink></li>
            <li><AnchorLink className='anchorlink'offset={50} href='#service'>Service</AnchorLink></li>
            <li><AnchorLink className='anchorlink'offset={50} href='#contact'>Contact</AnchorLink></li>

        </ul>
        <div className="nav-connect" ><AnchorLink className='anchorlink'offset={50} href='#contact'>connect with me</AnchorLink></div>

    </div>
        
    )
}

export default Navabar
