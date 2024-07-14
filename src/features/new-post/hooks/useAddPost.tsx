import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useAddPost() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValues(),
  });

  function onPostSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return {
    form,
    onPostSubmit,
  };
}

// TODO: explore zod docs
const formSchema = z.object({
  postTitle: z.string().min(5).max(50),
  postContent: z.string().min(5).max(500),
  postLink: z.string().url().optional(),
  postImage: z.string().optional(),
  postTags: z.array(z.string()).min(1).optional(),
});

function getDefaultValues() {
  return {
    postTitle: "",
    postContent: "",
    postLink: "",
    postImage: "",
    postTags: [],
  };
}
