import Image from "next/image";
import Link from "next/link";
import { Play } from "../Icons";
import { Item } from "@/interfaces";

type Props = {
  item: Item;
  small?: boolean;
};

export default function Card({ item, small }: Props) {
  return (
    <div className="card card-compact">
      <figure
        className={`w-full relative rounded-md m-0 group ${
          small ? "md:h-60 h-48" : "h-72"
        }`}
      >
        <div
          className={`flex justify-center items-center border-2 text-sm rounded-full w-9 h-9 absolute right-4 top-4 z-10 bg-black/20 ${
            item.rate < 6.5
              ? "border-error"
              : item.rate > 7
              ? "border-primary"
              : "border-success"
          }`}
        >
          {item.rate}
        </div>
        <Image
          src={item.img}
          alt={item.alt}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-md"
        />
        <div className="bg-black/40 absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center transition-opacity ease-in-out duration-300 opacity-0 group-hover:opacity-100">
          <Link
            href={"/"}
            className="w-16 h-16 p-1.5 bg-white/40 rounded-full text-primary flex justify-center transition-[transform,background] ease-in-out duration-500 items-center scale-50 group-hover:scale-100 hover:bg-primary/50"
          >
            <Play className="w-full h-full p-2 bg-white rounded-full" />
          </Link>
        </div>
      </figure>
      <div className={`card-body !px-0 !pb-0 ${small && "!pt-2"}`}>
        <h4
          className={`card-title block mt-0 whitespace-nowrap break-words text-ellipsis overflow-hidden ${
            small && "text-base font-normal !mb-0"
          }`}
        >
          <Link href={"/"} className="hover:text-primary">
            {item?.title}
          </Link>
        </h4>
        <div
          className={`card-actions text-primary ${
            small ? "text-sm" : "text-lg"
          }`}
        >
          <Link
            href={"/"}
            className="text-primary opacity-80 hover:opacity-100"
          >
            {item.category?.genre}
          </Link>
          {item?.category && Object.keys(item?.category).length > 1 ? "," : ""}
          <Link
            href={"/"}
            className="text-primary opacity-80 hover:opacity-100"
          >
            {item.category?.triler}
          </Link>
        </div>
      </div>
    </div>
  );
}
