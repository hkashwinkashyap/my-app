import React, { useState } from "react";
import ProjPop from "./Pops/ProjPop";

function Projects() {
    const [hoverStyle, setHoverStyle] = useState({ opacity: 0.6 });
    const [open, setOpen] = useState(false);

    function handleMouseHoverOnProj() {
        setHoverStyle(
            { opacity: 1 }
        );
    }

    function handleMouseHoverOffProj() {
        setHoverStyle(
            { opacity: 0.5 }
        );
    }

    return (
        <div className="col-lg-6" onClick={() => { setOpen(true) }} onMouseOver={handleMouseHoverOnProj} onMouseLeave={handleMouseHoverOffProj} style={hoverStyle}>
            <div className="text-center">
                <div className="card-body">
                    <h2 className="card-title card-txt">Projects</h2>
                </div>
                <ProjPop setOpen={setOpen} open={open} />
            </div>
        </div>
    );

}

export default Projects;