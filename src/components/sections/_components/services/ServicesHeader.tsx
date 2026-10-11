interface ServicesHeaderProps {
  onToggleCollapse: () => void
}

export const ServicesHeader = ({ onToggleCollapse }: ServicesHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-1 w-full font-mono">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold cursor-pointer hover:text-primary-blue transition-colors"
        onClick={onToggleCollapse}
      >
        <span className="text-primary-blue">public</span>{' '}
        <span className="text-accent-green">List&lt;Service&gt;</span>{' '}
        <span className="text-white">getServices</span>
        <span className="text-foreground">()</span>{' '}
        <span className="text-primary-blue">&#123;</span>
      </h2>
      <p className="text-gray-400 text-base md:text-lg max-w-7xl leading-relaxed mt-2">
        {'/* Backend microservices & distributed architecture services */'}
      </p>
    </div>
  )
}
