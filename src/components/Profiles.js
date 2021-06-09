import { Link } from "react-router-dom"
import AppContext from '../context/AppContext'
import { useContext } from "react"
const Profiles = () => {
    const {secondaryProfiles} = useContext(AppContext)
    let info = ''

    function handleClick(e){
        // you know secondaryProfiles[index]
        console.log(e.target.id)
        

        info = secondaryProfiles[e.target.id]
        
    }
    
    return (
        <div>
            <h2 >This is where you would view the profile content</h2>

            <div className='row'>
                <div classname='col'>
                    {secondaryProfiles.map((profile, index) => <li id={index} onClick={(e) => handleClick(e)}> {profile.firstName} {profile.lastName} </li>)}
                </div>

                <div classname='col'>
                    {info.name}
                </div>

            </div>

            
        </div>
    )
}
            
        </div>
    )
}
            
        </div>
    )
}
            
        </div>
    )
}
            
        </div>
    )
}

export default Profiles