import { PersonalInfo } from '@/types'

interface ContactInfoProps {
  data: PersonalInfo
}

export const ContactInfo = ({ data }: ContactInfoProps) => {
  return (
    <div className="code-block glow h-full transition-all duration-300 p-4 sm:p-6 lg:p-8 lg:hover:scale-105">
      <h3 className="text-xl md:text-2xl font-bold mb-4 font-mono">
        <span className="text-primary-blue">public record</span>{' '}
        <span className="text-white">ContactChannels</span>
        <span className="text-primary-blue">(</span>
      </h3>
      <p className="mb-6 text-base font-mono text-gray-400 sm:mb-8 sm:text-lg">
        {'// Available communication channels'}
      </p>

      <div className="flex flex-col gap-5 font-mono sm:gap-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-primary-blue">String</span>{' '}
          <span style={{ paddingLeft: 5 }} className="text-white">
            email
          </span>
          <span className="text-primary-blue">=</span>
          <a
            href={`mailto:${data.personal.email}`}
            className="break-all text-accent-green hover:text-white transition-colors"
          >
            &quot;{data.personal.email}&quot;
          </a>
          <span className="text-gray-400">,</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-primary-blue">String</span>{' '}
          <span style={{ paddingLeft: 5 }} className="text-white">
            phone
          </span>
          <span className="text-primary-blue">=</span>
          <a
            href={`tel:${data.personal.phone}`}
            className="text-accent-green hover:text-white transition-colors"
          >
            &quot;{data.personal.phone}&quot;
          </a>
          <span className="text-gray-400">,</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-primary-blue">String</span>{' '}
          <span style={{ paddingLeft: 5 }} className="text-white">
            location
          </span>
          <span className="text-primary-blue">=</span>
          <span className="text-accent-green">
            &quot;{data.personal.location}&quot;
          </span>
        </div>
      </div>

      <div className="text-xl md:text-2xl font-bold font-mono mt-8">
        <span className="text-primary-blue">) &#123;&#125;</span>
      </div>
    </div>
  )
}
