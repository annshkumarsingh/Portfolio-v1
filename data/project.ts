import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "FaceTrack",
    description:
      "An AI-powered face recognition and attendance tracking system with real-time detection and logging.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
    githubUrl: "https://github.com/annshkumarsingh/facetrack",
    liveUrl: "https://facetrack-ai.vercel.app",
    image: "/projects/facetrack.png",
  },
  {
    title: "OpenCause",
    description:
      "A charity crowdfunding platform enabling users to discover causes, donate securely, and track campaign progress.",
    techStack: ["Next.js", "MongoDB", "Razorpay", "Tailwind"],
    githubUrl: "https://github.com/annshkumarsingh/opencause",
    liveUrl: "https://opencause.vercel.app",
    image: "/projects/opencause.png",
  },
  {
    title: "PassFGT",
    description:
      "A secure password manager with full CRUD functionality, search, and masked password handling.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
    githubUrl: "https://github.com/annshkumarsingh/passfgt",
    liveUrl: "https://passfgt.vercel.app",
    image: "/projects/passfgt.png",
  },
  {
    title: "RealtyIQ",
    description:
      "An AI-powered real estate analysis chatbot that derives insights from Excel-based property datasets.",
    techStack: ["Next.js", "Python", "LLM", "Tailwind"],
    githubUrl: "https://github.com/annshkumarsingh/realtyiq",
    liveUrl: "https://realty-iq.vercel.app",
    image: "/projects/realtyiq.png",
  },
];