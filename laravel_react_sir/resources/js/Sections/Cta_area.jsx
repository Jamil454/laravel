import React from "react";

export default function Cta_area() {
    return (
        <>
            <div className="rr-cta-area  rr-cta-bg  fix p-relative">
                <div className="container">
                    <div className="row align-items-center rr-cta-wrap">
                        <div className="col-xl-6 col-lg-6 col-md-6 wow rrfadeUp">
                            <div className="rr-cta-left-box d-flex align-items-center">
                                <div className="rr-cta-icon">
                                    <img
                                        src="assets/img/footer/email-icon.png"
                                        alt="img"
                                    />
                                </div>
                                <div className="rr-cta-content ml-20">
                                    <h4 className="rr-cta-title">
                                        Our Newslatter
                                    </h4>
                                    <span>We are dolor sit amet csectetur</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 wow rrfadeUp">
                            <div className="rr-cta-right-box p-relative">
                                <input
                                    type="text"
                                    placeholder="Email address"
                                />
                                <div className="rr-cta-button">
                                    <button className="black-bg rr-cta-btn">
                                        <span>Subscribe</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
