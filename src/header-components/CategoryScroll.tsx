import { useRef, useState, useEffect } from "react";
import {
  Home,
  Star,
  Globe,
  Building,
  Briefcase,
  Heart,
  Car,
  User,
  Laptop,
  Music,
  Camera,
  Wifi,
  Bed,
} from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const baseCategories = [
  { icon: Home, label: "Ev" },
  { icon: Star, label: "Popüler" },
  { icon: Globe, label: "Dünya" },
  { icon: Building, label: "Apartman" },
  { icon: Briefcase, label: "İş" },
  { icon: Heart, label: "Romantik" },
  { icon: Car, label: "Araç" },
  { icon: User, label: "Kişisel" },
  { icon: Laptop, label: "Teknoloji" },
  { icon: Music, label: "Müzik" },
  { icon: Camera, label: "Fotoğraf" },
  { icon: Wifi, label: "İnternet" },
  { icon: Bed, label: "Uyku" },
];

const repeated = [...baseCategories, ...baseCategories, ...baseCategories];

export default function CategorySlider() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Sayfa ilk yüklendiğinde ortaya kaydır
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const middle = container.scrollWidth / 3;
      container.scrollLeft = middle;
    }
  }, []);

  // Scroll butonları
  const scroll = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 200;
      const newScroll =
        dir === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;
      container.scrollTo({ left: newScroll, behavior: "smooth" });

      // Scroll sona çok yaklaşırsa tekrar ortaya döndür
      const maxScroll = container.scrollWidth;
      const middle = maxScroll / 3;

      setTimeout(() => {
        if (dir === "right" && container.scrollLeft > middle * 1.6) {
          container.scrollLeft = middle;
        }
        if (dir === "left" && container.scrollLeft < middle * 0.4) {
          container.scrollLeft = middle;
        }
      }, 300); // scroll sonrası pozisyonu kontrol ediyoruz
    }
  };

  return (
    <div className="relative flex items-center w-[920px]">
      {" "}
      {/* Burada genişliği büyük yaptık */}
      {/* Sol Ok */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 p-1 bg-white rounded-full shadow cursor-pointer"
      >
        <ChevronLeft size={18} />
      </button>
      {/* Scroll Alanı */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-4 px-8 py-3 no-scrollbar"
        style={{
          scrollBehavior: "smooth", // Daha pürüzsüz bir geçiş için
        }}
      >
        {repeated.map((cat, i) => {
          const Icon = cat.icon;
          const isActive = i === activeIndex;

          return (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="group flex flex-col items-center min-w-max transition-all duration-200 cursor-pointer"
            >
              <Icon
                className={`w-4 h-4 mb-1 transition-colors  ${
                  isActive
                    ? "text-black"
                    : "text-gray-900 group-hover:text-gray-500"
                }`}
              />
              <span
                className={`text-xs transition-colors  ${
                  isActive
                    ? "text-black"
                    : "text-gray-600 group-hover:text-gray-500"
                }`}
              >
                {cat.label}
              </span>

              {/* Alt çizgi */}
              <div
                className={`h-[2px] w-4 rounded-full mt-1 transition-all duration-200 ${
                  isActive
                    ? "bg-black"
                    : "group-hover:bg-gray-400 bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>
      {/* Sağ Ok */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 p-1 bg-white rounded-full shadow cursor-pointer"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
