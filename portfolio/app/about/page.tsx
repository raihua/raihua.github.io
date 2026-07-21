import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Peter Trinh",
  description:
    "About Peter Trinh, a software engineer based in Adelaide, South Australia.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <p className="text-sm font-medium tracking-wide text-indigo-600 uppercase">
        About
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Peter Trinh
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Software engineer based in Adelaide, South Australia, with a
        Bachelor of Software Engineering (Honours) from Adelaide University.
        I care about building software that is reliable, well-architected,
        and genuinely useful to the people who rely on it.
      </p>

      <div className="mt-12 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-semibold text-gray-900">Education</h2>
        <p className="mt-3 text-base leading-7 text-gray-600">
          Bachelor of Software Engineering (Honours) — Adelaide University.
        </p>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-10">
        <h2 className="text-xl font-semibold text-gray-900">
          Outside of work
        </h2>
        <p className="mt-3 text-base leading-7 text-gray-600">
          When I&apos;m not writing code, I&apos;m usually deep in a rabbit
          hole comparing the trade-offs between local and cloud-based LLMs —
          weighing latency, cost, and privacy against raw capability. When I
          need a break from screens, I&apos;m in the kitchen perfecting my
          latte art, one pour at a time.
        </p>
      </div>
    </section>
  );
}
