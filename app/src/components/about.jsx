import img from "../1.png";
export default function About(){
    return(
        <>
  <section className="about" id="about-us">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-6">
          <img src={img} alt="" width="500px"/>
        </div>
        <div className="col-12 col-sm-12 col-lg-6">
          <h5>OUR COMPANY</h5>
          <h2>Some Fine<br/>Words About Us</h2>
          <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.Vestibulum ac diam sit amet.Quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.</p>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}