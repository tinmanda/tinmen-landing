export interface Contributor {
  name: string;
  role: string;
  initials: string;
  github?: string;
  linkedin?: string;
}

export const contributors: Contributor[] = [
  {
    name: "Ajay Ch.",
    role: "Software Developer",
    initials: "AC",
  },
  {
    name: "Madhura R.",
    role: "Founder",
    initials: "MR",
  },
  {
    name: "Manohar K.",
    role: "Software Developer",
    initials: "MK",
  },
  {
    name: "Saketh K.",
    role: "Head of Operations",
    initials: "SK",
  },
  {
    name: "Samhith K.",
    role: "Software Developer",
    initials: "SK",
  },
  {
    name: "Surendra M.",
    role: "Software Developer",
    initials: "SM",
  },
];
