import React,{useEffect} from 'react'
import Aos from "aos"

export default function RightDiv() {
    useEffect(() => {
        Aos.init({ duration: 2000  });
      
     }, [])
    return (
        <div className="container  mt-5">
            <div className="row">
                <div className="col-md-10 m-auto">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card card-passion-getright" data-aos="fade-right">
                                <div className="card-title card-title-passion-getright">
                                    <h2>Marketing Team</h2>
                                </div>
                                <div className="card-text card-text-passion-getright">
                                    <p>We are not just marketers, we are storytellers. Our work is as much art as it is science, and while we love data, we also listen to our gut. From Social to Mobile, from Radio to TV, we do it all. Our mission is to help home buyers discover their dream homes in a smart, simple and stress-free way.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
