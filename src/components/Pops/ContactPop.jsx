import React from "react";
import Popup from "reactjs-popup";

function ContactPop(props) {

    return (
        <Popup open={props.open} modal>
            {() => (
                <>
                    <button type="button" class="btn btn-outline-light" onClick={() => {
                        props.setOpen(false)
                    }
                    }>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <table className="table table-striped table-dark contact">
                        <thead>
                            <tr><h2 className="center">Contact Me @</h2></tr>
                        </thead>
                        <tbody>
                            <tr><a href="mailto:hkashwinkashyap@gmail.com"><button type="button" className="btn btn-primary btn-lg btn-dark"><h3 className="card-txt"><i class="fa-solid fa-envelope fa-xl"></i></h3></button></a>
                                <a className="contact-btn" href="https://www.linkedin.com/in/h-k-ashwin-kashyap"><button type="button" className="btn btn-primary btn-lg btn-dark"><h3 className="card-txt"><i class="fa-brands fa-linkedin fa-xl"></i></h3></button></a>
                                <a className="contact-btn" href="https://github.com/hkashwinkashyap"><button type="button" className="btn btn-primary btn-lg btn-dark"><h3 className="card-txt"><i class="fa-brands fa-github fa-xl"></i></h3></button></a>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}
        </Popup>
    )
}

export default ContactPop;
