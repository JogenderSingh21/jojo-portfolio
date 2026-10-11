import { Service } from '@/types'
import { ServiceCard } from './ServiceCard'

interface ServicesGridProps {
  services: Service[]
}

export const ServicesGrid = ({ services }: ServicesGridProps) => {
  return (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  )
}
