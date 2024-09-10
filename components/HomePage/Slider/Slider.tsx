"use client";
import React from "react";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Slide from "./Slide";

type SliderType = {
  title: string;
  subtitle?: string;
};

const data = [
  {
    name: "Model 001:Black & White",
    price: 178,
    description: "All-day comfort, supportive, durable 8 colors",
    stars: 4.5,
    note: 5625,
  },
];

export default function Slider({ title, subtitle }: SliderType) {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <h4 className="text-3xl capitalize">{title}</h4>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="gap-x-8 pl-5">
          {data.map((item, index) => (
            <Slide
              key={index}
              name={item.name}
              price={item.price}
              description={item.description}
              note={item.note}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
