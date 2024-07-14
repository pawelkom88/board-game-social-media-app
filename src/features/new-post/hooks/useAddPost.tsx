import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AddPostFormData, formSchema } from "../schemas/schema";

export function useAddPost() {
  const form = useForm<AddPostFormData>({
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

function getDefaultValues() {
  return {
    postTitle: "",
    postContent: "",
    postLink: "",
    postImage: "",
    postTags: [],
  };
}
