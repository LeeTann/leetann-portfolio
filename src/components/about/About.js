import React from 'react'
import './about.css'

export default function About() {
    return (
        <div className="about">
            <h3>About</h3>
            <div className="about-container">
                <p className="quote">"<span className="quote-style">Learning to program is a valuable skill on its own. 
                    On another level, by learning to program and understanding the fundamentals of computer science, 
                    you are receiving the preeminent transferable skill: how to solve any complex problem.</span>" - Lambda School
                </p>
                <div>
                    <p>Hi. My Name is Lee. I'm a full-stack developer. I build stuff.</p>
                </div>             
            </div>
        </div>
    )
}
