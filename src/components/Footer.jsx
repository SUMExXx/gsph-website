import '../css/footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="footer-main">
            <div className='locate-div'>
              <h3 className='locate-head'>GS Production House</h3>
              <div className='locate-us-div'>
                <embed className="icon" src='/logos/GeoAltFill.svg'></embed>
                <h4 className='locate-us'>Locate Us</h4>
                
              </div>
              <span className='address'>SGSITS 23, M.Visvesvaraya Marg Indore, Madhya Pradesh, 452003</span>
              <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d275.50581956350607!2d75.8715015132488!3d22.725181135142012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd13ed2bae49%3A0xb884fc340de875c6!2sShri%20Govindram%20Seksaria%20Institute%20of%20Technology%20and%20Science!5e0!3m2!1sen!2sin!4v1691932762423!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" ></iframe>
            </div>
            <div className='contact-div'>
              <h4 className='contact-head'>Contact Us</h4>
              <div className='contact-details'>
                <div className='locate-us-div'>
                  <embed className="icon" src='/logos/GeoAltFill.svg'></embed>
                  <h4 className='locate-us'>Email <span style={{color: 'white', fontWeight: '400'}}>gsproductionhouse@gmail.com</span></h4>
                  
                </div>
                <div className='locate-us-div'>
                  <embed className="icon" src='/logos/GeoAltFill.svg'></embed>
                  <h4 className='locate-us'>Call <span style={{color: 'white', fontWeight: '400'}}>+91 89748 63731</span></h4>
                  
                </div>
              </div>
              <div className='social-icons-footer-div'>
                <embed className='social-icons-footer' src='/logos/Instagram.svg'/>
                <embed className='social-icons-footer' src='/logos/Youtube.svg'/>
                <embed className='social-icons-footer' src='/logos/Linkedin.svg'/>
                <embed className='social-icons-footer' src='/logos/Facebook.svg'/>
              </div>
              <div className='footer-details-div'>
                <div className='footer-details-col'>
                  <a>About Us</a>
                  <a>About Us</a>
                  <a>About Us</a>
                  <a>About Us</a>
                </div>
                <div className='footer-details-col'>
                  <a>About Us</a>
                  <a>About Us</a>
                  <a>About Us</a>
                  <a>About Us</a>
                </div>
                <div className='footer-details-col'>
                  <a>About Us</a>
                  <a>About Us</a>
                  <a>About Us</a>
                  <a>About Us</a>
                </div>
                <div className='footer-details-col'>
                  <a>About Us</a>
                  <a>About Us</a>
                  <a>About Us</a>
                  <a>About Us</a>
                </div>
              </div>
            </div>
        </div>
        <div className="footer-bottom">
          <span className='copyright'>© GS Production House 2023</span>
          
          <span className='copyright'>Made with 🤍 by <a href='https://sumexxx.github.io/' style={{color: '#FFF', fontWeight: '400'}}>Suman Debnath</a></span>
          
        </div>
        <div className='bottom-end'></div>
    </div>
  )
}

export default Footer