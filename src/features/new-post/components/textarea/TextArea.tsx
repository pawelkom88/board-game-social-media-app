import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { FormControlProps } from "../../utils/types";

export default function TextArea({ formControl }: FormControlProps) {
  return (
    <FormField
      control={formControl}
      name="postContent"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Content</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Post content, e.g. New game from 2022"
              className="resize-none min-h-48"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
