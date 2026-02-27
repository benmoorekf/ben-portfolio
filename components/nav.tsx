import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-neutral-50/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between px-5 py-6 lg:max-w-4xl">
      <Link
        href="/"
        className="text-base font-semibold tracking-tight text-neutral-900 transition hover:opacity-70 sm:text-lg lg:text-xl"
        >
        Ben Moore
        </Link>
        <nav className="flex gap-6 text-sm text-neutral-600">
          {links.map((l) => (
            <Link
                key={l.href}
                href={l.href}
                className="relative inline-block text-neutral-500 transition hover:text-[color:var(--accent)]
after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[color:var(--accent)]
after:transition-all after:duration-300 hover:after:w-full"
                >
                {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}