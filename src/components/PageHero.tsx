import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="pt-16 md:pt-24 pb-12 md:pb-16"
      style={{ background: "var(--gradient-paper)" }}
    >
      <div className="container-prose">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1 className="display-1 mt-5 max-w-4xl fade-up">{title}</h1>
        <p className="lead mt-6 max-w-2xl fade-up">{lead}</p>
        {children && <div className="mt-8 fade-up">{children}</div>}
      </div>
    </section>
  );
}
