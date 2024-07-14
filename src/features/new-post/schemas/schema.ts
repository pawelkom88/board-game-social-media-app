import { z } from "zod";

const validationErrorMessage = (name?: string) => {
  return {
    postRequirements: {
      minLength: `${name} must be at least 5 characters long`,
      maxLength: `${name} must be at most 75 characters long`,
    },
    url: "Link must be a valid URL starting with https://",
    tags: "At least one tag is required",
  };
};

export const formSchema = z.object({
  postTitle: z
    .string()
    .min(5, validationErrorMessage("Post title").postRequirements.minLength)
    .max(75, validationErrorMessage("Post title").postRequirements.maxLength),
  postContent: z
    .string()
    .min(5, validationErrorMessage("Post content").postRequirements.minLength),
  postLink: z
    .union([
      z.literal(""),
      z.string()
        .url({
          message: validationErrorMessage().url,
        })
        .optional(),
    ])
    .optional(),
  postImage: z.optional(z.string()),
  // TODO: to be sync with state when adding tags
  postTags: z
    .union([
      z.literal("", {
        errorMap: () => ({ message: validationErrorMessage().tags }),
      }),
      z.array(z.string()).min(1, validationErrorMessage().tags),
    ])
    .optional(),
});

export type AddPostFormData = z.infer<typeof formSchema>;
