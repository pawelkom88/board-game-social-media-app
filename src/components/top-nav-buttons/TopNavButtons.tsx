import { topNavButtons } from "@/utils/constants";
import { IconButtonWithToolbar } from "../icon-button-with-toolbar/IconButtonWithToolbar";

export function TopNavButtons() {
  return (
    <div className="hidden lg:flex gap-4">
      {topNavButtons.map(({ id, tolltipContent, icon: Icon }) => {
        return (
          <IconButtonWithToolbar key={id} tooltipContent={tolltipContent}>
            <Icon className="h-5 w-5 mx-auto" />
          </IconButtonWithToolbar>
        );
      })}
    </div>
  );
}
