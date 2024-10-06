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

import Tags from "../components/tags/Tags";
import TextArea from "../components/textarea/TextArea";
import { UploadImage } from "../components/upload-image/UploadImage";
import { useAddPost } from "../hooks/useAddPost";
import { addPostFormFields } from "../utils/constants";

export default function AddPost() {
  const { form, onPostSubmit, setValue, setError } = useAddPost();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onPostSubmit)} className="space-y-5">
        {addPostFormFields.map(({ name, label, placeholder }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input placeholder={placeholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Tags formControl={form.control} onValueChange={setValue} onError={setError} />
        <TextArea formControl={form.control} />
        <UploadImage formControl={form.control} />
        <br />
        <Button className="hover:bg-muted" type="submit">
          Create post
        </Button>
      </form>
    </Form>
  );
}
