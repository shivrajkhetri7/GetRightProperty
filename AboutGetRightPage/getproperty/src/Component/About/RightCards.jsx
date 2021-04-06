import React,{useEffect} from 'react'
// import ".style.css"
import Aos from "aos"
import "../../../node_modules/aos/dist/aos.css"
import "./style.css"
import {Jumbotron,Container } from 'react-bootstrap'
export default function RightCards() {
   useEffect(() => {
      Aos.init({ duration: 2000  });
    
   }, [])
    return (
        <div className="row">
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
            <Jumbotron fluid className="Jumbo-container" data-aos="fade-left" >
                    <Container>
                    <div className="about-jumbo-heading">
                        <h1>Fluid jumbotron</h1>
                    </div>
                        <p>
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        </div>
    )
}
