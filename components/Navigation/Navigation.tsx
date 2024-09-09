import React from "react";
import MobileNavigation from "./Mobile";
import DesktopNavigation from "./Desktop";

export const Navigation = async () => {
  return (
    <header>
      <nav>
        <MobileNavigation />
        <DesktopNavigation />
      </nav>
    </header>
  );
};
