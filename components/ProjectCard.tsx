import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const hasLive = Boolean(project.liveUrl);

  return (
    <div className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
      {/* Clickable Image */}
      {hasLive ? (
        <Link
          href={project.liveUrl!}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full h-48 group"
        >
          <Image
            src={project.image}
            alt={`${project.title} UI`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      ) : (
        <div className="relative w-full h-48">
          <Image
            src={project.image}
            alt={`${project.title} UI`}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm bg-gray-100 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-5 text-sm">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:underline"
          >
            GitHub Repo
          </Link>

          {hasLive && (
            <Link
              href={project.liveUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:underline"
            >
              Live Link
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}