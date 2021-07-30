import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

function NavBar({user, setUser}) {
    function handleLogOut() {
		userService.logOut();
		setUser(null);
	}

    return ( <nav>
        <Link to="/puppies">Puppies</Link>
        &nbsp; | &nbsp;
        <Link to="/puppies/new">Add Puppies</Link>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
    )
}

export default NavBar;
