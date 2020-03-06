import React, { Fragment } from 'react'
import Fade from 'react-reveal/Fade'
import './projects.css'

export default function Projects() {
    return (
        <div className="projects">
            <h3>Projects</h3>
            <div className="cards-container">
                <Fade left>
                    <div className="card">
                        <Fragment>
                        <img src="images/inquiry.png" alt="card img" className="card-img" />
                        <h1>Inquiry</h1>
                        <p>Inquiry is an app that aims at easing the stress of finding and booking an independent contractor by
                            providing a simplified schedule for booking and maintaining appointments.
                        </p>
                        <div className="card-info">
                            <p>
                                <span className="bold">Developed:</span> Team capstone project
                            </p>
                        </div>
                        <div>
                            <p className="card-info">
                                <span className="bold">Tech:</span> React, Redux, Custom CSS, Node, Express, Postgres
                            </p>
                        </div>
                        </Fragment>
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
                        <Fragment>
                        <img src="images/socialape1.png" alt="card img" className="card-img" />
                        <h1>Social Ape</h1>
                        <p>Social Ape is an social media that connects all the social apes in the world so they chat about bananas and all 
                            the things that make ape-ing around awesome.
                        </p>
                        <div className="card-info">
                            <p>
                                <span className="bold">Developed:</span> Solo Project
                            </p>
                        </div>
                        <div className="card-info">
                            <p>
                                <span className="bold">Tech:</span> React, Redux, Material-UI, Node, Express, Firebase
                            </p>
                        </div>
                        </Fragment>
                        <div className="btn-container">
                            <button href="https://github.com/LeeTann/socialApe-Frontend" className="btn">Github</button>
                            <button className="btn">View Live</button>
                        </div>
                    </div>
                </Fade>

                <Fade right>
                    <div className="card">
                        <img src="images/inquiry.png" alt="card img" className="card-img" />
                        <h1>Future Project</h1>
                        <p>Inquiry is an applicaiton that aims at easing the stress of finding and booking an independent contractor by
                            providing a simplified schedule for booking and maintaining appointments.
                        </p>
                        <div className="card-info">
                            <p>
                                <span className="bold">Developed:</span> Solo Project
                            </p>
                        </div>
                        <div className="card-info">
                            <p>
                                <span className="bold">Tech:</span> React, Redux, Material-UI, Node, Express, Firebase
                            </p>
                        </div>  
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
