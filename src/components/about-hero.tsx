import { AnimatePresence } from "framer-motion";
import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
const aboutLines = [
  "Senior Software Engineer delivering high-performance applications across iOS, Android, and modern web platforms.",
  "Backend technologies combined with strong frontend skills in React, Next.js, Vue.js, and Angular.",
  "Experience with Django, Flask, Spring Boot, and Ruby on Rails, with deep experience across PostgreSQL, MySQL, MongoDB, SQLite, Firestore, and Redis.",
  "Familiar with Docker, Kubernetes, Git, CI/CD, and Agile workflows.",
];
export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <span className="mt-4 block text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
              Hi, I&apos;m
            </span>
            <h1 className="mt-2 text-5xl font-bold text-accent sm:text-6xl md:text-5xl lg:text-4xl xl:text-6xl">
              Jeff Grauer
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              {aboutLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <span className="text-lg font-medium text-foreground">
              Owasso, United States
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
