import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({});

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/dashboardSpec",
          destination: "/dashboardSpec.html",
        },
      ],
    };
  },
};

export default withNextra(nextConfig);
