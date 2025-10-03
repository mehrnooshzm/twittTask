import { useState } from "react";

export default function ReadMore({
  text,
  limit = 100,
}: {
  text: string;
  limit?: number;
}) {
  const [open, setOpen] = useState(false);

  if (text.length <= limit) {
    return <p>{text}</p>;
  }

  const displayedText = open ? text : text.slice(0, limit);

  return (
    <p>
      {displayedText}
      {!open && (
        <span
          onClick={() => setOpen(true)}
          className="text-blue-600 cursor-pointer"
        >
          more...
        </span>
      )}
    </p>
  );
}
