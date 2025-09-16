# Learning Next.js Project

## Custom Readme

Welcome to the **Learning Next.js** project! This repository demonstrates modern Next.js features, best practices, and organizational patterns. Below you'll find a refined summary of the project's structure, concepts, and usage.

---

## 🚀 Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app. Edits to pages will automatically update the browser.

---

## 🗂 Project Structure & Routing

- **Route Groups**: Folders wrapped in parentheses (e.g., `(auth)`) are _Route Groups_, used for organizing related routes without affecting the URL structure.
- **Dynamic Routes**:
    - `[productId]` enables dynamic product pages.
    - `[[...slug]]` provides catch-all routing for flexible documentation URLs.
- **Layouts**:
    - Each major section (e.g., `Customer`, `Marketing`) has its own layout for consistent headers, footers, and metadata.
    - Layouts can define shared UI and metadata for their nested routes.

---

## 📝 Metadata Management

- **Static Metadata**:
  Exported as `metadata` in page or layout files for SEO and browser titles.
- **Dynamic Metadata**:
  Generated via `generateMetadata` in dynamic routes, allowing runtime customization.
- **Priority Rules**:
    - Page-level metadata overrides layout metadata.
    - Static and dynamic metadata cannot coexist in the same file.

---

## ⚡ Special Features & Notes

- **Not Found Pages**:
  Custom `not-found.tsx` components provide user-friendly 404 handling for sections like `Marketing` and `Products`.
- **Client Components**:
  Use the `"use client"` directive for components utilizing React hooks (e.g., `Counter`). Note: Metadata cannot be used in client components.
- **Naming Flexibility**:
  Page component names do not need to match their file names.
- **Absolute Routing**:
  Absolute paths can be used to bypass layout templates when needed.

---

## 🛠 Scripts & Configuration

- **Scripts**:
    - `dev`: Start development server
    - `build`: Build for production
    - `start`: Launch production server
    - `lint`: Run ESLint for code quality

- **Configuration Files**:
    - `next.config.ts`: Next.js configuration
    - `postcss.config.mjs`: PostCSS setup (with Tailwind CSS)
    - `eslint.config.mjs`: ESLint configuration (extends Next.js recommendations)
    - `tsconfig.json`: TypeScript configuration (strict mode, path aliases)

---

## 📝 Notes & Best Practices

- Use route groups for better code organization.
- Prefer layouts for shared UI and metadata.
- Choose between static or dynamic metadata per page.
- Handle 404s gracefully with custom not-found components.
- Use `"use client"` only when necessary for React hooks.
- Take advantage of TypeScript and ESLint for maintainable code.

---

## 📚 Additional Notes & Advanced Patterns

- **Route Groups**: Folders wrapped in parentheses (e.g., `(auth)`) are called Route Groups. They help organize related routes without affecting the URL structure.
- **Parallel Routes**: Next.js supports parallel routes for advanced routing scenarios, allowing selective hydration and more flexible layouts.
- **Selective Hydration**: You can hydrate only specific parts of your UI, optimizing performance by combining server and client components as needed.
- **Active Links**: Use utilities like `isActive` or compare the current pathname to highlight the active navigation link.
- **Naming Flexibility**: Page and component names do not need to match their file names. This allows for more descriptive or context-specific naming.
- **Dynamic vs. Static Metadata**: You cannot have both static and dynamic metadata in the same file. Page-level metadata always takes priority over layout metadata.
- **Error Boundaries**: You can place `error.tsx` at both individual route and global levels. If placed at the individual route level, only that route will show the error UI; if placed globally, the entire path will show the error UI.
- **Not Found Pages**: Custom `not-found.tsx` components provide user-friendly 404 handling for sections like Marketing and Products.
- **Loading UI**: Use `loading.tsx` for spinners, skeletons, or other loading indicators. This wraps everything in a Suspense boundary for smoother UX.
- **Client Components**: Use the `"use client"` directive only when necessary (e.g., for React hooks). Metadata cannot be exported from client components.
- **Server Components in Client Components**: You cannot directly use server components inside client components, but you can pass server components as children to client components.
- **Navigation**: Use `<Link>` for client-side navigation. For server components, you can use redirects; for client components, use the `useRouter` hook.
- **Search Params**: Page components have access to both `params` and `searchParams`. Layout components only have access to `params`.
- **Absolute Routing**: Use absolute paths to break free from layout templates when needed.
- **Static Params Generation**: Use `generateStaticParams` for static site generation, especially useful for blog posts or product listings.
- **TypeScript & ESLint**: Take advantage of TypeScript for type safety and ESLint for code quality and maintainability.
- **Component Hierarchy**: Place client-only components at the lowest level possible to avoid making all child components client components unnecessarily.

### Example Patterns

```/dev/null/example.tsx#L1-12
// Passing a server component as a child to a client component:
<ClientComponent>
  <ServerComponent />
</ClientComponent>

// In ClientComponent:
const ClientComponent = ({ children }) => (
  <div>{children}</div>
);
```
