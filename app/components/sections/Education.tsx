import SectionTitle from '../ui/SectionTitle'

const Education = () => (
  <section id='education' className='bg-[var(--background-dark-100)] px-6 py-14 md:py-20 lg:px-[200px]'>
    <div className='mx-auto max-w-5xl'>
      <SectionTitle className='bg-[var(--background-charcoal-100)]'>Education</SectionTitle>
      <div className='mt-5 flex flex-col justify-between gap-4 rounded-xl border border-[var(--border-white-5)] bg-[var(--background-charcoal-100)] p-6 md:flex-row md:items-start'>
        <div>
          <h2 className='text-2xl font-light'>Bachelor of Science in Computer Science</h2>
          <p className='mt-3 max-w-2xl leading-normal text-[var(--text-white-40)]'>Developing a foundation in software development, data structures, databases, and systems while applying those concepts in production-oriented projects.</p>
        </div>
        <p className='shrink-0 text-[var(--text-white-65)]'>Expected Graduation: May 2027</p>
      </div>
    </div>
  </section>
)

export default Education
