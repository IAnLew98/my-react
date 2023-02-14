import { Link } from "react-router-dom";
import './NavBar.css';
import { BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";

function NavBar(){
  const {cartProductIds} = useSelector(state => state.cart)
    return( 
       <>
      <header>
   <div id="navbar">

          <h1>
            <Link to="/" >
              TAMBURINS
           </Link> </h1>
     <nav>
       <ul>
         <li>
            <Link to="/cart" >
            <BsBag />
            <span>{cartProductIds.length}</span>
            </Link>
          </li>
          <li id="aside">
            <span id="span1"></span>
            <span id="span2"></span>
          </li>
        </ul>
      </nav>
      </div>
    </header>


    </>
      )
}

export default NavBar;