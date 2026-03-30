import { Link, useLocation } from 'react-router-dom';
import { BookText, DripHeading, Reveal } from '../components/SectionAnimations';

const RESUME_HTML_URL = '/dhruv_kumar_yadav_resume.html';
const RESUME_PDF_URL = '/dhruv_kumar_yadav_resume.pdf';

const highlights = [
  {
    label: 'Experience',
    value: '6mo+',
    detail: 'MERN training, frontend internship, API integration, and real-world project delivery.',
  },
  {
    label: 'Projects',
    value: '3+',
    detail: 'Admission portal, hospital management system, and Ayurvedic e-commerce platform.',
  },
  {
    label: 'Focus',
    value: 'MERN',
    detail: 'React, Node.js, MongoDB, Express, JWT auth, responsive UI, and scalable app flows.',
  },
];

function DownloadIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

function EyeIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ResumeHomeSection() {
  return (
    <section id="resume" className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 text-white sm:px-8">
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-[#eba134]">Resume</p>
          <DripHeading
            text="View the Full"
            accent="Resume"
            className="text-4xl font-black md:text-5xl"
          />
          <BookText
            delay={0.1}
            text="Preview the exact designed resume in the browser, or download the PDF directly with one click."
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base"
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal delay={0.08} className="rounded-[32px] border border-[#eba134]/18 bg-[#101010] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#eba134]/85">
                  Dhruv Kumar Yadav
                </p>
                <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">Full Stack Developer Resume</h3>
              </div>
              <span className="rounded-full border border-[#eba134]/25 bg-[#eba134]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#eba134]">
                PDF Ready
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={0.08 + index * 0.05}
                  className="rounded-3xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.26em] text-gray-500">{item.label}</div>
                  <div className="mt-3 text-3xl font-black text-[#eba134]">{item.value}</div>
                  <BookText delay={0.1} text={item.detail} className="mt-3 text-sm leading-6 text-gray-400" />
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.24} className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 rounded-full bg-[#eba134] px-7 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-[#eba134]/85 hover:shadow-[0_0_25px_#eba13450]"
              >
                <EyeIcon />
                View Resume
              </Link>

              <a
                href={RESUME_PDF_URL}
                download="dhruv_kumar_yadav_resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-[#eba134]/35 bg-[#eba134]/5 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-[#eba134] hover:bg-[#eba134]/12"
              >
                <DownloadIcon />
                Download Resume
              </a>
            </Reveal>
          </Reveal>

          <Reveal delay={0.16} className="rounded-[32px] border border-[#eba134]/18 bg-[#0f0f0f] p-4 sm:p-5">
            <div className="overflow-hidden rounded-[24px] border border-white/8 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
              <iframe
                title="Dhruv Kumar Yadav Resume Preview"
                src={RESUME_HTML_URL}
                className="h-[520px] w-full bg-white"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ResumePreviewPage() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-12 text-white sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8 flex flex-col gap-5 rounded-[32px] border border-[#eba134]/18 bg-[#101010] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-[#eba134]">Resume Preview</p>
            <DripHeading
              text="Styled Resume Preview with"
              accent="PDF Download"
              as="h1"
              className="mt-3 text-3xl font-black sm:text-4xl"
            />
          
          </div>

          <Reveal delay={0.15} className="flex flex-wrap gap-3">
            <a
              href={RESUME_HTML_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#eba134]/35 bg-[#eba134]/5 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-[#eba134] hover:bg-[#eba134]/12"
            >
              <EyeIcon />
              Open in New Tab
            </a>

            <a
              href={RESUME_PDF_URL}
              download="dhruv_kumar_yadav_resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-[#eba134] px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-[#eba134]/85 hover:shadow-[0_0_25px_#eba13445]"
            >
              <DownloadIcon />
              Download Resume
            </a>
          </Reveal>
        </Reveal>

        <Reveal delay={0.12} className="overflow-hidden rounded-[32px] border border-[#eba134]/18 bg-[#111111] p-3 sm:p-4">
          <div className="overflow-hidden rounded-[24px] border border-white/8 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
            <iframe
              title="Dhruv Kumar Yadav Resume"
              src={RESUME_HTML_URL}
              className="h-[1260px] w-full bg-white"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Resume() {
  const location = useLocation();
  const isStandaloneResumePage = location.pathname === '/resume';

  if (isStandaloneResumePage) {
    return <ResumePreviewPage />;
  }

  return <ResumeHomeSection />;
}

export default Resume;
