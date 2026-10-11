// 'use client'

// import React from 'react'

// interface TechIconProps {
//   name: string
//   className?: string
// }

// export const TechIcon = ({ name, className = 'w-5 h-5' }: TechIconProps) => {
//   const normalized = name.toLowerCase().trim()

//   if (normalized.includes('java') && !normalized.includes('javascript')) {
//     // Java
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2c-1.5 1.5-1 3-1 3s2.5 1.5 2 3.5c-.5 1.8-2.5 2-2.5 2s3 1.5 2.5 3.5c-.5 1.5-2 2-2 2s3.5.5 3 2.5c-.5 1.5-2.5 2-2.5 2s4-.5 4.5-2.5c.5-1.5-1-2.5-1-2.5s3-.5 3-2.5c0-1.5-2-2.5-2-2.5s2.5-.5 2.5-2c0-1.8-2.5-2.5-2.5-2.5s2-.5 2-2c0-1.5-2.5-2.5-2.5-2.5S13.5 1 12 2zM5 19c2 1 12 1 14 0 0 1-2 2-7 2s-7-1-7-2z" />
//       </svg>
//     )
//   }

//   if (normalized.includes('spring')) {
//     // Spring Boot
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.5c-3.04 0-5.5-2.46-5.5-5.5 0-1.84.91-3.47 2.3-4.46l.7.7c-1.04.81-1.7 2.08-1.7 3.51 0 2.35 1.9 4.25 4.25 4.25 1.43 0 2.7-.66 3.51-1.7l.7.7c-.99 1.39-2.62 2.3-4.46 2.3zm5.5-5.5c0 3.04-2.46 5.5-5.5 5.5v-1.25c2.35 0 4.25-1.9 4.25-4.25 0-1.43-.66-2.7-1.7-3.51l.7-.7c1.39.99 2.3 2.62 2.3 4.46z" />
//       </svg>
//     )
//   }

//   if (normalized.includes('kafka')) {
//     // Kafka
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//       </svg>
//     )
//   }

//   if (normalized.includes('microservice')) {
//     // Microservices
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <circle cx="6" cy="6" r="3" strokeWidth={2} />
//         <circle cx="18" cy="6" r="3" strokeWidth={2} />
//         <circle cx="12" cy="18" r="3" strokeWidth={2} />
//         <path strokeLinecap="round" strokeWidth={1.5} d="M8.5 7.5l7 0M7.5 8.5l3.5 7M16.5 8.5l-3.5 7" />
//       </svg>
//     )
//   }

//   if (normalized.includes('rest') || normalized.includes('api')) {
//     // REST APIs
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
//       </svg>
//     )
//   }

//   if (normalized.includes('mongo')) {
//     // MongoDB
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2C12 2 6 9 6 15c0 3.31 2.69 6 6 6s6-2.69 6-6c0-6-6-13-6-13zm0 18c-2.21 0-4-1.79-4-4 0-3.5 3-7.5 4-9.5 1 2 4 6 4 9.5 0 2.21-1.79 4-4 4z" />
//       </svg>
//     )
//   }

//   if (normalized.includes('postgres') || normalized.includes('mysql') || normalized.includes('sql')) {
//     // SQL / Databases
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
//       </svg>
//     )
//   }

//   if (normalized.includes('redis')) {
//     // Redis
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
//       </svg>
//     )
//   }

//   if (normalized.includes('aws')) {
//     // AWS Cloud
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
//       </svg>
//     )
//   }

//   if (normalized.includes('docker')) {
//     // Docker
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <rect x="3" y="10" width="3" height="3" strokeWidth={1.5} />
//         <rect x="7" y="10" width="3" height="3" strokeWidth={1.5} />
//         <rect x="11" y="10" width="3" height="3" strokeWidth={1.5} />
//         <rect x="7" y="6" width="3" height="3" strokeWidth={1.5} />
//         <rect x="11" y="6" width="3" height="3" strokeWidth={1.5} />
//         <path strokeLinecap="round" strokeWidth={1.75} d="M2 13c1 4 4 6 10 6 7 0 10-3 10-6H2z" />
//       </svg>
//     )
//   }

//   if (normalized.includes('netlify')) {
//     // Netlify
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <polygon points="12 2 2 7 12 12 22 7 12 2" strokeWidth={1.75} />
//         <polyline points="2 17 12 22 22 17" strokeWidth={1.75} />
//         <polyline points="2 12 12 17 22 12" strokeWidth={1.75} />
//       </svg>
//     )
//   }

//   if (normalized.includes('postman')) {
//     // Postman
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//       </svg>
//     )
//   }

//   if (normalized.includes('git')) {
//     // Git
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <circle cx="6" cy="6" r="3" strokeWidth={2} />
//         <circle cx="6" cy="18" r="3" strokeWidth={2} />
//         <circle cx="18" cy="9" r="3" strokeWidth={2} />
//         <path strokeLinecap="round" strokeWidth={1.75} d="M6 9v6M9 9a9 9 0 019 0" />
//       </svg>
//     )
//   }

//   if (normalized.includes('node')) {
//     // Node.js
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" strokeWidth={1.75} />
//         <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
//       </svg>
//     )
//   }

//   if (normalized.includes('python')) {
//     // Python
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 3H7a4 4 0 00-4 4v2a4 4 0 004 4h4v-2a2 2 0 012-2h4a4 4 0 004-4V5a2 2 0 00-2-2h-6a4 4 0 00-4 2z" />
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 21h2a4 4 0 004-4v-2a4 4 0 00-4-4h-4v2a2 2 0 01-2 2H7a4 4 0 00-4 4v2a2 2 0 002 2h6a4 4 0 004-2z" />
//       </svg>
//     )
//   }

//   if (normalized.includes('react')) {
//     // React
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth={1.5} />
//         <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth={1.5} transform="rotate(60 12 12)" />
//         <ellipse cx="12" cy="12" rx="10" ry="4" strokeWidth={1.5} transform="rotate(120 12 12)" />
//         <circle cx="12" cy="12" r="1.75" fill="currentColor" />
//       </svg>
//     )
//   }

//   if (normalized.includes('type')) {
//     // TypeScript
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//         <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth={1.75} />
//         <path d="M7 8h6M10 8v8M14 13c.5.8 1.5 1.2 2.5 1.2 1 0 1.5-.4 1.5-.9 0-1.2-3.5-.8-3.5-3 0-1.2 1-2.1 2.8-2.1 1.2 0 2.2.4 2.7 1.1l-1 1c-.4-.5-1-.8-1.7-.8-.7 0-1.1.3-1.1.7 0 1.1 3.5.7 3.5 3 0 1.3-1 2.2-3 2.2-1.5 0-2.6-.5-3.2-1.4l1-1z" />
//       </svg>
//     )
//   }

//   if (normalized.includes('tailwind') || normalized.includes('css')) {
//     // Tailwind / Styling
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 21a4 4 0 01-4-4 4.5 4.5 0 01.7-2.3L6.5 11l5 5-3.7 2.8A4 4 0 017 21zm0 0l5.5-5.5m0 0l4-4m-4 4l-4-4m12 1a4.5 4.5 0 00-6.36-6.36L6.5 13.5l5 5L19 11z" />
//       </svg>
//     )
//   }

//   // Default Code / Terminal icon
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//     </svg>
//   )
// }
'use client'

import {
  siApachekafka,
  siCss,
  siDocker,
  siGit,
  siJavascript,
  siMongodb,
  siMysql,
  siNetlify,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siRedis,
  siSpring,
  siTailwindcss,
  siTypescript,
} from 'simple-icons'

interface TechIconProps {
  name: string
  className?: string
}

const brandIcons: Record<string, { path: string; hex: string }> = {
  javascript: siJavascript,
  typescript: siTypescript,
  spring: siSpring,
  kafka: siApachekafka,
  mongodb: siMongodb,
  postgresql: siPostgresql,
  mysql: siMysql,
  redis: siRedis,
  docker: siDocker,
  netlify: siNetlify,
  postman: siPostman,
  git: siGit,
  node: siNodedotjs,
  python: siPython,
  react: siReact,
  tailwind: siTailwindcss,
  css: siCss,
}

function normalizeName(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[\s._-]+/g, '')
}

export const TechIcon = ({ name, className = 'w-5 h-5' }: TechIconProps) => {
  const normalized = normalizeName(name)

  // Java logo — custom SVG, no package import required.
  if (normalized === 'java' || normalized.includes('javaprogramming')) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Java"
      >
        <path
          d="M8.3 16.2c-2.1 1.2 1.3 1.6 4.3 1.1
             1.3-.2 2.7-.7 3.4-1.2-.7 2.1-6.8 3.1-9.7
             1.7-1.3-.7.5-1.3 2-1.6Z"
          fill="#5382A1"
        />
        <path
          d="M10.5 2.1c-1.7 2 2.4 3.1 1.1 5.1
             -.6.9-1.8 1.5-1.8 2.7 0 1.1 1.1 1.8
             2.2 2.1-1.5-1.4-.7-2.2.4-3.3
             2.1-2.2-.6-3.7-.5-5.1.1-.7.5-1.1
             1.1-1.6-1.3.4-2.1 1.3-2.5 2.3Z"
          fill="#E76F00"
        />
        <path
          d="M14.2 5.7c-.2 1.6 2.1 2.1 1.1 3.9
             -.6 1-1.8 1.4-2.1 2.7-.2 1 .4 1.7
             1.2 2.1-.5-1.4.5-2.1 1.4-3.1
             1.8-2.1-.2-3.7-1.6-5.6Z"
          fill="#E76F00"
        />
        <path
          d="M5.2 14.1c-1.3 1.4.7 2.1 2.2 2.1
             2.2.1 5.5-.4 7.5-1.3.7-.3 1.3-.7
             1.7-1.1-1.5.7-4.7 1.1-7.3 1.1
             -2.7 0-4.3-.3-4.1-.8Z"
          fill="#5382A1"
        />
        <path
          d="M7.1 19.5c-1.3.6.6 1.4 3.1 1.4
             2.6 0 5.2-.5 6.2-1.4-2.5.8-6.8
             1.1-9.3 0Z"
          fill="#5382A1"
        />
      </svg>
    )
  }

  // AWS logo — custom cloud outline and smile.
  if (normalized === 'aws' || normalized.includes('amazonwebservices')) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Amazon Web Services"
      >
        <path
          d="M6.2 15.7a4.1 4.1 0 0 1-.3-8.2
             6.3 6.3 0 0 1 11.9 1.1
             3.7 3.7 0 0 1 .2 7.1H6.2Z"
          stroke="#232F3E"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.5 18.2c4.1 2.1 8.8 2.1 12.8-.3"
          stroke="#FF9900"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="m16.2 17.2 2.3.7-.5 2.2"
          stroke="#FF9900"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  // Resolve specific names before generic matches.
  let key: string | undefined

  if (normalized.includes('javascript') || normalized === 'js') {
    key = 'javascript'
  } else if (normalized.includes('typescript') || normalized === 'ts') {
    key = 'typescript'
  } else if (normalized.includes('spring') || normalized === 'springboot') {
    key = 'spring'
  } else if (
    normalized.includes('java') &&
    !normalized.includes('javascript')
  ) {
    key = 'java'
  } else if (normalized.includes('kafka')) {
    key = 'kafka'
  } else if (normalized.includes('mongo')) {
    key = 'mongodb'
  } else if (normalized.includes('postgres')) {
    key = 'postgresql'
  } else if (normalized.includes('mysql')) {
    key = 'mysql'
  } else if (normalized.includes('redis')) {
    key = 'redis'
  } else if (normalized === 'aws' || normalized.includes('amazonwebservices')) {
    key = 'aws'
  } else if (normalized.includes('docker')) {
    key = 'docker'
  } else if (normalized.includes('netlify')) {
    key = 'netlify'
  } else if (normalized.includes('postman')) {
    key = 'postman'
  } else if (normalized === 'git' || normalized.startsWith('git ')) {
    key = 'git'
  } else if (normalized.includes('node')) {
    key = 'node'
  } else if (normalized.includes('python')) {
    key = 'python'
  } else if (normalized.includes('react')) {
    key = 'react'
  } else if (normalized.includes('tailwind')) {
    key = 'tailwind'
  } else if (normalized.includes('css')) {
    key = 'css'
  }

  if (key && brandIcons[key]) {
    const icon = brandIcons[key]

    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
        aria-label={name}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon.path} />
      </svg>
    )
  }

  // Custom architecture icon for microservices.
  if (normalized.includes('microservice')) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2.5" y="2.5" width="7" height="7" rx="1.5" />
        <rect x="14.5" y="2.5" width="7" height="7" rx="1.5" />
        <rect x="8.5" y="14.5" width="7" height="7" rx="1.5" />
        <path d="M6 9.5v2h12v-2M12 11.5v3" />
      </svg>
    )
  }

  // REST API / terminal icon.
  if (normalized.includes('rest') || normalized.includes('api')) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m7 9 3 3-3 3m6 0h4" />
      </svg>
    )
  }

  // Generic database icon.
  if (
    normalized.includes('sql') ||
    normalized.includes('database') ||
    normalized.includes('db')
  ) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="8.5" ry="3" />
        <path d="M3.5 5v14c0 1.66 3.8 3 8.5 3s8.5-1.34 8.5-3V5" />
        <path d="M3.5 12c0 1.66 3.8 3 8.5 3s8.5-1.34 8.5-3" />
      </svg>
    )
  }

  // Default code icon.
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-10-2 12" />
    </svg>
  )
}
