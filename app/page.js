'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiCanva, SiFigma } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { GiPalette } from "react-icons/gi";

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* Navigation */}
      <nav className="fixed w-full bg-black bg-opacity-80 text-white p-4 flex justify-center space-x-8">
        <a href="#home" className="hover:text-gray-400 font-semibold">Home</a>
        <a href="#about" className="hover:text-gray-400 font-semibold">About</a>
        <a href="#skills" className="hover:text-gray-400 font-semibold">Skills</a>
        <a href="#portfolio" className="hover:text-gray-400 font-semibold">Portfolio</a>
      </nav>

      {/* Landing Page */}
      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black via-gray-900 to-black text-white text-center">
        <h1 className="text-5xl font-bold font-lexend">Princess Denise M. Ong</h1>
        <p className="max-w-2xl text-center mt-4 font-overpass text-lg">
          I design and build meaningful experiences.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20">
        <h2 className="section-title text-4xl font-bold mb-4 font-lexend">About Me</h2>
        <p className="max-w-2xl text-center mt-4 mb-8 font-overpass"></p>
        <Image 
          src="/pup.png" 
          width={280} 
          height={280} 
          alt="Profile" 
          className="rounded-full border-4 border-gray-700"
          priority
        />

        <p className="max-w-2xl text-center mt-4 mb-2 font-overpass"></p>

        <p className="max-w-2xl text-center mt-4 font-overpass">
          A skilled backend developer expanding into frontend technologies, 
          combining strong server-side expertise with modern UI/UX principles to build seamless, 
          full-stack web applications.
        </p>

        <p className="max-w-2xl text-center mt-4 mb-2 font-overpass"></p>

        {/* Education Section */}
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold">Education</h3>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <Image src="/pup.png" alt="PUP Logo" width={47} height={47} />
            <Image src="/pup-ccis.png" alt="PUP CCIS Logo" width={50} height={50} />
          </div>
          <p className="text-lg font-semibold mt-4">Bachelor's Degree in Information Technology</p>
          <p className="text-gray-400">Polytechnic University of the Philippines</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-black text-white flex flex-col items-center py-20">
        <h2 className="section-title text-4xl font-bold mb-4 font-lexend">Skills</h2>

        {/* Programming Skills */}
        <div className="mb-8 w-full px-10">
          <h3 className="text-2xl font-semibold mb-6 text-gray-300 uppercase tracking-wider border-b-2 border-gray-500 pb-2 text-center font-lexend">Programming Skills</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
              { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
              { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
              { icon: <GrMysql className="text-blue-400" />, name: "MySQL" },
              { icon: <FaPhp className="text-indigo-500" />, name: "PHP" },
              { icon: <FaPython className="text-yellow-400" />, name: "Python" },
            ].map((skill, index) => (
              <li key={index} className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl mb-2">{skill.icon}</div>
                <span className="font-medium text-lg font-overpass">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Skills */}
        <div className="w-full px-10">
          <h3 className="text-2xl font-semibold mb-6 text-gray-300 uppercase tracking-wider border-b-2 border-gray-500 pb-2 text-center font-lexend">Other Skills</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: <SiAdobephotoshop className="text-blue-500" />, name: "Photoshop" },
              { icon: <SiAdobeillustrator className="text-orange-600" />, name: "Illustrator" },
              { icon: <SiAdobepremierepro className="text-purple-500" />, name: "Premiere Pro" },
              { icon: <SiFigma className="text-orange-500" />, name: "Figma" },
              { icon: <SiCanva className="text-blue-400" />, name: "Canva" },
              { icon: <GiPalette className="text-green-300" />, name: "PaintTool SAI" },
            ].map((skill, index) => (
              <li key={index} className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center transition transform hover:scale-105 hover:shadow-2xl">
                <div className="text-5xl mb-2">{skill.icon}</div>
                <span className="font-medium text-lg font-overpass">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen bg-black text-white flex flex-col items-center py-20">
        <p className="text-gray-400 mb-2 font-overpass">UI AND BACKEND</p>
        <h2 className="section-title text-4xl font-bold mb-4 font-lexend">Featured Projects</h2>
        <p className="text-gray-400 mb-10 font-overpass">Check out my previous projects</p>

        <div className="grid md:grid-cols-3 gap-8 px-10">
          {[
            {
              title: "Gentle Paws",
              description: "Gentle Paws Pet Veterinary Clinic implements a comprehensive database system to enhance efficiency, ensure accurate record-keeping, and provide personalized care tailored to each pet’s needs.",
              image: "/gp.png",
              link: "#",
              tech: [
                { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
                { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
                { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
                { icon: <GrMysql className="text-blue-400" />, name: "MySQL" },
                { icon: <FaPhp className="text-indigo-500" />, name: "PHP" },
              ]
            },
            {
              title: "InfoServe",
              description: "InfoServe is a digital system that streamlines barangay services, including complaints, reservations, announcements, and disaster preparedness, for efficient governance and community access.",
              image: "/infoserve.png",
              link: "#",
              tech: [
                { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
                { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
                { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
                { icon: <GrMysql className="text-blue-400" />, name: "MySQL" },
                { icon: <FaPhp className="text-indigo-500" />, name: "PHP" },
              ]
            },
            {
              title: "Ikigai",
              description: "Ikigai Developers digitizes the Ikigai Scholarship application, converting forms, normalizing data, and creating a structured, user-friendly database for better efficiency and accessibility.",
              image: "/ikg.png",
              link: "#",
              tech: [
                { icon: <FaPython className="text-yellow-400" />, name: "Python" },
                { icon: <GrMysql className="text-blue-400" />, name: "MySQL" },
                { icon: <FaPython className="text-yellow-400" />, name: "Tkinter" },
              ]
            },
          ].map((project, index) => (
            <a key={index} href={project.link} className="relative group overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105">
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-500">
                <h3 className="project-title text-2xl font-bold font-lexend mb-2">{project.title}</h3>
                <p className="text-gray-300 text-justify px-5 font-overpass">{project.description}</p>
                <div className="mt-4 flex space-x-3">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="text-3xl">{tech.icon}</div>
                      <span className="text-sm text-gray-300 font-overpass">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
