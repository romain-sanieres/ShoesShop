# simple_boilerplate

## Description

simple_boilerplate is a modern web application built with Next.js, offering secure authentication and a smooth user experience. This project serves as a robust foundation for developing complex web applications with integrated authentication features. This boilerplate is still in development, but the main branch works perfectly. Several other features will be added soon (stat manager). 

## Features

- User authentication with support for Credentials, Google, and more
- Protected routes with authentication middleware
- Dark and light theme toggle

## Main Libraries

- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/) - React framework for web application development
- [NextAuth.js](https://next-auth.js.org/) - Authentication solution for Next.js
- [Prisma](https://www.prisma.io/) - ORM for Node.js and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript

## Additional Dependencies

- [lucide-react](https://lucide.dev/) - Icon library for React
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management for Next.js
- [shadcn/ui](https://ui.shadcn.com/) - Collection of reusable and customizable React components
- [zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation library
- [react-hook-form](https://react-hook-form.com/) - Performant library for form management in React

## Prerequisites

- Node.js (version 14 or higher)
- npm, pnpm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/romain-sanieres/simple_boilerplate.git
   cd simple_boilerplate
   ```

2. Install dependencies:

   ```bash
   pnpm install
   # or
   yarn install

   ```

3. The default authentication database for Prisma is configured for PostgreSQL. For other Prisma schemas, or if you are using a different type of database, you can check the 
   Schema section here: https://authjs.dev/getting-started/adapters/prisma

4. Configure environment variables:
   Create a `.env` file at the root of the project and add the necessary variables for authentication.

   Connect your database with url
   - DATABASE_URL

   You can use `npx auth secret` to create an auth secret
   - AUTH_SECRET

5. Generate Prisma:

   ```bash
   pnpx prisma generate
   pnpx prisma db push
   ```

6. Start the development server:

   ```bash
   pnpm dev
   # or
   yarn dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

8. Configure protected routes:
   Make sure to add your private routes in the `middleware.ts` file to ensure they are properly protected by authentication. For example:

   ```typescript
   export const config = {
     matcher: ["/dashboard", "/profile", "/api/private"],
   };
   ```

   This will ensure that only authenticated users can access these routes.

## Project Structure

- `app/` - Contains application components and pages
- `components/` - Reusable components
- `auth.ts` - Authentication configuration
- `db.ts` file is used to configure and manage the connection to your database. Make sure to import this file in any files where you need to access the database.
- `middleware.ts` - Middleware for route protection

## Deployment

This application can be easily deployed on the Vercel platform:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/romain-sanieres/simple_boilerplate.git)

## Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for more details.# ShoesShop
