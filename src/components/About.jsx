import React, { useState } from "react";
import Popup from 'reactjs-popup';
import AboutPop from "./Pops/AboutPop";

function About() {

    const [hoverStyle, setHoverStyle] = useState({ opacity: 0.6 });
    const [open, setOpen] = useState(false);
   

    function handleMouseHoverOn() {
        setHoverStyle(
            { opacity: 1 }
        );
    }

    function handleMouseHoverOff() {
        setHoverStyle(
            { opacity: 0.5 }
        );
    }

    return (
        <div className="container center" onClick={() => { setOpen(true) }} onMouseOver={handleMouseHoverOn} onMouseLeave={handleMouseHoverOff} style={hoverStyle}>
            <div className="text-center">
                <div>
                    <h2 className="card-txt">About</h2>
                </div>
            </div>
            <AboutPop setOpen={setOpen} open={open} />
        </div>
    );
}

export default About;   