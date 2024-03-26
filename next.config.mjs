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

export default withNextIntl(nextConfig);
