import React from "react";

export default function About() {
    return (
        <div>
            {/* back to top start */}
            <div className="back-to-top-wrapper">
                <button
                    id="back_to_top"
                    type="button"
                    className="back-to-top-btn"
                >
                    <svg width={12} height={7} viewBox="0 0 12 7" fill="none">
                        <path
                            d="M11 6L6 1L1 6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            {/* back to top end */}
            {/* search popup start */}
            <div className="search__popup">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="search__wrapper">
                                <div className="search__top d-flex justify-content-between align-items-center">
                                    <div className="search__logo">
                                        <a href="index.html">
                                            <img
                                                src="assets/img/logo/logo-white.png"
                                                alt="img"
                                            />
                                        </a>
                                    </div>
                                    <div className="search__close">
                                        <button
                                            type="button"
                                            className="search__close-btn search-close-btn"
                                        >
                                            <svg
                                                width={18}
                                                height={18}
                                                viewBox="0 0 18 18"
                                                fill="none"
                                            >
                                                <path
                                                    d="M17 1L1 17"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M1 1L17 17"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="search__form">
                                    <form action="#">
                                        <div className="search__input">
                                            <input
                                                className="search-input-field"
                                                type="text"
                                                placeholder="Type here to search..."
                                            />
                                            <span className="search-focus-border" />
                                            <button type="submit">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M19.0002 19.0002L17.2002 17.2002"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* search popup end */}
            {/* rr-offcanvus-area-start */}
            <div className="rroffcanvas-area">
                <div className="rroffcanvas">
                    <div className="rroffcanvas__close-btn">
                        <button className="close-btn">
                            <i className="fal fa-times" />
                        </button>
                    </div>
                    <div className="rroffcanvas__logo">
                        <a href="index.html">
                            <img
                                src="assets/img/logo/logo-white.png"
                                alt="img"
                            />
                        </a>
                    </div>
                    <div className="rr-main-menu-mobile d-xl-none" />
                    <div className="rroffcanvas__contact-info">
                        <div className="rroffcanvas__contact-title">
                            <h5>Contact us</h5>
                        </div>
                        <ul>
                            <li>
                                <i className="fa-light fa-location-dot" />
                                <a
                                    href="htrrs://www.google.com/maps/@23.8223586,90.3661283,15z"
                                    target="_blank"
                                >
                                    Melbone st, Australia, Ny 12099
                                </a>
                            </li>
                            <li>
                                <i className="fas fa-envelope" />
                                <a href="mailto:rubelmah55@gmail.com">
                                    rubelmah55@gmail.com
                                </a>
                            </li>
                            <li>
                                <i className="fal fa-phone-alt" />
                                <a href="tel:+48555223224">+48 555 223 224</a>
                            </li>
                        </ul>
                    </div>
                    <div className="rroffcanvas__social">
                        <div className="social-icon">
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                                <i className="fab fa-pinterest-p" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-overlay" />
            {/* rr-offcanvus-area-end */}
            <header className="rr-header-height rr-header-bottom">
                {/* header area start */}
                <div
                    id="header-sticky"
                    className="rr-header-area rr-header-4-border rr-header-4"
                >
                    <div className="container custom-container-1">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-4 col-6">
                                <div className="rr-header-logo">
                                    <a href="index.html">
                                        <img
                                            src="assets/img/logo/logo-white.png"
                                            alt="img"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-7 d-none d-xl-block">
                                <div className="rr-header-main-menu">
                                    <nav className="rr-main-menu-content text-end">
                                        <ul>
                                            <li className="has-dropdown">
                                                <a href="index.html">Home</a>
                                                <div className="rr-submenu submenu has-homemenu">
                                                    <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-4">
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <img
                                                                    src="assets/img/menu/home-1.jpg"
                                                                    alt="img"
                                                                />
                                                                <div className="homemenu-btn">
                                                                    <a
                                                                        className="rr-menu-btn"
                                                                        href="index.html"
                                                                    >
                                                                        Home 01
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <a href="index.html">
                                                                        Home 01
                                                                    </a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <img
                                                                    src="assets/img/menu/home-2.jpg"
                                                                    alt="img"
                                                                />
                                                                <div className="homemenu-btn">
                                                                    <a
                                                                        className="rr-menu-btn"
                                                                        href="index-2.html"
                                                                    >
                                                                        Home 02
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <a href="index-2.html">
                                                                        Home 02
                                                                    </a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <img
                                                                    src="assets/img/menu/home-3.jpg"
                                                                    alt="img"
                                                                />
                                                                <div className="homemenu-btn">
                                                                    <a
                                                                        className="rr-menu-btn"
                                                                        href="index-3.html"
                                                                    >
                                                                        Home 03
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <a href="index-3.html">
                                                                        Home 03
                                                                    </a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        <div className="col homemenu">
                                                            <div className="homemenu-thumb mb-15">
                                                                <img
                                                                    src="assets/img/menu/home-4.jpg"
                                                                    alt="img"
                                                                />
                                                                <div className="homemenu-btn">
                                                                    <a
                                                                        className="rr-menu-btn"
                                                                        href="index-4.html"
                                                                    >
                                                                        Home 04
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="homemenu-content text-center">
                                                                <h4 className="homemenu-title">
                                                                    <a href="index-3.html">
                                                                        Home 04
                                                                    </a>
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="about.html">
                                                    about us
                                                </a>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="service.html">
                                                    Service
                                                </a>
                                                <ul className="submenu rr-submenu">
                                                    <li>
                                                        <a href="service.html">
                                                            Service
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="service-details.html">
                                                            Service Details
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="#">Pages</a>
                                                <ul className="submenu rr-submenu">
                                                    <li>
                                                        <a href="team.html">
                                                            team
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="team-details.html">
                                                            team details
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="pricing.html">
                                                            pricing{" "}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="project.html">
                                                            project
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="project-details.html">
                                                            project-details
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="doctors.html">
                                                            doctors
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="doctor-details.html">
                                                            doctors-details
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">
                                                            error
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="blog.html">Blog</a>
                                                <ul className="submenu rr-submenu">
                                                    <li>
                                                        <a href="blog.html">
                                                            Blog Grid
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-sidebar.html">
                                                            Blog Standard
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="blog-details.html">
                                                            Blog Details
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="contact.html">
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-8 col-6">
                                <div className="rr-header-right d-flex align-items-center justify-content-end">
                                    <div className="rr-header-2-icon mr-20 d-none d-xxl-block">
                                        <button className="search-open-btn">
                                            <i className="fa-solid fa-magnifying-glass" />
                                        </button>
                                    </div>
                                    <div className="rr-header-btn d-none d-md-block">
                                        <a
                                            className="rr-btn rr-header-spc"
                                            href="contact.html"
                                        >
                                            <span>
                                                Make Appointment{" "}
                                                <i className="fa-sharp fa-solid fa-plus" />
                                            </span>
                                        </a>
                                    </div>
                                    <div className="rr-header-bar d-xl-none">
                                        <button className="rr-menu-bar">
                                            <i className="fa-solid fa-bars" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header area end */}
            </header>
            <main>
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
                                            About
                                        </h3>
                                    </div>
                                    <div className="breadcrumb__list">
                                        <span>
                                            <a href="index.html">Home</a>
                                        </span>
                                        <span className="dvdr">
                                            <i>/</i>
                                        </span>
                                        <span>About</span>
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
                {/* About area end */}
                <section className="rr-home2-about pt-100 pb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-12 mb-20 wow fadeInLeft">
                                <div className="rr-section rr-style-1 text-left mb-40">
                                    <span className="rr-section-subtitle p-relative">
                                        <img
                                            src="assets/img/testimonial/section-icon.png"
                                            alt="img"
                                        />{" "}
                                        What About Us{" "}
                                        <img
                                            src="assets/img/testimonial/section-icon.png"
                                            alt="img"
                                        />
                                    </span>
                                    <h4 className="rr-section-title pb-5">
                                        About Medical Immediately Advanced
                                        Manual.
                                    </h4>
                                    <p className="rr-section-description">
                                        There are many variations Lorem Ipsum
                                        availab.There are many of pas ofb.There
                                        are many variations of by injected
                                        humour or randomised pas of Lorem Ipsum
                                        availab.There are many variations
                                    </p>
                                </div>
                                <div className="row mt-5 mb-20">
                                    <div className="col-lg-6 col-md-6 col-6">
                                        <div className="rr-info-box1">
                                            <div className="rr-info-box-icon mb-15">
                                                <img
                                                    src="assets/img/feature/icon-3.png"
                                                    alt="img"
                                                />
                                            </div>
                                            <div className="rr-info-box1-info">
                                                <h5 className="rr-info-title">
                                                    Infection Prevention
                                                </h5>
                                                <p className="rr-infobox-description">
                                                    It is a long established
                                                    fact that a reader will be
                                                    distracted.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-6">
                                        <div className="rr-info-box1">
                                            <div className="rr-info-box-icon mb-15">
                                                <img
                                                    src="assets/img/feature/icon-4.png"
                                                    alt="img"
                                                />
                                            </div>
                                            <div className="rr-info-box1-info">
                                                <h5 className="rr-info-title">
                                                    Inpatient Services
                                                </h5>
                                                <p className="rr-infobox-description">
                                                    It is a long established
                                                    fact that a reader will be
                                                    distracted.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rr-button-block">
                                    <a className="rr-btn-1" href="about.html">
                                        <span>
                                            Read More{" "}
                                            <i className="fa-sharp fa-solid fa-plus" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="about-us-img">
                                    <div className="rr-about-2-experience wow fadeInRight">
                                        <span>29+ Years Experience</span>
                                    </div>
                                    <img
                                        src="assets/img/about/img-9.jpg"
                                        className="img-fluid rr-image1 wow fadeInRight"
                                        alt="home"
                                    />
                                    <img
                                        src="assets/img/about/img-10.jpg"
                                        className="img-fluid rr-image2 wow fadeInRight"
                                        alt="home"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About area end */}
            </main>
            <footer>
                <div
                    className="rr-footer-main p-relative fix"
                    data-background="assets/img/footer/footer-bg.jpg"
                >
                    {/* footer area start */}
                    <div className="rr-footer-area pt-125 p-relative fix">
                        <div className="rr-footer-right-shap d-none d-xl-block">
                            <img
                                src="assets/img/footer/footer-shap.png"
                                alt="img"
                            />
                        </div>
                        <div className="container">
                            <div className="rr-footer-border">
                                <div className="row">
                                    <div
                                        className="col-xl-4 col-lg-3 col-md-6 col-sm-6 mb-50 wow rrfadeUp"
                                        data-wow-duration=".9s"
                                        data-wow-delay=".3s"
                                    >
                                        <div className="rr-footer-widget footer-cols-1">
                                            <div className="rr-footer-logo pb-35">
                                                <a href="index.html">
                                                    <img
                                                        src="assets/img/logo/logo-white.png"
                                                        alt="img"
                                                    />
                                                </a>
                                            </div>
                                            <div className="rr-footer-widget-content-list mb-25">
                                                <div className="rr-footer-widget-content-list-item">
                                                    <i className="fa-sharp fa-solid fa-clock" />{" "}
                                                    <a href="#">
                                                        Open Hours of
                                                        Government:
                                                        <br />
                                                        Mon - Fri: 8.00 am. -
                                                        6.00 pm.
                                                    </a>
                                                </div>
                                                <div className="rr-footer-widget-content-list-item">
                                                    <i className="fa-solid fa-location-dot" />{" "}
                                                    <a href="#">
                                                        {" "}
                                                        13/A, Miranda Halim City
                                                        .
                                                    </a>
                                                </div>
                                                <div className="rr-footer-widget-content-list-item">
                                                    <i className="fa-sharp fa-solid fa-phone" />
                                                    <a href="tel:09969569535">
                                                        099 695 695 35
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="rr-footer-social">
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa-brands fa-pinterest-p" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-xl-2 col-lg-3 col-md-6 col-sm-6 mb-50 wow rrfadeUp"
                                        data-wow-duration=".9s"
                                        data-wow-delay=".5s"
                                    >
                                        <div className="rr-footer-widget footer-cols-2">
                                            <h4 className="rr-footer-title">
                                                Service
                                            </h4>
                                            <div className="rr-footer-list ">
                                                <ul>
                                                    <li>
                                                        <a href="service.html">
                                                            Why choose us
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">
                                                            {" "}
                                                            Our solutions
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">
                                                            Partners
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">
                                                            Core values
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">
                                                            Our projects
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-xl-2 col-lg-3 col-md-6 col-sm-6 mb-50 wow rrfadeUp"
                                        data-wow-duration=".9s"
                                        data-wow-delay=".7s"
                                    >
                                        <div className="rr-footer-widget footer-cols-3">
                                            <h4 className="rr-footer-title">
                                                Quick Link
                                            </h4>
                                            <div className="rr-footer-list">
                                                <ul>
                                                    <li>
                                                        <a href="service.html">
                                                            Residents
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">
                                                            Medical
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">
                                                            Online Service
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">
                                                            Visiting
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">
                                                            Employment
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-xl-4 col-lg-3 col-md-6 col-sm-6 mb-50 wow rrfadeUp"
                                        data-wow-duration=".9s"
                                        data-wow-delay=".9s"
                                    >
                                        <div className="rr-footer-widget footer-cols-4">
                                            <h4 className="rr-footer-title">
                                                Opening Schedule
                                            </h4>
                                            <div className="rr-footer-contact">
                                                <ul>
                                                    <li>
                                                        <span>
                                                            Sunday ----------
                                                            08.00 - 10.00
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            Monday ----------
                                                            08.00 - 10.00
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            Tuesday ----------
                                                            08.00 - 10.00
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            Wednesday -------
                                                            08.00 - 10.00
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            Tuesday ----------
                                                            08.00 - 10.00
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer area end */}
                    {/* copy-right area start */}
                    <div className="rr-copyright-area p-relative">
                        <div className="container rr-copyright-broder rr-copyright-space">
                            <div className="row align-items-center">
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6 col-12 wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".3s"
                                >
                                    <div className="rr-copyright-left text-center text-md-start">
                                        <p>
                                            Copyright © 2024{" "}
                                            <a href="#"> Mekina, </a> All Rights
                                            Reserved.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="col-xl-6 col-lg-6 col-md-6 col-12 wow rrfadeUp"
                                    data-wow-duration=".9s"
                                    data-wow-delay=".5s"
                                >
                                    <div className="rr-copyright-right text-center text-md-end">
                                        <a href="about.html">About Us </a>
                                        <a href="service.html">Events</a>
                                        <a href="blog.html">News</a>
                                        <a href="service.html">Portfolio</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* copy-right area end */}
                </div>
            </footer>
        </div>
    );
}
