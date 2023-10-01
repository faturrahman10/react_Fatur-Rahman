const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="headerLeft">
          <p>Simple Header</p>
        </div>
        <div className="headerRight">
          <ul>
            <li className="home">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero">
        <div className="heroLeft">
          <div className="heroText">
            <p className="mainText">Better Solution For Your Busines</p>
            <p className="secondText">We are team of talented designers making websites with Bootstrap</p>
          </div>
          <div className="heroButton">
            <button className="buttonStart">
              <a href="">Get Started</a>
            </button>
            <button className="buttonWatch">
              <a href="/createProduct">Create Product</a>
            </button>
          </div>
        </div>
        <div className="heroRight">
          <img src="./img/hero-img.png" alt="gambar ilustrasi"/>
        </div>
      </div>
      <div className="joinNewsletter">
        <p className="joinMainText">Join Our Newsletter</p>
        <p className="joinSecondText">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <form action="">
          <input type="text" />
          <button>Subscribe</button>
        </form>
      </div>
      <div className="footer">
        <div className="topFooter">
          <div className="footerContent footer1">
            <div className="top">
              <p className="topicFooter" >ARSHA</p>
              <p className="topicContent">A 108 Adam Street</p>
              <p className="topicContent">New York, NY 535022</p>
              <p className="topicContent">United States</p>
            </div>
            <div className="bottom">
              <p className="topicContent"><span>Phone:</span> +1 5589 55488 55</p>
              <p className="topicContent"><span>Email:</span> info@example.com</p>
            </div>
          </div>
          <div className="footerContent footer2">
            <p className="topicFooter" >Usefull Links</p>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footerContent footer3">
            <p className="topicFooter" >Our Services</p>
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="footerContent footer4">
            <p className="topicFooter" >Our Social Network</p>
            <p className="topicContent">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <img src="./img/logo.png" alt="logo"/>
          </div>
        </div>
        <div className="bottomFooter">
          <div className="bottomFooterContent bottomFooterLeft">
            <p>&copy; Copyright <span>Arsha.</span> All Right Reserved</p>
          </div>
          <div className="bottomFooterContent bottomFooterRight">
            <p>Design By <span>Bootstrap Made</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home