import { getUserAction } from '@/app/zsa/user.action';
import { useQuery } from '@tanstack/react-query';
import { BoxesIcon, BuildingIcon, LayoutDashboardIcon, SettingsIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function MobileNavContent({ open }: { open: (value: boolean) => void }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const [user] = await getUserAction();
      return user;
    },
  });

  if (isLoading) return <></>;
  if (isError) return <></>;

  if(data && data.userType === "VENDOR") {
    return (
      <div className="flex flex-col gap-y-5 mt-5">
        <Link href={"/account/company"} onClick={() => open(false)} className='flex gap-x-2 items-center'>
          <BuildingIcon  size={20} className='stroke-1'/> My Company
        </Link>
        <Link href={"/account/dashboard"} onClick={() => open(false)} className='flex gap-x-2 items-center'>
          <LayoutDashboardIcon  size={20} className='stroke-1'/> Dashboard
        </Link>
        <Link href={"/account/products"} onClick={() => open(false)} className='flex gap-x-2 items-center'>
          <BoxesIcon  size={20} className='stroke-1'/> Products
        </Link>
        <Link href={"/account/settings"} onClick={() => open(false)} className='flex gap-x-2 items-center'>
         <SettingsIcon size={20} className='stroke-1'/> Settings
        </Link>
      </div>
    );
  }
  return <div>Client</div>;
}
