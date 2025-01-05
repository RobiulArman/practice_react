// import React from 'react';  
import { AiFillCheckCircle } from "react-icons/ai";  

const Features = ({ feature }) => {  
    return (  
        <div>  
            <p className="flex items-center"><AiFillCheckCircle /> {feature}</p>  
        </div>  
    );  
};  

export default Features;