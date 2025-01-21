import React, { useRef } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menui from '/image_search_1737448468621.png'
import closei from '/image_search_1737448491256.png'

function Navabar() {
    const menuref=useRef();
    const openmenu=()=>{
        menuref.current.style.right="0"
    }
    const closemenu=()=>{
        menuref.current.style.right="-350px"
    }
    
    
    

    return (<div className='navbar'>
        <h1>NK</h1>
        <img src={menui}  onClick={openmenu} className='nav-mob-open' />
        <ul ref={menuref} className='nav-menu'>
            <img src={closei} onClick={closemenu} style={{width:"30px"}} className='nav-mob-close'/>
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
