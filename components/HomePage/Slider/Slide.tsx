import React from "react";
import Link from "next/link";
import { StarHalfIcon, StarIcon } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";

type SlideType = {
  name: string;
  price: number;
  description: string;
  note: number;
};

export default function Slide({ name, price, description, note }: SlideType) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/5  rounded-lg p-0 flex overflow-hidden">
      <Link href={"/product/4654"} className="flex flex-col w-full justify-between gap-y-4">
        <div className="bg-black/5 dark:bg-white/95 rounded-lg h-96"></div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col">
            <p className="h-fit font-semibold">{name}</p>
            <p>{price}$</p>
          </div>
          <p className="h-fit text-muted-foreground max-w-[16rem]">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-x-1">
          <div className="flex">
            <StarIcon className="fill-primary" size={15} />
            <StarIcon className="fill-primary" size={15} />
            <StarIcon className="fill-primary" size={15} />
            <StarIcon className="fill-primary" size={15} />
            <StarHalfIcon className="fill-primary" size={15} />
          </div>
          <p className="text-xs">{`(${note})`}</p>
        </div>
      </Link>
    </CarouselItem>
  );
}
