"use client";

import Image from "next/image";
import Link from "next/link"; // 👈 ADD THIS
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      {/* IMAGE → Opens gallery */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden rounded-xl"
        aria-label={`Open gallery for ${project.title}`}
      >
        <div className="relative aspect-video w-full bg-neutral-100">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 640px"
          />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-medium text-white shadow-lg">
                View gallery →
            </div>
        </div>
        </div>
      </button>

      {/* TEXT SECTION */}
      <div className="mt-4">
        {/* TITLE → Links to detail page */}
        <Link
          href={`/work/${project.slug}`}
          className="font-medium underline-offset-4 hover:underline"
        >
          {project.title}
        </Link>

        <div className="mt-1 text-sm text-neutral-700">
          {project.summary}
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-600">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full border border-neutral-200 px-2 py-1">
              {s}
            </span>
          ))}
        </div>
      </div>

      {project.link && (
        <div className="mt-4">
            <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-(--accent) underline underline-offset-4 transition hover:opacity-80"
            >
            View live site ↗
            </a>
        </div>
        )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={project.gallery.map((g) => ({ src: g.src, alt: g.alt }))}
      />
    </div>
  );
}