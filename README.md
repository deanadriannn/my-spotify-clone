This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## CLI Commands

- Packages

```bash
npm i react-icons
npm i tailwind-merge
npm i react-hot-toast
npm i @supabase/auth-helpers-nextjs
npm i @supabase/auth-helpers-react
npm i stripe
npm i @radix-ui/react-dialog
npm i zustand
npm i @supabase/auth-ui-react
npm i @supabase/auth-ui-shared
npm i react-hook-form
npm i uniqid
npm i -D @types/uniqid
npm i @radix-ui/react-slider
npm i @stripe/stripe-js
npm i @supabase/supabase-js
npm i query-string
npm i react-spinners
npm i use-sound
```

- Generate Types

Install supabase

```bash
npm i supabase@">=1.8.1" --save-dev
```

Login to supabase 

```bash
npx supabase login
```

Generate

```bash
npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > types_db.ts
```

- Stripe CLI

```bash
stripe login
stripe listen --forward-to localhost:3000/api/webhooks
stripe trigger payment_intent.succeeded
```