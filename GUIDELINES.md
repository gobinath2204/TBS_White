# TBS White Coding Guidelines

To ensure code quality and maintainability, please follow these guidelines:

## React Components

- **Functional Components**: Use functional components with hooks.
- **Naming**: Use PascalCase for component names and files (e.g., `Navbar.jsx`).
- **Props**: Destructure props in the component signature.
- **SEO**: Use the `<SEO />` component on every page to manage meta tags.

## CSS & Styling

- **No Inline CSS**: Never use the `style={{...}}` attribute in JSX.
- **Global Styles**: Use `index.css` for truly global styles, CSS variables, and utility classes.
- **Utility Classes**: Prefer utility classes (e.g., `.text-justify`) for common styling patterns.
- **Component Styles**: Use CSS Modules or specific class naming conventions for component-specific styles.

## Security

- **Environment Variables**: Never commit `.env` files. Ensure they are listed in `.gitignore`.
- **API Keys**: Use server-side proxies or environment variables for API keys; never expose them in the frontend code.
- **Sanitization**: Always sanitize user input before displaying it to prevent XSS.

## SEO

- **Meta Tags**: Every page must have a descriptive `title` and `description`.
- **ALT Text**: Provide meaningful `alt` text for all images.
- **Semantic HTML**: Use `<header>`, `<main>`, `<footer>`, `<section>`, and `<article>` tags appropriately.
