'use client'

import { Project } from '@/types'
import { useEffect } from 'react'
import { ProjectBanner } from './ProjectBanner'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [project, onClose])

  if (!project) return null
  const { links } = project

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="group max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-primary-blue/40 bg-background shadow-2xl shadow-primary-blue/10"
        onClick={e => e.stopPropagation()}
      >
        {/* title bar - keeps the close button off the banner chips */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border-color/50 bg-background px-4 py-2 font-mono text-xs text-gray-500">
          <span className="truncate">{`// ${project.id}`}</span>
          <button
            type="button"
            onClick={onClose}
            className="ml-3 shrink-0 rounded px-2 py-1 text-gray-400 transition-colors hover:text-primary-blue"
            aria-label="Close project details"
          >
            esc ✕
          </button>
        </div>

        <ProjectBanner project={project} />

        <div className="flex flex-col gap-5 p-5 md:p-6">
          <div className="flex flex-col gap-2">
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
            <h3 className="text-xl font-bold text-primary-blue md:text-2xl">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              {project.description}
            </p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="flex flex-col gap-2">
              <h5 className="text-sm font-semibold text-primary-blue">
                Key Features:
              </h5>
              <ul className="flex flex-col gap-2">
                {project.highlights.map(h => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-xs text-gray-400 md:text-sm"
                  >
                    <span className="mt-0.5 shrink-0 text-primary-blue">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <h5 className="text-sm font-semibold text-primary-blue">Stack:</h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="rounded-full bg-border-color/30 px-2.5 py-1 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.live && (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-primary-blue px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-secondary-blue"
              >
                Live Demo
              </a>
            )}
            {links.github && !links.private && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-primary-blue px-4 py-2 text-sm font-semibold text-primary-blue transition-colors hover:bg-primary-blue hover:text-background"
              >
                GitHub
              </a>
            )}
            {links.private && (
              <span className="rounded-lg border border-gray-600 px-4 py-2 text-sm font-semibold text-gray-400">
                Private Repo
              </span>
            )}
            {links.discontinued && (
              <span className="rounded-lg border border-gray-600 px-4 py-2 text-sm font-semibold text-gray-400">
                Discontinued
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
