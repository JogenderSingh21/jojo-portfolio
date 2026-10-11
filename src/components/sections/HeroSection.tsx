'use client'

import { PersonalInfo } from '@/types'
import { CTAButtons } from './_components/hero/CTAButtons'
import { IntroText } from './_components/hero/IntroText'
import { ProfileImage } from './_components/hero/ProfileImage'
import { ScrollIndicator } from './_components/hero/ScrollIndicator'
import { StatsGrid } from './_components/hero/StatsGrid'

interface HeroSectionProps {
  data: PersonalInfo
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
      <div className="flex flex-col justify-center items-center gap-6 sm:gap-10 max-w-7xl w-full fade-in">
        {/* Profile Image + Intro Text */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          <ProfileImage
            name={data.personal.name}
            imageSrc={data.personal.avatar}
          />
          <IntroText name={data.personal.name} title={data.personal.title} />
        </div>

        {/* Bio */}
        <p className="text-sm md:text-md text-gray-400 max-w-6xl whitespace-pre-line text-center">
          {data.personal.bio}
        </p>

        {/* Stats */}
        <StatsGrid stats={data.stats} />

        {/* CTA Buttons */}
        <CTAButtons />
      </div>
      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  )
}
