import React,{useEffect} from 'react'
import "./style.css"
import Aos from "aos"
export default function LeftDiv() {
    useEffect(() => {
        Aos.init({ duration: 2000  });
      
     }, [])
    return (
        <div className="container mt-5">
            <div className="row  ">
                    <div className="col-md-10 m-auto">
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                                <div className="card card-passion-getright" data-aos="fade-left">
                                    <div className="card-title card-title-passion-getright">
                                        <h2>Business Team</h2>
                                    </div>
                                    <div className="card-text card-text-passion-getright">
                                        <p>We bring the money home in exchange for empowering enterprises and individuals within the ecosystem. We like to suit up and talk the talk and we absolutely love to gather intel and work our magic on it. Finding us is never a task. We are the most pumped up, aggressive and loud folks in the house.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
