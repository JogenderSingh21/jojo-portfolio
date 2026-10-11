'use client'

import { Project } from '@/types'

interface ProjectBannerProps {
  project: Project
}

interface BannerMetadata {
  file: string
  codeLine: string
  gradient: string
  glowColor: string
  icon: React.ReactNode
}

export const ProjectBanner = ({ project }: ProjectBannerProps) => {
  const getMetadata = (p: Project): BannerMetadata => {
    switch (p.id) {
      case 'real-time-event-driven-streaming-platform':
        return {
          file: 'KafkaEventStream.java',
          codeLine: 'kafka.stream().processMillions()',
          gradient: 'from-cyan-950/70 via-blue-950/50 to-slate-900',
          glowColor: 'rgba(79, 193, 255, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-primary-blue animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          ),
        }

      case 'scalable-cloud-database-management-service':
        return {
          file: 'MongoAtlasCluster.java',
          codeLine: 'atlas.cluster().optimizeQueries()',
          gradient: 'from-emerald-950/70 via-teal-950/50 to-slate-900',
          glowColor: 'rgba(52, 211, 153, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
          ),
        }

      case 'email-reporting-system':
        return {
          file: 'email_pipeline.py',
          codeLine: 'inbox.listen().generateReports()',
          gradient: 'from-sky-950/70 via-indigo-950/50 to-slate-900',
          glowColor: 'rgba(56, 189, 248, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-sky-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          ),
        }

      case 'online-banking':
        return {
          file: 'BankingService.java',
          codeLine: 'vault.authorizeTransaction()',
          gradient: 'from-emerald-950/70 via-cyan-950/50 to-slate-900',
          glowColor: 'rgba(16, 185, 129, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          ),
        }

      case 'paytm-app':
        return {
          file: 'WalletTransferService.java',
          codeLine: 'wallet.p2pTransfer(amount)',
          gradient: 'from-blue-950/70 via-indigo-950/50 to-slate-900',
          glowColor: 'rgba(99, 102, 241, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          ),
        }

      case 'google-sheets-clone':
        return {
          file: 'SpreadsheetGrid.java',
          codeLine: 'sheet.eval("=SUM(A1:D10)")',
          gradient: 'from-green-950/70 via-teal-950/50 to-slate-900',
          glowColor: 'rgba(34, 197, 94, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          ),
        }

      case 'collaborative-drawing-app':
        return {
          file: 'CanvasSync.js',
          codeLine: 'socket.broadcast("path:stroke")',
          gradient: 'from-fuchsia-950/70 via-purple-950/50 to-slate-900',
          glowColor: 'rgba(217, 70, 239, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-fuchsia-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M7 21a4 4 0 01-4-4 4.5 4.5 0 01.7-2.3L6.5 11l5 5-3.7 2.8A4 4 0 017 21zm0 0l5.5-5.5m0 0l4-4m-4 4l-4-4m12 1a4.5 4.5 0 00-6.36-6.36L6.5 13.5l5 5L19 11z"
              />
            </svg>
          ),
        }

      case 'chat-application-mern':
        return {
          file: 'ChatSocketServer.js',
          codeLine: 'io.emit("message:received")',
          gradient: 'from-cyan-950/70 via-sky-950/50 to-slate-900',
          glowColor: 'rgba(6, 182, 212, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          ),
        }

      case 'e-commerce':
        return {
          file: 'StoreCatalog.tsx',
          codeLine: 'store.checkout({ items: cart })',
          gradient: 'from-amber-950/70 via-orange-950/50 to-slate-900',
          glowColor: 'rgba(245, 158, 11, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          ),
        }

      case 'react-ecommerce-admin':
        return {
          file: 'AdminControlHub.tsx',
          codeLine: 'admin.dashboard.getMetrics()',
          gradient: 'from-violet-950/70 via-purple-950/50 to-slate-900',
          glowColor: 'rgba(139, 92, 246, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-violet-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          ),
        }

      case 'gps-tracker':
        return {
          file: 'LocationService.kt',
          codeLine: 'gps.trackRealtimeCoordinates()',
          gradient: 'from-teal-950/70 via-emerald-950/50 to-slate-900',
          glowColor: 'rgba(20, 184, 166, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-teal-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          ),
        }

      case 'chatbot':
        return {
          file: 'ChatbotAgent.kt',
          codeLine: 'bot.generateResponse(prompt)',
          gradient: 'from-purple-950/70 via-indigo-950/50 to-slate-900',
          glowColor: 'rgba(168, 85, 247, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          ),
        }

      case 'dotigy':
        return {
          file: 'MusicPlayerCore.kt',
          codeLine: 'audio.playStream(trackId)',
          gradient: 'from-rose-950/70 via-red-950/50 to-slate-900',
          glowColor: 'rgba(244, 63, 94, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-rose-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
              />
            </svg>
          ),
        }

      case 'shiksha-app':
        return {
          file: 'CurriculumManager.kt',
          codeLine: 'edu.loadInteractiveCourse()',
          gradient: 'from-sky-950/70 via-blue-950/50 to-slate-900',
          glowColor: 'rgba(14, 165, 233, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-sky-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
          ),
        }

      case 'betblitz':
        return {
          file: 'BetRulesEngine.js',
          codeLine: 'odds.calculatePayout(wager)',
          gradient: 'from-amber-950/70 via-yellow-950/50 to-slate-900',
          glowColor: 'rgba(234, 179, 8, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-amber-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        }

      case 'blogging-website':
        return {
          file: 'ArticlePublisher.tsx',
          codeLine: 'blog.renderMarkdownPost()',
          gradient: 'from-emerald-950/70 via-teal-950/50 to-slate-900',
          glowColor: 'rgba(16, 185, 129, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          ),
        }

      case 'budget-tracker':
        return {
          file: 'ExpenseLedger.js',
          codeLine: 'budget.reconcileExpenses()',
          gradient: 'from-green-950/70 via-emerald-950/50 to-slate-900',
          glowColor: 'rgba(34, 197, 94, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        }

      case 'cheatcode':
        return {
          file: 'DevToolsCli.js',
          codeLine: 'cli.executeUtilitySnippet()',
          gradient: 'from-slate-900 via-cyan-950/50 to-slate-900',
          glowColor: 'rgba(79, 193, 255, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-primary-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          ),
        }

      case 'bubble-shooter-in-js':
        return {
          file: 'BubblePhysics.js',
          codeLine: 'canvas.renderBubbleArcade()',
          gradient: 'from-pink-950/70 via-rose-950/50 to-slate-900',
          glowColor: 'rgba(236, 72, 153, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-pink-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        }

      case 'todo-app-mern':
        return {
          file: 'TaskManager.tsx',
          codeLine: 'db.tasks.update({ done: true })',
          gradient: 'from-blue-950/70 via-indigo-950/50 to-slate-900',
          glowColor: 'rgba(59, 130, 246, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          ),
        }

      case 'sorting-visualizer-main':
        return {
          file: 'SortVisualizer.js',
          codeLine: 'algo.step({ sort: "quicksort" })',
          gradient: 'from-orange-950/70 via-amber-950/50 to-slate-900',
          glowColor: 'rgba(234, 88, 12, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
          ),
        }

      case 'react-demo-landing-page':
        return {
          file: 'ProductLanding.tsx',
          codeLine: 'hero.mountInteractiveUI()',
          gradient: 'from-indigo-950/70 via-violet-950/50 to-slate-900',
          glowColor: 'rgba(99, 102, 241, 0.35)',
          icon: (
            <svg
              className="w-10 h-10 text-indigo-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          ),
        }

      case 'rednegoj12':
      default:
        return {
          file: `${p.id}.ts`,
          codeLine: 'dev.profile.renderMetadata()',
          gradient: 'from-slate-900 via-blue-950/40 to-slate-900',
          glowColor: 'rgba(79, 193, 255, 0.3)',
          icon: (
            <svg
              className="w-10 h-10 text-primary-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          ),
        }
    }
  }

  const meta = getMetadata(project)

  return (
    <div
      className={`relative w-full h-32 bg-gradient-to-br ${meta.gradient} border-b border-border-color/60 overflow-hidden flex flex-col justify-between p-3 select-none`}
    >
      {/* Background ambient radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300 group-hover:opacity-75"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${meta.glowColor} 0%, transparent 70%)`,
        }}
      />

      {/* Top VSCode Editor Window Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="w-2.5 h-2.5 shrink-0 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 shrink-0 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-2.5 h-2.5 shrink-0 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-2 min-w-0 truncate font-mono text-xs text-gray-400 bg-background/60 px-2 py-0.5 rounded border border-border-color/40 flex items-center gap-1">
            <span className="text-primary-blue text-[10px]">#</span>
            {meta.file}
          </span>
        </div>
        <span className="ml-2 shrink-0 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-primary-blue/15 text-primary-blue border border-primary-blue/30">
          {project.category}
        </span>
      </div>

      {/* Center Thematic Graphic & Glow Icon */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto transition-transform duration-300 group-hover:scale-110">
        <div
          className="p-3 rounded-2xl bg-background/50 backdrop-blur-sm border border-border-color/50 shadow-lg shadow-black/40 flex items-center justify-center"
          style={{ boxShadow: `0 0 20px ${meta.glowColor}` }}
        >
          {meta.icon}
        </div>
      </div>

      {/* Bottom Monospace Code Preview Line */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-gray-400/90 bg-background/40 px-2.5 py-1 rounded border border-border-color/30 backdrop-blur-sm">
        <span className="text-accent-green truncate">
          <span className="text-primary-blue">&gt; </span>
          {meta.codeLine}
        </span>
        <span className="text-gray-500 text-[10px] ml-2 flex-shrink-0">
          {project.technologies[0] || 'Code'}
        </span>
      </div>
    </div>
  )
}
