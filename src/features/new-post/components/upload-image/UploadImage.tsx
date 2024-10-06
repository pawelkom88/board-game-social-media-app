import { FormControl, FormField, FormItem, FormLabel } from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { FormControlProps } from "../../utils/types";

export function UploadImage({ formControl }: FormControlProps) {
  return (
    <FormField
      control={formControl}
      name="postImage"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center">
            Upload an image
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipContent className="bg-primary text-white p-1 rounded-sm">
                  Image can be....
                </TooltipContent>
                <TooltipTrigger className="ml-4">
                  <QuestionMarkCircledIcon className="h-5 w-5" />
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </FormLabel>
          <FormControl>
            <Input
              type="file"
              {...field}
              className="block w-max min-h-12 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full border-0 file:text-sm file:font-semibold file:bg-muted file:text-white hover:file:bg-accent cursor-pointer shadow-noner"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
