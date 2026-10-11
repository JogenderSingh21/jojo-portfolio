'use client'

import { TechStack } from '@/types'
import { useState } from 'react'
import { TechCategory } from './TechCategory'
import { TechIcon } from './TechIcons'

interface TechStackGridProps {
  data: TechStack
}

export const TechStackGrid = ({ data }: TechStackGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categoryEntries = Object.entries(data)
  const totalSkillsCount = categoryEntries.reduce(
    (acc, [, skills]) => acc + skills.length,
    0
  )

  const filteredEntries =
    selectedCategory === 'all'
      ? categoryEntries
      : categoryEntries.filter(([category]) => category === selectedCategory)

  const categoryLabels: Record<string, { label: string; icon: string }> = {
    all: { label: 'All Stack', icon: '⚡' },
    backend: { label: 'Backend', icon: '🚀' },
    database: { label: 'Databases', icon: '🗄️' },
    devops: { label: 'Cloud & DevOps', icon: '☁️' },
    tools: { label: 'Dev Tools', icon: '🛠️' },
    frontend: { label: 'Frontend', icon: '💻' },
  }

  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-7xl px-2 sm:px-6">
      {/* Core Backend Spotlight Banner */}
      <div
        style={{ padding: 20 }}
        className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950/40 via-background to-cyan-950/30 border border-primary-blue/40 p-7 md:p-9 shadow-xl shadow-primary-blue/5"
      >
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent-green font-semibold">
                Core Specialization & Production Focus
              </span>
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white font-mono">
              Distributed Backend Systems & Event-Driven Architecture
            </h3>
            <p className="text-xs md:text-sm text-gray-400 max-w-2xl leading-relaxed">
              Engineering high-concurrency microservices, Kafka streaming
              pipelines, and low-latency database clusters handling millions of
              daily transactions.
            </p>
          </div>

          {/* Quick Highlight Pills */}
          <div className="flex flex-wrap gap-3 items-center">
            {[
              { name: 'Java', role: 'Language' },
              { name: 'Spring Boot', role: 'Framework' },
              { name: 'Apache Kafka', role: 'Streaming' },
              { name: 'MongoDB', role: 'NoSQL Cluster' },
            ].map(item => (
              <div
                key={item.name}
                style={{ padding: 5 }}
                className="w-36 flex items-center gap-2.5 rounded-xl bg-background/80 border border-primary-blue/35 text-white font-mono text-xs shadow-sm hover:border-primary-blue hover:bg-primary-blue/10 transition-colors"
              >
                <div className="text-primary-blue">
                  <TechIcon name={item.name} className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm">{item.name}</span>
                  <span className="text-[10px] text-gray-400">{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Interactive Category Filter Pills */}
      {/* <div className="flex flex-wrap items-center justify-center gap-3 p-2 rounded-2xl bg-background/90 border border-border-color/60 backdrop-blur-sm max-w-4xl shadow-lg">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm font-mono font-medium transition-all duration-200 cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-primary-blue text-background shadow-md shadow-primary-blue/20'
              : 'text-gray-400 hover:text-white hover:bg-border-color/30'
          }`}
        >
          <span>{categoryLabels.all.icon}</span>
          <span>{categoryLabels.all.label}</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              selectedCategory === 'all'
                ? 'bg-background/30 text-background'
                : 'bg-border-color/40 text-gray-400'
            }`}
          >
            {totalSkillsCount}
          </span>
        </button>

        {categoryEntries.map(([category, skills]) => {
          const catInfo = categoryLabels[category.toLowerCase()] || {
            label: category,
            icon: '📦',
          }
          const isSelected = selectedCategory === category

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-mono font-medium transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-primary-blue text-background shadow-md shadow-primary-blue/20'
                  : 'text-gray-400 hover:text-white hover:bg-border-color/30'
              }`}
            >
              <span>{catInfo.icon}</span>
              <span className="capitalize">{catInfo.label}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  isSelected
                    ? 'bg-background/30 text-background'
                    : 'bg-border-color/40 text-gray-400'
                }`}
              >
                {skills.length}
              </span>
            </button>
          )
        })}
      </div> */}

      {/* Organic Tech Stack Filters */}
      <div className="w-full sm:flex sm:justify-center">
        <div
          role="group"
          aria-label="Filter skills by category"
          className="grid w-full grid-cols-2 gap-2 rounded-2xl border border-slate-400/15 bg-slate-900/80 p-2 shadow-lg shadow-black/10 backdrop-blur-md sm:flex sm:w-fit sm:flex-wrap sm:justify-center sm:gap-2 sm:p-2.5"
        >
          {[
            {
              key: 'all',
              label: categoryLabels.all.label,
              icon: categoryLabels.all.icon,
              count: totalSkillsCount,
            },
            ...categoryEntries.map(([category, skills]) => ({
              key: category,
              label: categoryLabels[category.toLowerCase()]?.label ?? category,
              icon: categoryLabels[category.toLowerCase()]?.icon ?? '📦',
              count: skills.length,
            })),
          ].map(item => {
            const active = selectedCategory === item.key

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setSelectedCategory(item.key)}
                aria-pressed={active}
                className={`inline-flex min-h-11 min-w-0 items-center justify-between gap-1 rounded-xl border px-2 text-left font-mono text-[10px] leading-tight transition-colors duration-200 sm:min-h-[42px] sm:justify-center sm:gap-2 sm:px-3 sm:text-xs ${
                  active
                    ? 'border-sky-300/65 bg-gradient-to-br from-sky-400 to-blue-400 font-bold text-slate-950 shadow-md shadow-sky-400/15'
                    : 'border-transparent bg-white/[0.025] text-slate-400 hover:border-sky-300/20 hover:bg-sky-300/10 hover:text-slate-200'
                }`}
              >
                <span className="hidden shrink-0 text-[15px] leading-none sm:inline">
                  {item.icon}
                </span>

                <span className="min-w-0 flex-1 text-center sm:flex-none sm:whitespace-nowrap">
                  {item.label}
                </span>

                <span
                  className={`inline-flex min-w-5 shrink-0 items-center justify-center rounded-md px-1 py-1 text-[9px] leading-none sm:min-w-6 sm:px-1.5 sm:text-[10px] ${
                    active
                      ? 'bg-white/30 text-slate-950'
                      : 'bg-slate-400/10 text-slate-400'
                  }`}
                >
                  {item.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>
      {/* Responsive Grid of Category Modules */}
      <div
        className={`w-full grid gap-8 ${
          selectedCategory === 'all'
            ? 'grid-cols-1 lg:grid-cols-2'
            : 'grid-cols-1 max-w-4xl'
        }`}
      >
        {filteredEntries.map(([category, technologies], index) => (
          <TechCategory
            key={category}
            category={category}
            technologies={technologies}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
