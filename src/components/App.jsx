import React, { useState } from "react";
import About from "./About";
import Education from "./Education";
import Projects from './Projects';
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";


function App() {
    return (
        <div>
            <Header />
            <About />
            <div className="container center">
                <div className="row">
                    <Education />
                    <Projects />
                </div>
            </div>
            <Contact />
            <Footer />
        </div >
    );
}

export default App;