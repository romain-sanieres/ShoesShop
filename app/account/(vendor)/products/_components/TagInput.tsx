"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";

const TagInput = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && inputValue) {
      e.preventDefault();
      if (!tags.includes(inputValue)) {
        setTags([...tags, inputValue]);
        setInputValue("");
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      <div className="grid gap-2">
        <Label htmlFor="tags">Tags</Label>
        <Input
          id="tags"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add tag and press Enter"
        />
      </div>
      <div className="flex gap-x-4">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-neutral-100 p-2 rounded flex items-center gap-x-4 mt-4"
          >
            <span>{tag}</span>
            <button onClick={() => removeTag(tag)}>
              <Cross2Icon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
