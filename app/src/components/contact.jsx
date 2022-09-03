export default function Contact(){
    return(
        <>
            <section id="contact-us" className="contact">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h5>CONTACT US</h5>
          <h2>Get in Touch</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 email">
          <input placeholder="Your email" type="email" id="email" pattern=".+@globex.com" size="30" required/>
        </div>
        <div className="col-12 col-lg-6 email">
          <input placeholder="Subject" type="subject" id="subject" size="30" required/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 message">
          <textarea id="message" name="message" rows="5" cols="1" defaultValue="Message here..."></textarea>
        </div>
        <div className="col-12">
          <div className="hero-btns contact-btn">
            <a href="#">Send Message</a>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}