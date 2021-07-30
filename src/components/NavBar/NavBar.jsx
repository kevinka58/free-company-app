import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

function NavBar({user, setUser}) {
    function handleLogOut() {
		userService.logOut();
		setUser(null);
	}

    return ( <nav>
        <Link to="/freeCompanies">Free Company</Link>
        &nbsp; | &nbsp;
        <Link to="/freeCompanies/new">Add Your Free Company</Link>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
    )
}

export default NavBar;
