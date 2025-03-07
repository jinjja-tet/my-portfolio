'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro, SiCanva, SiFigma, SiGmail } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { GiPalette } from "react-icons/gi";

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-15 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white py-3 px-8 flex justify-between items-center rounded-full shadow-lg backdrop-blur-md z-50 w-4/5">
        <span className="name">Princess Denise M. Ong</span>
        <div className="flex space-x-8">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#portfolio" className="hover:text-gray-400">Projects</a>
        </div>
      </nav>

      {/* Landing Page */}
      <section id="home" className="home-section h-screen flex flex-col justify-center items-start bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <h1 className="home-title font-lexend">Hello, I&apos;m <span className="gradient-text">Princess</span></h1>
        <p className="home-description font-overpass">
          I design and build meaningful experiences.
        </p>
        <div className="social-icons">
          <a href="https://github.com/jinjja-tet" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/princess-denise-ong-535716242" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:denise.ong94@gmail.com"><SiGmail /></a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20">
        <h2 className="section-title text-4xl font-bold font-lexend">About Me</h2>
        <p className="max-w-2xl text-center mt-4 mb-8 font-overpass"></p>
        <Image 
          src="/o.jpg" 
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
          <p className="text-lg font-semibold mt-4">Bachelor&apos;s Degree in Information Technology</p>
          <p className="text-gray-400">Polytechnic University of the Philippines</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-20">
        <h2 className="section-title text-4xl font-bold mb-3 font-lexend">Skills</h2>

        <div className="w-full px-10">
          <h3 className="text-xl font-semibold mb-6 text-gray-400 uppercase tracking-widest text-center">Programming Skills</h3>
          <ul className="grid grid-cols-3 gap-6">
          {[
            { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
            { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
            { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
            { icon: <GrMysql className="text-blue-400" />, name: "MySQL" },
            { icon: <FaPhp className="text-indigo-500" />, name: "PHP" },
            { icon: <FaPython className="text-yellow-400" />, name: "Python" },
          ].map((skill, index) => (
            <li key={index} className="skills-container p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-500 transform hover:scale-102 hover:shadow-xl">
              <div className="text-5xl mb-2">{skill.icon}</div>
              <span className="font-medium text-lg font-overpass">{skill.name}</span>
            </li>
          ))}
          </ul>
        </div>

        <div className="w-full px-10 mt-12">
          <h3 className="text-xl font-semibold mb-6 text-gray-400 uppercase tracking-widest text-center">Other Skills</h3>
          <ul className="grid grid-cols-3 gap-6">
          {[
            { icon: <SiAdobephotoshop className="text-blue-500" />, name: "Photoshop" },
            { icon: <SiAdobeillustrator className="text-orange-600" />, name: "Illustrator" },
            { icon: <SiAdobepremierepro className="text-purple-500" />, name: "Premiere Pro" },
            { icon: <SiFigma className="text-orange-500" />, name: "Figma" },
            { icon: <SiCanva className="text-blue-400" />, name: "Canva" },
            { icon: <GiPalette className="text-green-300" />, name: "PaintTool SAI" },
          ].map((skill, index) => (
            <li key={index} className="skills-container p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-500 transform hover:scale-102 hover:shadow-xl">
              <div className="text-5xl mb-2">{skill.icon}</div>
              <span className="font-medium text-lg font-overpass">{skill.name}</span>
            </li>
          ))}
          </ul>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen bg-black text-white flex flex-col items-center py-20">
        <p className="text-gray-400 mb-2 font-overpass font-bold">UI AND BACKEND</p>
        <h2 className="section-title text-4xl font-bold mb-5 font-lexend">Featured Projects</h2>
        <p className="text-gray-400 mb-10 font-overpass font-bold">Check out my previous projects</p>

        <div className="grid md:grid-cols-3 gap-8 px-10">
        {[
          {
            title: "Gentle Paws",
            description: "Gentle Paws Pet Veterinary Clinic implements a comprehensive database system to enhance efficiency, ensure accurate record-keeping, and provide personalized care tailored to each pet’s needs.",
            image: "/1.png",
            link: "#portfolio",
            tech: [
              <FaHtml5 className="text-orange-500 text-2xl" />,
              <FaCss3Alt className="text-blue-500 text-2xl" />,
              <FaJs className="text-yellow-400 text-2xl" />,
              <GrMysql className="text-blue-400 text-2xl" />,
              <FaPhp className="text-indigo-500 text-2xl" />,
            ]
          },
          {
            title: "InfoServe",
            description: "InfoServe is a digital system that streamlines barangay services, including complaints, reservations, announcements, and disaster preparedness, for efficient governance and community access.",
            image: "/2.png",
            link: "https://github.com/InfoServe-Services/InfoServe",
            tech: [
              <FaHtml5 className="text-orange-500 text-2xl" />,
              <FaCss3Alt className="text-blue-500 text-2xl" />,
              <FaJs className="text-yellow-400 text-2xl" />,
              <GrMysql className="text-blue-400 text-2xl" />,
              <FaPhp className="text-indigo-500 text-2xl" />,
            ]
          },
          {
            title: "Ikigai",
            description: "Ikigai Developers digitizes the Ikigai Scholarship application, converting forms, normalizing data, and creating a structured, user-friendly database for better efficiency and accessibility.",
            image: "/3.png",
            link: "#portfolio",
            tech: [
              <GrMysql className="text-blue-400 text-2xl" />,
              <FaPython className="text-indigo-500 text-2xl" />,
            ]
          }
        ].map((project, index) => (
          <div key={index} className="project-container relative p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <Image src={project.image} alt={project.title} width={400} height={250} className="rounded-lg object-cover mb-4" />
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
            <div className="flex space-x-3 mt-4">
              {project.tech.map((techIcon, i) => (
                <span key={i} className="transition hover:scale-110">{techIcon}</span>
              ))}
            </div>
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-400 hover:text-blue-600 font-semibold transition">View Project →</Link>
          </div>
        ))}
        </div>
      </section>
    </div>
  );
}