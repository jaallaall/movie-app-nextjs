import type { SVGProps } from "react";
const SvgCirclePlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0m116.5 276.5-144 88c-3.8 2.3-8.2 3.5-12.5 3.5-13.69 0-24-11.2-24-24V168c0-12.7 10.2-24 24-24 4.344 0 8.678 1.176 12.51 3.516l144 88C379.6 239.9 384 247.6 384 256s-4.4 16.1-11.5 20.5" />
  </svg>
);
export default SvgCirclePlay;
