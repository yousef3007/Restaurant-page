import About from "./components/about";
import Contact from "./components/contact";
import Portofolio from "./components/portofolio";
import Header from "./components/header";
const list = ["Home","Services","About","Sign Up"];
function NavBar(){
  return(
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" id="myLink">Home</a>
        <div id="nav">
            {list.map(key => {
            return(
              <a href={`#${key}`} className="item">{key}</a>
            )
          })}
        </div>
      </div>
    </nav>    
  )
}
function App() {
  return (
    <div>
      <Header />
      <About />
      <Portofolio />
      <Contact />
    </div>
  )
}

export default App
