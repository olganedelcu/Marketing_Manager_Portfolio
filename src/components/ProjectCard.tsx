import Link from "next/link";
import Image from "next/image";
import { type Project } from "@/domain/project";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    <article className="group rounded-xl border border-gray-200 bg-white p-4 md:p-6 transition-shadow hover:shadow-lg">
      {project.logos && project.logos.length > 0 && (
        <div className="mb-4 flex gap-2 items-center">
          {project.logos.map((logo) => (
            <div key={logo.src} className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-base md:text-lg font-semibold leading-tight">
          {project.title}
        </h3>

        {project.description && (
          <p className="mt-2 text-xs md:text-sm text-gray-600">
            {project.description}
          </p>
        )}
      </div>

      {project.tags?.length > 0 && (
        <ul className="mb-4 flex flex-wrap gap-1.5 md:gap-2">
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
          className="inline-flex items-center text-xs md:text-sm font-medium text-blue-600 hover:underline"
        >
          View project →
        </Link>
      )}
    </article>
  );
}
