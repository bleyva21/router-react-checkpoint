import React from 'react';
import { Link } from "react-router-dom";

function Nav (){

    return (
        <nav id='navbar'>
            <Link to="/"><div>Home</div></Link>
            <Link to="/profiles"><div>Profiles</div></Link>
            <Link to="/about"><div>About</div></Link>
        </nav>
    )
}

export default Nav