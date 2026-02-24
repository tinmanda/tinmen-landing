export interface Contributor {
  name: string;
  role: string;
  initials: string;
  github?: string;
  linkedin?: string;
}

export const contributors: Contributor[] = [
  {
    name: "Madhura R.",
    role: "Founder",
    initials: "MR",
  },
  {
    name: "Saketh K.",
    role: "Head of Operations",
    initials: "SK",
  },
  {
    name: "Ajay Ch.",
    role: "Developer",
    initials: "AC",
  },
  {
    name: "Samhith K.",
    role: "Developer",
    initials: "SK",
  },
  {
    name: "Surendra M.",
    role: "Developer",
    initials: "SM",
  },
  {
    name: "Manohar K.",
    role: "Developer",
    initials: "MK",
  },
];
