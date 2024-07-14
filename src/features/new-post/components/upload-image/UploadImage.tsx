import { FormControl, FormField, FormItem, FormLabel } from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import { Upload } from "lucide-react";
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
            <div className="flex items-center">
              <Upload className="h-8 w-8 object-cover rounded-full opacity-60" />
              <Input
                type="file"
                {...field}
                className="block w-full min-h-12 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full border-0 file:text-sm file:font-semibold file:bg-muted file:text-white hover:file:bg-accent cursor-pointer shadow-none"
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
