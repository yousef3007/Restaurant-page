export default function Contact(){
    return(
        <>
    <section className="contact">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Order Up</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 email">
          <input placeholder="Order" type="email" id="email" pattern=".+@globex.com" size="30" required/>
        </div>
      </div>
      <div className="row">
      <div className="col-12 email">
          <input placeholder="Location" type="Password" id="subject" size="30" required/>
      </div>
        <div className="col-12">
          <div className="hero-btns contact-btn">
            <a href="#">Place Order</a>
          </div>
        </div>
      </div>
    </div>
  </section>
        </>
    )
}