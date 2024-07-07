import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import { HomeIcon } from "../icons/home/Home";

export default function MobileNav() {
  // use map
  const active = true;
  return (
    <nav className="min-h-8 fixed inset-x-0 bottom-0 bg-accent lg:hidden px-4 py-2 flex justify-center items-center gap-4">
      <a
        href="#"
        className={`flex items-center flex-col gap-col-1 gap-row-2 rounded-md px-2 py-1 text-muted-foreground ${cn(
          active ? "bg-background" : ""
        )}`}
      >
        <HomeIcon className={`text-xs h-4 w-4  ${cn(active ? "stroke-primary" : "")}`} />
        <span className={`text-xs ${cn(active ? "text-foreground" : "")}`}>Home</span>
      </a>

      <a
        href="#"
        className={`flex items-center flex-col gap-col-1 gap-row-2 rounded-md px-2 py-1 text-muted-foreground ${cn(
          active ? "bg-background" : ""
        )}`}
      >
        <HomeIcon className={`text-xs h-4 w-4  ${cn(active ? "stroke-primary" : "")}`} />
        <span className={`text-xs ${cn(active ? "text-foreground" : "")}`}>Home</span>
      </a>
      <a
        href="#"
        className="w-16 h-16 bg-background rounded-full absolute bottom-6 flex justify-center items-center"
      >
        <PlusIcon className="h-12 w-12 rounded-full shadow-sm shadow-background bg-[#2c2c2c] p-2 text-background" />
      </a>
      <div className="w-16 md:w-24"/>
      <a
        href="#"
        className={`flex items-center flex-col gap-col-1 gap-row-2 rounded-md px-2 py-1 text-muted-foreground ${cn(
          active ? "bg-background" : ""
        )}`}
      >
        <HomeIcon className={`text-xs h-4 w-4  ${cn(active ? "stroke-primary" : "")}`} />
        <span className={`text-xs ${cn(active ? "text-foreground" : "")}`}>Home</span>
      </a>

      <a
        href="#"
        className={`flex items-center flex-col gap-col-1 gap-row-2 rounded-md px-2 py-1 text-muted-foreground ${cn(
          active ? "bg-background" : ""
        )}`}
      >
        <HomeIcon className={`text-xs h-4 w-4  ${cn(active ? "stroke-primary" : "")}`} />
        <span className={`text-xs ${cn(active ? "text-foreground" : "")}`}>Home</span>
      </a>
    </nav>
  );
}
