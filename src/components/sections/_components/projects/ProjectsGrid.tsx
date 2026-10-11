'use client'

import { Project } from '@/types'
import { useCallback, useState } from 'react'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

interface ProjectsGridProps {
  projects: Project[]
}

const PAGE_SIZE = 6

export const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [selected, setSelected] = useState<Project | null>(null)
  const closeModal = useCallback(() => setSelected(null), [])

  const visible = projects.slice(0, visibleCount)
  const remaining = projects.length - visible.length

  const moreBtn =
    'rounded-full border border-primary-blue px-5 py-2 font-mono text-sm text-primary-blue transition-colors duration-300 hover:bg-primary-blue hover:text-background'

  return (
    <div className="w-full">
      <p className="mb-4 font-mono text-xs text-gray-500">
        {`// showing ${visible.length} of ${projects.length}`}
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i % PAGE_SIZE}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>

      {projects.length > PAGE_SIZE && (
        <div className="mt-10 flex justify-center gap-4">
          {remaining > 0 && (
            <button
              type="button"
              className={moreBtn}
              onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
            >
              {`// load ${Math.min(PAGE_SIZE, remaining)} more`}
            </button>
          )}
          {visibleCount > PAGE_SIZE && (
            <button
              type="button"
              className={`${moreBtn} border-gray-600 text-gray-400`}
              onClick={() => setVisibleCount(PAGE_SIZE)}
            >
              {'// collapse'}
            </button>
          )}
        </div>
      )}

      <ProjectModal project={selected} onClose={closeModal} />
    </div>
  )
}
