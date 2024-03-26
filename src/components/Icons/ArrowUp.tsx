import type { SVGProps } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    fill="currentColor"
    {...props}
  >
    <path d="M379.8 234.8c-3.1 3.5-7.5 5.2-11.8 5.2a16 16 0 0 1-10.77-4.156L208 100.2V464c0 8.844-7.156 15.1-15.1 15.1S176 472.8 176 464V100.2L26.77 235.8c-6.516 5.938-16.62 5.531-22.61-1.094C-1.781 228.2-1.297 218.1 5.234 212.2l176-160c6.094-5.562 15.44-5.562 21.53 0l176 160c6.536 5.9 7.036 16 1.036 22.6" />
  </svg>
);
export default SvgArrowUp;
