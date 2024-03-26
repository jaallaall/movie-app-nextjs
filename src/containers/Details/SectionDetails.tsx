import { CirclePlay } from "@/components/Icons/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

export default function SectionDetails() {
  const [playerSource, setPlayerSource] = useState<string>(
    "'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'"
  );
  const rate = 6;
  return (
    <>
      <div className="mb-6">
        <h1>I Dream in Another Language</h1>
      </div>
      <div className="grid grid-cols-10 md:gap-6 gap-3">
        <div className="col-span-2">
          <figure className="relative rounded-lg h-72 overflow-hidden mb-4">
            <Image src="/static/cover/cover1.jpg" alt="cover1" fill />
            <div
              className={`flex justify-center items-center border-2 text-sm rounded-full w-9 h-9 absolute right-4 top-4 z-10 bg-black/20 ${
                rate < 6.5
                  ? "border-error"
                  : rate > 7
                  ? "border-primary"
                  : "border-success"
              }`}
            >
              {rate}
            </div>
          </figure>
          <Link
            href="http://www.youtube.com/watch?v=0O2aH4XLbto"
            className="btn btn-outline w-full btn-custom"
          >
            <CirclePlay className="w-4 h-4 me-2" />
            مشاهده تریلر
          </Link>
        </div>

        <div className="col-span-3">
          <ul className="space-y-2 [&_a]:text-primary [&_a]:opacity-75 [&_a:hover]:opacity-100">
            <li>
              <span>کارگردان :</span> Vince Gilligan
            </li>
            <li>
              <span>قالب :</span> <a href="#">برایان کرانستون</a> ,
              <a href="#">جسی پلمونز</a> , <a href="#">مت جونز</a> ,
              <a href="#">جاناتان بنکس</a> , <a href="#">چارلز بیکر</a> ,
              <a href="#">تس هارپر</a>
            </li>
            <li>
              <span>ژانر :</span> <a href="#">Action</a> ,<a href="#">Triler</a>
            </li>
            <li>
              <span>سال انتشار :</span> 2019
            </li>
            <li>
              <span>زمان اجرا :</span> 130 min
            </li>
            <li>
              <span>کشور :</span> <a href="#">USA</a>
            </li>
          </ul>
        </div>

        <div className="col-span-5">
          <div className="bg-base-200 rounded-lg overflow-hidden min-h-80 flex items-center">
            <Player
            // ref={(player) => {
            //   this.player = player;
            // }}
            >
              <source
                src={"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
              />
            </Player>
          </div>
        </div>
      </div>
    </>
  );
}
