import Link from "next/link";
// import Date from "@library/date";

const PaginatedblogPosts = () => {
  return (
    <Link href="/conference/dec25" className="mil-blog-card mil-mb-60">
      <div className="mil-cover mil-square mil-up">
        <img src="/img/photo/Conference Flyer.png" alt="Premier Tourism Industry Conference" />
      </div>
      <div className="mil-description">
        <span className="mil-suptitle mil-upper mil-up mil-mb-30">Conference</span>
        <h4 className="mil-upper mil-up mil-mb-30">Premier Tourism Industry Conference</h4>
        <p className="mil-up mil-mb-30">
          The Premier Tourism Industry Conference 2025 is an invite-only event uniting 25–30 leading tourism
          businesses with top experts, investors, and policymakers to drive innovation, collaboration, and growth.
        </p>
        <span className="mil-link mil-upper mil-up">
          Read <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
        </span>
      </div>
    </Link>
  );
};

export default PaginatedblogPosts;
