
import Average from '@/app/product/_components/Average';
import Link from 'next/link';
import React from 'react'

type ProductProps = {
  id: string;
  name: string;
  price: number;
  collection: string;
  date: Date;
  comments: any;
};

export default function Product({
  id,
  name,
  price,
  collection,
  date,
  comments
}: ProductProps) {
  const isRecent = (date: Date) => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return date > sevenDaysAgo;
  };
  return (
    <Link
      href={`/product/${id}`}
      className="rounded-xl shadow hover:shadow-md duration-200 h-96 flex flex-col justify-between overflow-hidden"
    >
      <div className="h-full bg-muted">
        {isRecent(new Date(date)) ? (
          <span className="text-sm text-destructive flex justify-end p-2">
            (new)
          </span>
        ) : null}
      </div>
      <div className="flex justify-between px-2 py-4">
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-muted-foreground">${price?.toFixed(2)}</p>
          <Average comments={comments} page={'products'} />

        </div>
        <div className="self-end">
          <p className="text-sm">{collection}</p>
        </div>
      </div>
    </Link>
  );
}
