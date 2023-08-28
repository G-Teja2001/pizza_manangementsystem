 import React, { useState } from 'react' ;
 import pizza from "/src/logos/pizza.png";
 import { Link } from 'react-router-dom';
 import '/src/assets/styles/Navbar.css'; 
 import ReorderIcon from '@mui/icons-material/Reorder';
 
 function Navbar() {

  const[openLinks , setopenLinks] = useState(false);
  const toggleNavbar =()=>{
      setopenLinks(!openLinks);  // This statement makes the logic opposite to the the true of false , when use state having true then it will make false then when it is false it will make to true 
  }

   return (
     <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}> {/* Here in this id we are writing a conditional statement if  the open link is oepn then it sets the id to open or other wise then it set the id to close*/}
           <img src={pizza}/>   

           <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
          </div> 
        </div>


        <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
        <ReorderIcon /></button>
        </div>
     </div>
   )
 }
 
 export default Navbar
  