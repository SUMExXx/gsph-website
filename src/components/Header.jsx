// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../css/header.css'
import "bootstrap-icons/font/bootstrap-icons.css";

function Header() {
  return (
    <div className="header">
        <div className="club-identity">
          <img className="gsph-logo" src='/logos/GSPH_logo_60px.png'/>
          <img className="gsph-name" src='/logos/GSPH.png'/>
          
        </div>

        <div className='navbar-container'>
          <div className="navbar">
            <button className="featured nav-button" >Polaroid <i className="icon bi bi-stars" /></button>
          

            <div className='nav-button-container'>
              <button className='nav-button' >Home</button>
              <div className='button-sep'></div>
              <button className='nav-button' >Events <i className='icon bi bi-caret-down-fill' style={{width: '16px', height: '16px'}} ></i> </button>
              
              <div className='button-sep'></div>
              <button className='nav-button' >Sponsors</button>
              <div className='button-sep'></div>
              <button className='nav-button' >Team</button>
              <div className='button-sep'></div>
              <button className='nav-button' >Contact</button>
              <button className='options nav-button'><embed className="icon options-but" src="/logos/options.svg"></embed></button>
            </div>

            
            <a href="https://www.instagram.com/gsproductionhouse/" target="_blank" rel="noreferrer" className='social-container bi bi-instagram' style={{color: '#DA2E69'}}></a>
            <a href='https://www.youtube.com/@GSProductionHouse' target="_blank" rel="noreferrer" className='social-container bi bi-youtube' style={{color: '#FF0000'}}></a>
            <a href='https://www.linkedin.com/company/gs-production-house/' target="_blank" rel="noreferrer" className='social-container bi bi-linkedin' style={{color: '#0A66C2'}}></a>
            <a href='https://www.facebook.com/profile.php?id=100067339908578' target="_blank" rel="noreferrer" className='social-container bi bi-facebook' style={{color: '#1B74E4'}}></a>

          </div>
        </div>
    </div>
  )
}

export default Header