import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Peter Trinh",
  description: "Case studies of selected software engineering projects.",
};

type Project = {
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  stack: string[];
  impact: string;
};

const projects: Project[] = [
  {
    name: "StreamLine Logistics Dashboard",
    tagline: "Real-time fleet visibility for a regional freight operator",
    problem:
      "Dispatchers relied on phone calls and spreadsheets to track vehicle locations and delivery statuses, leading to delayed customer updates and inefficient route planning.",
    solution:
      "Designed and built a real-time dashboard that ingests GPS telemetry via a message queue and streams live updates to the browser, giving dispatchers a single source of truth for the entire fleet.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets", "Docker"],
    impact:
      "Reduced average dispatcher response time by 35% and cut customer-facing delivery status calls by roughly half within the first quarter of launch.",
  },
  {
    name: "Halo Health Booking Platform",
    tagline: "Self-service appointment scheduling for a multi-clinic practice",
    problem:
      "Patients could only book appointments by phone during business hours, causing missed bookings and an overloaded front-desk team.",
    solution:
      "Delivered a self-service booking platform with real-time availability, automated reminders, and a clinician-facing admin panel for managing schedules across multiple locations.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Twilio"],
    impact:
      "Online bookings accounted for 60% of all appointments within six months, and no-show rates dropped 20% after automated SMS reminders were introduced.",
  },
  {
    name: "Ledger Nine Expense Automation",
    tagline: "Automated receipt processing for a growing accounting firm",
    problem:
      "Bookkeepers spent hours each week manually entering data from scanned receipts and invoices into the client ledger system.",
    solution:
      "Built a pipeline that uses OCR and a rules-based categorisation engine to extract line items from uploaded receipts and reconcile them automatically against client accounts.",
    stack: ["Python", "FastAPI", "AWS Lambda", "S3", "PostgreSQL"],
    impact:
      "Cut manual data-entry time by roughly 70%, freeing up bookkeeping staff to take on a higher volume of clients without additional headcount.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p className="text-sm font-medium tracking-wide text-indigo-600 uppercase">
        Case Studies
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Projects
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        A selection of projects illustrating how I approach problems end to
        end — from understanding the underlying business need through to
        measurable outcomes.
      </p>

      <div className="mt-16 space-y-10">
        {projects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-6 sm:px-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                {project.name}
              </h2>
              <p className="mt-1 text-sm text-gray-500">{project.tagline}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 px-6 py-8 sm:px-8 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  The Problem
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {project.problem}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  The Solution
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {project.solution}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Tech Stack Used
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  Business Impact
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {project.impact}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
