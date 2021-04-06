import React,{useEffect} from 'react'
import Aos from "aos"
export default function TechnilogyTeam() {
    useEffect(() => {
        Aos.init({ duration: 2000  });
      
     }, [])
    return (
        <div className="container mt-5">
            <div className="row ">
                    <div className="col-md-10 m-auto">
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                                <div className="card card-passion-getright" data-aos="fade-left">
                                    <div className="card-title card-title-passion-getright">
                                        <h2>Technology Team</h2>
                                    </div>
                                    <div className="card-text card-text-passion-getright">
                                        <p>Like someone said, the best way to predict the future is to invent it. We call it the 10x way. Be it Maps, Data Science, Drones, Augmented Reality, we are always hungry to explore and deliver. Legs folded, comfortably seated and snacks at an arm's distance, we code away to glory!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
