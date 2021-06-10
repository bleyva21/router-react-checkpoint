import { Link } from "react-router-dom"
import AppContext from '../context/AppContext'
import { useContext } from "react"


const Profiles = () => {
    const {secondaryProfiles} = useContext(AppContext)
    const {selectedProfile} = useContext(AppContext)
    const {setSelectedProfile} = useContext(AppContext)
    const {profileFlag} = useContext(AppContext)
    const {setProfileFlag} = useContext(AppContext)
    
    function handleClick(e){
        // you know secondaryProfiles[index]
        console.log(secondaryProfiles[e.target.id])
        setProfileFlag(true)

        setSelectedProfile( secondaryProfiles[e.target.id] )
        
    }
    
    if(selectedProfile.profileImage === ''){
           setSelectedProfile({...selectedProfile, profileImage: 'https://assets.teenvogue.com/photos/5b4e34b4942af253ca1a7a54/master/pass/16-pikachu-with-bangs.nocrop.w710.h2147483647.jpg'}) 
    }

    function conditionalRender(){
        
        if(profileFlag){
            
        
            return (
                <>
                <Link to='individualProfile'>
                            { <img src={selectedProfile.profileImage} width='300px'/> } <br/>
                        </Link>
                        {selectedProfile.firstName + ' ' + selectedProfile.lastName}<br></br>
                        {"Birthday: " + selectedProfile.birthday.toString().slice(0,10)}
                </>
            )
        }   
    }

    return (
        
        <div>
            <h2 >This is where you would view the profiles</h2>

            <div className='row'>
                <div classname='col'>
                    {secondaryProfiles.map((profile, index) => <li id={index} onClick={(e) => handleClick(e)}> {profile.firstName} {profile.lastName} </li>)}
                </div>

                <div classname='col'>
                    
                    {conditionalRender()}
                    
                </div>

            </div>

            
        </div>
    )
}

export default Profiles