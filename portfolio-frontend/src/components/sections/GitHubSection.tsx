import { motion } from 'framer-motion'
import { RiGithubLine, RiStarLine, RiGitForkLine, RiArrowRightUpLine } from 'react-icons/ri'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { githubStats } from '@/data/portfolioData'

export const GitHubSection = () => {
  return (
    <section id="github" className="py-24 bg-[#0C0C0E]">
      <div className="section-container">
        <SectionHeading
          label="05 / Open Source"
          title="GitHub & Contributions"
          subtitle="Code I've written, experiments I've shipped, and tools I've built."
        />

        {/* GitHub profile card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="card p-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/[0.08] flex items-center justify-center">
              <RiGithubLine size={22} className="text-zinc-400" />
            </div>
            <div>
              <p className="font-semibold text-zinc-100">@{githubStats.username}</p>
              <p className="text-sm text-zinc-500">github.com/{githubStats.username}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { label: 'Public Repos', value: githubStats.repos.length + '+' },
              { label: 'Top Language', value: githubStats.topLanguages[0].name },
              { label: 'Profile', value: 'View →' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-xs text-zinc-600">{stat.label}</span>
                <span className="text-sm font-medium text-zinc-300">{stat.value}</span>
              </div>
            ))}
          </div>

          <a
            href={githubStats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs"
          >
            View Profile
            <RiArrowRightUpLine size={14} />
          </a>
        </motion.div>

        {/* Language bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
          className="card p-5 mb-6"
        >
          <p className="text-xs text-zinc-600 mb-3 font-mono uppercase tracking-wider">
            Top Languages
          </p>
          <div className="flex rounded-full overflow-hidden h-2 mb-3">
            {githubStats.topLanguages.map((lang) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                title={`${lang.name}: ${lang.percent}%`}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {githubStats.topLanguages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-xs text-zinc-400">
                  {lang.name}
                  <span className="text-zinc-600 ml-1">{lang.percent}%</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured repos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {githubStats.repos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.07 }}
              className="card-hover p-5 flex flex-col gap-3 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <RiGithubLine size={16} className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-primary transition-colors">
                    {repo.name}
                  </span>
                </div>
                <RiArrowRightUpLine
                  size={14}
                  className="text-zinc-700 group-hover:text-zinc-400 transition-colors"
                />
              </div>

              <p className="text-xs text-zinc-500 leading-relaxed flex-1">{repo.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-xs text-zinc-500">{repo.language}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-600">
                  <span className="flex items-center gap-1">
                    <RiStarLine size={12} />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <RiGitForkLine size={12} />
                    {repo.forks}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Note */}
        <p className="text-xs text-zinc-700 text-center mt-6">
          Most work is in private enterprise repositories. Public repos are personal experiments and tools.
        </p>
      </div>
    </section>
  )
}
