
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
                            <div className="text-center card-body about table-dark">
                                <h3>My Skills</h3>
                                <ul>
                                    <li>Java</li>
                                    <li>HTML5</li>
                                    <li>React.js</li>
                                    <li>Node.js</li>
                                    <li>JavaScript</li>
                                    <li>Cascading Style Sheets (CSS)</li>
                                    <li>MongoDB</li>
                                    <li>SQL</li>
                                    <li>Internet of Things (IoT)</li>
                                </ul>
                            </div>
                            <div className="text-center card-body about table-dark">
                                <h3>About Me</h3>
                                <p>Full Stack Developer with fluency in building web apps using Spring Boot, React.js and Node.js. I exhibit an entrepreneurial mentality as I adapt, learn and work in different environments</p>
                                <Box sx={{ width: 300 }}>
                                    <Skeleton />
                                    <Skeleton animation="wave" />
                                    <Skeleton animation={false} />
                                </Box>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Popup>
    )
}

export default AboutPop;
