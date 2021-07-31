import * as usersService from '../../utilities/users-service';
import PuppyList from '../PuppyList/PuppyList'

function Puppies({ puppies, handleDeletePuppy}){

    async function handleCheckToken(){
        const expDate = await usersService.checkToken()
        console.log(expDate);
    }
    return (
    <>
    <h1>Puppies</h1>  
    <div>
        <PuppyList puppies={puppies}/>
    </div>
    <button onClick={handleCheckToken}>
        Check When My Login Expires
    </button>
    </>
    )

}

export default Puppies;