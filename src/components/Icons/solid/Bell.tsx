import type { SVGProps } from "react";
const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    {...props}
  >
    <path d="M223.1 512c36.3 0 64.9-28.6 64.9-64H160c0 35.4 28.6 64 63.1 64m216.3-149.7c-19.25-20.75-55.5-52-55.5-154.3 0-77.75-54.38-139.9-127.9-155.1V32c0-17.62-14.38-32-32-32s-32 14.38-32 32v20.88C118.5 68.13 64.13 130.3 64.13 208c0 102.3-36.25 133.5-55.5 154.3C2.625 368.8 0 376.5 0 384c.125 16.38 13 32 32.13 32h383.8c19.12 0 32-15.62 32.13-32-.06-7.5-2.66-15.2-8.66-21.7" />
  </svg>
);
export default SvgBell;
