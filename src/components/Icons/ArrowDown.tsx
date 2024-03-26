import type { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    fill="currentColor"
    {...props}
  >
    <path d="m378.8 299.8-176 160c-3.1 2.8-6.9 4.2-10.8 4.2s-7.719-1.375-10.77-4.156l-176-160C-1.297 293.9-1.781 283.8 4.156 277.3c5.953-6.594 16.09-7 22.61-1.094L176 411.8V48c0-8.844 7.156-15.1 15.1-15.1S208 39.16 208 48v363.8l149.2-135.7c6.516-5.906 16.66-5.5 22.61 1.094 5.99 6.606 5.49 16.706-1.01 22.606" />
  </svg>
);
export default SvgArrowDown;
