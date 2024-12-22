import React from "react";

export default function Video_area() {
    return (
        <>
            <section
                className="rr-video-arae rr-video-before p-relative pt-115 pb-115 fix"
                data-background="assets/img/video/bg-2-1.jpg"
            >
                <div className="rr-video-shap z-index-1 d-none d-xxl-block">
                    <img src="assets/img/video/plus-icon.png" alt="img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8  col-md-10 col-12 ">
                            <div className="rr-video-title-box z-index-2">
                                <span
                                    className="rr-video-subtitle p-relative wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".3s"
                                >
                                    <img
                                        src="assets/img/testimonial/section-icon.png"
                                        alt="img"
                                    />{" "}
                                    OUR VIDEO MORE
                                </span>
                                <h4
                                    className="rr-video-title wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".5s"
                                >
                                    Immediately Video Medical <br />
                                    Every Health Care{" "}
                                </h4>
                                <p
                                    className="wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".7s"
                                >
                                    Medical tailored it design, management &amp;
                                    support services <br />
                                    business agency elit, sed do eiusmod tempor.{" "}
                                </p>
                                <a
                                    className="rr-btn-1 popup-video wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".9s"
                                    href="https://www.youtube.com/watch?v=cEgbPHcUhT4"
                                >
                                    <span>
                                        Video MOre{" "}
                                        <i className="fa-sharp fa-solid fa-plus" />
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6  col-lg-4 col-md-2  col-12 p-relative">
                            <div className="rr-video-area">
                                <div className="rr-video-play z-index-2">
                                    <a
                                        className="popup-video"
                                        href="https://www.youtube.com/watch?v=cEgbPHcUhT4"
                                    >
                                        <i className="fa-regular fa-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
