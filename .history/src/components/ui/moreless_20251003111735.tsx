import { useState } from "react";

interface ReadMoreProps {
  text: string;
  lines?: number; // تعداد خطوط پیش‌فرض
}

export default function ReadMore({ text, lines = 3 }: ReadMoreProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p className={!open ? `line-clamp-${lines}` : ""}>{text}</p>
      <button
        onClick={() => setOpen(!open)}
        className="mt-1 text-blue-600 hover:underline"
      >
        {open ? "less" : "more"}
      </button>
    </div>
  );
}
