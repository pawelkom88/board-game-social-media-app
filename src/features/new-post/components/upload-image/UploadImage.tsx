import { FormControl, FormField, FormItem, FormLabel } from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import { Control } from "react-hook-form";
import { AddPostFormData } from "../../schemas/schema";

interface UploadImageProps {
  formControl: Control<AddPostFormData>;
}

export function UploadImage({ formControl }: UploadImageProps) {
  return (
    <FormField
      control={formControl}
      name="postImage"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            Upload an image
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipContent className="bg-primary text-white p-1 rounded-sm">
                  Image can be....
                </TooltipContent>
                <TooltipTrigger className="ml-4">icon here</TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </FormLabel>
          <FormControl>
            <Input type="file" {...field} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
