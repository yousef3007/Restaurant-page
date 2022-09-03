import img from "../1.png";
export default function Header(){
    return(
    <>
          <header id="home">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div className="interactive-menu-button">
            <a href="#">
              <span>Menu</span>
            </a>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" data-scroll href="#home">Home.<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll href="#about-us">About Us.</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll href="#portfolio">Portfolio.</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll href="#contact-us">Contact Us.</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">DE </a>
                <a className="dropdown-item" href="#">ES </a>
              </div>
            </li>
          </ul>
          <form data-scroll href="#contact-us" className="contact-btn form-inline my-2 my-lg-0">
            <button>Contact Us</button>
          </form>
        </div>
      </nav>
    </div>
    <div className="container-fluid hero">
      <img src={img} alt=""/>
      <div className="container">
        <h1>The Spirit of<br/>Digital Agency.</h1>
        <p>Vestibulum ac diam sit amet quam vehicula elementum<br/> amet est on dui. Nulla porttitor accumsan tincidunt.</p>
        <div className="hero-btns">
          <a data-scroll href="#about-us">More About us</a>
          <a data-scroll href="#contact-us">Get in Touch.</a>
        </div>
      </div>
    </div>
  </header>
    </>
    )
}