import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  BookOpen,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <main>
      <section className="border-b border-[var(--border)] bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_34%),var(--background)]">
        <div className="section-shell grid min-h-[calc(100svh-4rem)] items-center gap-12 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16">
          <div>
            {profile.isSampleData ? (
              <p className="mb-5 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[color-mix(in_srgb,var(--foreground)_72%,transparent)]">
                Sample profile data - replace it in data/profile.ts
              </p>
            ) : null}
            <p className="mb-4 flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[var(--foreground)] md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-[color-mix(in_srgb,var(--foreground)_72%,transparent)] md:text-2xl">
              {profile.role}
            </p>
            <div className="mt-6 grid max-w-2xl gap-4 text-base leading-8 text-[color-mix(in_srgb,var(--foreground)_76%,transparent)] md:text-lg">
              {profile.pitch.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 text-sm font-semibold text-[var(--background)] transition hover:-translate-y-0.5"
              >
                <ArrowDown className="size-4" aria-hidden="true" />
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
              >
                <Mail className="size-4" aria-hidden="true" />
                Contact me
              </a>
              <a
                href={profile.cvUrl}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
              >
                <Download className="size-4" aria-hidden="true" />
                Download CV
              </a>
            </div>

            <dl className="mt-10 grid gap-3 sm:grid-cols-3">
              {profile.heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[8px] border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_86%,transparent)] p-4"
                >
                  <dt className="text-xs uppercase tracking-[0.16em] text-[color-mix(in_srgb,var(--foreground)_52%,transparent)]">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -right-4 top-8 hidden h-28 w-28 rounded-full border border-[var(--border)] md:block" />
            <div className="relative overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
              <Image
                src="/images/dev-workbench.svg"
                alt="Illustrated development workbench with terminal, checks, and deployment cards"
                width={760}
                height={560}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell py-20">
        <SectionHeading
          eyebrow="Projects"
          title="Practical work with problem, contribution, and result"
          description="Each card is driven by the central profile file. Replace the sample links and outcomes with your real repositories, demos, and measured results."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {profile.projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-full flex-col rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition hover:-translate-y-1 hover:border-[var(--accent)]"
            >
              <div className="mb-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color-mix(in_srgb,var(--foreground)_72%,transparent)]">
                  {project.pitch}
                </p>
              </div>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <dl className="grid gap-4 text-sm leading-6">
                <div>
                  <dt className="font-semibold">Contribution</dt>
                  <dd className="mt-1 text-[color-mix(in_srgb,var(--foreground)_72%,transparent)]">
                    {project.contribution}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">Result</dt>
                  <dd className="mt-1 text-[color-mix(in_srgb,var(--foreground)_72%,transparent)]">
                    {project.outcome}
                  </dd>
                </div>
              </dl>
              <div className="mt-auto flex gap-3 pt-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold transition hover:border-[var(--accent)]"
                >
                  <Code2 className="size-4" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold transition hover:border-[var(--accent)]"
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="border-y border-[var(--border)] bg-[var(--surface)] py-20"
      >
        <div className="section-shell">
          <SectionHeading
            eyebrow="Skills"
            title="Honest levels, grouped by how I use them"
            description="The labels are intentionally modest: Good, Intermediate, and Learning. This keeps the portfolio credible during interviews."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {profile.skills.map((category) => (
              <section
                key={category.title}
                aria-labelledby={`skill-${category.title}`}
                className="rounded-[8px] border border-[var(--border)] bg-[var(--background)] p-5"
              >
                <h3 id={`skill-${category.title}`} className="text-lg font-semibold">
                  {category.title}
                </h3>
                <ul className="mt-4 grid gap-3">
                  {category.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between gap-3 text-sm"
                    >
                      <span>{skill.name}</span>
                      <span className="rounded-full bg-[var(--surface-muted)] px-2.5 py-1 text-xs font-semibold text-[color-mix(in_srgb,var(--foreground)_70%,transparent)]">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-shell py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Academic & personal experience"
          description={profile.experienceIntro}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {profile.experience.map((item) => (
            <article
              key={item.type}
              className="rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <p className="text-sm font-semibold text-[var(--accent)]">{item.type}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--foreground)_62%,transparent)]">
                {item.organization} · {item.period}
              </p>
              <p className="mt-4 text-sm leading-6 text-[color-mix(in_srgb,var(--foreground)_74%,transparent)]">
                {item.description}
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-[color-mix(in_srgb,var(--foreground)_72%,transparent)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <ShieldCheck
                      className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="education"
        className="border-y border-[var(--border)] bg-[var(--surface)] py-20"
      >
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Education"
            title={profile.education.school}
            description={`${profile.education.degree} · ${profile.education.period}`}
          />
          <div className="rounded-[8px] border border-[var(--border)] bg-[var(--background)] p-6">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--surface-muted)] text-[var(--accent)]">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[color-mix(in_srgb,var(--foreground)_64%,transparent)]">
                  GPA
                </p>
                <p className="mt-1 text-lg font-semibold">{profile.education.gpa}</p>
              </div>
            </div>
            <h3 className="mt-6 font-semibold">Relevant courses</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.education.courses.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="hobbies" className="section-shell py-20">
        <SectionHeading
          eyebrow="Hobbies"
          title="A few things outside the editor"
          description="Simple personal details make the page feel human without turning it into a diary."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {profile.hobbies.map((hobby) => (
            <div
              key={hobby}
              className="rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-4 text-sm font-medium"
            >
              {hobby}
            </div>
          ))}
        </div>
      </section>

      <section
        id="blog"
        className="border-y border-[var(--border)] bg-[var(--surface)] py-20"
      >
        <div className="section-shell">
          <SectionHeading
            eyebrow="Writing"
            title="Short notes on engineering practice"
            description="Markdown posts are stored in content/blog and can be replaced with your own learning notes."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-[8px] border border-[var(--border)] bg-[var(--background)] p-5"
              >
                <p className="text-sm text-[var(--accent)]">{post.date}</p>
                <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color-mix(in_srgb,var(--foreground)_72%,transparent)]">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                >
                  <BookOpen className="size-4" aria-hidden="true" />
                  Read note
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell grid gap-8 py-20 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about internships, junior roles, or practical projects"
            description="Use the links below or the form. The form validates input, blocks a basic honeypot field, and logs safely when no mail webhook is configured."
          />
          <div className="grid gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]"
            >
              <Mail className="size-5 text-[var(--accent)]" aria-hidden="true" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]"
            >
              <ExternalLink
                className="size-5 text-[var(--accent)]"
                aria-hidden="true"
              />
              LinkedIn profile
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--accent)]"
            >
              <Code2 className="size-5 text-[var(--accent)]" aria-hidden="true" />
              GitHub profile
            </a>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
