import React,{useEffect} from 'react'
import "./style.css"
import Aos from "aos"
import "../../../node_modules/aos/dist/aos.css"
import {Jumbotron,Container } from 'react-bootstrap'
export default function LeftCard() {
    useEffect(() => {
        Aos.init({ duration: 2000  });
      
     }, [])
    return (
        <div className="row">
            <div className="col-md-6">
                <Jumbotron fluid  className="Jumbo-container" data-aos="fade-right">
                    <Container>
                        <h1>Fluid jumbotron</h1>
                        <p>
                            This is a modified jumbotron that occupies the entire horizontal space of
                            its parent.
                        </p>
                    </Container>
                </Jumbotron>
            </div>
            <div className="col-md-6"></div>
        </div>
    )
}
