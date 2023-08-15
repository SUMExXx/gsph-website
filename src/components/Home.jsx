import '../css/home.css'

function Home() {
  return (
    <div className="home">
        <div className='top-box'></div>
        <div className="collage">
            <div className='head-text-container'>
                <h2 className="head-text">Welcome to<h1 className='head-text-h1'>GS Production House</h1></h2>
                <h2 className="sub-text">The official Social Media and Media Production club of SGSITS</h2>
            </div>
        </div>
        <div id='social-reach-div'>
          <div className='social-reach-box social-react-text-div'><span className='social-reach-text'># Our Online Reach</span></div>
          <div className='social-reach-box social-reach-insta'></div>
          <div className='social-reach-box social-reach-youtube'></div>
          <div className='social-reach-box social-reach-linkedin'></div>
          <div className='social-reach-box social-reach-facebook'></div>
        </div>
    </div>
  )
}

export default Home