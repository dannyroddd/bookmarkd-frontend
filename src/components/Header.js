import { Link } from "react-router-dom";

function Header(props) {
    return (
      <nav className="nav">
        <Link to="/">
          <div> <button>Bookmark'd</button>
          <h2 className="header"> Keep track of frequently visited websites with Bookmark'd</h2>
          </div>
        </Link>
       
      </nav>
    )
  }
  
  export default Header;