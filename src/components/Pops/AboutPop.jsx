
import Popup from "reactjs-popup";
import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

function AboutPop(props) {

    return (
        <Popup open={props.open} modal>
            {() => (
                <>
                    <div className="container center">
                        <button type="button" class="btn btn-outline-light" onClick={() => {
                            props.setOpen(false)
                        }
                        }
                        ><i class="fa-solid fa-chevron-left"></i></button>
                        <div className="row">
                            <div className="col-lg-6 text-center card-body about">
                                <table class="table table-striped table-dark">
                                    <thead>
                                        <tr><h3>My Skills</h3></tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>React.js</td>
                                        </tr>
                                        <tr>
                                            <td>Node.js</td>
                                        </tr>
                                        <tr>
                                            <td>HTML5</td>
                                        </tr>
                                        <tr>
                                            <td>Java</td>
                                        </tr>
                                        <tr>
                                            <td>JavaScript</td>
                                        </tr>
                                        <tr>
                                            <td>Cascading Style Sheets (CSS)</td>
                                        </tr>
                                        <tr>
                                            <td>MongoDB</td>
                                        </tr>
                                        <tr>
                                            <td>SQL</td>
                                        </tr>
                                        <tr>
                                            <td>Internet of Things (IoT)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-6 text-center card-body about">
                                <table className="table table-striped table-dark">
                                    <thead>
                                        <tr><h3>About Me</h3></tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><p>Fluency in building web apps using React.js and Node.js. I exhibit an entrepreneurial mentality as I adapt, learn and work in different environments</p></td>
                                        </tr>
                                        <tr>
                                            <td>                                          
                                                <Box sx={{ width: 400, height: 300 }}>
                                                    <Skeleton />
                                                    <Skeleton animation="wave" />
                                                    <Skeleton animation={false} />
                                                </Box>                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Popup>
    )
}

export default AboutPop;
