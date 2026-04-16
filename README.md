# Dashboard Docs

Static documentation site powered by Next.js, Nextra, and a pre-generated
Redoc HTML reference.

## Development

Run the local dev server:

```bash
npm run dev
```

Open http://localhost:3000/dashboardSpec to view the site.

## Content structure

- `public/dashboard-openapi.json` is the source OpenAPI spec.
- `public/dashboardSpec.html` is generated automatically for the `/dashboardSpec` route.
- `scripts/redoc-template.hbs` defines the static reference page shell.
- `app/[[...mdxPath]]/page.tsx` provides the site's minimal light-only shell for MDX pages.

Add more `.mdx` files under `content/` to publish more static pages.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```
