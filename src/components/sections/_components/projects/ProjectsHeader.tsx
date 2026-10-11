interface ProjectsHeaderProps {
  onToggleCollapse: () => void
}

export const ProjectsHeader = ({ onToggleCollapse }: ProjectsHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-1 w-full font-mono">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold cursor-pointer hover:text-primary-blue transition-colors"
        onClick={onToggleCollapse}
      >
        <span className="text-primary-blue">public</span>{' '}
        <span className="text-accent-green">List&lt;Project&gt;</span>{' '}
        <span className="text-white">getProjects</span>
        <span className="text-foreground">()</span>{' '}
        <span className="text-primary-blue">&#123;</span>
      </h2>
      <p className="text-gray-400 text-base md:text-lg max-w-3xl leading-relaxed mt-2">
        {'/* Production systems, streaming pipelines, and microservices */'}
      </p>
    </div>
  )
}
