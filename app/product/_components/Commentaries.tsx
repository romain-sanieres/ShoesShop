import { PenLineIcon, StarHalfIcon, StarIcon } from 'lucide-react';
import React from 'react'
import Comment from './Comment';
import { Button } from '@/components/ui/button';

export default function Commentaries() {
  return (
    <div className="flex flex-col mt-32" id="commentaries">
      <h2 className="text-6xl text-center">Ratings and Reviews</h2>
      <div className="mt-10 p-4 py-10 space-y-2 border-b flex justify-between">
        <div className="flex gap-x-2 items-center">
          <p className="text-xl">4.5</p>
          <div className="flex">
            <StarIcon className="fill-primary" size={20} />
            <StarIcon className="fill-primary" size={20} />
            <StarIcon className="fill-primary" size={20} />
            <StarIcon className="fill-primary" size={20} />
            <StarHalfIcon className="fill-primary" size={20} />
          </div>
          <p className="text-muted-foreground text-sm">8 reviews</p>
        </div>
        <Button className="flex gap-x-2">
          <PenLineIcon className="stroke-1" size={15} /> <span>Write a Review</span>
        </Button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}
