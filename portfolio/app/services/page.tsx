import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Peter Trinh",
  description: "Freelance software engineering service tiers and pricing.",
};

type Tier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Basic",
    price: "$120 – $200 AUD",
    description: "Fixed-price deliverables for well-defined, scoped tasks.",
    features: [
      "Single, clearly defined deliverable (e.g. a bug fix, small feature, or landing page)",
      "Fixed price agreed before work begins",
      "Turnaround typically within 2–4 business days",
      "One round of revisions included",
    ],
  },
  {
    name: "Intermediate",
    price: "$250 – $650 AUD",
    description: "End-to-end development of small to medium applications.",
    features: [
      "Full application build — frontend, backend, and database",
      "Requirements gathering and technical planning included",
      "Deployment to production and basic documentation",
      "Two rounds of revisions plus post-launch bug fixes",
    ],
    highlighted: true,
  },
  {
    name: "Advanced",
    price: "$650+ AUD",
    description:
      "Custom architecture, integrations, and larger-scale engagements.",
    features: [
      "Custom system design for complex or high-scale requirements",
      "Third-party API and service integrations (payments, auth, data pipelines)",
      "Performance, security, and infrastructure considerations built in",
      "Ongoing collaboration with milestone-based delivery",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <p className="text-sm font-medium tracking-wide text-indigo-600 uppercase">
        Services
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Ways we can work together
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        Whether you need a small fix or a fully custom system, here&apos;s a
        general guide to how engagements are scoped and priced. Every project
        starts with a conversation — get in touch for an exact quote.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col rounded-2xl border p-8 ${
              tier.highlighted
                ? "border-indigo-600 bg-indigo-600 text-white shadow-lg ring-1 ring-indigo-600"
                : "border-gray-200 bg-white text-gray-900 shadow-sm"
            }`}
          >
            <h2 className="text-lg font-semibold">{tier.name}</h2>
            <p
              className={`mt-4 text-3xl font-bold tracking-tight ${
                tier.highlighted ? "text-white" : "text-gray-900"
              }`}
            >
              {tier.price}
            </p>
            <p
              className={`mt-3 text-sm leading-6 ${
                tier.highlighted ? "text-indigo-100" : "text-gray-600"
              }`}
            >
              {tier.description}
            </p>

            <ul className="mt-8 space-y-4 text-sm leading-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <svg
                    className={`mt-0.5 h-5 w-5 flex-none ${
                      tier.highlighted ? "text-white" : "text-indigo-600"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={tier.highlighted ? "text-white" : "text-gray-700"}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className={`mt-10 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                tier.highlighted
                  ? "bg-white text-indigo-600 hover:bg-indigo-50"
                  : "bg-indigo-600 text-white hover:bg-indigo-500"
              }`}
            >
              Get in touch
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
