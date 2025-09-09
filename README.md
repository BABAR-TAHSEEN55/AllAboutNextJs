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
