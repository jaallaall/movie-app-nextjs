import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    {...props}
  >
    <path d="M384 64h-32V15.1C352 7.163 344.8 0 336 0s-16 7.163-16 15.1V64H128V15.1C128 7.163 120.8 0 112 0S96 7.163 96 15.1V64H64C28.65 64 0 92.65 0 128v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V128c0-35.35-28.7-64-64-64M64 96h320c17.67 0 32 14.33 32 32v32H32v-32c0-17.7 14.33-32 32-32m320 384H64c-17.67 0-32-14.33-32-32V192h384v256c0 17.7-14.3 32-32 32" />
  </svg>
);
export default SvgCalendar;
