import { navLinks } from "@/router/navLinks";
import { RoutesConfig } from "@/router/routes";
import { Theme, useTheme } from "@/shared/components/theme-provider";
import { Button } from "@/shared/components/ui/button";
import { commonBgTransitionStyles } from "@/shared/utils/constants";
import { getContrastColor } from "@/shared/utils/helpers";
import { NavLink, useNavigate } from "react-router-dom";

export function DesktopNav() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <nav className="hidden lg:flex flex-col gap-2">
      {navLinks.map((link) => {
        return (
          <NavLink
            className={({ isActive }) =>
              `${getActiveStyles(isActive, theme)} 
               flex items-center gap-2 rounded-md px-3 py-2 text-primary hover:bg-muted hover:text-foreground`
            }
            key={link.name}
            to={link.path}
          >
            {link.icon}
            {link.name}
          </NavLink>
        );
      })}
      <Button
        onClick={() => navigate(RoutesConfig.newPost)}
        // TODO: find a new color cta
        className="font-semibold mt-2 hover:bg-muted"
      >
        Add new post
      </Button>
    </nav>
  );
}

const getActiveStyles = (isActive: boolean, theme: Theme): string => {
  return isActive
    ? `bg-[${getContrastColor(theme)}] ${commonBgTransitionStyles}`
    : `${commonBgTransitionStyles}`;
};
