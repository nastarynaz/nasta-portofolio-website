"use client";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { NavbarResolver } from "@/components/Elements/Navbar/NavbarResolver";
import { H2, H3, B1, B2 } from "@/components/Elements/Typography";
import { Search } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from "@/modules/projects/components/ProjectCard";

// Sample projects data
const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring interactive animations and smooth user experience.",
    image: "/assets/projects/image.png",
    date: "March 2024",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    category: "Web Development",
    status: "Completed",
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio.example.com",
    teamSize: "Solo Project",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application with payment integration, inventory management, and admin dashboard for small businesses.",
    image: "/assets/projects/image.png",
    date: "February 2024",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full-Stack",
    status: "In Progress",
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: null,
    teamSize: "3 Developers",
  },
  {
    title: "Task Management App",
    description:
      "Mobile-first task management application with real-time collaboration features and intuitive drag-and-drop interface.",
    image: "/assets/projects/image.png",
    date: "January 2024",
    technologies: ["React Native", "Firebase", "TypeScript"],
    category: "Mobile App",
    status: "Completed",
    githubUrl: "https://github.com/username/task-app",
    liveUrl: "https://taskapp.example.com",
    teamSize: "2 Developers",
  },
  {
    title: "AI Weather Predictor",
    description:
      "Machine learning model that predicts weather patterns using historical data and provides accurate forecasts for agricultural planning.",
    image: "/assets/projects/image.png",
    date: "December 2023",
    technologies: ["Python", "TensorFlow", "Flask", "Docker"],
    category: "AI/ML",
    status: "Completed",
    githubUrl: "https://github.com/username/weather-ai",
    liveUrl: null,
    teamSize: "Solo Project",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with real-time metrics, content scheduling, and audience insights.",
    image: "/assets/projects/image.png",
    date: "November 2023",
    technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
    category: "Web Development",
    status: "Completed",
    githubUrl: "https://github.com/username/social-dashboard",
    liveUrl: "https://dashboard.example.com",
    teamSize: "4 Developers",
  },
  {
    title: "Blockchain Voting System",
    description:
      "Secure and transparent voting system using blockchain technology to ensure election integrity and voter privacy.",
    image: "/assets/projects/image.png",
    date: "October 2023",
    technologies: ["Solidity", "Web3.js", "React", "IPFS"],
    category: "Blockchain",
    status: "Research Phase",
    githubUrl: "https://github.com/username/blockchain-voting",
    liveUrl: null,
    teamSize: "5 Developers",
  },
];

export default function ProjectAll() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on search
  const filteredProjects = projectsData.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <DefaultLayout>
      <NavbarResolver />

      {/* Title and desc */}
      <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
        <H2>Projects</H2>
        <B1>Several projects I have worked on</B1>
        <div className="w-24 h-1 mt-4 mb-8 bg-gradient-to-r from-red-300 to-red-500 rounded-full" />
      </div>

      {/* Search input */}
      <div
        className="w-full mb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="flex flex-row w-full justify-between gap-3 bg-neutral-50 rounded-[10px] border-neutral-300 border-[1px] p-4 focus-within:border-red-500 focus-within:bg-white transition-all duration-300">
          <div className="flex flex-row w-full items-centers gap-3">
            <Search className="text-red-500 flex-shrink-0" size={20} />
            <input
              placeholder="Search for projects..."
              aria-label="Search for projects"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-base bg-transparent outline-none focus:outline-none placeholder-gray-400"
            />
          </div>
          <div className="text-right whitespace-nowrap">
            <B2 className="text-gray-500">
              {searchTerm
                ? `Found ${filteredProjects.length} project${
                    filteredProjects.length !== 1 ? "s" : ""
                  }`
                : `${projectsData.length} projects`}
            </B2>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div
        className="space-y-3"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        {/* Results count */}

        {/* Grid with 2 columns */}
        <div className="grid grid-cols-2 gap-3 w-full">
          {filteredProjects.map((project, index) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Search className="text-gray-400" size={32} />
            </div>
            <H3 className="text-gray-600 mb-2">No projects found</H3>
            <B2 className="text-gray-500">
              Try searching with different keywords or clear the search to see
              all projects.
            </B2>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
