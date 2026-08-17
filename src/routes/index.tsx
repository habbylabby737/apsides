import { createFileRoute } from "@tanstack/react-router";
import { OrbitStudio } from "@/components/orbit-studio";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <OrbitStudio />;
}
