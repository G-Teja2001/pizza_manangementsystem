 
import '/src/App.css'
import Navbar from '/src/assets/Navbar.jsx'
import Home from '/src/assets/Home.jsx';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Footer from '/src/assets/Footer.jsx';
import Menu from '/src/assets/menu.jsx';
import About from '/src/assets/About.jsx';
import Contact from '/src/assets/Contact.jsx';

function App() {

  return (
    <div className="App">

      {/* In the react switch is updated to Routes , and 
      it is used to run the second page from the main  page */}
      {/*when we have multiple pages in the web page we need to use react-router*/}
      
      <Router>
        <Navbar />
        <Routes>
          <Route  path = "/" exact Component={Home }/>
          <Route  path = "/Menu" exact Component={Menu }/>
          <Route  path = "/About" exact Component={About}/>
          <Route  path = "/Contact" exact Component={Contact}/>
        </Routes>
        <Footer/>
      </Router>

        
    </div>  )
}

export default App;
