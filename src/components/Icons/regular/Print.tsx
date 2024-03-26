import type { SVGProps } from "react";
const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M111.1 48h254.1L400 81.94V160h48V81.94A48 48 0 0 0 433.94 48L400 14.06A47.95 47.95 0 0 0 366.1 0h-255C85.49 0 64.01 21.48 64 47.98l.002 82.28c-.002 0 .002 0 0 0L64 160h48.01zM440 192H72c-39.7 0-72 32.3-72 72v112c0 13.25 10.75 24 24 24h56v80c0 17.67 14.33 32 32 32h288c17.67 0 32-14.33 32-32v-80h56c13.25 0 24-10.75 24-24V264c0-39.7-32.3-72-72-72m-56 272H128v-96h256zm80-112h-32c0-17.67-14.33-32-32-32H112c-17.67 0-32 14.33-32 32H48v-88c0-13.23 10.77-24 24-24h368c13.23 0 24 10.77 24 24z" />
  </svg>
);
export default SvgPrint;
