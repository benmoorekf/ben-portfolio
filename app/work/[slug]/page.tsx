import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;        // ✅ unwrap params
  const project = getProject(slug);

  if (!project) return notFound();

  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <Link
          href="/work"
          className="text-sm text-neutral-600 underline underline-offset-4 hover:text-(--accent)"
        >
          ← Back to Work
        </Link>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-neutral-600 leading-relaxed sm:text-lg">
            {project.description}
          </p>
        </div>

        {project.link && (
            <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-(--accent) underline underline-offset-4 transition hover:opacity-80"
            >
                Visit live site ↗
            </a>
            )}

        <div className="flex flex-wrap gap-2 text-xs text-neutral-600">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-neutral-200 bg-white px-2 py-1"
            >
              {s}
            </span>
          ))}
        </div>
      </header>

      {project.highlights?.length ? (
        <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-(--accent)">
            Highlights
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-(--accent)">
          Gallery
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {project.gallery.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50"
            >
              <img src={img.src} alt={img.alt} className="h-auto w-full" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}