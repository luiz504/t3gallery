# T3 Gallery

## Techs and Services

- [Vercel](https://vercel.com/docs/getting-started-with-vercel) (Hosting)
- [Clerk](https://clerk.com/) (Auth)
- [Uploadthing](https://uploadthing.com/) (host images)
- [Postgres](https://vercel.com/docs/storage) (Vercel)
- [Upstash](https://upstash.com/) (Rate limiting KV Store)
- [PostHob](https://posthog.com/) (Analytics)
- [Sentry](https://luiz-renato-bueno-junior.sentry.io/issues/) (Errors Logs)
- [Shadcn/UI](https://ui.shadcn.com/) (Components library (btn/toast))
- [Tailwind](https://tailwindcss.com/)
- [Drizzle](https://orm.drizzle.team/) (ORM)
- [Zod](https://zod.dev/) (Validations)
- [NextJS](https://nextjs.org/) (App Router/ Server Actions/ Parallel Routes)
- [ReactJS](https://react.dev/) (Ui Library)

## TODO

- [x] Make it deploy (vercel)
- [x] Scaffold basic ui with mock data
- [x] Tidy up build process
- [x] Set up a database (vercel postgres)
- [x] Attach database to UI
- [x] Add authentication (w/ Clerk)
- [x] Add image upload (uploadThing)
- [x] "taint" (server-only)
- [x] Use Next/Image component
- [x] Error management (w/ Sentry)
- [x] Routing/image page (parallel route) (new feature of NextJS App Router)
- [x] Update upload button
- [x] ShadcnUIify (toast)
- [x] Delete button (w/ Server Actions)
- [x] Analytics (Posthog)
- [x] Rate limiting (Upstash)

## TODOS

- [ ] Fix the page layout for images of different resolutions
- [ ] Select images on the dashboard to do actions on multiple items once (Zustand or contextApi)
- [ ] Infinite Scroll
- [ ] Folders Albums
- [ ] Limit files input size/type
- [ ] Limit amount of files by user
- [ ] Global Gallery
- [ ] Play with server components (Goal Have base Layout Static Rendering and within Dynamic Rendering components)
- [ ] Improve Not Signed Home page layout
- [ ] Improve Upload toast error msgs
