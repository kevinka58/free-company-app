import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css' 
function NavBar({user, setUser}) {
    function handleLogOut() {
		userService.logOut();
		setUser(null);
	}

    return ( <nav className="navBar">
        <Link class="links" to="/freeCompanies">Home</Link>
        &nbsp; | &nbsp;
        <Link class="links" to="/freeCompanies/listing">Free Company</Link>
        &nbsp; | &nbsp;
        <Link class="links" to="/freeCompanies/new">Add Your Free Company</Link>
        &nbsp; | &nbsp;
        <Link class="links" to="" onClick={handleLogOut}>Log Out</Link>
        &nbsp; | &nbsp; 
        <span className="welcomeControl">
            <b>Welcome, {user.name}</b>
        </span>
    </nav>
    )
}

export default NavBar;
