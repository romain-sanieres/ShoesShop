import { CircleCheckBigIcon, StarHalfIcon, StarIcon } from "lucide-react";
import React from "react";

export default function Comment() {
  return (
    <div className="p-4 py-6 space-y-6 border-b">
      <div className="flex justify-between">
        <div className="space-y-4">
          <div>
            <p className="text-sm">John D.</p>
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
        <p className="text-muted-foreground text-xs">5 years ago</p>
      </div>
      <div className="space-y-2">
        <p className="text-xl font-bold">Lorem, ipsum.</p>
        <p className="font-thin">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          sapiente quisquam recusandae hic placeat eaque labore aut porro,
          distinctio reiciendis.
        </p>
      </div>
    </div>
  );
}
