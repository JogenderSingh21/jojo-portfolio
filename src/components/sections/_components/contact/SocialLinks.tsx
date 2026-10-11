import { PersonalInfo } from '@/types'

interface SocialLinksProps {
  data: PersonalInfo
}

export const SocialLinks = ({ data }: SocialLinksProps) => {
  return (
    <div className="code-block glow h-full transition-all duration-300 p-4 sm:p-6 lg:p-8 lg:hover:scale-105">
      <h3 className="text-xl md:text-2xl font-bold mb-4 font-mono">
        <span className="text-primary-blue">
          public Map&lt;String, String&gt;
        </span>{' '}
        <span className="text-white">socialProfiles</span>{' '}
        <span className="text-primary-blue">= Map.ofEntries(</span>
      </h3>
      <p className="mb-5 text-base font-mono text-gray-400 sm:mb-8 sm:text-lg">
        {'// Connect with me on these platforms'}
      </p>

      <div className="flex flex-col gap-3 font-mono sm:gap-6">
        <a
          href={data.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-wrap items-center gap-x-2 rounded-lg p-3 transition-colors group hover:bg-primary-blue/10 sm:p-4"
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
          className="flex flex-wrap items-center gap-x-2 rounded-lg p-3 transition-colors group hover:bg-primary-blue/10 sm:p-4"
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
            className="flex flex-wrap items-center gap-x-2 rounded-lg p-3 transition-colors group hover:bg-primary-blue/10 sm:p-4"
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
