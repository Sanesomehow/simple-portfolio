import { Header } from "./Header";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-15 overflow-x-hidden">
      <div className="flex justify-center w-full border-b border-color-text-secondary">
      <Header />
      </div>
      <Hero />
      <Projects />
    </div>
  );
}
