import { Project } from '@/types'
import { ProjectBanner } from './ProjectBanner'

interface ProjectCardProps {
  project: Project
  index: number
  onOpen: () => void
}

const stop = (e: React.MouseEvent) => e.stopPropagation()

export const ProjectCard = ({ project, index, onOpen }: ProjectCardProps) => {
  const { links } = project

  return (
    <article
      onClick={onOpen}
      className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border bg-background/80 backdrop-blur-sm transition-all duration-300 fade-in hover:border-primary-blue/50 hover:shadow-xl hover:shadow-primary-blue/20 ${
        project.featured
          ? 'border-primary-blue/50 shadow-lg shadow-primary-blue/10'
          : 'border-border-color/40'
      }`}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <ProjectBanner project={project} />

      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* status line (replaces the overlapping badges) */}
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider">
          <span
            className={
              project.status === 'ongoing'
                ? 'text-emerald-400'
                : 'text-gray-500'
            }
          >
            ● {project.status}
          </span>
          {project.featured && (
            <span className="text-amber-400">★ featured</span>
          )}
        </div>

        <h4 className="text-base font-bold text-primary-blue md:text-lg">
          {project.title}
        </h4>

        <p className="line-clamp-3 text-xs leading-relaxed text-gray-300 md:text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map(tech => (
            <span
              key={tech}
              className="rounded-full bg-border-color/30 px-2.5 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-full bg-border-color/30 px-2.5 py-1 text-xs text-gray-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* footer pinned to the bottom with mt-auto (no absolute positioning) */}
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-border-color/30 pt-3">
          <button
            type="button"
            className="font-mono text-xs text-gray-400 transition-colors hover:text-primary-blue"
          >
            <span className="text-primary-blue">▸</span> details()
          </button>

          <div className="flex items-center gap-2">
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stop}
                className="rounded-lg bg-primary-blue px-3 py-1.5 text-xs font-semibold text-background transition-colors hover:bg-secondary-blue"
              >
                Live Demo
              </a>
            )}
            {links.github && !links.private && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={stop}
                className="rounded-lg border border-primary-blue px-3 py-1.5 text-xs font-semibold text-primary-blue transition-colors hover:bg-primary-blue hover:text-background"
              >
                GitHub
              </a>
            )}
            {links.private && (
              <span className="rounded-lg border border-gray-600 px-3 py-1.5 text-xs font-semibold text-gray-400">
                Private
              </span>
            )}
            {links.discontinued && (
              <span className="rounded-lg border border-gray-600 px-3 py-1.5 text-xs font-semibold text-gray-400">
                Discontinued
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
