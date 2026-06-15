import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from 'react-icons/ri'
import { personalInfo } from '@/data/portfolioData'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] bg-[#09090B]">
      <div className="section-container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-primary font-display font-bold text-xs">RP</span>
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-300">{personalInfo.name}</p>
              <p className="text-xs text-zinc-600">Backend Developer · Node.js Engineer</p>
            </div>
          </div>

          {/* Center: Social */}
          <div className="flex items-center gap-1">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-500 hover:text-zinc-200 transition-colors rounded-md hover:bg-white/[0.04]"
              aria-label="GitHub"
            >
              <RiGithubLine size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-500 hover:text-zinc-200 transition-colors rounded-md hover:bg-white/[0.04]"
              aria-label="LinkedIn"
            >
              <RiLinkedinBoxLine size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-zinc-500 hover:text-zinc-200 transition-colors rounded-md hover:bg-white/[0.04]"
              aria-label="Email"
            >
              <RiMailLine size={18} />
            </a>
          </div>

          {/* Right: Copyright */}
          <p className="text-xs text-zinc-600">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
