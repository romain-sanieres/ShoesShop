import Link from 'next/link';
import React from 'react'

type ProductProps = {
  id: string;
  name: string;
  price: number;
  collection: string;
};

export default function Product({ id, name, price, collection }: ProductProps) {
  return (
    <Link href={`/product/${id}`} className="bg-red-500 h-96">
      <p>{price?.toFixed(2)}</p>
      <p>{collection}</p>
      {name}
    </Link>
  );
}
