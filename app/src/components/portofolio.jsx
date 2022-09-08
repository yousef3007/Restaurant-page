import img1 from "../images/6.jpg";
import img2 from "../images/7.jpg";
import img3 from "../images/8.jpg";

function Com(prop){
  return(
    <>
    <div className="col-12 col-lg-2 work-box">
      <div className="photobox photobox_type10">
      <div className={prop.class}>
        <div className="photobox__previewbox">
          <img src={prop.img} height="6" className="photobox__preview" alt="Preview"/>
          <span className="photobox__label">Food</span>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
export default function Portofolio(){
    return(
      <>
      <div className="portfolio" id="portfolio">
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container">
        <h2>Our Menu.</h2>
        <div className="row">
          <Com img ={img1} />
          <Com img ={img2} />
          <Com img ={img3} />
          <Com img ={img1} class ="filler"/>
          <Com img ={img2} class ="filler"/>
          <Com img ={img3} class ="filler"/>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="row">
          <Com img ={img1} class ="filler"/>
          <Com img ={img2} class ="filler"/>
          <Com img ={img3} class ="filler"/>
          <Com img ={img1} class ="filler"/>
          <Com img ={img2} class ="filler"/>
          <Com img ={img3} class ="filler"/>
        </div>
      </div>
      <div id="about-us"/>
      </div>
    </>
)
}