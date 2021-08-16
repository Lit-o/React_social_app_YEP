import React from "react";
import Fetching from "../../../assets/images/fetching.gif";

const Preloader = (props) => {
    return (
    <div style={{backgroundColor: "gold",
        widht: "100px",
        height: "100px",
        display:"inline-block",
        marin:"0 auto",
        borderRadius: "50%"
    }}>
        <img style={{widht: "100px", height: "100px"}} src={Fetching}/>
    </div>
    )
}

export default Preloader
