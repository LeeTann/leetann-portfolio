import React from 'react'
import './hero.css'

export default function Hero() {

    return (
        <div className="hero">
            <section className="landing">
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="hero-heading">Lee Tann</h1>
                        <p className="border">----------------------------</p>
                        <h2 className="hero-sub">Full-Stack Developer</h2>
                        <p className="border">----------------------------</p>
                        <h4 className="hero-sub-sub">React, Node, Express, Postgres</h4>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}
