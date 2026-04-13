import urbanCycling from "@/assets/Images/urban-cycling.png";
import unical from "@/assets/Images/unical.jpeg";
import Kodecamp from "../../assets/Images/kodecamp.png";
import Beecode from "@/assets/Images/Becode.png";
import piloto from "@/assets/Images/piloto.png";
import Greenpedal from "@/assets/Images/Green-pedal.png";
import Seabed from "@/assets/Images/seabed.png";
import Iungo from "@/assets/Images/iungo.png";

const defaultImg = "https://placehold.co/600x400/png";

const jobsData = [
  {
    _id: "1",
    name: "Seabed Cooperative",
    jobTitle: "Senior Frontend Engineeer",
    startDate: "2024-10",
    endDate: null,
    description: "Lead frontend architecture and DevOps operations for enterprise-level fintech applications serving thousands of active users. Architected and maintained CI/CD pipelines using Docker and AWS, reducing deployment time by 60%. Implemented infrastructure-as-code and monitoring solutions, maintaining 99.9% application uptime. Collaborated with backend teams to design secure, scalable microservices architectures. Mentored development teams on DevOps best practices, code quality standards, and modern frontend patterns.",
    logo: Seabed,
  },
   {
    _id: "2",
    name: "Iungo",
    jobTitle: "Senior Fullstack/Mobile Engineer ",
    startDate: "2023-07",
    endDate: "2023-12",
    description: "Led the development of a comprehensive SaaS platform, taking projects from initial concept through design, development, and deployment. Architected scalable, enterprise-grade solutions, implementing best practices in code quality, security, and performance optimization. Collaborated with cross-functional teams to deliver high-quality digital products within tight timelines.",
    logo: Iungo,
  },
  
   {
    _id: "3",
    name: "Beecode",
    jobTitle: "Senior Frontend Engineer",
    startDate: "2023-04",
    endDate: "2024-01",
    description: "Contributed to web development projects, applying frontend skills to support architectural design and urban planning initiatives. Collaborated with international teams to deliver effective digital solutions within tight timelines.",
    logo: Beecode,
  },
  
  {
    _id: "4",
    name: "Vickel Co",
    jobTitle: "Senior Frontend Engineer ",
    startDate: "2022-10-01",
    endDate: "2023-08-31",
    description: "Developed and maintained web applications, collaborating with cross-functional teams to deliver responsive and efficient digital solutions. Focused on front-end development, debugging, and enhancing user interfaces to improve user engagement.",
    logo: defaultImg,
  },
  {
    _id: "5",
    name: "Kodehauz",
    jobTitle: "Frontend Intern",
    startDate: "2020-09-01",
    endDate: "2022-08-31",
    description: "Taught and supervised research on disaster risk management and sustainable development.",
    logo: Kodecamp,
  },
  {

    _id: "6",
    name: "BernodeHub",
    jobTitle: "Frontend Engineer",
    startDate: "2024-03-01",
    endDate: "2025-02-01",
   description: "Contributed to building and maintaining web applications using modern frontend technologies. Collaborated with cross-functional teams to deliver responsive and user-friendly digital solutions aligned with client needs.",
    logo: defaultImg,
  },
];

export default jobsData;
