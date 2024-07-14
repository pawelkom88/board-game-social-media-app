import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { PropsWithChildren } from "react";

interface IconButtonWithToolbarProps extends PropsWithChildren {
  tooltipStyles?: string;
  tooltipContent: string;
}

export function IconButtonWithToolbar({
  tooltipStyles,
  children,
  tooltipContent,
}: IconButtonWithToolbarProps) {
  return (
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
  );
}
