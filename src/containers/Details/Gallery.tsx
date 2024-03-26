import Fancybox from "@/components/Fancybox";
import Image from "next/image";
import Link from "next/link";

const gallery = [
  { id: 1, image: "/static/gallery/project-1.jpg", alt: "project-1" },
  { id: 2, image: "/static/gallery/project-2.jpg", alt: "project-2" },
  { id: 3, image: "/static/gallery/project-3.jpg", alt: "project-3" },
  { id: 4, image: "/static/gallery/project-4.jpg", alt: "project-4" },
  { id: 5, image: "/static/gallery/project-5.jpg", alt: "project-5" },
  { id: 6, image: "/static/gallery/project-6.jpg", alt: "project-6" },
];

export default function Gallery() {
  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {gallery.map((item) => {
          return (
            <Link
              key={item.id}
              className="relative h-36 rounded-lg overflow-hidden"
              data-fancybox="gallery"
              href={item.image}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                style={{ objectFit: "scale-down" }}
              />
            </Link>
          );
        })}
      </div>
    </Fancybox>
  );
}
