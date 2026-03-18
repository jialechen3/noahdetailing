import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import logo from "/noahdetailing.png";

const galleryImages = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1400&q=80",
];

export function Hero() {
  const touchStartX = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollGallery = (direction: "left" | "right") => {
    setActiveIndex((current) => {
      if (direction === "left") {
        return current === 0 ? galleryImages.length - 1 : current - 1;
      }

      return current === galleryImages.length - 1 ? 0 : current + 1;
    });
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;

    if (Math.abs(distance) > 40) {
      scrollGallery(distance > 0 ? "left" : "right");
    }

    touchStartX.current = null;
  };

  return (
    <div className="relative min-h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Gallery */}
      <div className="absolute inset-0">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {galleryImages.map((image, index) => (
            <div key={image} className="relative h-full min-w-full">
              <img
                src={image}
                alt={`Detailing showcase ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-slate-950/50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-slate-950/50 to-transparent" />

        <button
          type="button"
          onClick={() => scrollGallery("left")}
          className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/25 bg-black/35 p-2 text-white backdrop-blur-sm transition hover:bg-black/55 md:left-4 md:p-3"
          aria-label="Scroll gallery left"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          type="button"
          onClick={() => scrollGallery("right")}
          className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/25 bg-black/35 p-2 text-white backdrop-blur-sm transition hover:bg-black/55 md:right-4 md:p-3"
          aria-label="Scroll gallery right"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {galleryImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show gallery image ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="pointer-events-none relative z-10 w-full max-w-4xl mx-auto px-4 py-14 text-center text-white sm:px-6">
        <div className="flex items-center justify-center mb-5 md:mb-6">
          <img
            src={logo}
            alt="Noah's Mobile Detailing Logo"
            className="h-auto w-[min(92vw,340px)] md:w-80"
          />
        </div>
        <p className="mb-4 text-lg font-medium text-gray-200 sm:text-xl md:mb-6 md:text-2xl">
          Mobile Detailing That Comes To You
        </p>
        <p className="mx-auto mb-3 max-w-xl text-sm leading-6 text-gray-100 sm:text-base md:mb-8 md:max-w-2xl md:text-lg">
          Clean, protect, and restore your vehicle with premium on-site detailing.
        </p>
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.24em] text-white/75 sm:hidden">
          Swipe or tap arrows to browse photos
        </p>
        <div className="pointer-events-auto">
          <Button
            onClick={scrollToPackages}
            size="lg"
            className="w-full max-w-xs bg-blue-600 px-6 py-5 text-base text-white hover:bg-blue-700 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
          >
            Select Your Vehicle Type
          </Button>
        </div>
      </div>
    </div>
  );
}
