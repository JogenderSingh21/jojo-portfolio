import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jogender Singh | Backend Software Engineer',
  description:
    'Professional portfolio of Jogender Singh - Backend Software Engineer specializing in Java, Spring Boot, Apache Kafka, MongoDB, and scalable distributed systems.',
  keywords: [
    'Backend Software Engineer',
    'Java Developer',
    'Spring Boot',
    'Apache Kafka',
    'MongoDB',
    'Microservices',
    'Distributed Systems',
    'RESTful APIs',
    'AWS',
    'Jogender Singh',
  ],
  authors: [{ name: 'Jogender Singh' }],
  openGraph: {
    title: 'Jogender Singh | Backend Software Engineer',
    description:
      'Professional portfolio showcasing backend engineering, distributed systems, Kafka streaming, and cloud database optimization.',
    url: 'https://jogendersingh.dev',
    siteName: 'Jogender Singh Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jogender Singh Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jogender Singh | Backend Software Engineer',
    description:
      'Professional portfolio showcasing backend engineering, distributed systems, Kafka streaming, and cloud database optimization.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
