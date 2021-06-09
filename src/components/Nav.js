import React from 'react';
import { Link } from "react-router-dom";

function Nav (){

    return (
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/profiles"><li>Profiles</li></Link>
            <Link to="/about"><li>About</li></Link>
        </ul>
    )
}

export default Nav