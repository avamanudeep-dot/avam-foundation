import Image from "next/image";
import { ArrowRight, Images, Leaf } from "lucide-react";

const PHOTOS = [
  { src: "/images/gallery-education.png", caption: "Education\nChanges Lives" },
  { src: "/images/gallery-food.png", caption: "Food Brings\nHope" },
  { src: "/images/gallery-plant.png", caption: "Support\nBuilds Tomorrows" },
  { src: "/images/gallery-together.png", caption: "Together\nWe Grow" },
];

export default function Gallery() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green-pale text-brand-green">
            <Images size={20} />
          </span>
          <h2 className="text-xl font-bold text-neutral-900">Our Work in Action</h2>
        </div>
        <button className="flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-800 hover:border-brand-green hover:text-brand-green">
          View Gallery
          <ArrowRight size={14} />
        </button>
      </div>

      <div id="gallery" className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {PHOTOS.map((photo) => (
          <div
            key={photo.src}
            className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm"
          >
            <Image
              src={photo.src}
              alt={photo.caption.replace("\n", " ")}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/0 to-black/0" />
            <p className="absolute bottom-3 left-3 whitespace-pre-line text-xs font-semibold leading-tight text-white">
              {photo.caption}
            </p>
          </div>
        ))}

        <div className="relative flex aspect-square flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-brand-green-pale p-4 text-center">
          <Leaf className="text-brand-green" size={22} />
          <p className="font-display text-sm italic leading-snug text-brand-green">
            &ldquo;Kindness today, a brighter tomorrow.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
