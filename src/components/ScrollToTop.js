import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const scrollToTop = props => { 
    const location = useLocation()
    // Every change of location or URL, it will scroll the window back to the top at pos (0,0).
    useEffect(()=> { 
        window.scrollTo(0,0);
    },[location]);
    // Returns the routes and content. Have to return something here. 
    return <>{props.children}</>
}

export default scrollToTop;