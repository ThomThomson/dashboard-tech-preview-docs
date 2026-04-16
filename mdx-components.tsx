import type { ReactNode } from "react";
import { useMDXComponents as getMDXComponents } from "nextra/mdx-components";
import type { MDXComponents } from "nextra/mdx-components";

type WrapperProps = {
  children?: ReactNode;
};

const defaultComponents: MDXComponents = {
  wrapper: ({ children }: WrapperProps) => (
    <div className="w-full [&_a]:font-medium [&_a]:text-zinc-950 [&_a]:underline [&_a]:decoration-zinc-300 [&_a]:underline-offset-4 [&_a]:transition-colors [&_a:hover]:text-zinc-600 [&_blockquote]:mt-6 [&_blockquote]:border-l-4 [&_blockquote]:border-zinc-200 [&_blockquote]:pl-4 [&_blockquote]:text-zinc-600 [&_code]:rounded [&_code]:bg-zinc-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-zinc-950 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-zinc-950 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-zinc-950 [&_hr]:my-10 [&_hr]:border-zinc-200 [&_li]:pl-1 [&_ol]:mt-4 [&_ol]:ml-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:text-zinc-700 [&_p]:mt-4 [&_p]:max-w-3xl [&_p]:text-base [&_p]:leading-8 [&_p]:text-zinc-700 [&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:bg-zinc-950 [&_pre]:p-4 [&_pre]:text-zinc-100 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_ul]:mt-4 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:text-zinc-700 sm:[&_h1]:text-5xl">
      {children}
    </div>
  ),
};

export function useMDXComponents(components?: MDXComponents) {
  return getMDXComponents({
    ...defaultComponents,
    ...components,
  });
}
