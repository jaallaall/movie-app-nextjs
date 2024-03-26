import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  output: "standalone",
  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "daisyui.com",
        port: "",
        pathname: "/images/stock/**",
      },
    ],
  },
};

const nextConfigFunction = async (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = (await import("@ducanh2912/next-pwa")).default({
      dest: "public",
    });
    return withPWA(nextConfig);
  }
  return nextConfig;
};

export default withNextIntl(nextConfigFunction);
