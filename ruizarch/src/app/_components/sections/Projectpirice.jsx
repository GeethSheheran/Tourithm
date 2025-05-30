import Data from "@data/sections/Projectpirice.json";
import Link from "next/link";

const Projectpirice = ({ bg }) => {
    return (
        <>
            {/* call to action two */}
            <section className="mil-dark-bg mil-relative mil-o-hidden">
                <img src={Data.bg_image} className="mil-bg-img mil-scale" alt="image" style={{ "objectPosition": "top" }} data-value-1="1" data-value-2="1.2" />

                <div className="mil-overlay" />

                <div className="container mil-p-120-120">
                    <div className="mil-background-grid" />

                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="mil-center">
                                <span className="mil-suptitle mil-upper mil-light mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: Data.subtitle }} />
                                <h2 className="mil-upper mil-light mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: Data.title }} />
                                <h3 className="mil-light mil-thin mil-mb-60">June & July Offer: 50% OFF – Only Rs. 50,000</h3>
                                <h4 className="mil-light mil-thin mil-mb-60">Ongoing Monthly Subscription<br/>Investment: Rs. 20,000/month </h4>
                                <div className="mil-complex-actions">
                                    <Link href={Data.button.link} className="mil-button mil-up">{Data.button.label}</Link>
                                    {/* <div className="mil-phone-box">
                                    <p className="mil-accent mil-mb-5">{Data.phone.label}</p>
                                    <h4 className="mil-light mil-thin">{Data.phone.value}</h4>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* call to action two end */}
        </>
    );
};

export default Projectpirice;