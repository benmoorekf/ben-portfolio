import Link from "next/link";

const EMAIL = "benmooresb@gmail.com";
const GITHUB = "https://github.com/benmoorekf";
const LINKEDIN = "https://www.linkedin.com/in/benjamin-moore-793214187/";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Contact
        </h1>
        <p className="max-w-2xl text-neutral-600 leading-relaxed sm:text-lg">
          The fastest way to reach me is email. If you include a link to the store
          and what you’re trying to improve (performance, UX, AI workflows,conversions), I’ll
          reply with next steps.
        </p>
      </header>

      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <div className="text-sm font-semibold text-neutral-900">
              Email
            </div>
            <a
              className="mt-1 inline-block text-neutral-700 underline underline-offset-4 hover:text-(--accent)"
              href={`mailto:${EMAIL}`}
            >
              {EMAIL}
            </a>
          </div>

          <div className="grid gap-2 text-sm">
            <a
              className="text-neutral-700 underline underline-offset-4 hover:text-(--accent)"
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-neutral-700 underline underline-offset-4 hover:text-(--accent)"
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="pt-2 text-sm text-neutral-600">
            Based in Upstate South Carolina • Open to remote roles, hybrid roles based in Upstate SC and select freelance projects.
          </div>
        </div>
      </section>

      <div className="text-sm text-neutral-600">
        Prefer to start with my work?{" "}
        <Link className="underline underline-offset-4 hover:text-(--accent)" href="/work">
          View selected projects
        </Link>
        .
      </div>
    </div>
  );
}