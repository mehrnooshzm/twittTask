import { useParams } from "@tanstack/react-router";

export default function TwittView() {
  const { id } = useParams({ from: "Route" });

  return (
    <div>
      <h2>Twitt Detail</h2>
      <p>ID: {id}</p>
    </div>
  );
}
