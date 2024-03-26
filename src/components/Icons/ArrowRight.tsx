import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    {...props}
  >
    <path d="m427.8 266.8-160 176c-3.1 3.5-7.5 5.2-11.8 5.2a16 16 0 0 1-10.77-4.156c-6.531-5.938-7.016-16.06-1.078-22.59L379.8 272H16C7.156 272 .9 264.845.9 256.9S7.156 240 16 240h363.8L244.1 90.7c-5.938-6.531-5.453-16.66 1.078-22.59 6.547-5.906 16.66-5.469 22.61 1.094l160 176c5.612 6.096 5.612 15.496.012 21.596" />
  </svg>
);
export default SvgArrowRight;
