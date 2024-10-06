import { z } from "zod";

export const formFieldsName = {
  postTitle: "Post title",
  postContent: "Post Content",
  postLink: "Link",
  postImage: "Image",
};

export const validationErrorMessage = (name?: string) => {
  return {
    postRequirements: {
      minLength: `${name} must be at least 5 characters long`,
      maxLength: `${name} must be at most 75 characters long`,
    },
    url: "Link must be a valid URL starting with https://",
    tags: "At least one tag is required",
  };
};

const tagSchema = z.object({
  id: z.string(),
  text: z.string(),
});

export const formSchema = z.object({
  postTitle: z
    .string()
    .min(5, validationErrorMessage(formFieldsName.postTitle).postRequirements.minLength)
    .max(75, validationErrorMessage(formFieldsName.postTitle).postRequirements.maxLength),
  postContent: z
    .string()
    .min(5, validationErrorMessage("Post content").postRequirements.minLength),
  postLink: z
    .union([
      z.literal(""),
      z
        .string()
        .url({
          message: validationErrorMessage().url,
        })
        .optional(),
    ])
    .optional(),
  // to be considered as required field maybe with its own schema
  postImage: z.optional(z.string()),
  postTags: z.array(tagSchema),
});

export type AddPostFormData = z.infer<typeof formSchema>;
