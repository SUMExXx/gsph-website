// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../css/header.css'

function Header() {
  return (
    <div className="header">
        <div className="club-identity">
          <img className="gsph-logo" src='/logos/GSPH_logo_60px.png'/>
          <img className="gsph-name" src='/logos/GSPH.png'/>
          
        </div>

        <div className='navbar-container'>
          <div className="navbar">
            <button className="featured nav-button" >Polaroid <embed className="icon" src="/logos/Stars.svg"/></button>
          

            <div className='nav-button-container'>
              <button className='nav-button' >Home</button>
              <div className='button-sep'></div>
              <button className='nav-button' >Events</button>
              <div className='button-sep'></div>
              <button className='nav-button' >Sponsors</button>
              <div className='button-sep'></div>
              <button className='nav-button' >Team</button>
              <div className='button-sep'></div>
              <button className='nav-button' >Contact</button>
              <button className='options nav-button'><embed className="icon options-but" src="/logos/options.svg"></embed></button>
            </div>

            
            <a href="https://www.instagram.com/gsproductionhouse/" target="_blank" rel="noreferrer" className='social-container'><embed className='social-logo' src='/logos/instagram-color.svg'></embed></a>
            <a href='https://www.youtube.com/@GSProductionHouse' target="_blank" rel="noreferrer" className='social-container'><embed className='social-logo' src='/logos/youtube-color.svg'></embed></a>
            <a href='https://www.linkedin.com/company/gs-production-house/' target="_blank" rel="noreferrer" className='social-container'><embed className='social-logo' src='/logos/linkedin-color.svg'></embed></a>
            <a href='https://www.facebook.com/profile.php?id=100067339908578' target="_blank" rel="noreferrer" className='social-container' ><embed className='facebook-color' src='/logos/facebook-color.svg'></embed></a>

          </div>
        </div>
    </div>
  )
}

export default Header