import urbanCycling from "@/assets/Images/urban-cycling.png";
import unical from "@/assets/Images/unical.jpeg";
import Kodecamp from "../../assets/Images/kodecamp.png";
import Beecode from "@/assets/Images/Becode.png";
import piloto from "@/assets/Images/piloto.png";
import Greenpedal from "@/assets/Images/Green-pedal.png";

const defaultImg = "https://placehold.co/600x400/png";

const jobsData = [
   {
    _id: "1",
    name: "Beecode, Nigeria",
    jobTitle: "Junior Web Developer",
    startDate: "2021-04-01",
    endDate: "2022-05-30",
    description: "Contributed to web development projects, applying frontend skills to support architectural design and urban planning initiatives. Collaborated with international teams to deliver effective digital solutions within tight timelines.",
    logo: Beecode,
  },
  
  {
    _id: "2",
    name: "Vickel Co, Nigeria",
    jobTitle: "Junior web developer ",
    startDate: "2022-10-01",
    endDate: null,
    description: "Developed and maintained web applications, collaborating with cross-functional teams to deliver responsive and efficient digital solutions. Focused on front-end development, debugging, and enhancing user interfaces to improve user engagement.",
    logo: defaultImg,
  },
  {
    _id: "3",
    name: "University of Calabar Tech Team",
    jobTitle: "Junior Web Developer",
    startDate: "2022-05-01",
    endDate: "2023-08-31",
   description: "Assisted in developing and maintaining the university’s digital platforms, contributing to front-end updates, bug fixes, and UI enhancements. Supported the tech team in optimizing website performance and ensuring a seamless user experience.",
    logo: unical,
  },
  {
    _id: "4",
    name: "Kodecamp, Nigeria",
    jobTitle: "Junior web developer",
    startDate: "2020-09-01",
    endDate: "2022-08-31",
    description: "Taught and supervised research on disaster risk management and sustainable development.",
    logo: Kodecamp,
  },
  {
    _id: "5",
    name: "Michael Okpara University, Umudike",
    jobTitle: "Junior web developer",
    startDate: "2022-05-01",
    endDate: null,
    description: "Lectured on urban planning and sustainable architectural development.",
    logo: defaultImg,
  },

  // {
  //   _id: "6",
  //   name: "Cross River University of Technology (CRUTECH)",
  //   jobTitle: "LEADS Scholar, Urban & Regional Planning Dept.",
  //   startDate: "2014-10-01",
  //   endDate: "2016-03-31",
  //   description: "Conducted research on urban development, transport planning, and policy analysis.",
  //   logo: Beecode,
  //   url: "https://crutech.edu.ng/",
  // },
  // {
  //   _id: "6",
  //   name: "Beecode, Nigeria",
  //   jobTitle: "Junior Web Developer",
  //   startDate: "2013-10-01",
  //   endDate: "2013-11-30",
  //   description: "Gained international experience in architectural design and urban planning.",
  //   logo: Beecode,
  //   url: "https://www.unipiloto.edu.co/",
  // },
  {

    _id: "6",
    name: "BernodeHub, Nigeria",
    jobTitle: "Junior web Developer",
    startDate: "2024-03-01",
    endDate: "2025-02-01",
   description: "Contributed to building and maintaining web applications using modern frontend technologies. Collaborated with cross-functional teams to deliver responsive and user-friendly digital solutions aligned with client needs.",
    logo: defaultImg,
  },
];

export default jobsData;
