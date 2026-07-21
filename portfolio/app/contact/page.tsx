import type { Metadata } from "next";
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Peter Trinh",
  description: "Get in touch with Peter Trinh.",
};

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const contactMethods: {
  label: string;
  value: string;
  href: string | undefined;
  icon: LucideIcon | typeof GithubIcon;
}[] = [
  {
    label: "Location",
    value: "Adelaide, South Australia",
    href: undefined,
    icon: MapPin,
  },
  {
    label: "Mobile",
    value: "+61 405 171 897",
    href: "tel:+61405171897",
    icon: Phone,
  },
  {
    label: "Email",
    value: "raihua.dev@gmail.com",
    href: "mailto:raihua.dev@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/raihua",
    href: "http://github.com/raihua/",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/raihuadev",
    href: "https://www.linkedin.com/in/raihuadev/",
    icon: LinkedinIcon,
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <p className="text-sm font-medium tracking-wide text-indigo-600 uppercase">
        Contact
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Let&apos;s work together
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
        Peter Trinh — software engineer based in Adelaide, South Australia.
        Reach out via any of the channels below.
      </p>

      <dl className="mt-14 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm">
        {contactMethods.map(({ label, value, href, icon: Icon }) => {
          const content = (
            <div className="flex items-center gap-4 px-6 py-5">
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                  {label}
                </dt>
                <dd className="mt-0.5 text-base text-gray-900">{value}</dd>
              </div>
            </div>
          );

          return (
            <div key={label}>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block transition-colors hover:bg-gray-50"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </div>
          );
        })}
      </dl>
    </section>
  );
}
