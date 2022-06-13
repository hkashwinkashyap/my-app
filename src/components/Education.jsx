import React, { useState } from "react";
import EdPop from "./Pops/EdPop";

function Education() {
    const [hoverStyle, setHoverStyle] = useState({ opacity: 0.6 });
    const [open, setOpen] = useState(false);

    function handleMouseHoverOnEd() {
        setHoverStyle(
            { opacity: 1 }
        );
    }

    function handleMouseHoverOffEd() {
        setHoverStyle(
            { opacity: 0.5 }
        );
    }

    return (
                <div className="col-lg-6" onClick={() => { setOpen(true) }} onMouseOver={handleMouseHoverOnEd} onMouseLeave={handleMouseHoverOffEd} style={hoverStyle}>
                    <div className="text-center">
                        <div className="card-body">
                            <h2 className="card-title card-txt">Education</h2>
                        </div>
                    </div>
                    <EdPop setOpen={setOpen} open={open} />
                </div>
    );
}

export default Education;
