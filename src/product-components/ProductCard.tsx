import React from "react";
import ProductSlider from "./ProductSlider";
import { Star, Heart } from "lucide-react";

interface ProductProps {
  location: string;
  rating: number;
  title: string;
  dates: string;
  price: string;
  images: string[];
}

function ProductCard({
  location,
  rating,
  title,
  dates,
  price,
  images,
}: ProductProps) {
  return (
    <div className="max-w-80 h-110 rounded-2xl overflow-hidden cursor-pointer">
      <div className="relative">
        <ProductSlider images={images} />
        <div className="absolute top-0 left-0 w-full p-3 flex items-center justify-between">
          <div className="bg-gray-100 text-sm w-40 text-center p-1 shadow rounded-2xl font-medium">
            Misafirlerin favorisi
          </div>
          <Heart className="w-7 h-7 text-gray-100 fill-black/70" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div>{location}</div>
        <div className="flex">
          <Star className="w-4 h-4" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="flex flex-col text-sm mt-4 text-gray-500">
        <span>{title}</span>
        <span>{dates}</span>
      </div>
      <div className="mt-4">
        <span className="text-sm underline">
          <span className="font-bold">{price}₺</span> "vergi hariç toplam"
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
