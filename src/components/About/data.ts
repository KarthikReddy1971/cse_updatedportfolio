import { Certification, Hobby, Testimonial } from './types';

export const certifications: Certification[] = [
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2024 - May 2027",
    verificationUrl: "https://www.credly.com/badges/479667f3-3545-4994-a7b2-94a1ff61dfb1/public_url"
  },
  {
    name: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "October 2024",
    verificationUrl: "https://trailhead.salesforce.com/en/credentials/verification/"
  },
  {
    name: "Red Hat Enterprise Application Developer",
    issuer: "Red Hat",
    date: "December 2024",
    verificationUrl: "https://www.credly.com/badges/ad659c7c-b43d-4cb5-b4e5-7915ef60e427/public_url"
  },
  {
    name: "Aviatrix Multicloud Network Associate",
    issuer: "Aviatrix",
    date: "November 2025",
    verificationUrl: "https://www.credly.com/badges/aaf643f1-3cb0-45c5-a964-fac1f3dc34f8/public_url"
  },
  {
    name: "Wipro Talentnext Java Full-stack certificate",
    issuer: "Wipro",
    date: "October 2025",
    verificationUrl: "https://drive.google.com/file/d/1I1HP6Wg91_cEQKG6J8r1QV8PsdT6AI2p/view?usp=drive_link"
  },
  {
    name : "AWS Academy Graduate - Data Engineering ",
    issuer: "AWS Training and Certification",
    date: "August 2024",
    verificationUrl: "https://www.credly.com/badges/8b47bdd0-6b58-4cca-8539-6c26816264d8/public_url"
  }

];

export const hobbies: Hobby[] = [
  {
    name: "Competitive Programming",
    description: "Strengthening problem-solving skills through coding challenges and algorithmic thinking.",
    icon: "💻"
  },
  {
    name: "AI & Machine Learning",
    description: "Exploring AI, Machine Learning, and intelligent applications through hands-on projects.",
    icon: "🤖"
  },
  {
    name: "Chess",
    description: "Enhancing strategic thinking, analytical reasoning, and decision-making skills.",
    icon: "♟️"
  },
  {
    name: "Continuous Learning",
    description: "Exploring new technologies, developer tools, and frameworks while building practical, real-world solutions.",
    icon: "🚀"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Karthik consistently demonstrates strong analytical thinking, technical competence, and the ability to transform complex concepts into practical software solutions. His curiosity, disciplined work ethic, and commitment to continuous improvement make him a promising software professional.",
    author: "Dr. Vijay Kumar Burugari",
    title: "Professor & Deputy HoD",
    relation: "Department of Computer Science and Engineering, KL University"
  },
  {
    quote:
      "I have been impressed by Karthik's structured problem-solving approach, dedication to learning, and ability to apply theoretical knowledge to real-world implementations. He is a sincere, dependable, and technically capable individual with excellent potential for advanced software and AI-driven projects.",
    author: "Dr. Bangaru Bala Krishna",
    title: "Assistant Professor",
    relation: "Department of Computer Science and Engineering, KL University"
  }
];