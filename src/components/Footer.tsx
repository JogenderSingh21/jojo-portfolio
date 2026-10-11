export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-background border-t border-border-color font-mono"
      style={{ padding: '16px 16px' }}
    >
      <div className="flex flex-col items-center gap-2">
        {/* Main Footer Content */}
        <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 w-full">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div>
              <h3 className="text-md font-bold text-primary-blue font-mono mb-4">
                Jogender Singh
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed max-w-md">
                Backend Software Engineer specializing in scalable distributed
                systems, microservices, and cloud-native architectures. Designing
                high-throughput, resilient solutions with Java, Spring Boot,
                Kafka, and MongoDB.
              </p>
            </div>
            <div className="text-xs text-gray-400 font-mono mt-3">
              <span className="text-primary-blue">final</span>{' '}
              <span className="text-accent-green">String</span>{' '}
              <span className="text-white">location</span>{' '}
              <span className="text-primary-blue">=</span>{' '}
              <span className="text-accent-green">
                &quot;India&quot;
              </span>
              <span className="text-primary-blue">;</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold text-white font-mono mb-2">
              <span className="text-accent-green">List&lt;String&gt;</span>{' '}
              <span className="text-white">quickLinks</span>{' '}
              <span className="text-primary-blue">= List.of(</span>
            </h4>
            <nav className="pl-3">
              <a
                href="#hero"
                className="block text-gray-300 hover:text-primary-blue transition-colors font-mono"
              >
                <span className="text-xs text-accent-green">
                  &quot;Home&quot;,
                </span>
              </a>
              <a
                href="#services"
                className="block text-gray-300 hover:text-primary-blue transition-colors font-mono"
              >
                <span className="text-xs text-accent-green">
                  &quot;Services&quot;,
                </span>
              </a>
              <a
                href="#projects"
                className="block text-gray-300 hover:text-primary-blue transition-colors font-mono"
              >
                <span className="text-xs text-accent-green">
                  &quot;Projects&quot;,
                </span>
              </a>
              <a
                href="#experience"
                className="block text-gray-300 hover:text-primary-blue transition-colors font-mono"
              >
                <span className="text-xs text-accent-green">
                  &quot;Experience&quot;,
                </span>
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-primary-blue transition-colors font-mono"
              >
                <span className="text-xs text-accent-green">
                  &quot;Contact&quot;
                </span>
              </a>
            </nav>
            <div className="text-md text-primary-blue font-mono">);</div>
          </div>

          {/* Connect */}
          <div className="">
            <h4 className="text-md font-semibold text-white font-mono mb-2">
              <span className="text-accent-green">Map&lt;String, String&gt;</span>{' '}
              <span className="text-white">socialMedia</span>{' '}
              <span className="text-primary-blue">= Map.of(</span>
            </h4>
            <div className="pl-3">
              <a
                href="mailto:jogender.singh@example.com"
                className="block text-xs text-gray-300 hover:text-primary-blue transition-colors font-mono group"
              >
                <span className="text-accent-green group-hover:text-white">
                  &quot;email&quot;, &quot;📧&quot;,
                </span>
              </a>
              <a
                href="https://github.com/JogenderSingh21"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-gray-300 hover:text-primary-blue transition-colors font-mono group"
              >
                <span className="text-accent-green group-hover:text-white">
                  &quot;github&quot;, &quot;🐱&quot;,
                </span>
              </a>
              <a
                href="https://linkedin.com/in/jogendersingh"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-gray-300 hover:text-primary-blue transition-colors font-mono group"
              >
                <span className="text-accent-green group-hover:text-white">
                  &quot;linkedin&quot;, &quot;💼&quot;
                </span>
              </a>
            </div>
            <div className="text-primary-blue font-mono">);</div>
          </div>
        </div>

        {/* Bottom Footer - Centered */}
        <div className="text-center">
          <div className="text-xs text-gray-500 font-mono">
            <span className="text-primary-blue">// </span>
            Built with Next.js, TypeScript, Tailwind CSS & ❤️ by Jogender Singh
            🇮🇳
          </div>
          <div className="text-xs text-gray-500 font-mono">
            <span className="text-primary-blue">©</span>{' '}
            <span className="text-white">{currentYear}</span>{' '}
            <span className="text-accent-green">Jogender Singh.</span>{' '}
            <span className="text-gray-400">All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
