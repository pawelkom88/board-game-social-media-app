import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, profileNavLink } from "@/router/navLinks";
import { RoutesConfig } from "@/router/routes";
import { splitNavLinks } from "@/utils/helpers";
import { Union } from "@/utils/ts-helpers";
import { PlusIcon } from "lucide-react";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

interface LinkProps {
  name: string;
  path: Union<typeof RoutesConfig>;
  icon: React.ReactElement;
  active: boolean;
}

const Link = ({ name, path, icon, active }: LinkProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${
          isActive ? "bg-background" : ""
        } flex items-center flex-col gap-col-1 gap-row-2 rounded-md px-2 py-1 text-primary`
      }
    >
      {React.cloneElement(icon, {
        className: `text-xs h-5 w-5 ${cn(active ? "stroke-primary" : "")}`,
      })}
      <span className={`text-xs ${cn(active ? "text-foreground" : "")}`}>{name}</span>
    </NavLink>
  );
};

export function MobileNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="min-h-8 fixed inset-x-0 bottom-0 bg-accent lg:hidden px-4 py-2 flex justify-center items-center gap-4">
      {splitNavLinks(navLinks).map((item) => (
        <Link key={item.name} {...item} active={item.path === pathname} />
      ))}
      <Button
        onClick={() => navigate(RoutesConfig.newPost)}
        className="w-20 h-20 bg-background rounded-full absolute bottom-6 flex justify-center items-center shadow-none hover:bg-background "
      >
        <PlusIcon
          className={`h-12 w-12 rounded-full shadow-sm shadow-background bg-primary p-2 text-background ${cn(
            pathname === RoutesConfig.newPost
              ? "transform rotate-90 transition-transform duration-300 ease-in-out"
              : ""
          )}`}
        />
      </Button>
      <div className="w-16 md:w-24" />
      {splitNavLinks([...navLinks, profileNavLink], "right").map((item) => (
        <Link key={item.name} {...item} active={item.path === pathname} />
      ))}
    </nav>
  );
}
