import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generateStaticParamsFor, importPage } from "nextra/pages";

type PageProps = {
  params: Promise<{
    mdxPath?: string[];
  }>;
};

export const dynamicParams = false;
export const generateStaticParams = generateStaticParamsFor("mdxPath");

async function loadPage(mdxPath?: string[]) {
  try {
    return await importPage(mdxPath);
  } catch {
    notFound();
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { mdxPath } = await params;
  const { metadata } = await loadPage(mdxPath);
  return metadata;
}

export default async function Page({ params }: PageProps) {
  const { mdxPath } = await params;
  const { default: MDXContent } = await loadPage(mdxPath);

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <main className="min-h-screen">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-6 py-8 sm:px-10 lg:px-12">
          <header className="flex flex-col gap-4 border-b border-zinc-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <Link
                href="/"
                className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500"
              >
                Dashboard Docs
              </Link>
              <p className="max-w-2xl text-sm leading-6 text-zinc-600">
                API introduction in MDX and a pre-generated OpenAPI reference.
              </p>
            </div>
            <nav className="flex flex-wrap gap-4 text-sm">
              <Link
                href="/"
                className="font-medium text-zinc-950 transition-colors hover:text-zinc-600"
              >
                Introduction
              </Link>
              <Link
                href="/dashboardSpec"
                prefetch={false}
                className="font-medium text-zinc-950 transition-colors hover:text-zinc-600"
              >
                API Reference
              </Link>
              <a
                href="/dashboard-openapi.json"
                rel="noreferrer"
                target="_blank"
                className="font-medium text-zinc-950 transition-colors hover:text-zinc-600"
              >
                Raw JSON
              </a>
            </nav>
          </header>
        </div>

        <section className="mx-auto w-full max-w-[1400px] px-6 pb-8 sm:px-10 lg:px-12">
          <MDXContent params={{ mdxPath }} />
        </section>
      </main>
    </div>
  );
}
