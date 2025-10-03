import { useState } from "react";

interface ReadMoreProps {
  text: string;
  textLength: number;
  lines?: number;
}

export default function ReadMore({
  text,
  lines = 3,
  textLength,
}: ReadMoreProps) {
  const [open, setOpen] = useState(false);
  const long = textLength > 100;
  return (
    <div>
      <p className={!open ? `line-clamp-${lines}` : ""}>{text}</p>
      {long && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-1 text-blue-600 hover:underline"
        >
          {open ? "less" : "more"}
        </button>
      )}
    </div>
  );
}
