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
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '8px 12px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            width: 'fit-content',
            maxWidth: '100%',
            padding: '10px',
            boxSizing: 'border-box',
            border: '1px solid rgba(148, 163, 184, 0.16)',
            borderRadius: '22px',
            background: 'rgba(20, 24, 32, 0.82)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          }}
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
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '9px',
                  padding: '10px 14px',
                  minHeight: '42px',
                  borderRadius: '14px',
                  border: active
                    ? '1px solid rgba(125, 211, 252, 0.65)'
                    : '1px solid transparent',
                  background: active
                    ? 'linear-gradient(135deg, #38bdf8, #60a5fa)'
                    : 'rgba(255, 255, 255, 0.025)',
                  color: active ? '#101820' : '#a7b0c0',
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  fontWeight: active ? 700 : 500,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  flexShrink: 0,
                  boxSizing: 'border-box',
                  boxShadow: active
                    ? '0 3px 12px rgba(56, 189, 248, 0.16)'
                    : 'none',
                  transition:
                    'background 180ms ease, color 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
                }}
                onMouseEnter={event => {
                  if (!active) {
                    event.currentTarget.style.background =
                      'rgba(125, 211, 252, 0.09)'
                    event.currentTarget.style.borderColor =
                      'rgba(125, 211, 252, 0.18)'
                    event.currentTarget.style.color = '#e2e8f0'
                  }
                }}
                onMouseLeave={event => {
                  if (!active) {
                    event.currentTarget.style.background =
                      'rgba(255, 255, 255, 0.025)'
                    event.currentTarget.style.borderColor = 'transparent'
                    event.currentTarget.style.color = '#a7b0c0'
                  }
                }}
              >
                <span style={{ fontSize: '15px', lineHeight: 1 }}>
                  {item.icon}
                </span>

                <span>{item.label}</span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '24px',
                    padding: '4px 6px',
                    borderRadius: '7px',
                    background: active
                      ? 'rgba(255, 255, 255, 0.28)'
                      : 'rgba(148, 163, 184, 0.12)',
                    color: active ? '#101820' : '#94a3b8',
                    fontSize: '10px',
                    lineHeight: 1,
                    boxSizing: 'border-box',
                  }}
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
