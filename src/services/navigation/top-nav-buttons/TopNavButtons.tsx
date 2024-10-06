import { cn } from "@/lib/utils";
import { IconButtonWithToolbar } from "@/shared/components/icon-button-with-toolbar/IconButtonWithToolbar";
import { useTheme } from "@/shared/components/theme-provider";
import { useActivePath } from "@/shared/hooks/useActivePath";
import { commonBgTransitionStyles } from "@/shared/utils/constants";
import { getContrastColor } from "@/shared/utils/helpers";
import { Link } from "react-router-dom";
import { topNavButtons } from "../utils/constants";

export function TopNavButtons() {
  const { activePath, setActivePath } = useActivePath();
  const { theme } = useTheme();

  return (
    <div className="hidden lg:flex gap-4">
      {topNavButtons.map(({ id, tolltipContent, icon: Icon, path }) => {
        return (
          <IconButtonWithToolbar key={id} tooltipContent={tolltipContent}>
            <Link onClick={() => setActivePath(path)} to={path}>
              <Icon
                className={cn(
                  activePath === path
                    ? `h-8 w-8 bg-[${getContrastColor(
                        theme
                      )}] p-1 rounded-full ${commonBgTransitionStyles}`
                    : `h-6 w-6 ${commonBgTransitionStyles}`
                )}
              />
            </Link>
          </IconButtonWithToolbar>
        );
      })}
    </div>
  );
}
