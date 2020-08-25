import { NextSeo } from "next-seo";
import React from "react";

export default function about() {
  <NextSeo
    title="About"
    canonical={`${process.env.CANONICAL_URL}/about`}
    openGraph={{
      url: `${process.env.CANONICAL_URL}/about`,
      title: 'About | My Site',
    }}
  />;

  return (
    <div>
      <NextSeo
        title="About"
        canonical={`${process.env.CANONICAL_URL}/about`}
        openGraph={{
          url: `${process.env.CANONICAL_URL}/about`,
          title: 'About | My Site',
        }}
      />
      About
    </div>
  );
}
