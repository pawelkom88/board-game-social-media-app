import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, profileNavLink } from "@/router/navLinks";
import { splitNavLinks } from "@/utils/helpers";
import { PlusIcon } from "lucide-react";
import React from "react";

// export function MobileNav() {
//   // use map
//   const active = false;
//   return (
//     <nav className="min-h-8 fixed inset-x-0 bottom-0 bg-accent lg:hidden px-4 py-2 flex justify-center items-center gap-4">
//       <a
//         href="#"
//         className={`flex items-center flex-col gap-col-1 gap-row-2 rounded-md px-2 py-1 text-muted-foreground ${cn(
//           active ? "bg-background" : ""
//         )}`}
//       >
//         <HomeIcon className={`text-xs h-5 w-5  ${cn(active ? "stroke-primary" : "")}`} />
//         <span className={`text-xs ${cn(active ? "text-foreground" : "")}`}>Home</span>
//       </a>

//       <a
//         href="#"
//         className={`flex items-center flex-col gap-col-1 gap-row-2 rounded-md px-2 py-1 text-muted-foreground ${cn(
//           active ? "bg-background" : ""
//         )}`}
//       >
//         <HomeIcon className={`text-xs h-5 w-5  ${cn(active ? "stroke-primary" : "")}`} />
//         <span className={`text-xs ${cn(active ? "text-foreground" : "")}`}>Home</span>
//       </a>
//       <a
//         href="#"
//         className="w-16 h-16 bg-background rounded-full absolute bottom-6 flex justify-center items-center"
//       >
//         <PlusIcon className="h-12 w-12 rounded-full shadow-sm shadow-background bg-[#2c2c2c] p-2 text-background" />
//       </a>
//       <div className="w-16 md:w-24" />
//       <a
//         href="#"
//         className={`flex items-center flex-col gap-col-1 gap-row-2 rounded-md px-2 py-1 text-muted-foreground ${cn(
//           active ? "bg-background" : ""
//         )}`}
//       >
//         <HomeIcon className={`text-xs h-5 w-5  ${cn(active ? "stroke-primary" : "")}`} />
//         <span className={`text-xs ${cn(active ? "text-foreground" : "")}`}>Home</span>
//       </a>

//       <a
//         href="#"
//         className={`flex items-center flex-col gap-col-1 gap-row-2 rounded-md px-2 py-1 text-muted-foreground ${cn(
//           active ? "bg-background" : ""
//         )}`}
//       >
//         <HomeIcon className={`text-xs h-5 w-5  ${cn(active ? "stroke-primary" : "")}`} />
//         <span className={`text-xs ${cn(active ? "text-foreground" : "")}`}>Home</span>
//       </a>
//     </nav>
//   );
// }

interface NavItemProps {
  name: string;
  path: string;
  icon: React.ReactElement;
  active: boolean;
}

const NavLink = ({ name, path, icon, active }: NavItemProps) => {
  return (
    <a
      href={path}
      className={`flex items-center flex-col gap-col-1 gap-row-2 rounded-md px-2 py-1 text-primary ${cn(
        active ? "bg-background" : ""
      )}`}
    >
      {React.cloneElement(icon, {
        className: `text-xs h-5 w-5 ${cn(active ? "stroke-primary" : "")}`,
      })}
      <span className={`text-xs ${cn(active ? "text-foreground" : "")}`}>{name}</span>
    </a>
  );
};

export function MobileNav() {
  // This could be determined based on the current route from react router
  const activePath = "/";

  return (
    <nav className="min-h-8 fixed inset-x-0 bottom-0 bg-accent lg:hidden px-4 py-2 flex justify-center items-center gap-4">
      {splitNavLinks(navLinks).map((item) => (
        <NavLink key={item.name} {...item} active={item.path === activePath} />
      ))}
      <Button className="w-20 h-20 bg-background rounded-full absolute bottom-6 flex justify-center items-center shadow-none hover:bg-background">
        <PlusIcon className="h-12 w-12 rounded-full shadow-sm shadow-background bg-primary p-2 text-background" />
      </Button>
      <div className="w-16 md:w-24" />
      {splitNavLinks([...navLinks, profileNavLink], "right").map((item) => (
        <NavLink key={item.name} {...item} active={item.path === activePath} />
      ))}
    </nav>
  );
}
