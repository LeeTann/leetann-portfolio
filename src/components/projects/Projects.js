import React from 'react'
import Fade from 'react-reveal/Fade'
import './projects.css'

export default function Projects() {
    return (
        <div className="projects">
            <h3>Projects</h3>
            <div className="cards-container">
                <Fade left>
                    <div className="card">
                        <img src="images/inquiry.png" alt="card img" className="card-img" />
                        <h1>Inquiry</h1>
                        <p>Inquiry is an applicaiton that aims at easing the stress of finding and booking an independent contractor by
                            providing a simplified schedule for booking and maintaining appointments.
                        </p>
                        <div className="btn-container">
                            <a href="https://github.com/pt3-labs-contractor" target="_blank">
                                <button className="btn">Github</button>
                            </a>
                            <a href="https://affectionate-almeida-c22cb1.netlify.com/" target="_blank">
                                <button className="btn">View Live</button>
                            </a>
                        </div>
                    </div>
                </Fade>

                <Fade top>
                    <div className="card">
                        <img src="images/inquiry.png" alt="card img" className="card-img" />
                        <h1>Inquiry</h1>
                        <p>Inquiry is an applicaiton that aims at easing the stress of finding and booking an independent contractor by
                            providing a simplified schedule for booking and maintaining appointments.
                        </p>
                        <div className="btn-container">
                            <button className="btn">Github</button>
                            <button className="btn">View Live</button>
                        </div>
                    </div>
                </Fade>

                <Fade right>
                    <div className="card">
                        <img src="images/inquiry.png" alt="card img" className="card-img" />
                        <h1>Inquiry</h1>
                        <p>Inquiry is an applicaiton that aims at easing the stress of finding and booking an independent contractor by
                            providing a simplified schedule for booking and maintaining appointments.
                        </p>
                        <div className="btn-container">
                            <button className="btn">Github</button>
                            <button className="btn">View Live</button>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
