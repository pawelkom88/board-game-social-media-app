import { IconButtonWithToolbar } from "@/shared/components/icon-button-with-toolbar/IconButtonWithToolbar";
import { Link } from "react-router-dom";
import { topNavButtons } from "../utils/constants";
export function TopNavButtons() {
  return (
    <div className="hidden lg:flex gap-4">
      {topNavButtons.map(({ id, tolltipContent, icon: Icon, path }) => {
        return (
          <IconButtonWithToolbar key={id} tooltipContent={tolltipContent}>
            <Link to={path}>
              <Icon className="h-5 w-5 mx-auto" />
            </Link>
          </IconButtonWithToolbar>
        );
      })}
    </div>
  );
}
