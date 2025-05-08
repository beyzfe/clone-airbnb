import React from "react";
import { Carousel } from "antd";

interface SliderProps {
  images: string[];
}

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "300px",
  objectFit: "cover",
};

function ProductSlider({ images }: SliderProps) {
  return (
    <div className="rounded-2xl overflow-hidden shadow max-w-80">
      <Carousel arrows infinite={false}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} style={contentStyle} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductSlider;
