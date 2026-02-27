import Link from "next/link";
import { projects } from "../../data/projects";

export default function WorkPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Work
        </h1>
        <p className="max-w-2xl text-neutral-600 leading-relaxed sm:text-lg">
          A few recent ecommerce projects focused on performance, UX, and building
          flexible Shopify experiences.
        </p>
      </header>

      <section className="grid gap-6">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight">{p.title}</h2>
              <p className="text-neutral-700">{p.description}</p>
            </div>

            {p.highlights?.length ? (
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}

            <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-600">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-neutral-200 px-2 py-1"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-5 text-sm text-neutral-600">
              Want screenshots? Go back to{" "}
              <Link
                className="underline underline-offset-4 hover:text-[color:var(--accent)]"
                href="/"
              >
                home
              </Link>{" "}
              and open the gallery.
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}