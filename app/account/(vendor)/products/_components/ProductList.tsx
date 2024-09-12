"use client";
import { getUser } from "@/actions/user";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProductList() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  if (isError) return <></>;
  if (isLoading)
    return (
      <section className="mt-5">
        <Table className="w-full">
          <TableCaption>A list of your products.</TableCaption>
          <TableHeader className="w-full">
            <TableRow className="h-fit">
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </section>
    );

  return (
    <section className="mt-5">
      <Table className="w-full">
        <TableCaption>A list of your products.</TableCaption>
        <TableHeader className="w-full">
          <TableRow className="h-fit">
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
