import { z } from "zod";

export const formSchema = z.object({
    postTitle: z.string().min(5).max(50),
    postContent: z.string().min(5).max(500),
    postLink: z.string().url().optional(),
    postImage: z.string().optional(),
    postTags: z.array(z.string()).min(1).optional(),
  });
  

  export type AddPostFormData = z.infer<typeof formSchema>;