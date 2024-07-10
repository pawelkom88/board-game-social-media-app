import { Button } from "@/components/ui/button";
import { navLinks } from "@/router/navLinks";
import { RoutesConfig } from "@/router/routes";
import { NavLink, useNavigate } from "react-router-dom";

export function DesktopNav() {
  const navigate = useNavigate();
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
      <Button
        onClick={() => navigate(RoutesConfig.newPost)}
        className="font-semibold mt-2 hover:bg-muted-foreground"
      >
        Post
      </Button>
    </nav>
  );
}
