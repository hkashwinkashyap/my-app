import React from "react";
import Popup from "reactjs-popup";


function EdPop(props) {

    return (
        <Popup open={props.open} modal>
            {() => (
                <>
                    <div class="timeline table-dark">
                        <button type="button" class="btn btn-outline-light" onClick={() => {
                            props.setOpen(false)
                        }
                        }>
                            <i class="fa-solid fa-chevron-left"></i></button>
                        <ul>
                            <li>
                                <span>Bachelors</span>
                                <div class="content">
                                    <h3>Electronics and Communications Engineering</h3>
                                    <h8>Grade: 8.1 CGPA</h8>
                                    <p>
                                        National Institute of Engineering, Mysore
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span>12th</span>
                                <div class="content">
                                    <h3>Intermediate Public Examination</h3>
                                    <h8>Grade: 94.2%</h8>
                                </div>
                            </li>
                            <li>
                                <span>10th</span>
                                <div class="content">
                                    <h3>Secondary School Certificate</h3>
                                    <h8>Grade: 9.7 CGPA</h8>
                                </div>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </Popup>
    )
}

export default EdPop;