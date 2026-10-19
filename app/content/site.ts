export const nav = {
  primary: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/mission" }, // or "Who We Serve"
    { label: "Programs & Services", href: "/programs" },
    { label: "Resources", href: "/resources" },
    { label: "Get Involved", href: "/get-involved" }, // newsletter, volunteer, partner
    { label: "Surveys", href: "/surveys" },
    { label: "Donate", href: "/donate" },
    { label: "Contact", href: "/contact" },
  ],
  // optional simplified variants to keep for later toggling:
  variants: {
    optionA: ["Home","About","Get Involved","Donate","Contact"],
    optionB: ["Home","Our Mission","Programs","Get Involved","Donate"]
  }
};

export const hero = {
  title: "Unlocking Access. Restoring Dignity.",
  description:
    "NextKey Housing Access Foundation helps New Yorkers understand rental assistance and navigate the housing process. Through housing education and practical tools, we explain programs such as CityFHEPS and FHEPS, application requirements, documentation, and the steps involved in securing housing. Our work helps individuals and families ask informed questions, prepare for next steps, and communicate more effectively with housing professionals. We are developing and testing digital workshops to support this work. Our education and resources are open to everyone. We are a tax-exempt 501(c)(3) public charity.",
  ctas: [
    { label: "Join Our Newsletter", href: "/get-involved#newsletter" },
    { label: "Support the Foundation", href: "/donate" }
  ]
};

export const howItWorks = {
  intro:
    "Housing processes can involve unfamiliar requirements, several organizations, and important documents. We make the information easier to understand so people can prepare, follow up, and know what to ask next.",
  steps: [
    {
      title: "Understand Your Options",
      text: "Learn how rental-assistance programs work, what questions to ask, and where to find current information."
    },
    {
      title: "Prepare for Next Steps",
      text: "Use educational resources to understand application stages, organize documents, and identify information that needs to be confirmed."
    },
    {
      title: "Communicate and Follow Up",
      text: "Build confidence asking questions, keeping track of requests, and following up with housing professionals."
    }
  ]
};

export const currentFocus = {
  bullets: [
    "Rental-assistance education: explaining housing programs and the questions that matter when exploring housing options.",
    "Document readiness: helping learners understand common document requests and prepare questions about application requirements.",
    "Youth and family education: building practical housing knowledge through school and community partnerships.",
    "Digital learning: developing and testing workshop materials and tools that support housing education."
  ]
};

export const faq = [
  {
    q: "Who do you serve?",
    a: "Our education and resources are open to everyone, including voucher holders, people with limited incomes, families, and young people preparing to navigate housing. Requirements for rental-assistance programs are set by the agencies that administer them."
  },
  {
    q: "Do you have programs right now?",
    a: "We offer housing education, practical resources, and community workshops as capacity allows. NextKey Academy provides a developing collection of self-paced learning materials. We are also developing and testing digital workshop tools. Contact us to confirm current workshop availability."
  },
  {
    q: "Are donations tax-deductible?",
    a: "Yes. The Foundation has received its IRS 501(c)(3) determination. Please keep your donation receipt and consult your tax adviser about your specific deduction."
  },
  {
    q: "Can the Foundation help me rent an apartment?",
    a: "The Foundation provides housing education and resources. We do not act as a real estate broker or promise an apartment."
  }
];

export const footer = {
  legal:
    "NextKey Housing Access Foundation Inc. is a New York nonprofit recognized by the IRS as a 501(c)(3) tax-exempt organization. EIN: 33-4852690.",
  contact: {
    email: "info@nextkeyhousingaccess.org",
    city: "New York, NY",
    social: {
      facebook: "NextKey Housing Access Foundation",
      facebookUrl: "https://www.facebook.com/p/NextKey-Housing-Access-Foundation-61575967289929/",
      instagram: "@nextkeyhousing",
      instagramUrl: "https://www.instagram.com/nextkeyhousing/"
    }
  },
  copyright: "© 2026 NextKey Housing Access Foundation. All rights reserved."
};

export const programsPage = {
  heading: "Housing Education & Community Services",
  intro:
    "Start with free housing-education videos, explore the developing lessons in NextKey Academy, or contact us about a school or community workshop. Our materials explain housing processes and help learners prepare questions, understand document requests, and identify next steps. Workshop availability and scope are confirmed with each partner.",
  priorities: [
    {
      title: "Free Housing Education Videos",
      text: "Start learning at no cost with introductory videos from NextKey Housing Access on YouTube. These videos introduce topics you can explore further in our workshops.",
      bullets: [
        "Start with Understanding Housing Vouchers 101: How Voucher Portions Work",
        "Learn at your own pace and revisit the information",
        "Bring your questions from the videos into a school or community workshop"
      ]
    },
    {
      title: "NextKey Academy / Education Hub",
      text: "Explore our developing collection of self-paced housing lessons and practical learning materials. Digital workshop tools are in development and testing.",
      bullets: [
        "Housing rights and rental-assistance education",
        "Real-life scenarios and supporting-document preparation materials",
        "Resources to help learners prepare questions and understand housing processes"
      ]
    },
    {
      title: "School & Community Workshops",
      text: "Contact us to discuss a housing education workshop or pilot. Availability and scope are confirmed with each partner.",
      bullets: [
        "Housing literacy for youth, families and community members",
        "Voucher basics, housing rights and practical preparation",
        "Partnership inquiries from schools, shelters and community organizations"
      ]
    }
  ]
};

export const eventsPage = {
  heading: "Events",
  intro:
    "Join us as we build stronger communities together. Our events are designed to connect people with housing knowledge, resources, and opportunities. While we're still in our startup phase, we're offering light, accessible ways to get involved remotely.",
  upcoming: [
    {
      title: "NextKey Virtual Info Session",
      date: "Saturday, October 19, 2025",
      time: "1:00 PM – 2:00 PM (Online via Zoom)",
      blurb:
        "Learn about NextKey Housing Access Foundation, our mission, and how you can get involved as a community member, supporter, or early partner.",
      cta: { label: "Register Free", href: "/register/info-session-2025-10-19" }
    },
    {
      title: "Housing Literacy Webinar: Understanding Vouchers",
      date: "Saturday, November 16, 2025",
      time: "12:00 PM – 1:30 PM (Online via Zoom)",
      blurb:
        "A beginner-friendly workshop covering voucher basics, housing rights, and where to find resources.",
      cta: { label: "Register Free", href: "/register/webinar-vouchers-2025-11-16" }
    },
    {
      title: "Year-End Community Update (Virtual Town Hall)",
      date: "Saturday, December 14, 2025",
      time: "6:00 PM – 7:00 PM (Online via Zoom)",
      blurb:
        "Join us for a virtual community gathering to celebrate milestones, share updates on our pending 501(c)(3) status, and preview our 2026 goals.",
      cta: { label: "Register Free", href: "/register/townhall-2025-12-14" }
    }
  ],
  past: [
    {
      title: "Buy • Build • Bond: Black Business & Community Wealth Expo",
      date: "June 21, 2025 | Resorts World, Jamaica, NY",
      blurb:
        "A full day of networking, education, and community building focused on Black business development and wealth creation."
    },
    {
      title: "Community Resource Fair (Highlight)",
      date: "March 18, 2024",
      blurb:
        "Connected over 200 families with housing resources and support services."
    },
    {
      title: "Landlord Partnership Summit (Highlight)",
      date: "February 10, 2024",
      blurb:
        "Brought together property owners and advocates to discuss housing solutions."
    },
    {
      title: "Youth Leadership Workshop (Highlight)",
      date: "January 20, 2024",
      blurb:
        "Empowered young people with leadership skills and housing literacy basics."
    }
  ],
  stayConnectedCtas: [
    { label: "Join Our Mailing List", href: "/get-involved#newsletter" },
    { label: "Follow Us on Instagram", href: "https://www.instagram.com/nextkeyhousing/" }
  ]
};

export const workshop = {
  route: "/workshop/housing-literacy",
  title: "Housing Literacy Workshop in Development",
  intro:
    "We are developing and testing a digital Housing Literacy Workshop for renters, voucher holders, landlords, young people, and community members. The planned lessons explain housing programs, tenant rights and responsibilities, document preparation, and communication. Contact us about current community workshops and pilot opportunities.",
  howItWorks: [
    "Ask About Availability – Contact us to learn about current workshops and pilot opportunities.",
    "Planned Curriculum – We are developing 10 sections with lessons and practical exercises.",
    "Digital Learning – Self-paced materials and tools are being developed and tested.",
    "Participant Feedback – Pilot feedback will help us improve the materials before wider availability."
  ],
  sections: [
    "Introduction to Housing Access",
    "Understanding Voucher Programs",
    "Tenant Rights & Responsibilities",
    "Budgeting & Financial Literacy",
    "Housing Navigation Basics",
    "Landlord Responsibilities & Fair Housing Laws",
    "Building Positive Tenant-Landlord Relationships",
    "Conflict Resolution & Mediation",
    "Youth & Community Housing Literacy",
    "Pathways to Long-Term Stability"
  ],
  cta: { label: "Ask About a Workshop", href: "/contact" },
  implementationNotes:
    "Digital workshop materials are in development and testing. Contact the Foundation to confirm current availability, format, and participation details."
};

// Type definitions for better TypeScript support
export type NavigationItem = {
  label: string;
  href: string;
};

export type CTA = {
  label: string;
  href: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type EventItem = {
  title: string;
  date: string;
  time?: string;
  blurb: string;
  cta?: CTA;
};

export type PriorityItem = {
  title: string;
  bullets: string[];
  text?: string;
};

