import { Link } from "react-router-dom"
import AppContext from '../context/AppContext'
import { useContext } from "react"


const IndividualProfile = () => {
    const {secondaryProfiles} = useContext(AppContext)
    const {selectedProfile} = useContext(AppContext)
    const {setSelectedProfile} = useContext(AppContext)
    
    return (
        <div>
            <h2 >This is where you would view the Individual profile content</h2>

            <div className='row'>
                <Link to='profiles'>
                    {  <img src={selectedProfile.profileImage} width='1000px'/>}
                </Link>
            </div>

            
        </div> 
    )
}

export default IndividualProfile