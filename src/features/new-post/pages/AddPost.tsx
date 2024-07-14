import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";
import { useAddPost } from "../hooks/useAddPost";
import { addPostFormFields } from "../utils/constants";

export default function AddPost() {
  const { form, onPostSubmit } = useAddPost();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onPostSubmit)} className="space-y-8">
        {addPostFormFields.map((fieldd) => (
          <FormField
            key={fieldd.name}
            control={form.control}
            name={fieldd.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fieldd.label}</FormLabel>
                <FormControl>
                  <Input placeholder={fieldd.placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        {/* // TODO: min rows */}
        <FormField
          control={form.control}
          name="postContent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Post content</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        {/* // separate component handling upload */}
        <FormField
          control={form.control}
          name="postImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Upload a post image{" "}
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

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
