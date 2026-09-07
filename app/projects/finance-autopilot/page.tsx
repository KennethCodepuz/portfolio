import Link from 'next/link'

const decisions = [
  ['Human approval for high-risk actions', 'The agent can recommend an action, but a person remains the final gate before execution.'],
  ['Idempotent background jobs', 'Retry-safe job handling prevents a transient failure from creating duplicate financial actions.'],
  ['Retry queue with Redis + ARQ', 'Long-running work is decoupled from the request path so the API stays responsive and failures can be retried.'],
  ['Hash-chained audit log', 'Each audit entry is linked to the prior entry, producing an inspectable history of proposed and approved actions.'],
]

export default function FinanceAutopilotCaseStudy() {
  return (
    <main className='min-h-screen bg-[var(--background-dark-100)] text-[var(--text-white-100)]'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-6 py-6'>
        <Link href='/' className='text-sm text-[var(--text-white-65)] hover:text-white'>← Portfolio</Link>
        <a href='https://github.com/KennethCodepuz/finance-autopilot' target='_blank' rel='noopener noreferrer' className='rounded-full border border-[var(--border-white-75)] px-4 py-2 text-sm font-bold'>View GitHub</a>
      </nav>
      <section className='mx-auto max-w-6xl px-6 py-14 md:py-24'>
        <p className='text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ping-green)]'>Case study · AI + backend</p>
        <h1 className='mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl'>Finance-Autopilot</h1>
        <p className='mt-6 max-w-3xl text-xl leading-relaxed text-[var(--text-white-40)]'>An AI-assisted financial workflow designed to make useful recommendations without treating financial actions as a black box.</p>
        <div className='mt-8 flex flex-wrap gap-3'>
          <a href='https://finance-autopilot-silk.vercel.app/' target='_blank' rel='noopener noreferrer' className='rounded-full bg-white px-5 py-3 text-sm font-bold text-black'>Live Demo</a>
          <a href='https://github.com/KennethCodepuz/finance-autopilot' target='_blank' rel='noopener noreferrer' className='rounded-full border border-[var(--border-white-75)] px-5 py-3 text-sm font-bold'>GitHub</a>
        </div>
      </section>

      <section className='border-y border-white/5 bg-[var(--background-charcoal-100)]'>
        <div className='mx-auto max-w-6xl px-6 py-14'>
          <h2 className='text-2xl font-medium'>System architecture</h2>
          <p className='mt-2 text-[var(--text-white-40)]'>A request path for the dashboard, an asynchronous path for jobs, and an explicit approval checkpoint.</p>
          <div className='mt-8 grid grid-cols-1 gap-3 md:grid-cols-9 md:items-center'>
            {['Next.js dashboard', 'FastAPI service', 'Redis / ARQ workers', 'Human approval', 'Plaid + audit log'].map((node, index) => (
              <div key={node} className='contents'>
                <div className='rounded-xl border border-white/10 bg-[var(--background-dark-100)] p-4 text-center text-sm font-medium'>{node}</div>
                {index < 4 && <div className='hidden text-center text-[var(--ping-green)] md:block'>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2'>
        <div>
          <h2 className='text-2xl font-medium'>How it works</h2>
          <div className='mt-5 space-y-4 leading-relaxed text-[var(--text-white-40)]'>
            <p>Users view connected financial information in a Next.js dashboard. The application talks to a FastAPI backend that coordinates data access, proposed actions, and audit events.</p>
            <p>Work that should not block a request is queued through Redis and processed by ARQ workers. The agent&apos;s output is treated as a proposal; a human approval step is required before a high-risk action can proceed.</p>
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-medium'>Technology stack</h2>
          <div className='mt-5 flex flex-wrap gap-2'>
            {['Next.js', 'TypeScript', 'Python', 'FastAPI', 'Plaid', 'Redis', 'ARQ', 'PostgreSQL', 'LLM APIs'].map((technology) => <span key={technology} className='rounded-full border border-white/10 bg-[var(--background-charcoal-100)] px-3 py-2 text-sm text-[var(--text-white-65)]'>{technology}</span>)}
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-6xl px-6 pb-20'>
        <h2 className='text-2xl font-medium'>Engineering decisions</h2>
        <div className='mt-6 grid grid-cols-1 gap-3 md:grid-cols-2'>
          {decisions.map(([title, detail]) => <article key={title} className='rounded-xl border border-white/10 bg-[var(--background-charcoal-100)] p-5'><h3 className='font-medium'>{title}</h3><p className='mt-2 leading-relaxed text-[var(--text-white-40)]'>{detail}</p></article>)}
        </div>
      </section>
    </main>
  )
}
