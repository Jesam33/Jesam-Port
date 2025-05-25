"use client"
import HeroSvg from "@/assets/Icon/HeroSvg";
import Job from "@/components/Job";
import Social from "@/components/Socials";
import { useEffect, useRef } from 'react';
import { Slide } from "@/app/Animation/Slide";
import {
  FaMapMarkedAlt,
  FaChalkboardTeacher,
  FaCity,
  FaGlobe,
  FaUsers,
  FaComments,
  FaLaptopCode,
  FaPalette,
  FaServer,
  FaShoppingCart,
  FaDatabase,
  FaCloudUploadAlt,
  FaTools,
  FaCode,
} from "react-icons/fa";
import ContributionGraph from "@/components/Contribution-Graph";
import AnimatedHeader from "@/components/AnimatedHeader";

export default async function Home() {
  const textRef = useRef(null);
  
  useEffect(() => {
    // This runs after component mounts (similar to DOMContentLoaded)
    if (textRef.current) {
      const originalText = textRef.current.innerText;
      textRef.current.innerText = '';
      
      autoType(textRef.current, originalText, 100);
    }
  }, []); // Empty dependency array means this runs once after mount
  
  function autoType(element, text, speed) {
    let i = 0;
    
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speed);
      }
    }
    
    typing();
  }

  
  
  // Usage
 


  const services = [
    {
      title: "Custom Web Application Development",
      desc: "End-to-end development of scalable, custom web applications tailored to your business needs.",
      icon: <FaLaptopCode size={30} />,
      bg: "bg-gradient-to-r from-blue-500 to-blue-700",
    },
    {
      title: "Responsive Front-End Development",
      desc: "Modern, interactive UIs built with React, Next.js, and other cutting-edge front-end technologies.",
      icon: <FaPalette size={30} />,
      bg: "bg-gradient-to-r from-purple-500 to-purple-700",
    },
    // {
    //   title: "Back-End API Development",
    //   desc: "Robust, secure server-side solutions with Node.js, Express, Python, and database integration.",
    //   icon: <FaServer size={30} />,
    //   bg: "bg-gradient-to-r from-green-500 to-green-700",
    // },
    {
      title: "E-Commerce Solutions",
      desc: "Custom online stores, payment integration, and inventory management systems.",
      icon: <FaShoppingCart size={30} />,
      bg: "bg-gradient-to-r from-orange-500 to-orange-700",
    },
    // {
    //   title: "Database Design & Optimization",
    //   desc: "Efficient database architecture, migrations, and performance tuning for SQL and NoSQL databases.",
    //   icon: <FaDatabase size={30} />,
    //   bg: "bg-gradient-to-r from-red-500 to-red-700",
    // },
    // {
    //   title: "DevOps & Cloud Deployment",
    //   desc: "CI/CD pipeline setup, AWS/Azure/GCP deployment, and infrastructure management.",
    //   icon: <FaCloudUploadAlt size={30} />,
    //   bg: "bg-gradient-to-r from-teal-500 to-teal-700",
    // },
    // {
    //   title: "Website Maintenance & Support",
    //   desc: "Ongoing maintenance, updates, bug fixes, and performance optimization for existing websites.",
    //   icon: <FaTools size={30} />,
    //   bg: "bg-gradient-to-r from-indigo-500 to-indigo-700",
    // },
    // {
    //   title: "Code Review & Technical Consultation",
    //   desc: "Expert review of existing codebases, architecture planning, and technical advisory services.",
    //   icon: <FaCode  size={30} />,
    //   bg: "bg-gradient-to-r from-yellow-500 to-yellow-700",
    // },
  ];
    
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        <div className="lg:max-w-2xl max-w-2xl">
          <Slide>
            <h1 id="typing-text" className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              AKama Gospel . O .
            </h1>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              Highly motivated and experienced academic with over 5 years in front-end web development, specializing in building creative and functional sites. perfect user-experience.            </p>
          </Slide>
          <Slide delay={0.1}>
            <Social type="social" />
          </Slide>
        </div>
        <Slide delay={0.14}>
          <HeroSvg />
        </Slide>
      </section>
      <Slide delay={0.14}>
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold ">My Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {services.map((service, index) => (
            <div
            key={index}
            className="p-8 rounded-2xl shadow-xl text-white flex flex-col items-center text-center backdrop-blur-lg 
                       bg-zinc-800 dark:bg-white/10 dark:border dark:border-white/20"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-sm text-gray-200">{service.desc}</p>
            <button className="mt-6 border-2 border-white text-white px-5 py-2 rounded-full transition-all duration-300 bg-transparent hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>
          
            ))}           
          </div>
        </section>
      </Slide>
      <ContributionGraph />
      <Job />
    </main>
  );
}
