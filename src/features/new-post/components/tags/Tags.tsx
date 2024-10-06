import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Tag, TagInput } from "emblor";
import { useState } from "react";
import { FormControlProps } from "../../utils/types";

const fieldName = "postTags";
type PostTag = typeof fieldName;

export const defaultTags = [
  {
    id: "1",
    text: "Tag 1",
  },
  {
    id: "2",
    text: "Tag 2",
  },
  {
    id: "3",
    text: "Tag 3",
  },
];

interface TagInputProps extends FormControlProps {
  onValueChange: (text: PostTag, tags: Tag[]) => void;
  onError: (error: PostTag, message: { type: string; message: string }) => void;
}
function Tags({ formControl, onValueChange, onError }: TagInputProps) {
  const [tags, setTags] = useState<Tag[]>(defaultTags);

  const handleTagsSelect = (newTags: Tag[]) => {
    if (!newTags.length) {
      onError(fieldName, {
        type: "manual",
        message: "At least one tag is required",
      });
      return;
    }

    setTags(newTags);
    onValueChange(fieldName, newTags);
  };

  return (
    <FormField
      control={formControl}
      name="postTags"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Tags</FormLabel>
          <FormControl>
            <TagInput
              {...field}
              className="font-bold placeholder:text-primary"
              placeholder="Remove irrelevant tags"
              tags={tags}
              setTags={(newTags) => handleTagsSelect(newTags as Tag[])}
              activeTagIndex={0}
              setActiveTagIndex={() => {}}
              maxTags={3}
              showCount
              placeholderWhenFull="Maximum 3 tags"
              styleClasses={{
                tag: {
                  body: "bg-primary/70 text-white border-none font-bold pl-3",
                },
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Tags;
