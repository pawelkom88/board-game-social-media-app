import { Button } from "@/components/ui/button";
import { navLinks } from "@/router/navLinks";
import { NavLink } from "react-router-dom";

export function DesktopNav() {
  return (
    <nav className="hidden lg:flex flex-col gap-2">
      {navLinks.map((link) => {
        return (
          <NavLink
            key={link.name}
            to={link.path}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-primary hover:bg-muted hover:text-foreground"
          >
            {link.icon}
            {link.name}
          </NavLink>
        );
      })}
      <Button className="font-semibold mt-2 hover:bg-muted-foreground">Post</Button>
    </nav>
  );
}
