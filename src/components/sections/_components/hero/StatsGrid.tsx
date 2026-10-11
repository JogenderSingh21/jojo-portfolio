import { Stat } from '@/types'

interface StatsGridProps {
  stats: Stat[]
}

export const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-4 sm:gap-x-10">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="flex flex-col items-center slide-in-left min-w-24"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-blue font-mono">
            {stat.number}
          </div>
          <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
