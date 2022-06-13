import React, { useState } from "react";
import ContactPop from "./Pops/ContactPop";

function Contact() {
    const [hoverStyle, setHoverStyle] = useState({ opacity: 0.6 });
    const [open, setOpen] = useState(false);

    function handleMouseHoverOn() {
        setHoverStyle(
            { opacity: 1 }
        );
    }

    function handleMouseHoverOff(){
        setHoverStyle(
            {opacity: 0.5}
        );
    }

    return (
        <div className="container center" onClick={() => { setOpen(true) }} onMouseOver={handleMouseHoverOn} onMouseLeave={handleMouseHoverOff} style={hoverStyle}>
            <div className="text-center">
                <div className="card-body">
                    <h2 className="card-title card-txt">Contact</h2>
                </div>
            </div>
            <ContactPop setOpen={setOpen} open={open} />
        </div>
    );
}

export default Contact;