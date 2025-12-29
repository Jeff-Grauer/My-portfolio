import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "IAS/PES ISIMM sbjc",
    href: "/projects",
    tags: ["Nextjs", "React", "Tailwindcss", "Json", "Vercel"],
    image: {
      LIGHT: "/images/projects/IAS-PES.webp",
      DARK: "/images/projects/IAS-PES.webp",
    },
  },
  {
    index: 1,
    title: "We Care",
    href: "/projects",
    tags: ["Nextjs", "React", "Tailwindcss", "Json", "Vercel"],
    image: {
      LIGHT: "/images/projects/weCare.webp",
      DARK: "/images/projects/weCare.webp",
    },
  },
  {
    index: 2,
    title: "DefendHer",
    href: "/projects",
    tags: ["Nextjs", "React", "Tailwindcss", "Json", "Vercel"],
    image: {
      LIGHT: "/images/projects/defendHer.webp",
      DARK: "/images/projects/defendHer.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "HELLOTOKYO2",
    favicon: "/images/projects/logos/IAS-PES.png",
    imageUrl: ["/images/projects/IAS-PES.png"],
    description:
      "I separated all client logic using 'use client' and moved sensitive or server-only operations into dedicated server components. This ensured data flowed securely from server to client, eliminating hydration mismatches and accidental secret exposure.",
    liveWebsiteHref: "https://hellotokyo2.com/",
  },
  {
    name: "Sanitaire Design",
    favicon: "/images/projects/logos/SanitaireDesign.ico",
    imageUrl: ["/images/projects/SanitaireDesign.webp"],
    description:
      "I standardized data fetching by using React Server Components with built-in caching and clear revalidation intervals. This unified approach improved performance and kept both SEO and real-time requirements consistent.",
    liveWebsiteHref: "https://sanitairedesign.net/",
  },
  {
    name: "We Care",
    favicon: "/images/projects/logos/weCare.ico",
    imageUrl: ["/images/projects/weCare.webp"],
    description:
      "I centralized session management in middleware and handled tokens securely through HTTP-only cookies. By using a consistent server-side validation layer, authentication remained stable across Edge, SSR, and API routes.",
    liveWebsiteHref: "https://we-care1.vercel.app/",
  },
  {
    name: "DefendHer",
    favicon: "/images/projects/logos/defenHer.ico",
    imageUrl: ["/images/projects/defendHer.webp"],
    description:
      "I implemented connection pooling through Prisma Data Proxy and ensured the client instance was globally reused. This eliminated connection overload issues and improved performance under serverless scaling conditions.",
    liveWebsiteHref: "https://defend-her.vercel.app/",
  },
  {
    name: "Promolab",
    favicon: "/images/projects/logos/promolab.ico",
    imageUrl: ["/images/projects/promolab.webp"],
    description:
      "I reduced bundle size by applying code splitting, tree-shaking, and dynamic imports for large libraries. Regular bundle analysis allowed us to isolate and remove redundant dependencies that slowed builds.",
    liveWebsiteHref: "https://promolab.vercel.app",
  },
  {
    name: "vimplay",
    favicon: "/images/projects/logos/gaoua.png",
    imageUrl: ["/images/projects/Gaoua-gold.png"],
    description:
      "I adopted server actions for data mutations and revalidated client caches immediately after updates. This kept the UI and database perfectly aligned, even during concurrent edits or optimistic updates.",
    liveWebsiteHref: "https://vimplay.com/",
  },
];
