'use client'

import { PersonalInfo } from '@/types'
import { useState } from 'react'
import { ContactInfo } from './_components/contact/ContactInfo'
import { SocialLinks } from './_components/contact/SocialLinks'

interface ContactSectionProps {
  data: PersonalInfo
}

export const ContactSection = ({ data }: ContactSectionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <section
      id="contact"
      className="relative flex w-full items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="flex w-full max-w-6xl flex-col items-center gap-8 sm:gap-10 lg:gap-12">
        <div className="flex w-full flex-col items-center gap-3 text-center">
          <h2
            className="w-full max-w-5xl break-words text-balance text-2xl font-bold leading-tight cursor-pointer transition-colors hover:text-white sm:text-3xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="text-primary-blue">public</span>{' '}
            <span className="text-accent-green">
              CompletableFuture&lt;Connection&gt;
            </span>{' '}
            <span className="text-white">getInTouch</span>
            <span className="text-foreground">(</span>
            <span className="text-secondary-blue">ClientRequest</span>{' '}
            <span className="text-accent-green">client</span>
            <span className="text-foreground">);</span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
            Ready to start your next project? Let&apos;s establish a connection
            and build something amazing together.
          </p>
        </div>

        {/* Collapsed state */}
        {isCollapsed && (
          <div className="text-gray-500 text-6xl md:text-7xl lg:text-8xl font-mono mb-24">
            ...
          </div>
        )}

        {/* Contact Content - Only show when not collapsed */}
        {!isCollapsed && (
          <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
            <ContactInfo data={data} />
            <SocialLinks data={data} />
          </div>
        )}

        {/* Return statement */}
        <div className="flex items-center justify-center">
          <p className="flex flex-wrap justify-center text-center font-mono text-base sm:text-lg md:text-xl lg:text-2xl">
            <span className="text-primary-blue">return</span>
            <span> </span>
            <span className="text-white">client.establishConnection</span>
            <span className="text-primary-blue">();</span>
          </p>
        </div>
      </div>
    </section>
  )
}
