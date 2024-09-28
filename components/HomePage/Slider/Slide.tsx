import React from "react";
import Link from "next/link";
import { StarHalfIcon, StarIcon } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

type SlideType = {
  id : string;
  name: string;
  price: number;
  image: number;
  description: string;
};

export default function Slide({ name, price, description, id, image }: SlideType) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/5  rounded-lg p-0 flex overflow-hidden">
      <Link
        href={`/product/${id}`}
        className="flex flex-col w-full justify-between gap-y-4"
      >
        <Image src={`/images/slider/${image}.webp`} alt="" width={500} height={500} className="h-96 rounded-lg"/>
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
          <p className="text-xs">{``}</p>
        </div>
      </Link>
    </CarouselItem>
  );
}
