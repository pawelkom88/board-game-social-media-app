import { Button } from "@/components/ui/button";
import { navLinks } from "@/router/navLinks";

export function DesktopNav() {
  return (
    <nav className="hidden lg:flex flex-col gap-2">
      {navLinks.map((link) => {
        return (
          <a
            key={link.name}
            href={link.path}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-primary hover:bg-muted hover:text-foreground"
          >
            {link.icon}
            {link.name}
          </a>
        );
      })}
      <Button className="font-semibold mt-2 hover:bg-muted-foreground">Post</Button>
    </nav>
  );
}
