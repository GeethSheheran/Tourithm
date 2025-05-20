import React from "react";

import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";

export const metadata = {
  title: {
    default: "Tourithm AI",
  },
  description: AppData.settings.siteDescription,
};

function Team() {
  return (
    <div className="!p-0 !m-0">
      <PageBanner pageTitle="Tourithm AI" breadTitle="Chat bot" bgImage="/img/photo/chatbot.webp" />

      <div className="!p-0 !m-0">
        <iframe
          src="https://app.vectorshift.ai/chatbots/deployed/682b6b2dfbf80b70394bebbe"
          width="100%"
          height="700"
          style={{ border: "none" }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Team;
