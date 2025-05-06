"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';

const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
    {/* footer */}
    <footer className="mil-relative">
        <img src="/img/covers/footer.jpg" className="mil-bg-img mil-parallax" alt="image" style={{"objectPosition": "top"}} data-value-1="-25%" data-value-2="23%" />

        <div className="mil-overlay" />
        <div className="container mil-p-120-90">
            <div className="mil-background-grid" />

            <div className="row align-items-end">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-12">

                            <div className="mil-footer-navigation mil-up mil-mb-90">
                                <nav>
                                    <ul>
                                        {AppData.footer.menu.map((item, key) => (
                                        <li key={`footer-menu-item-${key}`} className={((asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) ? "mil-active" : ""}>
                                            <Link href={item.link}>{item.label}</Link>
                                        </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">Dehiwala</span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">78, Waidya road <br/>Dehiwala <br/>Colombo <br/>+94 76 567 1421</p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">Anuradhapura</span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">Yakalla, Megodawewa <br/>Galenbidunuwewa <br/>Anuradhapura <br/>+94 76 219 6201</p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">Negombo</span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">33/C, Church RD <br/>Dickwela <br/>Yogiyana <br/>+94 76 567 1421</p>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <span className="mil-suptitle mil-light mil-upper mil-up mil-mb-30">Colombo</span>
                            <p className="mil-text-sm mil-up mil-light-soft mil-mb-30">No 64 <br/>Dammarathana Mawatha <br/>Madiwela, Kotte <br/>+94 70 255 0435</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <Link href="/" className="mil-footer-logo mil-up mil-mb-30">
                        <img src={AppData.footer.logo.image} alt={AppData.footer.logo.alt} style={{"width": "130px"}} />
                    </Link>
                </div>
            </div>
        </div>
        <div className="container-fluid">

            <div className="mil-footer-bottom">
                <p className="mil-light-soft mil-mb-15">{AppData.footer.copy}</p>
                <ul className="mil-light-soft mil-mb-15">
                    {AppData.social.map((item, key) => (
                    <li key={`footer-social-item-${key}`}><a href={item.link} target="_blank">{item.title}</a></li>
                    ))}
                </ul>
                {/* <ul className="mil-light-soft mil-mb-15">
                    <li><a href="#.">Our App</a></li>
                    <li><a href="#.">Sitemap</a></li>
                </ul> */}
            </div>

        </div>
    </footer>
    {/* footer end */}
    </>
  );
};
export default DefaultFooter;
