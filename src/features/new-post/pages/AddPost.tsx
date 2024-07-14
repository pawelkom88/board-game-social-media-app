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

import { UploadImage } from "../components/upload-image/UploadImage";
import { useAddPost } from "../hooks/useAddPost";
import { addPostFormFields } from "../utils/constants";

export default function AddPost() {
  const { form, onPostSubmit } = useAddPost();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onPostSubmit)} className="space-y-5">
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
        <FormField
          control={form.control}
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
        <UploadImage formControl={form.control} />
        <br />
        <Button className="hover:bg-muted" type="submit">
          Create post
        </Button>
      </form>
    </Form>
  );
}
