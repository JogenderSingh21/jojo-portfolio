'use client'

import { ProjectsData } from '@/types'
import { useMemo, useState } from 'react'
import { CategoryFilter } from './_components/projects/CategoryFilter'
import { ProjectsGrid } from './_components/projects/ProjectsGrid'
import { ProjectsHeader } from './_components/projects/ProjectsHeader'

interface ProjectsSectionProps {
  data: ProjectsData
}

export const ProjectsSection = ({ data }: ProjectsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [isCollapsed, setIsCollapsed] = useState(false)

  const counts = useMemo(() => {
    const result: Record<string, number> = { all: data.projects.length }
    for (const p of data.projects) {
      result[p.category] = (result[p.category] ?? 0) + 1
    }
    return result
  }, [data.projects])

  // Featured first; Array.sort is stable so JSON order is kept otherwise
  const filteredProjects = useMemo(() => {
    const list =
      activeCategory === 'all'
        ? data.projects
        : data.projects.filter(p => p.category === activeCategory)
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
  }, [data.projects, activeCategory])

  return (
    <section
      id="projects"
      className="flex items-center justify-center relative min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full"
    >
      <div className="flex flex-col items-center max-w-7xl w-full gap-6 sm:gap-8">
        <ProjectsHeader onToggleCollapse={() => setIsCollapsed(!isCollapsed)} />

        {isCollapsed && (
          <div className="text-gray-500 text-6xl md:text-7xl lg:text-8xl font-mono mb-24">
            ...
          </div>
        )}

        {!isCollapsed && (
          <>
            <CategoryFilter
              categories={data.categories}
              counts={counts}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* key => remounts on filter change, so "show more" resets */}
            <ProjectsGrid key={activeCategory} projects={filteredProjects} />
          </>
        )}

        <div className="flex justify-center mt-8">
          <span className="text-primary-blue text-4xl md:text-5xl lg:text-6xl font-bold font-mono">
            &#125;
          </span>
        </div>
      </div>
    </section>
  )
}
