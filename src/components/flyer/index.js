import React from "react"
import "./style.css"
import light from "./Images/light.png"

const Flyer = () => {

    return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
    
                    <img src={light} alt="PeerOne" />
    
                </div>
                <div className="col-lg-9 col-md-6 col-sm-12">
                    <h2 className="my-3" id="heading">CONNECTING STUDENTS TO <br />THEIR DREAM UNIVERSITIES</h2>
                </div>
            </div>
        </div>
        <hr id="heading-Break" />
    
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="my-3 text-center headingWithBackground">
                        Welcome to PeerOne, the first digital marketplace where high school students meet<br />
                        1-on-1 with current undergrads at the colleges they’re applying to!
                    </h3>
                </div>
            </div>
        </div>
    
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="text-center" id="thirdHeading">How Can Our Peer Mentors Help?</h2>
                </div>
            </div>
        </div>
    
    
        <div className="container my-3">
            <div className="row mx-3">
    
                <div className="col-3 my-2 mx-1 number"> 1 </div>
    
                <div className="col-9">
                    <h2 className="n1Heading"> BUILDING A SCHOOL LIST </h2>
                    <p className="n1Paragraph"> Need help deciding which schools & programs tapply to based on your interests
                        and<br />
                        application strength? Talk to a Peer Mentor today! </p>
                </div>
    
            </div>
        </div>
    
        <div className="container my-3">
            <div className="row mx-3">
    
                <div className="col-3 my-2 mx-1 number"> 2 </div>
    
                <div className="col-9">
                    <h2 className="n1Heading"> ESSAY WRITING / FEEDBACK </h2>
                    <p className="n1Paragraph"> Learn how you can write the most stand out, compelling narrative that is
                        authentically<br />
                        yours on your personal statement essays, financial aid & scholarship applications. </p>
                </div>
    
            </div>
        </div>
    
        <div className="container my-3">
            <div className="row mx-3">
    
                <div className="col-3 my-2 mx-1 number"> 3 </div>
    
                <div className="col-9">
                    <h2 className="n1Heading"> CHOOSING A COLLEGE </h2>
                    <p className="n1Paragraph"> Learn more about campus activities, student life and university culture from
                        actual<br />
                        students to make the best, informed decision for you! </p>
                </div>
    
            </div>
        </div>
    
    
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="text-center" id="thirdHeading">Where are Our Peer Mentors From?</h2>
                </div>
            </div>
        </div>
    
    
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="my-3 text-center headingWithBackground">
                        Gain access to 2000+ Peer Mentors from over 130+ different colleges across<br />
                        North America including, but not limited to …
                    </h3>
                </div>
            </div>
        </div>
    
    
        <div className="container">
            <div className="row mx-3" id="allImages">
                <img src="Images/PeerOne All Images.png" alt="peer one" />
            </div>
        </div>
    
    
    
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="text-center" id="thirdHeading">How to Gain Access?</h2>
                </div>
            </div>
        </div>
    
    
    
        <div className="container">
            <div className="row">
    
    
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
    
                        <div className="col">
                            <p styles="font-weight: bold;" id="qrCodeTopText">Scan to Sign Up!<sup>1</sup></p>
                            <img src="Images/Qr Code.png" alt="Qr Code" id="qrCode" />
                            <a href="https://bit.ly/2U7qGET">
                                <p id="qrCodeBottomText">https://bit.ly/2U7qGET</p>
                            </a>
                        </div>
    
    
                        <div className="col" id="qrParagraphs">
                            For a limited time, we are offering
                            a<br /> <span styles="color: #8DAE12; font-weight: bold;">$30/hr</span> 1:1 video call with a
                            Peer Mentor!<br />
                            <span styles="font-weight: bold;">(40% off! Normally $50/hr)</span><br /><br />
    
                            Offer expires <span styles="font-weight: bold;">July 15, 2021</span><br />
                            Spots are limited to <span styles="font-weight: bold;">first come first serve</span><br />
                            Link will <span styles="font-weight: bold;">expire after first 200 sign ups</span>
                        </div>
    
                    </div>
                </div>
    
    
    
    
    
    
    
    
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <p id="contactInformationTopText">Get to Know Us More!</p>
                    <div id="contactInformation">
    
                        <img src="Images/Safari.png" alt="Website" className="imageSize" /> &nbsp <span
                            className="contactInformationStyling"><a
                                href="https://www.peeroneacademy.com">www.peeroneacademy.com</a></span> <br /><br />
    
                        <img src="Images/Instagram.png" alt="Instagram" className="imageSize" /> &nbsp <span
                            className="contactInformationStyling">@peeronemarketplace</span><br /><br />
    
                        <img src="Images/Email.png" alt="Email" className="imageSize" /> &nbsp <span
                            className="contactInformationStyling"><a
                                href="mailto:info@peeroneacademy.com">info@peeroneacademy.com</a></span>
    
    
    
                    </div>
                </div>
    
    
    
    
    
    
                <sub className="mx-4">
                    <p> <sup>1</sup> sessions, click “Details” in the top right on Mobile to select quantity.</p>
                </sub>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
    </div>
    )
}

export default Flyer