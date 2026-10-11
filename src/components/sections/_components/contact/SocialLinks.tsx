import { PersonalInfo } from '@/types'

interface SocialLinksProps {
  data: PersonalInfo
}

export const SocialLinks = ({ data }: SocialLinksProps) => {
  return (
    <div className="code-block glow hover:scale-105 transition-all duration-300 p-8">
      <h3 className="text-xl md:text-2xl font-bold mb-4 font-mono">
        <span className="text-primary-blue">public Map&lt;String, String&gt;</span>{' '}
        <span className="text-white">socialProfiles</span>{' '}
        <span className="text-primary-blue">= Map.ofEntries(</span>
      </h3>
      <p className="text-gray-400 mb-8 text-lg font-mono">
        {'// Connect with me on these platforms'}
      </p>

      <div className="flex flex-col space-y-6 font-mono">
        <a
          href={data.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:bg-primary-blue/10 p-4 rounded-lg transition-colors group"
        >
          <span className="text-primary-blue">Map.entry(</span>
          <span className="text-white">&quot;github&quot;</span>
          <span className="text-gray-400">,</span>
          <span className="text-accent-green group-hover:text-white transition-colors truncate">
            &quot;{data.personal.github}&quot;
          </span>
          <span className="text-primary-blue">)</span>
          <span className="text-gray-400">,</span>
        </a>

        <a
          href={data.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:bg-primary-blue/10 p-4 rounded-lg transition-colors group"
        >
          <span className="text-primary-blue">Map.entry(</span>
          <span className="text-white">&quot;linkedin&quot;</span>
          <span className="text-gray-400">,</span>
          <span className="text-accent-green group-hover:text-white transition-colors truncate">
            &quot;{data.personal.linkedin}&quot;
          </span>
          <span className="text-primary-blue">)</span>
          <span className="text-gray-400">,</span>
        </a>

        {data.personal.website && (
          <a
            href={data.personal.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:bg-primary-blue/10 p-4 rounded-lg transition-colors group"
          >
            <span className="text-primary-blue">Map.entry(</span>
            <span className="text-white">&quot;website&quot;</span>
            <span className="text-gray-400">,</span>
            <span className="text-accent-green group-hover:text-white transition-colors truncate">
              &quot;{data.personal.website}&quot;
            </span>
            <span className="text-primary-blue">)</span>
          </a>
        )}
      </div>

      <div className="text-xl md:text-2xl font-bold font-mono mt-8">
        <span className="text-primary-blue">);</span>
      </div>
    </div>
  )
}
