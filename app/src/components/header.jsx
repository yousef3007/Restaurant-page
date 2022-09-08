import img from "../images/3.jpg";
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
              <a className="nav-link" data-scroll href="#portfolio">Menu.</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll href="#about-us">Location.</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-scroll href="#contact-us">Order.</a>
            </li>
          </ul>
          <div id="logo"  className="contact-btn form-inline my-2 my-lg-0">LOGO</div>
        </div>
      </nav>
    </div>
    <div className="container-fluid hero">
      <img src={img} alt="" className="photo"/>
      <div className="container">
        <h1>The Maximum<br/>of Flavour.</h1>
        <p>Vestibulum ac diam sit amet quam vehicula elementum<br/> amet est on dui. Nulla porttitor accumsan tincidunt.</p>
        <div className="hero-btns">
          <a data-scroll href="#about-us">Our Location.</a>
          <a data-scroll href="#contact-us">Order.</a>
        </div>
      </div>
    </div>
  </header>
    </>
    )
}