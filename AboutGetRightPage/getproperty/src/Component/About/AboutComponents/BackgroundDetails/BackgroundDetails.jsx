import React from 'react'
import './style.css'
import LeftCard from "../../LeftCard"
import RightCard from "../../RightCards"
import imgsrc from "./images.png"
export default function BackgroundDetails() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center mt-5">About Us</h2>
          <h4 className="text-center mt-5">WELCOME TO GET RIGHT PROPERTY</h4>
          <p className="text-center mt-2">
            Get Right Property is founded in year 2021. It is being developed and maintained by highly experience and talented IT professionals. It has backing of real estate experience of years which was successfully implemented by its engineers into an application which will enable all home buyers to go through every minute details of the property even before visiting the project site office. Get Right Property enables a client to have the right to not to sell his personal information to anybody. Customer is the king and our team shall work day and night to deliver you the best user experience from the one and only
            <strong> “GET RIGHT PROPERTY”</strong>
          </p>
          <h4 className="text-center mt-5">OUR VISION</h4>
          <p className="text-center mt-2">
            Our vision is to bring in uninterrupted information about the product directly from the developer to our client to make an accurate decision. We shall provide you with all options available for sale and let our clients grab the best suited opportunity for them and their families. Let it be investment or self use, we shall deliver all option directly from the seller to our clients. Company mainly focuses on building customer user experience in taking one of the most difficult decisions.
            </p>
          <h4 className="text-center mt-5">OUR MISSION</h4>
          <p className="text-center mt-2">
            We shall be developing latest IT solutions which will streamline the process of property buying without indulging too many intermediaries into the process of buying. With team of highly experienced professional we shall deliver the most accurate information directly from the seller to its buyer.
            </p>
          <h4 className="text-center mt-5">CUSTOMER VIEW ABOUT US </h4>
          <LeftCard />
          <RightCard />
          <LeftCard />
          <RightCard />
          <LeftCard />
          <RightCard />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
           
          </div>
        </div>
      </div>
    </div>

  )
}
