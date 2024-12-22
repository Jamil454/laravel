import React from "react";
import Popup from "@/Sections/Popup";
import Header from "@/Sections/Header";
import Slider_area from "@/Sections/Slider_area";
import Contact_area from "@/Sections/Contact_area";
import Features_area from "@/Sections/Features_area";
import About_area from "@/Sections/About_area";
import Service_area from "@/Sections/Service_area";
import Choose_area from "@/Sections/Choose_area";
import Video_area from "@/Sections/Video_area";
import Team_area from "@/Sections/Team_area";
import Counter_area from "@/Sections/Counter_area";
import Tab_area from "@/Sections/Tab_area";
import Brand_area from "@/Sections/Brand_area";
import Blog_area from "@/Sections/Blog_area";
import Cta_area from "@/Sections/Cta_area";
import Footer from "@/Sections/Footer";

export default function Home() {
    return (
        <>
            {/* <!-- back to top start --> */}
            <div className="back-to-top-wrapper">
                <button
                    id="back_to_top"
                    type="button"
                    className="back-to-top-btn"
                >
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
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
            {/*<!-- back to top end -->*/}

            {/*<!-- search popup start -->*/}
            <Popup />
            {/*<!-- search popup end -->*/}

            {/* Header */}
            <Header />

            <main>
                {/*<!-- slider area start -->*/}
                <Slider_area />
                {/*<!-- slider area end -->*/}

                {/*<!-- contact area start -->*/}
                <Contact_area />
                {/*<!-- contact area end -->*/}

                {/*<!-- features area start -->*/}
                <Features_area />
                {/*<!-- features area end -->*/}

                {/* About area end */}
                <About_area />
                {/* About area end */}

                {/* service area start */}
                <Service_area />
                {/* service area end */}

                {/* choose  area strat */}
                <Choose_area />
                {/* choose  area mobail end */}

                {/* video area start */}
                <Video_area />
                {/* video area end */}

                {/* team area start */}
                <Team_area />
                {/* team area end */}

                {/* COUNTER  area start */}
                <Counter_area />
                {/* COUNTER  area end */}

                {/* tab area start */}
                <Tab_area />
                {/* tab area end */}

                {/* brand area start */}
                <Brand_area />
                {/* brand area end */}

                {/* blog area start */}
                <Blog_area />
                {/* blog area end */}

                {/* cta area start */}
                <Cta_area />
                {/* cta area end */}
            </main>

            {/* Footer */}
            <Footer />
        </>
    );
}
