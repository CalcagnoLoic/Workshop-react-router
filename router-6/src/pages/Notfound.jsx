import React from 'react';
import {Link} from "react-router-dom";

const Notfound = () => {
    return (
        <div>
            <h2>Page note found...</h2>
            <p>This page doesn't exist. Go <Link to="/">home</Link>!</p>
        </div>
    );
};

export default Notfound;