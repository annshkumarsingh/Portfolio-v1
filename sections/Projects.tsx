import ProjectCard from "../components/ProjectCard";
import { projects } from "@/data/project";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen max-w-4xl mx-auto px-6 pt-32"
    >
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}