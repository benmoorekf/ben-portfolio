export function Footer() {
    return (
      <footer className="mt-20 border-t border-(--accent)/15">
        <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-neutral-500 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Ben Moore</div>
          <div className="text-neutral-400">
            Built with <span className="text-neutral-600">Next.js</span>,{" "}
            <span className="text-neutral-600">TypeScript</span>, and{" "}
            <span className="text-neutral-600">Tailwind CSS</span>.
          </div>
        </div>
      </footer>
    );
  }