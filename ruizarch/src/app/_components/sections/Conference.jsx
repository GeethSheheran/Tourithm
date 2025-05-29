import Data from "@data/sections/conference.json";

const Confirence = () => {
  return (
    <>
        {/* how we work */}
        <section>
            <div className="container mil-p-90-60">
                <div className="mil-background-grid mil-softened" />

                <div className="row">
                    <div className="col-12">

                        <div className="mil-center mil-mb-90">
                            <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                            <h2 className="mil-upper mil-up" dangerouslySetInnerHTML={{__html : Data.title}} />
                            <p className="mil-upper mil-up"> Date: <b>December 2025</b>   |   Location: <b>Sri Lanka</b></p><br/>
                            <p className="mil-upper mil-up">An exclusive, invite-only gathering of 25–30 innovative tourism businesses, university experts, investors, and policymakers aimed at transforming Sri Lanka’s tourism landscape. This conference fosters collaboration, drives innovation, and accelerates growth by connecting the brightest minds shaping the future of travel.</p>
                        </div>

                    </div>
                    {Data.items.map((item, key) => (
                    <div key={`howwework-item-${key}`} className="col-lg-6">

                        <div className="mil-hww mil-icon-box mil-up mil-mb-60">
                            {/* <div className="mil-icon mil-icon-border mil-mb-30">
                                <img src={item.icon} alt="icon" />
                            </div> */}
                            <h4 className="mil-upper mil-mb-20">{item.title}</h4>
                            <div className="mil-divider-sm mil-mb-20"></div>
                            <p>{item.text}</p><br/>
                            <p>{item.expert}</p>
                        </div>

                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* how we work end */}
    </>
  );
};

export default Confirence;