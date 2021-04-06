import React from 'react'
import "./style.css"
import CultureDetails from "./CultureDetails"
import LeftDiv from "./LeftDiv"
import RightDiv from "./RightDiv"
import TechnologyTeam from "./TechnilogyTeam"
export default function Culture() {
    return (
        <div>
            <h1 className="text-center mt-5 Passion-page-main-titles">Passion</h1>
            <div className="row mt-5">
                <div className="col-md-12">
                    <CultureDetails />
                    <LeftDiv/>
                    <RightDiv></RightDiv>
                    <TechnologyTeam/>
                </div>
            </div>
        </div>
    )
}
