import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          About
        </h1>

        <p className="max-w-3xl text-neutral-600 leading-relaxed sm:text-lg">
          I’m Ben — a family man who loves to help build revenue-driving ecommerce experiences for all sizes of brands. As well as websites for those who are looking to grow their business online. In my free time, I enjoy running (hoping for an ultra-marathon one day), spending time hunting in the woods, and most importantly spending time with my family.
        </p>
      </header>

      {/* Family Banner Image */}
      <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <div className="relative aspect-16/7 w-full bg-neutral-100">
          <Image
            src="/about/Family.jpeg"
            alt="Ben Moore with family"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        <div className="p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            
            {/* Headshot */}
            <div className="relative h-24 w-24 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 shadow-sm">
              <Image
                src="/about/Headshot.jpeg"
                alt="Ben Moore headshot"
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>

            {/* About Text */}
            <div className="space-y-3">
              <div className="text-sm font-semibold tracking-wide uppercase text-(--accent)">
                What I Do
              </div>

              <div className="grid gap-2 text-neutral-700 leading-relaxed">
                <p>
                  • Shopify theme development (Liquid) with modern frontend enhancements
                </p>
                <p>
                  • Building AI workflows and agents that improve ecommerce performance and drive revenue.
                </p>
                <p>
                  • Performance optimization (Core Web Vitals, render strategy, UX polish)
                </p>
                <p>
                  • CRO-minded improvements that move revenue, not just pixels
                </p>
              </div>

              <p className="text-sm text-neutral-600 pt-2">
                Based in Upstate South Carolina. Husband, dad of three, runner, and someone who believes clean execution compounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-[color:var(--accent)]">
          Tools
        </h2>

        <div className="mt-4 flex flex-wrap gap-2 text-sm text-neutral-700">
          {[
            "Shopify",
            "Liquid",
            "Hydrogen",
            "Remix",
            "React",
            "TypeScript",
            "Tailwind",
            "Node",
            "Performance",
            "Analytics",
          ].map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <div className="text-sm text-neutral-600">
        Want to talk about a project?{" "}
        <Link
          className="underline underline-offset-4 hover:text-[color:var(--accent)]"
          href="/contact"
        >
          Reach out here
        </Link>
        .
      </div>
    </div>
  );
}