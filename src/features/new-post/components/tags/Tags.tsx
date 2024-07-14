import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { FormControlProps } from "../../utils/types";

function Tags({ formControl }: FormControlProps) {
  // TAGS LOGIC HERE
  return (
    <FormField
      control={formControl}
      name="postTags"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tags</FormLabel>
          <FormControl>
            <Input placeholder="Tags" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Tags;
