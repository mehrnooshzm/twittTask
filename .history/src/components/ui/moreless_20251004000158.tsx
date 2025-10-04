import { useState } from "react";

export default function ReadMore({
  text,
  limit = 100,
}: {
  text: string;
  limit?: number;
}) {
  const [open, setOpen] = useState(false);
  console.log(text.length, limit);
  if (text.length <= limit) {
    return <p>{text}</p>;
  }

  const displayedText = open ? text : text.slice(0, limit);

  return (
    <p>
      {displayedText}...
      {!open && (
        <span
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="text-blue-600 cursor-pointer ml-1"
        >
          more
        </span>
      )}
    </p>
  );
}
