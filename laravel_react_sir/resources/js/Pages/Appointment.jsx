import Footer from "@/Sections/Footer";
import Header from "@/Sections/Header";
import React from "react";

export default function Appointment() {
    return (
        <>
            <Header />

            {/* breadcrumb area start */}
            <div
                className="breadcrumb__area breadcrumb__overlay breadcrumb__height fix p-relative"
                data-background="assets/img/breadcurmb/breadcurmb-1-10.jpg"
            >
                <div className="breadcrumb-shap d-none d-xxl-block">
                    <img src="assets/img/breadcurmb/img-2.png" alt="img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-5">
                            <div className="breadcrumb__content z-index">
                                <div className="breadcrumb__section-title-box">
                                    <h3 className="breadcrumb__title">
                                        Contact
                                    </h3>
                                </div>
                                <div className="breadcrumb__list">
                                    <span>
                                        <a href="index.html">Home</a>
                                    </span>
                                    <span className="dvdr">
                                        <i>/</i>
                                    </span>
                                    <span>Contact</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-7">
                            <div className="breadcrumb-img z-index-3">
                                <div className="breadcrumb-img mt-140">
                                    <img
                                        src="assets/img/breadcurmb/img.png"
                                        alt="img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* breadcrumb area end */}

            {/* contact info area start */}
            <section className="rr-contact-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xl-4 col-lg-4 col-md-4 wow rrfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".3s"
                        >
                            <div className="rr-contat-box-info">
                                <div className="rr-contact-box-item d-flex align-items-center p-relative">
                                    <div className="rr-contact-box-icon mr-20">
                                        <span>
                                            <i className="fa-solid fa-phone" />
                                        </span>
                                    </div>
                                    <div className="rr-contact-box-contat">
                                        <span>Call Now</span>
                                        <p>
                                            <a href="tel:+09627387877">
                                                +6332500022
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-4 col-md-4 wow rrfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".5s"
                        >
                            <div className="rr-contat-box-info">
                                <div className="rr-contact-box-item d-flex align-items-center p-relative">
                                    <div className="rr-contact-box-icon mr-20">
                                        <span>
                                            <i className="fa-solid fa-location-dot" />
                                        </span>
                                    </div>
                                    <div className="rr-contact-box-contat">
                                        <span>Address</span>
                                        <p>
                                            <a href="htrrs://www.google.com/maps/@36.0758266,-79.4558848,17z">
                                                London Ratab 25
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-4 col-lg-4 col-md-4 wow rrfadeUp"
                            data-wow-duration=".9s"
                            data-wow-delay=".7s"
                        >
                            <div className="rr-contat-box-info">
                                <div className="rr-contact-box-item d-flex align-items-center p-relative">
                                    <div className="rr-contact-box-icon mr-20">
                                        <span>
                                            <i className="fa-sharp fa-solid fa-envelope" />
                                        </span>
                                    </div>
                                    <div className="rr-contact-box-contat">
                                        <span>Email Us</span>
                                        <p>
                                            <a href="mailto:robiul@eobi.com">
                                                robiul@eobi.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact info area end */}

            {/* contact area start */}
            <section className="rr-contact-area p-relative black-bg fix">
                <div className="rr-contact-shap">
                    <img src="assets/img/contact/shap01.png" alt="img" />
                </div>
                <div className="rr-contact-img">
                    <img src="assets/img/contact/contact-img.jpg" alt="img" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-3 col-md-1" />
                        <div className="col-xl-4 col-lg-9 col-md-10">
                            <div className="rr-form-box text-center">
                                <b>OUR Booking Now</b>
                                <h4 className="rr-section-title pb-60">
                                    Appoinment
                                </h4>
                                <form method="post" action>
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                                            <div className="rr-form-input-box rr-form-input-main">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    defaultValue
                                                    placeholder="Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                                            <div className="rr-form-input-box rr-form-input-main">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    defaultValue
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 mb-20">
                                            <div className="rr-form-input-box rr-form-input-main">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    defaultValue
                                                    placeholder="phone"
                                                />
                                            </div>
                                        </div>
                                        <div className=" col-md-12 col-12">
                                            <div className="rr-form-input-box pb-30">
                                                <select name="doctor" className="form-control">
                                                    <option value="">
                                                        Choose Doctor
                                                    </option>
                                                    <option></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 mb-20">
                                            <div className="rr-form-input-box rr-form-input-main">
                                                <input
                                                    type="date"
                                                    name="date"
                                                    defaultValue
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 mb-20">
                                            <div className="rr-form-textarea-box">
                                                <textarea
                                                    name="remarks"
                                                    placeholder="Your meassage"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            className="rr-btn-1 rr-form-theme-bg"
                                            type="submit"
                                        >
                                            <span>Make an appoinment</span>
                                        </button>
                                    </div>
                                </form>

                                <button
                                    className="rr-btn-1 rr-form-theme-bg"
                                    type="submit"
                                >
                                    <span>Make an appoinment</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-10 col-md-1" />
                    </div>
                </div>
            </section>
            {/* contact area end */}

            <Footer />
        </>
    );
}
