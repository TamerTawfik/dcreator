# Dcreator

> **Warning**
> This is a work-in-progress and not the finished product.
>
> I work on this project when I have a free time. Feel free to leave feature suggestions and/or contribute to the project.

[![Dcreator](./public/web-shot.png)](https://example.com/)

## About this project

Dcreator is more like a digital portfolio with an integrated store. It's a place where content creators can exhibit their projects, share their creative journey, and present their skills to potential clients or customers. While Dcreator does offer the option to sell digital products, its emphasis lies in creating a professional and personalized space for creators to showcase their work.

This application is designed to provide a seamless platform for selling and distributing digital products. Whether you're an artist, musician, writer, or software developer, this app has got you covered. With a user-friendly interface and robust features, you can showcase and sell your creations with ease.

With an intuitive user interface and a comprehensive set of features, this app empowers you to present your products professionally and handle transactions seamlessly. Whether you're a seasoned seller or just starting, our app provides you with the tools to reach a global audience and monetize your digital products with ease.

## Tech Stack + Features

### Frameworks

- [Next.js](https://nextjs.org/) – React framework for building performant apps with the best developer experience
- [Auth.js](https://authjs.dev/) – Handle user authentication with ease with providers like Google, Twitter, GitHub, etc.
- [Prisma](https://www.prisma.io/) – Typescript-first ORM for Node.js

### Platforms

- [Vercel](https://vercel.com/) – Easily preview & deploy changes with git
- [PlanetScale](https://planetscale.com/) – Serverless MySQL platform

### UI

- [Shadcn UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development
- [Radix](https://www.radix-ui.com/) – Primitives like modal, popover, etc. to build a stellar user experience
- [Lucide](https://lucide.dev/) – Beautifully simple, pixel-perfect icons
- [Framer Motion](https://framer.com/motion) – Motion library for React to animate components with ease
- [next/font](https://nextjs.org/docs/basic-features/font-optimization) – Optimize custom fonts and remove external network requests for improved performance

### Code Quality

- [TypeScript](https://www.typescriptlang.org/) – Static type checker for end-to-end typesafety
- [Prettier](https://prettier.io/) – Opinionated code formatter for consistent code style
- [ESLint](https://eslint.org/) – Pluggable linter for Next.js and TypeScript

### Miscellaneous

- [Vercel Analytics](https://vercel.com/analytics) – Track unique visitors, pageviews, and more in a privacy-friendly way

## Features to be implemented

- [x] Upload Files with **Uploadthing** and **cloudinary**
- [ ] Product versions
- [ ] Discounts + coupon codes
- [ ] Generate Invoice
- [ ] Generate a unique license key
- [ ] Add Shopping Cart
- [ ] Checkout with Stripe
- [ ] Dashboard Orders
- [ ] Dashboard Analytics
- [ ] User Profile

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/TamerTawfik/dcreator

cd dcreator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the root directory and add the environment variables as shown in the `.env.example` file.

### 4. Connect DB

```bash
npx prisma generate
```

```bash
npx prisma db push
```

### 5. Start Development Server

```bash
npm run dev
```

> **Warning**
> After you signin with Google add the admin role to DB manually for now.

## License

Licensed under the MIT License. Check the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue if you have any questions or suggestions. Your contributions are welcomed and will be acknowledged.

See the [contributing guide](./CONTRIBUTING.md) for more information.

## Acknowledgments

- [Taxonomy](https://tx.shadcn.com/)

## Author

- Tamer Tawfik ([@TamerTawfik_Me](https://twitter.com/TamerTawfik_Me))
- [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/J3J8O4ZG0)
