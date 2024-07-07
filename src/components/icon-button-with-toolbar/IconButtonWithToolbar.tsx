import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { PropsWithChildren } from "react";
import { Button } from "../ui/button";

interface IconButtonWithToolbarProps extends PropsWithChildren {
  tooltipStyles?: string;
  tooltipContent: string;
}

export default function IconButtonWithToolbar({
  tooltipStyles,
  children,
  tooltipContent,
}: IconButtonWithToolbarProps) {
  return (
    <Button variant="ghost" size="icon" className="hidden lg:block rounded-full">
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipContent
            className={`bg-primary text-white p-1 rounded-sm ${tooltipStyles}`}
          >
            {tooltipContent}
          </TooltipContent>
          <TooltipTrigger tabIndex={1}>{children}</TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    </Button>
  );
}
