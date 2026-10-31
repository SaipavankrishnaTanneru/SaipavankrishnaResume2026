export const personal = {
  name: "Tanneru Sai Pavan Krishna",
  shortName: "Sai Pavan Krishna",
  title: "Full Stack Developer",
  subtitle: "React JS · Spring Boot · PostgreSQL",
  location: "Visakhapatnam, Andhra Pradesh, India",
  phone: "+91 9703180399",
  email: "saipavankrishna1999@gmail.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  summary:
    "Full Stack Developer with hands-on experience re-engineering legacy institutional management systems into a modern microservices architecture using React JS, Spring Boot, and PostgreSQL. Trained from the ground up as a full stack developer and progressed to independently owning modules end-to-end. Experienced with distributed-systems patterns including the Saga pattern, Apache Kafka, and SeaweedFS, and currently building a cross-database (MySQL to PostgreSQL) data migration tool.",
};

export const skills = [
  { group: "Frontend", icon: "SiReact", items: ["React JS", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { group: "Backend", icon: "SiSpringboot", items: ["Java", "Spring Boot", "REST APIs", "Microservices Architecture"] },
  { group: "Databases", icon: "SiPostgresql", items: ["PostgreSQL", "MySQL"] },
  { group: "Distributed Systems", icon: "SiApachekafka", items: ["Saga Pattern", "Apache Kafka (event-driven messaging)"] },
  { group: "Infrastructure", icon: "SiNginx", items: ["SeaweedFS (distributed file storage)", "Nginx"] },
  { group: "Practices", icon: "FaCogs", items: ["Legacy system re-engineering", "Cross-database data migration", "R&D and adoption of new technologies"] },
  { group: "Tools & Version Control", icon: "FaGitAlt", items: ["Git", "GitHub", "GitLab", "Jira"] },
];

export const experience = [
  {
    role: "Junior Full Stack Developer",
    company: "Varsity Edification Management Pvt. Ltd.",
    location: "Visakhapatnam",
    period: "Apr 2025 – Present",
    type: "Full-time",
    highlights: [
      "Promoted from Trainee to Junior Developer after 5 months based on performance and demonstrated full stack capability.",
      "Act as point of contact for the Employee module, owning its design, development, and delivery end-to-end.",
      "Researched and implemented the Saga pattern to manage distributed transactions reliably across microservices.",
      "Integrated SeaweedFS with Nginx to provide scalable, distributed file storage for the platform.",
      "Implemented Apache Kafka for asynchronous, event-driven communication between services.",
      "Currently building an internal tool to migrate data between MySQL and PostgreSQL, covering multiple schema and data scenarios (in progress).",
      "Used Git/GitLab for version control and merge workflows, and Jira for sprint planning and task tracking.",
    ],
  },
  {
    role: "Trainee Full Stack Developer",
    company: "Varsity Edification Management Pvt. Ltd.",
    location: "Visakhapatnam",
    period: "Nov 2024 – Apr 2025",
    type: "Trainee",
    highlights: [
      "Trained end-to-end as a full stack developer in React JS, Spring Boot, and PostgreSQL.",
      "Joined a re-engineering initiative to rebuild two legacy institutional management systems (a college and a school platform, internally referred to as SCAITS and VERNA) from scratch, replacing the old MySQL-based codebase with no reuse of legacy code.",
      "Contributed to a new architecture comprising 9 microservices and 12 frontend modules, with a redesigned PostgreSQL database schema.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech, Civil Engineering",
    institute: "Raghu Engineering College, JNTU Kakinada",
    period: "2016 – 2021",
    score: "CGPA: 6.66",
  },
];

export const stats = [
  { label: "Microservices", value: 9, suffix: "+" },
  { label: "Frontend Modules", value: 12, suffix: "+" },
  { label: "Promotion In", value: 5, suffix: " mo" },
  { label: "Years Building", value: 2, suffix: "+" },
];
