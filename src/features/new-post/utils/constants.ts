export const addPostFormFields = [
  {
    name: "postTitle",
    label: "Title",
    type: "text",
    placeholder: "Post title, e.g. New game from 2022",
  },

  {
    name: "postLink",
    label: "Link",
    type: "url",
    placeholder: "https://example.com",
  },
  {
    name: "postTags",
    label: "Tags",
    type: "text",
    placeholder: "tag1, tag2, tag3",
  },
] as const;
