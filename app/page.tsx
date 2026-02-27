import Link from "next/link";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="space-y-14">
    <section className="space-y-6">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-6xl">
          I build performant ecommerce experiences for growing brands.
        </h1>

        <p className="text-neutral-600 leading-relaxed sm:text-lg">
          Shopify and headless storefront development with a focus on performance,
          usability, and measurable impact.
        </p>
      </div>

      <div className="flex gap-3 pt-2 text-sm">
        <Link
          href="/work"
          className="rounded-lg border border-neutral-200 bg-white px-4 py-2 shadow-sm transition hover:border-neutral-300 hover:shadow-md"
        >
          View work
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-(--accent)/25 bg-(--accent-soft) px-4 py-2 text-(--accent) transition hover:opacity-90"
        >
          Contact
        </Link>
      </div>
      </section>

      <section className="space-y-5 pt-4">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-(--accent)">
          Selected work
        </h2>
        <div className="h-px w-12 bg-(--accent)/30" />

        <div className="grid gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}