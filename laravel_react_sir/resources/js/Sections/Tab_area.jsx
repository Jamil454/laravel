import React from "react";

export default function Tab_area() {
    return (
        <>
            <section className="tab-area rr-tab__ptb theme-background pt-90 pb-50 p-relative fix">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-12 col-12 wow rrfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".3s"
                        >
                            <div className="rr-price-2-title-box text-center mb-45">
                                <span className="rr-section-subtitle p-relative">
                                    <img
                                        src="assets/img/testimonial/section-icon.png"
                                        alt="img"
                                    />{" "}
                                    Our solution TAb{" "}
                                    <img
                                        src="assets/img/testimonial/section-icon.png"
                                        alt="img"
                                    />
                                </span>
                                <h4 className="rr-section-title">
                                    Medical Largest Healthcare Solution
                                </h4>
                            </div>
                            <div className="rr-tab__section">
                                <nav>
                                    <div
                                        className="nav rr-tab justify-content-center "
                                        id="nav-tab"
                                        role="tablist"
                                    >
                                        <button
                                            className="nav-links"
                                            id="nav-Home-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#Home"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-Home-tab"
                                            aria-selected="false"
                                        >
                                            <span className="rr-tab">
                                                <span className="rr-tab__item d-flex justify-content-between align-items-center">
                                                    <span className="rr-tab__item-info d-flex align-items-center">
                                                        <b>
                                                            {" "}
                                                            <i className="icofont-brain" />
                                                        </b>
                                                        <span className="rr-tab__item-title m-0">
                                                            Brain-althim
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </button>
                                        <button
                                            className="nav-links active"
                                            id="nav-Car-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#Car"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-Car-tab"
                                            aria-selected="true"
                                            tabIndex={-1}
                                        >
                                            <span className="rr-tab">
                                                <span className="rr-tab__item d-flex justify-content-between align-items-center">
                                                    <span className="rr-tab__item-info d-flex align-items-center">
                                                        <b>
                                                            <i className="icofont-ambulance-cross" />
                                                        </b>
                                                        <span className="rr-tab__item-title m-0">
                                                            Emergency
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </button>
                                        <button
                                            className="nav-links"
                                            id="nav-Health-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#Health"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-Health-tab"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >
                                            <span className="rr-tab">
                                                <span className="rr-tab__item d-flex justify-content-between align-items-center">
                                                    <span className="rr-tab__item-info d-flex align-items-center">
                                                        <b>
                                                            <i className="icofont-heart-beat-alt" />
                                                        </b>
                                                        <span className="rr-tab__item-title m-0">
                                                            Heart-beat
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </button>
                                        <button
                                            className="nav-links"
                                            id="nav-Education-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#Education"
                                            type="button"
                                            role="tab"
                                            aria-controls="nav-Education-tab"
                                            aria-selected="false"
                                            tabIndex={-1}
                                        >
                                            <span className="rr-tab">
                                                <span className="rr-tab__item d-flex justify-content-between align-items-center">
                                                    <span className="rr-tab__item-info d-flex align-items-center">
                                                        <b>
                                                            {" "}
                                                            <i className="icofont-blood" />
                                                        </b>
                                                        <span className="rr-tab__item-title m-0">
                                                            Blood-test
                                                        </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="rr-tab_content fix">
                <div className="container p-0">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade"
                                    id="Home"
                                    role="tabpanel"
                                    aria-labelledby="nav-Home-tab"
                                    tabIndex={0}
                                >
                                    <div className="rr-tab__wrapper">
                                        <div className="rr-tab__section-box">
                                            <div className="container p-0">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                        <div className="rr-tab__thumb rr-cursor-point-area text-end p-relative">
                                                            <img
                                                                className="w-100"
                                                                src="assets/img/tab/img-2.jpg"
                                                                alt="img"
                                                            />
                                                            <div className="rr-tab-video-play">
                                                                <a
                                                                    className="popup-video"
                                                                    href="https://www.youtube.com/watch?v=cEgbPHcUhT4"
                                                                >
                                                                    <i className="fa-solid fa-play" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                        <div className="rr-tab__item pt-30 ">
                                                            <h2 className="rr-tab-title-3">
                                                                Brain Althim
                                                                Service:
                                                            </h2>
                                                            <p>
                                                                It is issued
                                                                free of charge
                                                                in medical
                                                                offices or at
                                                                home with time
                                                                purchase of
                                                                services in the
                                                                amount of more
                                                                than $40 per
                                                                person elevated
                                                                ambience,
                                                                completed.
                                                            </p>
                                                            <div className="rr-tab-lists">
                                                                <div className="rr-tab-item">
                                                                    <div className="rr-tab-list-item d-flex align-items-center">
                                                                        <div className="rr-tab-list-icon">
                                                                            <span>
                                                                                <i className="icofont-patient-bed" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="rr-tab-info">
                                                                            <p>
                                                                                Effective
                                                                                For
                                                                                Cough,
                                                                                Wheezing,
                                                                                Asthma,
                                                                                medical
                                                                                service
                                                                                State
                                                                                of
                                                                                the
                                                                                art
                                                                                technology:
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rr-tab-list-item d-flex align-items-center">
                                                                        <div className="rr-tab-list-icon">
                                                                            <span>
                                                                                <i className="icofont-heart-beat-alt" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="rr-tab-info">
                                                                            <p>
                                                                                Effective
                                                                                For
                                                                                Cough,
                                                                                Wheezing,
                                                                                Asthma,
                                                                                medical
                                                                                service
                                                                                State
                                                                                of
                                                                                the
                                                                                art
                                                                                technology:
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="rr-tab-link">
                                                                    <a href="service-details.html">
                                                                        <span>
                                                                            +
                                                                        </span>{" "}
                                                                        Best
                                                                        Medical
                                                                        &amp;
                                                                        Health
                                                                        Care
                                                                        mistaken
                                                                        idea of
                                                                        denouncing.
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a
                                                                className="rr-btn-black mb-20"
                                                                href="service-details.html"
                                                            >
                                                                <span>
                                                                    Click Here{" "}
                                                                    <i className="fa-sharp fa-solid fa-plus" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade active show"
                                    id="Car"
                                    role="tabpanel"
                                    aria-labelledby="nav-Car-tab"
                                    tabIndex={0}
                                >
                                    <div className="rr-tab__wrapper">
                                        <div className="rr-tab__section-box">
                                            <div className="container p-0">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                        <div className="rr-tab__thumb rr-cursor-point-area text-end p-relative">
                                                            <img
                                                                className="w-100"
                                                                src="assets/img/tab/img.jpg"
                                                                alt="img"
                                                            />
                                                            <div className="rr-tab-video-play">
                                                                <a
                                                                    className="popup-video"
                                                                    href="https://www.youtube.com/watch?v=cEgbPHcUhT4"
                                                                >
                                                                    <i className="fa-solid fa-play" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                        <div className="rr-tab__item pt-30 ">
                                                            <h2 className="rr-tab-title-3">
                                                                Emergency
                                                                Service:
                                                            </h2>
                                                            <p>
                                                                It is issued
                                                                free of charge
                                                                in medical
                                                                offices or at
                                                                home with time
                                                                purchase of
                                                                services in the
                                                                amount of more
                                                                than $40 per
                                                                person elevated
                                                                ambience,
                                                                completed.
                                                            </p>
                                                            <div className="rr-tab-lists">
                                                                <div className="rr-tab-item">
                                                                    <div className="rr-tab-list-item d-flex align-items-center">
                                                                        <div className="rr-tab-list-icon">
                                                                            <span>
                                                                                <i className="icofont-patient-bed" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="rr-tab-info">
                                                                            <p>
                                                                                Effective
                                                                                For
                                                                                Cough,
                                                                                Wheezing,
                                                                                Asthma,
                                                                                medical
                                                                                service
                                                                                State
                                                                                of
                                                                                the
                                                                                art
                                                                                technology:
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rr-tab-list-item d-flex align-items-center">
                                                                        <div className="rr-tab-list-icon">
                                                                            <span>
                                                                                <i className="icofont-heart-beat-alt" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="rr-tab-info">
                                                                            <p>
                                                                                Effective
                                                                                For
                                                                                Cough,
                                                                                Wheezing,
                                                                                Asthma,
                                                                                medical
                                                                                service
                                                                                State
                                                                                of
                                                                                the
                                                                                art
                                                                                technology:
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="rr-tab-link">
                                                                    <a href="service-details.html">
                                                                        <span>
                                                                            +
                                                                        </span>{" "}
                                                                        Best
                                                                        Medical
                                                                        &amp;
                                                                        Health
                                                                        Care
                                                                        mistaken
                                                                        idea of
                                                                        denouncing.
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a
                                                                className="rr-btn-black mb-20"
                                                                href="service-details.html"
                                                            >
                                                                <span>
                                                                    Click Here{" "}
                                                                    <i className="fa-sharp fa-solid fa-plus" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="Health"
                                    role="tabpanel"
                                    aria-labelledby="nav-Health-tab"
                                    tabIndex={0}
                                >
                                    <div className="rr-tab__wrapper">
                                        <div className="rr-tab__section-box">
                                            <div className="container p-0">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                        <div className="rr-tab__thumb rr-cursor-point-area text-end p-relative">
                                                            <img
                                                                className="w-100"
                                                                src="assets/img/tab/img-2.jpg"
                                                                alt="img"
                                                            />
                                                            <div className="rr-tab-video-play">
                                                                <a
                                                                    className="popup-video"
                                                                    href="https://www.youtube.com/watch?v=cEgbPHcUhT4"
                                                                >
                                                                    <i className="fa-solid fa-play" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                        <div className="rr-tab__item pt-30 ">
                                                            <h2 className="rr-tab-title-3">
                                                                Heart Beat
                                                                Service:
                                                            </h2>
                                                            <p>
                                                                It is issued
                                                                free of charge
                                                                in medical
                                                                offices or at
                                                                home with time
                                                                purchase of
                                                                services in the
                                                                amount of more
                                                                than $40 per
                                                                person elevated
                                                                ambience,
                                                                completed.
                                                            </p>
                                                            <div className="rr-tab-lists">
                                                                <div className="rr-tab-item">
                                                                    <div className="rr-tab-list-item d-flex align-items-center">
                                                                        <div className="rr-tab-list-icon">
                                                                            <span>
                                                                                <i className="icofont-patient-bed" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="rr-tab-info">
                                                                            <p>
                                                                                Effective
                                                                                For
                                                                                Cough,
                                                                                Wheezing,
                                                                                Asthma,
                                                                                medical
                                                                                service
                                                                                State
                                                                                of
                                                                                the
                                                                                art
                                                                                technology:
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rr-tab-list-item d-flex align-items-center">
                                                                        <div className="rr-tab-list-icon">
                                                                            <span>
                                                                                <i className="icofont-heart-beat-alt" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="rr-tab-info">
                                                                            <p>
                                                                                Effective
                                                                                For
                                                                                Cough,
                                                                                Wheezing,
                                                                                Asthma,
                                                                                medical
                                                                                service
                                                                                State
                                                                                of
                                                                                the
                                                                                art
                                                                                technology:
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="rr-tab-link">
                                                                    <a href="service-details.html">
                                                                        <span>
                                                                            +
                                                                        </span>{" "}
                                                                        Best
                                                                        Medical
                                                                        &amp;
                                                                        Health
                                                                        Care
                                                                        mistaken
                                                                        idea of
                                                                        denouncing.
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a
                                                                className="rr-btn-black mb-20"
                                                                href="service-details.html"
                                                            >
                                                                <span>
                                                                    Click Here{" "}
                                                                    <i className="fa-sharp fa-solid fa-plus" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="Education"
                                    role="tabpanel"
                                    aria-labelledby="nav-Education-tab"
                                    tabIndex={0}
                                >
                                    <div className="rr-tab__wrapper">
                                        <div className="rr-tab__section-box">
                                            <div className="container p-0">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                        <div className="rr-tab__thumb rr-cursor-point-area text-end p-relative">
                                                            <img
                                                                className="w-100"
                                                                src="assets/img/tab/img.jpg"
                                                                alt="img"
                                                            />
                                                            <div className="rr-tab-video-play">
                                                                <a
                                                                    className="popup-video"
                                                                    href="https://www.youtube.com/watch?v=cEgbPHcUhT4"
                                                                >
                                                                    <i className="fa-solid fa-play" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6  col-md-6 col-12">
                                                        <div className="rr-tab__item pt-30 ">
                                                            <h2 className="rr-tab-title-3">
                                                                Blood Test
                                                                Service:
                                                            </h2>
                                                            <p>
                                                                It is issued
                                                                free of charge
                                                                in medical
                                                                offices or at
                                                                home with time
                                                                purchase of
                                                                services in the
                                                                amount of more
                                                                than $40 per
                                                                person elevated
                                                                ambience,
                                                                completed.
                                                            </p>
                                                            <div className="rr-tab-lists">
                                                                <div className="rr-tab-item">
                                                                    <div className="rr-tab-list-item d-flex align-items-center">
                                                                        <div className="rr-tab-list-icon">
                                                                            <span>
                                                                                <i className="icofont-patient-bed" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="rr-tab-info">
                                                                            <p>
                                                                                Effective
                                                                                For
                                                                                Cough,
                                                                                Wheezing,
                                                                                Asthma,
                                                                                medical
                                                                                service
                                                                                State
                                                                                of
                                                                                the
                                                                                art
                                                                                technology:
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="rr-tab-list-item d-flex align-items-center">
                                                                        <div className="rr-tab-list-icon">
                                                                            <span>
                                                                                <i className="icofont-heart-beat-alt" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="rr-tab-info">
                                                                            <p>
                                                                                Effective
                                                                                For
                                                                                Cough,
                                                                                Wheezing,
                                                                                Asthma,
                                                                                medical
                                                                                service
                                                                                State
                                                                                of
                                                                                the
                                                                                art
                                                                                technology:
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="rr-tab-link">
                                                                    <a href="service-details.html">
                                                                        <span>
                                                                            +
                                                                        </span>{" "}
                                                                        Best
                                                                        Medical
                                                                        &amp;
                                                                        Health
                                                                        Care
                                                                        mistaken
                                                                        idea of
                                                                        denouncing.
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <a
                                                                className="rr-btn-black mb-20"
                                                                href="service-details.html"
                                                            >
                                                                <span>
                                                                    Click Here{" "}
                                                                    <i className="fa-sharp fa-solid fa-plus" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
