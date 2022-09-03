import img from "../1.png";
function Com(){
  return(
    <>
    <div className="col-12 col-lg-4 work-box">
      <div className="photobox photobox_type10">
        <div className="photobox__previewbox">
          <img src={img} className="photobox__preview" alt="Preview"/>
          <span className="photobox__label">Awesome Work</span>
        </div>
      </div>
    </div>
  </>
  )
}
export default function Portofolio(){
    return(
      <div className="portfolio">
        <div className="container">
        <h2>See some of our<br/>Creative work.</h2>
        <div className="row">
          <Com />
          <Com />
          <Com />
        </div>
        <div className="row">
          <Com />
          <Com />
          <Com />
        </div>
      </div>
        </div>
       
)
}