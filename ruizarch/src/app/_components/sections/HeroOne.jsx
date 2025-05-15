"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const HeroOne = () => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    return (
        <>
            {/* banner */}
            <section
                className="mil-banner"
                style={{
                    position: "relative",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                <video
                    src="/video/sunset.mp4"
                    className="mil-bg-img mil-scale"
                    data-value-1=".4"
                    data-value-2="1.4"
                    autoPlay
                    loop
                    muted
                    style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}
                />

                <div
                    className="mil-overlay"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.5)" }}
                />
                <div className="container" style={{ position: "relative", zIndex: 1, height: "100%" }}>
                    <div className="mil-background-grid mil-top-space" />
                    <div
                        className="mil-banner-content"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            width: "100%",
                        }}
                    >
                        <div className="row align-items-center" style={{ width: "100%" }}>
                            <div className="col-12">
                                <div
                                    className="mil-mt-0"
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        textAlign: "center",
                                    }}
                                >
                                    {/* <span
                                        className="mil-suptitle mil-light mil-upper mil-mb-0"
                                        style={{ fontSize: "1.2rem", color: "white" }}
                                    >
                                        {Data.subtitle}
                                    </span> */}
                                    <h1
                                        className="mil-upper mil-light mil-mb-30"
                                        style={{ fontSize: "2.5rem", color: "white" , marginTop: "10%" }}
                                        dangerouslySetInnerHTML={{ __html: Data.title }}
                                    />
                                    <p
                                        className="font-white mil-mb-30 font-bold"
                                        style={{ fontSize: "1.2rem", color: "white" }}
                                    >
                                        Empowering Tourism Through Technology.
                                    </p>
                                    {/* <p
                                        className="font-whit mil-mb-90"
                                        style={{ fontSize: "1rem", color: "white" , width: "70%"}}
                                    >
                                        WE HELP TOURISM BRANDS GROW, ENGAGE, AND SHINE —
                                        WITH TAILORED DIGITAL SOLUTIONS BACKED BY INDUSTRY EXPERTS,
                                        INNOVATIVE CREATIVES, AND CUTTING-EDGE TECHNOLOGY.
                                    </p> */}
                                    {/* <Link
                                        href={Data.button.link}
                                        className="mil-link mil-light mil-upper"
                                        style={{ fontSize: "1rem", color: "white" }}
                                    >
                                        {Data.button.label}{" "}
                                        <span className="mil-arrow">
                                            <img src="img/icons/1.svg" alt="arrow" />
                                        </span>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
    );
};

export default HeroOne;