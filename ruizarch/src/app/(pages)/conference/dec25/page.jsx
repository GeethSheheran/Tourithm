import PageBannerTwo from "@components/PageBannerTwo";
import Sidebar from "@components/Sidebar";

const staticPost = {
  introTitle: `<span class="mil-accent">Premier</span> Tourism Industry Conference`,
  image: "/img/photo/Conference Flyer.png",
  categories: ["Conference"],
  contentHtml: `
    <h3><strong>Uniting Visionaries to Redefine the Future of Tourism</strong></h3><br/>
    <p><strong>Date:</strong> December 2025<br/><strong>Location:</strong> Sri Lanka</p>

    <div style="display: flex; gap: 40px; align-items: start; justify-content: space-between; flex-wrap: wrap;">
      <div style="flex: 1; min-width: 600px;">
        <h3>About the Conference</h3>
        <p>The Premier Tourism Industry Conference 2025 is a high-impact, invite-only gathering that brings together 25–30 forward-thinking tourism businesses with an elite network of university experts, investors, innovators, and policymakers.</p>
        <p>Designed to drive collaboration, innovation, and growth, this conference is a powerful platform for shaping the future of Sri Lanka’s tourism sector—and influencing regional and global trends.</p>
        <p>Whether you’re building a sustainable tourism model, scaling a hospitality brand, or redefining digital experiences for travelers, this is your space to connect, collaborate, and create impact.</p>

        <h4>What Makes This Conference Unique?</h4>
        <h5>University & Research Integration</h5>
        <p>Engage with professors and tourism researchers as they unveil cutting-edge studies and present future-ready tourism models rooted in real data and global trends.</p>

        <h5>Tourism Business Clinics</h5>
        <p>Participate in one-on-one strategy clinics where top consultants and tourism experts evaluate your business and offer actionable insights for growth, positioning, and innovation.</p>

        <h5>Investor Roundtable</h5>
        <p>Gain entry into private investor networking sessions. Pitch your business to domestic and international investors actively looking for opportunities in the tourism and hospitality space.</p>
      </div>

      <div style="flex: 1; min-width: 300px;">
        <h5>Policy & Innovation Dialogue</h5>
        <p>Join live dialogues with Ministry of Tourism officials, policy architects, and smart-city developers to explore how tourism can align with national development and digital transformation goals.</p>

        <h5>Tourism Lab: The Future of Experience</h5>
        <p>Co-create the next wave of tourism with designers, technologists, and academics. This interactive innovation session focuses on building experiential travel offerings for Gen Z and millennial travelers.</p>

        <h3>Who Should Attend?</h3>
        <ul>
          <li>Tourism Startups & Entrepreneurs</li>
          <li>Travel & Hospitality Businesses</li>
          <li>Eco-Tourism Operators</li>
          <li>Tech Providers in Travel & Booking</li>
          <li>Government & Tourism Policy Planners</li>
          <li>Academics & Hospitality Students</li>
          <li>Tourism Marketing & Branding Experts</li>
        </ul>
<br/>
        <h3>Be Part of the Future of Tourism</h3>
        <p>If you’re a tourism business ready to innovate, collaborate, and grow, this is your chance to gain unparalleled access, insights, and influence.</p>
        <p><strong>Note:</strong> Only 25–30 businesses will be selected to ensure intimate, high-quality interactions and outcomes.</p>

        <h4>Bonus Value for Subscribers</h4>
        <p>If you’re subscribed to our Business Growth Subscription Package, you’ll receive complimentary entry to this exclusive conference — with direct access to mentorship, strategic advice, and real-time feedback from industry leaders and decision-makers.</p>
      </div>
    </div>
  `
};

export default function PostsDetail() {
  return (
    <>
      <PageBannerTwo
        title={staticPost.introTitle}
        subTitle={staticPost.categories[0]}
        bgImage={staticPost.image}
      />

      <section>
        <div className="container mil-p-120-60">
          <div className="mil-background-grid mil-softened" />
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="mil-publication mil-text mil-up mil-mb-40" dangerouslySetInnerHTML={{ __html: staticPost.contentHtml }} />
            </div>
            <div className="col-lg-5">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
