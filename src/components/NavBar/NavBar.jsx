import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

function NavBar({user, setUser}) {
    function handleLogOut() {
		userService.logOut();
		setUser(null);
	}

    return ( <nav>
        <Link to="/freeCompanies/listing">Free Company</Link>
        &nbsp; | &nbsp;
        <Link to="/freeCompanies/new">Add Your Free Company</Link>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
        &nbsp; | &nbsp; 
        <span>
            <b>Welcome, {user.name}</b>
        </span>
    </nav>
    )
}

export default NavBar;
