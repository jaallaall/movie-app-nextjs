import type { SVGProps } from "react";
const SvgCirclePlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    {...props}
  >
    <path d="M228.5 147.5c-3.8-2.3-8.2-3.5-12.5-3.5-13.8 0-24 11.3-24 24v176c0 12.8 10.31 24 24 24 4.344 0 8.68-1.18 12.52-3.523l144-88C379.6 272.1 384 264.4 384 256c0-8.359-4.352-16.12-11.48-20.48zM224 329.7V182.3l120.7 73.73zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0m0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224" />
  </svg>
);
export default SvgCirclePlay;
