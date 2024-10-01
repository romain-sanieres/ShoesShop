import { CircleCheckBigIcon, StarHalfIcon, StarIcon } from "lucide-react";
import React from "react";

type CommentPropsType = {
  name: string;
  title: string;
  comment: string;
  rating: number | null;
  date: Date;
};

export default function Comment({name , title, comment, rating, date} : CommentPropsType) {

  const timesAgo = (date: Date) => {
    return new Date(date).toLocaleDateString();
  }


  return (
    <div className="p-4 py-6 space-y-6 border-b">
      <div className="flex justify-between">
        <div className="space-y-4">
          <div>
            <p className="text-sm">{name}</p>
            <p className="text-sm font-bold flex items-center gap-x-1">
              <span>Verified Buyer</span> <CircleCheckBigIcon size={15} />
            </p>
          </div>
          <div className="flex">
            <StarIcon className="fill-primary" size={20} />
            <StarIcon className="fill-primary" size={20} />
            <StarIcon className="fill-primary" size={20} />
            <StarIcon className="fill-primary" size={20} />
            <StarHalfIcon className="fill-primary" size={20} />
          </div>
        </div>
        <p className="text-muted-foreground text-xs">{timesAgo(date)}</p>
      </div>
      <div className="space-y-2">
        <p className="text-xl font-bold">{title}</p>
        <p className="font-thin">{comment}</p>
      </div>
    </div>
  );
}
