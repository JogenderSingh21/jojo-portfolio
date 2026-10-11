interface CategoryFilterProps {
  categories: string[]
  counts: Record<string, number>
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export const CategoryFilter = ({
  categories,
  counts,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  const options = ['all', ...categories]

  return (
    <div className="flex flex-wrap justify-center gap-3 w-full max-w-4xl">
      {options.map(category => {
        const isActive = activeCategory === category
        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => onCategoryChange(category)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-sm transition-all duration-300 ${
              isActive
                ? 'bg-primary-blue text-background'
                : 'border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-background'
            }`}
          >
            {category === 'all' ? 'All' : category}
            <span className="text-xs opacity-70">{counts[category] ?? 0}</span>
          </button>
        )
      })}
    </div>
  )
}
