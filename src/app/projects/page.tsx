import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { TechStack } from "@/components/TechStack";

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="container mx-auto px-8 py-12">
      <div className="max-w-6xl">
        <TechStack />

        {!!featuredProjects.length && (
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {!!otherProjects.length && (
          <section>
            <h2 className="text-2xl font-semibold mb-6">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        )}

        {!projects.length && (
          <p className="text-muted-foreground">No projects yet. Check back soon!</p>
        )}
      </div>
    </div>
  );
}
