export interface Contributor {
  name: string;
  role: string;
  initials: string;
  github?: string;
  linkedin?: string;
}

export const contributors: Contributor[] = [
  {
    name: "Mukesh",
    role: "Founder & Full-Stack",
    initials: "MK",
    github: "#",
  },
  {
    name: "Priya S.",
    role: "UI/UX Design",
    initials: "PS",
    linkedin: "#",
  },
  {
    name: "Arjun R.",
    role: "Backend & Cloud Code",
    initials: "AR",
    github: "#",
  },
  {
    name: "Lakshmi D.",
    role: "Mobile Development",
    initials: "LD",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Ravi K.",
    role: "Delivery Operations",
    initials: "RK",
  },
  {
    name: "Sneha M.",
    role: "Community & Testing",
    initials: "SM",
    linkedin: "#",
  },
];
