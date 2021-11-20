import React from 'react'



import "./Home.style.css"
import flame from "../../IMG/flame.svg";
import mtg from "../../IMG/mtg-logo.svg";

const Home = () => {
    return (
        <div>
            <div className="home-container">
                
                <div className="intro-container">
                    <p className="home-intro">
                        Welcome to the most important 
                    </p> 
                    <img src={mtg} alt="Not Found" className="home-mtg" />
                    <p className="home-intro">
                        sealed product sale page 
                    </p>
                </div>

                <img src={flame} alt="Not Found" className="home-img" />

                <p className="home-title">
                    FLAMESTORE
                </p>
                    
            </div>
        </div>
    )
}

export default Home
