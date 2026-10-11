'use client'

import { TechItem } from '@/types'
import { TechIcon } from './TechIcons'

interface TechCategoryProps {
  category: string
  technologies: TechItem[]
  index: number
}

const getCategoryMeta = (cat: string) => {
  switch (cat.toLowerCase()) {
    case 'backend':
      return {
        file: 'BackendServices.java',
        color: 'text-primary-blue',
        accentBg: 'bg-primary-blue/10 border-primary-blue/30',
        dotColor: 'bg-primary-blue',
        icon: '⚡',
      }
    case 'database':
      return {
        file: 'DatabaseConfiguration.java',
        color: 'text-emerald-400',
        accentBg: 'bg-emerald-500/10 border-emerald-500/30',
        dotColor: 'bg-emerald-400',
        icon: '🗄️',
      }
    case 'devops':
      return {
        file: 'CloudInfrastructure.java',
        color: 'text-cyan-400',
        accentBg: 'bg-cyan-500/10 border-cyan-500/30',
        dotColor: 'bg-cyan-400',
        icon: '☁️',
      }
    case 'tools':
      return {
        file: 'ToolRegistry.java',
        color: 'text-indigo-400',
        accentBg: 'bg-indigo-500/10 border-indigo-500/30',
        dotColor: 'bg-indigo-400',
        icon: '🛠️',
      }
    case 'frontend':
      return {
        file: 'WebClientController.java',
        color: 'text-purple-400',
        accentBg: 'bg-purple-500/10 border-purple-500/30',
        dotColor: 'bg-purple-400',
        icon: '💻',
      }
    default:
      return {
        file: `${cat}Config.java`,
        color: 'text-primary-blue',
        accentBg: 'bg-primary-blue/10 border-primary-blue/30',
        dotColor: 'bg-primary-blue',
        icon: '📦',
      }
  }
}

const getProficiencyBadge = (level: number) => {
  if (level >= 90) {
    return {
      label: 'Expert',
      className: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/35',
      dots: 5,
    }
  }
  if (level >= 85) {
    return {
      label: 'Advanced',
      className: 'text-primary-blue bg-primary-blue/15 border-primary-blue/35',
      dots: 4,
    }
  }
  return {
    label: 'Proficient',
    className: 'text-purple-400 bg-purple-500/15 border-purple-500/35',
    dots: 3,
  }
}

export const TechCategory = ({
  category,
  technologies,
  index,
}: TechCategoryProps) => {
  const meta = getCategoryMeta(category)

  return (
    <div
      className="code-block glow rounded-2xl border border-border-color/60 bg-background/90 p-6 md:p-8 transition-all duration-300 hover:border-primary-blue/50 flex flex-col gap-6 shadow-xl shadow-black/40"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Category Editor Header */}
      <div
        style={{ paddingBottom: 3 }}
        className="flex items-center justify-between border-b border-border-color/50 pb-4"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl md:text-2xl p-1.5 rounded-lg bg-border-color/20 border border-border-color/40">
            {meta.icon}
          </span>
          <div className="flex flex-wrap items-center gap-2 font-mono text-base md:text-lg">
            <span className="text-gray-500">public List&lt;Tech&gt;</span>
            <span className={`font-bold capitalize ${meta.color}`}>
              {category}
            </span>
            {/* <span className="text-primary-blue">= List.of(</span> */}
          </div>
        </div>
        <div className="flex items-center">
          <span
            style={{ paddingInline: 10 }}
            className="text-xs md:text-sm font-mono text-gray-300 bg-background/80 rounded-full border border-border-color/60 shadow-sm"
          >
            {technologies.length} skills
          </span>
        </div>
      </div>

      {/* Grid of Modern, Generously Padded Skill Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {technologies.map((tech: TechItem, idx: number) => {
          const badge = getProficiencyBadge(tech.level)

          return (
            <a
              key={idx}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: 10 }}
              className="group relative flex flex-col justify-between p-4 md:p-5 rounded-xl bg-border-color/15 border border-border-color/40 hover:border-primary-blue/60 hover:bg-primary-blue/10 transition-all duration-200 hover:-translate-y-1 shadow-md hover:shadow-primary-blue/10 min-h-[96px]"
            >
              {/* Top Row: Icon + Title + External Link Arrow */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-background/80 border border-border-color/50 text-gray-300 group-hover:text-primary-blue group-hover:border-primary-blue/40 transition-colors flex-shrink-0 shadow-sm">
                    <TechIcon
                      name={tech.name}
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </div>
                  <span className="font-mono text-sm md:text-base font-bold text-gray-100 group-hover:text-white truncate">
                    {tech.name}
                  </span>
                </div>

                {/* External link indicator */}
                <div className="p-1 rounded text-gray-500 group-hover:text-primary-blue opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0">
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Metadata Row: Category Tag + Proficiency Badge & Dots */}
              <div
                style={{ paddingTop: 10 }}
                className="flex items-center justify-between pt-3 border-t border-border-color/35 text-xs font-mono"
              >
                <span className="text-gray-400 capitalize text-xs truncate max-w-[110px]">
                  {tech.category}
                </span>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span
                    style={{ padding: 3 }}
                    className={` rounded-md border text-xs font-medium tracking-wide ${badge.className}`}
                  >
                    {badge.label}
                  </span>
                  {/* Discrete Level Pips */}
                  <div className="flex items-center gap-1 pl-0.5">
                    {[1, 2, 3, 4, 5].map(dot => (
                      <span
                        key={dot}
                        className={`w-1.5 h-1.5 rounded-full transition-colors ${
                          dot <= badge.dots
                            ? `${meta.dotColor} shadow-sm shadow-current`
                            : 'bg-gray-700/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
