import React from "react";
import Popup from "reactjs-popup";


function ProjPop(props) {

    return (
        <Popup open={props.open} modal>
            {() => (
                <>
                    <div class="timeline">
                        <button type="button" class="btn btn-outline-light" onClick={() => {
                            props.setOpen(false)
                        }
                        }>
                           <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <ul>
                            <li>
                                <span>ToDo_list</span>
                                <div class="content">
                                    <h8>Type: Web_App</h8>                                   
                                    <p>            
                                    Used: express, body-parser, ejs, mongoose
                                    </p>                                
                                </div>
                            </li>
                            <li>
                                <span>Weather</span>
                                <div class="content">                                
                                    <h8>Type: Web_App</h8>
                                    <p>
                                        Used: body-parser, express, https, external API
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span>Notes</span>
                                <div class="content">                                   
                                    <h8>Type: React_App</h8>
                                    <p>
                                        Used: react = ( components, events, hooks ), react-dom
                                    </p>
                                </div>
                            </li>                    
                        </ul>
                    </div>
                </>
            )}
        </Popup>
    )
}

export default ProjPop;