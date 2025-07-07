import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "Full-Stack Developer", // TODO: Replace with actual role
    company: "Tefora Software Solutions", // TODO: Replace with actual company name
    logo: "/tefora.png", // TODO: Replace with actual logo
    duration: "2023 - Present",
    description:
      "Spearheaded full-stack development across diverse frontend, backend, and DevOps initiatives, leveraging my expertise in ReactJS, ExpressJS, TypeScript, and Next.js. One of my key achievements includes architecting and developing an indoor navigation Progressive Web App (PWA), which significantly reduced client costs by up to 70% and saved user time by 50% through its robust offline capabilities. I also led a 2-member development team for a comprehensive school website CMS project, successfully delivering the entire solution within a 30-day timeframe. Throughout these projects, I consistently demonstrated high-efficiency project delivery, from development to deployment.",
    link: "https://tefora.in/",
    images: [
        '/paatha.png',
        '/nct.png',
    ],
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p className="text-sm mt-2">{j.description}</p>
                {/* Job Images */}
                <JobImages
                  role={j.role}
                  link={j.link}
                  images={j.images}
                  duration={j.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
