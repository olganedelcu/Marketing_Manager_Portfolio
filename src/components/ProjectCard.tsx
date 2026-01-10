import Link from "next/link";
import { type Project } from "@/domain/project";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="group rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
      <div className="mb-4">
        <h3 className="text-lg font-semibold leading-tight">
          {project.title}
        </h3>

        {project.description && (
          <p className="mt-2 text-sm text-gray-600">
            {project.description}
          </p>
        )}
      </div>

      {project.tags?.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {project.href && (
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
        >
          View project →
        </Link>
      )}
    </article>
  );
}
