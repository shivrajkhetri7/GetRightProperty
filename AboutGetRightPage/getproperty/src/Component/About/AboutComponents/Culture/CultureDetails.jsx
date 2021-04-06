import React from 'react'
import "./style.css"
import trust from "./handshake.png"
import innovetion from "./launch.png"
import boundarylessness from "./project-management.png"
import building from "./buildings.png"
export default function CultureDetails() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 m-auto">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4 m-auto">
                                    <img src={trust} alt="trust" title="trust" width="64px" height="64px" />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="Passion-page-titles">Trust</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aspernatur temporibus vero ullam? Placeat, autem aut. Libero at, expedita, minus praesentium labore alias aut ipsum, veritatis aliquam quo similique sed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4 m-auto">
                                    <img src={innovetion} alt="innovetion" title="innovetion" width="64px" height="64px" />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="Passion-page-titles">Innovation</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aspernatur temporibus vero ullam? Placeat, autem aut. Libero at, expedita, minus praesentium labore alias aut ipsum, veritatis aliquam quo similique sed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4 m-auto">
                                    <img src={boundarylessness} alt="boundarylessness" title="boundarylessness" width="64px" height="64px" />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="Passion-page-titles">Boundarylessness</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aspernatur temporibus vero ullam? Placeat, autem aut. Libero at, expedita, minus praesentium labore alias aut ipsum, veritatis aliquam quo similique sed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-4 m-auto">
                                    <img src={building} alt="building" title="building" width="64px" height="64px" />
                                </div>
                                <div className="col-md-8">
                                    <h3 className="Passion-page-titles">Hard Work</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aspernatur temporibus vero ullam? Placeat, autem aut. Libero at, expedita, minus praesentium labore alias aut ipsum, veritatis aliquam quo similique sed.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
