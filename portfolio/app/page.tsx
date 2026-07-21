export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-200 text-3xl font-semibold text-gray-500 sm:h-40 sm:w-40">
        PT
      </div>

      <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Hi, I&apos;m Peter — a software engineer
      </h1>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="/resume.pdf"
          className="rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#4F39F6" }}
        >
          Get Resume
        </a>
        <a
          href="/contact"
          className="rounded-lg border border-black bg-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-gray-50"
          style={{ color: "#4F39F6" }}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
