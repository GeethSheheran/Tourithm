import React, { Suspense } from "react";

import AppData from "@data/app.json";

import { getSortedServicesData } from "@library/services";

import PageBanner from "@components/PageBanner";
import VisionSection from "@components/sections/Vision";
import FeaturesTwoSection from "@components/sections/FeaturesTwo";
import AboutFourSection from "@components/sections/AboutFour";
import CallToActionSection from "@components/sections/CallToAction";

import Link from "next/link";
import FeaturesTwoPrice from "../../_components/sections/FeaturesTwoPrice";
import NextConference from "../../_components/sections/NextConference";

export const metadata = {
  title: {
    default: "Package",
  },
  description: AppData.settings.siteDescription,
}

async function Services() {
  const services = await getAllServices();
  
  return (
    <>
      <PageBanner pageTitle={"Our Package"} breadTitle={"Package"} bgImage={"/img/covers/serviceCover.jpg"} />
         
      {/* services */}
      <FeaturesTwoPrice/>

      <section>
          <div className="container mil-p-120-0">
              <div className="mil-background-grid mil-softened" />

              <div className="row justify-content-center">
                  <div className="col-lg-8">

                      <div className="mil-center mil-mb-120">
                          <span className="mil-suptitle mil-upper mil-up mil-mb-30">Limited Availability</span>
                          <h4 className="mil-upper mil-up">We accept only 2 projects per month to ensure dedicated focus and high-quality delivery.<br/><br/><b>Act fast – Reserve your slot today!</b></h4>
                      </div>

                  </div>
              </div>

              {/* <div className="mil-center mil-mb-90">
                  <span className="mil-suptitle mil-upper mil-up mil-mb-30">On This We Work</span>
                  <h2 className="mil-upper mil-up">Exclusive Services</h2>
              </div> */}

              {/* <div className="row">
                  {services.map((item, key) => (
                  <div className="col-lg-4 mil-up" key={`services-item-${key}`}>

                      <Link href={`/services/${item.id}`} className="mil-service-card mil-mb-30">
                          <div className="mil-card-number">{key<10 ? "0" + (key+1) + "." : (key+1) + "."}</div>
                          <div className="mil-center">
                              <div className="mil-icon mil-icon-lg mil-mb-30">
                                  <img src={item.icon} alt={item.title} />
                              </div>
                              <h4 className="mil-upper mil-mb-20">{item.title}</h4>
                              <div className="mil-divider-sm mil-mb-20" />
                              <p className="mil-service-text">{item.short}</p>
                              <div className="mil-go-buton mil-icon mil-icon-lg mil-icon-accent-bg">
                                  <img src="/img/icons/1.svg" alt="icon" />
                              </div>
                          </div>
                      </Link>

                  </div>
                  ))}
              </div> */}
          </div>
      </section>
      {/* services end */}

      {/* <VisionSection /> */}

      {/* <FeaturesTwoSection /> */}

      {/* <AboutFourSection /> */}
      <NextConference/>
      <CallToActionSection />
    </>
  );
};
export default Services;

async function getAllServices() {
  const allServices = getSortedServicesData();
  return allServices;
}