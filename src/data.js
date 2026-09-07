/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.

   NOTE: Export names and object shapes are identical to the reference
   file so the existing components work unchanged. Where a section had
   no equivalent in the CV (e.g. SPORTS), it has been repurposed rather
   than removed — see the comment above that block.
   ================================================================== */

export const PROFILE = {
  first: "Vanya",
  last: "Agarwal",
  fullName: "Vanya Agarwal",
  tagline: "Debater & MUN Delegate • Social Entrepreneur • Writer",
  location: "Noida, Uttar Pradesh, India",
  email: "vanya.agarwal0710@gmail.com",
  bio: [
    "I'm a Grade XI student at Mayoor School, Noida, with an insatiable thirst for knowledge and a readiness to take on challenges no matter how big. My interests sit where public speaking, policy and social impact meet.",
    "Outside the classroom I co-founded Project Aspasia, a not-for-profit building economic and financial literacy through research, and I serve as Chief Operating Officer of UnTaboo_It, which works on menstrual hygiene and health awareness. I founded my school's Debate and Moot Court Club and represent Interact District 3012 as a Zonal Interact Representative.",
    "I write about literature at Bookopedia, my own blogging platform, and I'm drawn to work that makes complex ideas — financial, civic or literary — accessible to people who would not otherwise encounter them.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "https://www.linkedin.com/in/vanya-agarwal-a69095280/", // TODO: full LinkedIn URL — the CV lists the name only
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/cv.pdf", // TODO: add a CV
  photo: "", // TODO: add a photo
  aboutPhoto: "", // TODO: add a photo
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Articles & Publications", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  {
    label: "Leadership & Service", to: "/volunteering",
  },

  { label: "Voice & Diplomacy", to: "/sports" },
];

/* ---- Roles & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "project-aspasia",
    role: "Co-founder",
    org: "Project Aspasia",
    logo: "/aspasia.jpg",
    location: "Noida, India",
    dates: "2024 – Present",
    meta: "2024 – Present · Noida, India ·",
    badge: "Not-for-profit",
    desc: "A not-for-profit organisation that aims to provide economic and financial literacy for everyone through the means of research.",
    bullets: [
      "Leads a team of over 20 members spanning design and research",
      "Educated more than 150 children in the span of six months",
      "Held notable events in collaboration with the Interact Club of Mayoor School Noida",
    ],
    tags: ["Financial Literacy", "Social Impact", "Research"],
    featured: true,
  },
  {
    slug: "untaboo-it",
    role: "Chief Operating Officer",
    org: "UnTaboo_It",
    logo: "untaboo.jpg",
    location: "India",
    dates: "2024 – Present",
    meta: "2024 – Present · India ·",
    badge: "Not-for-profit",
    desc: "A not-for-profit organisation that aims to increase awareness regarding menstrual hygiene and health education.",
    bullets: [
      "Oversees operations for a youth-led awareness organisation",
      "Builds outreach around menstrual hygiene and health education",
    ],
    tags: ["Operations", "Public Health Awareness", "Social Impact"],
    featured: true,
  },
  {
    slug: "interact-district-3012",
    role: "Zonal Interact Representative",
    org: "Interact District 3012",
    logo: "/zir.jpg",
    location: "India",
    dates: "2025 – 2026",
    meta: "2025 – 2026 · India ·",
    badge: "Elected",
    desc: "Represents schools across the zone within Interact District 3012, the youth wing of Rotary International.",
    bullets: [
      "Coordinates between zonal Interact clubs and the district leadership",
      "Supports service projects and inter-club initiatives",
    ],
    tags: ["Leadership", "Rotary Interact", "Community Service"],
    featured: true,
  },
  {
    slug: "debate-moot-court-club",
    role: "Founder",
    org: "Debate and Moot Court Club, Mayoor School Noida",
    logo: "/debate_mayoor.png",
    location: "Noida, India",
    dates: "2025 – 2026",
    meta: "2025 – 2026 · Noida, India ·",
    badge: "Founder",
    desc: "Started the school's Debate and Moot Court Club, creating a forum for structured argument and mock advocacy.",
    bullets: [
      "Established the club structure and session format from scratch",
      "Runs debate and moot court practice for student members",
    ],
    tags: ["Debate", "Public Speaking", "Leadership"],
    featured: true,
  },
  {
    slug: "ylf-mun-usg",
    role: "Under-Secretary-General, Management",
    org: "YLF MUN",
    logo: "/ylf.png",
    location: "India",
    dates: "2023 – 2024",
    meta: "2023 – 2024 · India ·",
    badge: "Core Position",
    desc: "Held a core secretariat position with responsibility for the management portfolio of the conference.",
    bullets: [
      "Managed logistics and delegate operations as part of the core team",
    ],
    tags: ["Model UN", "Management", "Leadership"],
    featured: false,
  },
  {
    slug: "mayoor-mun-oc",
    role: "Organising Committee",
    org: "Mayoor MUN",
    logo: "/debate_mayoor.png",
    location: "Noida, India",
    dates: "2023 – 2025",
    meta: "2023 – 2025 · Noida, India ·",
    badge: "Organiser",
    desc: "Served on the organising committee across two consecutive editions of the school's Model United Nations conference.",
    bullets: [
      "Organising Committee member in 2023–24 and 2024–25",
      "Supported conference planning and delegate coordination",
    ],
    tags: ["Model UN", "Event Management"],
    featured: false,
  },
  {
    slug: "mayoor-interact-club",
    role: "Interactor",
    org: "Mayoor Interact Club, in association with Rotary Club, Noida",
    logo: "/mayoor_ic.jpg",
    location: "Noida, India",
    dates: "2023 – Present",
    meta: "2023 – Present · Noida, India ·",
    badge: "Member",
    desc: "Active member of the school Interact Club, delivering service projects in partnership with the Rotary Club of Noida.",
    bullets: [
      "Contributes to community service drives and collaborative events",
    ],
    tags: ["Community Service", "Rotary Interact"],
    featured: false,
  },
  {
    slug: "nios-scribe",
    role: "Scribe & Writer",
    org: "National Institute of Open Schooling",
    logo: "/nios.jpeg",
    location: "India",
    dates: "2023 – 2024",
    meta: "2023 – 2024 · India ·",
    badge: "Volunteer",
    desc: "Served as scribe for a Grade 12 student with a learning disability sitting NIOS examinations.",
    bullets: [
      "Provided examination writing support across the assessment cycle",
    ],
    tags: ["Accessibility", "Volunteering"],
    featured: false,
  },
];

/* ---- Projects ---- */

export const PROJECTS = [
  {
    name: "Cabocracy",
    org: "Personal Project",
    meta: "Web Platform",
    desc: "A website that serves as a platform for people to gain knowledge regarding their political rights.",
    tags: ["Civic Education", "Web Platform", "Political Rights"],
    featured: true,
  },
  {
    name: "Bookopedia",
    org: "Personal Project",
    meta: "Since July 2023",
    desc: "A self-started blogging website focused on the works of notable authors including Margaret Atwood and Paulo Coelho.",
    tags: ["Writing", "Literature", "Blogging"],
    featured: true,
  },
];

/* ---- Writing & areas of interest ---- */

export const ARTICLES = [
  {
    title: "Economic & Financial Literacy",
    outlet: "Research-led writing produced through Project Aspasia for a general audience",
    link: "",
  },
  {
    title: "Civic Rights & Political Awareness",
    outlet: "Explanatory material on political rights, developed for the Cabocracy platform",
    link: "",
  },
  {
    title: "Essay & Competitive Writing",
    outlet: "Queen's Commonwealth Essay Competition and the ISRO Essay Writing Competition",
    link: "",
  },
];

/* ---- Leadership, service & activities ---- */

export const VOLUNTEER = {
  stats: [
    { value: "150+", label: "Children Educated" },
    { value: "20+", label: "Team Members Led" },
    { value: "6+", label: "MUNs Attended" },
  ],
  orgs: [
    {
      name: "Project Aspasia",
      role: "Co-founder",
      desc: "A not-for-profit providing economic and financial literacy through research. Leads a team of over 20 members across design and research, has educated more than 150 children in six months, and has held notable events with the Interact Club of Mayoor School Noida.",
    },
    {
      name: "UnTaboo_It",
      role: "Chief Operating Officer",
      desc: "A not-for-profit working to increase awareness of menstrual hygiene and health education.",
    },
    {
      name: "Interact District 3012",
      role: "Zonal Interact Representative · 2025–26",
      desc: "Represents the zone within Interact District 3012, coordinating between clubs and district leadership.",
    },
    {
      name: "Mayoor Interact Club",
      role: "Interactor · In association with Rotary Club, Noida",
      desc: "Member of the school Interact Club, contributing to service projects run with the Rotary Club of Noida.",
    },
    {
      name: "Teaching Underprivileged Children",
      role: "Volunteer Educator",
      desc: "Runs teaching sessions for underprivileged children alongside school and organisational commitments.",
    },
    {
      name: "Synergy Sports Meet",
      role: "Volunteer · 2023–26",
      desc: "Volunteers at the annual school sports meet across three consecutive years.",
    },
  ],
};

/* ---- Debate, MUN & public speaking ----
   Repurposed from the reference file's SPORTS block. The export name is
   unchanged so the existing /sports page component renders it as-is. ---- */

export const SPORTS = [
  {
    icon: "⚖️",
    name: "Debate & Moot Court",
    desc: "Founded the Debate and Moot Court Club at Mayoor School Noida in 2025–26, creating a forum for structured argument and mock advocacy.",
  },
  {
    icon: "🌐",
    name: "Model United Nations",
    desc: "Delegate at Mayoor MUN, DPS Indirapuram, Bal Bharti Public School Noida, Cromulent MUN and Ambience Public School MUN. Held USG Management at YLF MUN and served on the Mayoor MUN organising committee twice.",
  },
  {
    icon: "🎤",
    name: "Declamation & Public Speaking",
    desc: "Competes in declamation and speaking events, with public speaking, negotiation and objection handling as core strengths.",
  },
  {
    icon: "✍️",
    name: "Essay Writing",
    desc: "Participated in the Queen's Commonwealth Essay Competition organised by the Royal Commonwealth Society and the ISRO Essay Writing Competition.",
  },
  {
    icon: "🧠",
    name: "Quizzing",
    desc: "Secured 3rd position in the school Science Quiz Competition in 2022–23.",
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🎓",
    title: "Grade 10 Board Examinations",
    meta: "98.4%",
    detail: "Scored 98.4% in the Grade 10 board examinations.",
    link: "",
    featured: true,
  },
  {
    icon: "🏅",
    title: "Honors + Scholars Award",
    meta: "2022–23, 2023–24",
    detail: "Awarded the combined Honors and Scholars distinction in two consecutive academic years.",
    link: "",
    featured: true,
  },
  {
    icon: "📘",
    title: "Scholars Award",
    meta: "2020–24",
    detail: "Scholars awardee in 2020–21, 2021–22, 2022–23 and 2023–24, including the 3 Years Scholars award for 2020–23.",
    link: "",
    featured: true,
  },
  {
    icon: "🥇",
    title: "National Cyber Olympiad",
    meta: "2022–23",
    detail: "Gold Medalist.",
    link: "",
    featured: true,
  },
  {
    icon: "💻",
    title: "International Computer Olympiad",
    meta: "2024–25",
    detail: "School Rank 1.",
    link: "",
    featured: true,
  },
  {
    icon: "🇫🇷",
    title: "DELF A1 (French)",
    meta: "Ministry of Education, France",
    detail: "Scored 87/100, including a perfect 25/25 in the speaking test.",
    link: "",
    featured: true,
  },
  {
    icon: "🇫🇷",
    title: "DELF A2 (French)",
    meta: "Ministry of Education, France",
    detail: "Scored 72.5/100. Over seven years of French education.",
    link: "",
    featured: false,
  },
  {
    icon: "🔬",
    title: "Science Quiz Competition",
    meta: "2022–23",
    detail: "Secured 3rd position.",
    link: "",
    featured: false,
  },
  {
    icon: "✒️",
    title: "Queen's Commonwealth Essay Competition",
    meta: "2022–23",
    detail: "Participant in the international essay competition run by the Royal Commonwealth Society.",
    link: "",
    featured: false,
  },
  {
    icon: "🚀",
    title: "ISRO Essay Writing Competition",
    meta: "2021–22",
    detail: "Participant.",
    link: "",
    featured: false,
  },
  {
    icon: "🌍",
    title: "Mayo G20 & LCF DU Mayo",
    meta: "2023–25",
    detail: "Participated in Mayo G20 (2023–24) and LCF DU Mayo (2024–25).",
    link: "",
    featured: false,
  },
  {
    icon: "🎗️",
    title: "District Interact Leadership Assembly",
    meta: "2024–25",
    detail: "Participant.",
    link: "",
    featured: false,
  },
  {
    icon: "🏛️",
    title: "School Prefectural Positions",
    meta: "2019–24",
    detail: "Cultural Prefect in 2019–20 and House Prefect, Amber House, in 2023–24.",
    link: "",
    featured: false,
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Speaking & Advocacy",
    items: ["Public Speaking", "Debate", "Negotiation", "Objection Handling", "Moot Court"],
  },
  {
    group: "Leadership & Operations",
    items: ["Leadership", "Management", "Team Building", "Event Organisation"],
  },
  {
    group: "Research & Writing",
    items: ["Research Analysis", "Essay Writing", "Blogging", "Literary Criticism"],
  },
  {
    group: "Languages",
    items: ["English — Native", "Hindi — Native", "French — Fluent (DELF A1, A2)"],
  },
  {
    group: "Academic Interests",
    items: ["Economics & Financial Literacy", "Political Science & Civic Rights", "Literature", "International Relations"],
  },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Articles & Publications", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership & Service", to: "/volunteering" },
  { label: "Voice & Diplomacy", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
