"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Slide } from "../Animation/Slide";
// import Jesam from "../../../public/Jesam.jpg"
import CertificationsSection from "@/components/Certifications";



export default function About() {
  const profile = {
    fullName: "Akama Gospel Obasesam",
    location: "Abia State || Rivers State || Calabar State, Nigeria",
    bio: "Passionate researcher and educator specializing in Urban and Regional Development, Transportation Systems Planning, and Geographic Information Systems.",
    profileImage: "/Jesam-1.jpg",
    resumeURL: "/CV.pdf",
    email: " obasesamgospel@gmail.com",
   skills: [
  "HTML5", "CSS3", "JavaScript", "React.js", "Vue.js",
  "Next.js", "Nuxtjs", "Tailwind CSS", "Bootstrap", "Redux", "Context API", 
  "RESTful APIs", "ChartJS", "Git", "GitHub", "NPM",
  "Vite", "Figma (UI/UX)", "Responsive Design", "Accessibility (WCAG)",
  "Testing Library", "Chrome DevTools"
],

    education: [
      {
        institution: "Ludenar Academy, Nigeria",
        degree: "SSCE",
        duration: "September 2015 - June 2021",
      },
      {
        institution: "Michael Okpara University, Nigeria",
        degree: "Beng",
        duration: "September 2022 - Present",
      },
      {
        institution: "ALx Africa",
        degree: "Frontend Web Development",
        duration: "March 2023 - August 2024",
      },
      {
        institution: "Kodecamp, Nigeria",
        degree: "Frontend Web Development",
        duration: "April 2022 - August 2022",
      }
    ]
  };

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-22 mt-20">
      <motion.section 
        className="flex flex-col items-center text-center pt-16"
        initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
      >
       <motion.img 
  src={profile.profileImage}
  alt={profile.fullName} 
  className="rounded-full w-40 h-40 grayscale-[100] hover:grayscale-0 shadow-2xl"
  whileHover={{ scale: 1.1 }}
/>

        <h1 className="text-5xl font-bold mt-4 dark:text-white text-zinc-900">
          {profile.fullName}
        </h1>
        <p className="text-zinc-400 my-4">{profile.location}</p>
        <p className="text-lg text-zinc-400 max-w-2xl">{profile.bio}</p>
      </motion.section>

      {/* Skills Section */}
      <section className="mt-20 px-6">
        <Slide delay={0.16}>
          <div className="mb-10">
            <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
              Skills
            </h2>
          </div>
        </Slide>
        <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {profile.skills.map((skill, index) => (
            <motion.div 
              key={skill} 
              className="relative bg-[#27272b66] dark:text-white text-zinc-900 px-6 py-4 rounded-xl shadow-lg text-center font-semibold backdrop-blur-lg border border-zinc-800 flex items-center justify-center transition-all duration-300 hover:bg-[#0CCE6B] hover:text-zinc-900"
              initial={{ opacity: 0, scale: 0.2 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="mt-20 px-6">
        <Slide delay={0.16}>
          <div className="mb-10">
            <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
              Education
            </h2>
          </div>
        </Slide>
        <div className="space-y-6">
          {profile.education.map((edu, index) => (
            <motion.div key={index} className="bg-[#27272b66] p-6 rounded-xl shadow-lg text-white backdrop-blur-lg border border-zinc-800">
              <h3 className="text-xl font-bold">{edu.institution}</h3>
              <p className="text-zinc-400">{edu.degree} ({edu.duration})</p>
              {edu.thesis && <p className="text-sm text-gray-300 mt-2"><strong>Thesis:</strong> {edu.thesis}</p>}
              {edu.project && <p className="text-sm text-gray-300 mt-2"><strong>Project:</strong> {edu.project}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <CertificationsSection />
      </section>

      {/* Resume & Contact */}
      <motion.section className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <a href={profile.resumeURL} download="CV.pdf" className="bg-gradient-to-r from-[#E3B23C] to-[#A675A1] text-white px-5 py-3 rounded-lg text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
          Download Resume
        </a>
        <p className="mt-4">
          <a href={`mailto:${profile.email}`} className="text-[#57A773] hover:underline text-lg">
            {profile.email}
          </a>
        </p>
      </motion.section>
    </main>
  );
}
