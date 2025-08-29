"use client";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { NavbarResolver } from "@/components/Elements/Navbar/NavbarResolver";
import { H2, H3, B1, B2 } from "@/components/Elements/Typography";
import { Github, GitBranch, Star, Users, Calendar } from "lucide-react";
import GitHubCalendar from "react-github-calendar";

// GitHub Stats Card Component
const GitHubStatsCard = ({ icon: Icon, title, value, description }) => (
  <div className="bg-white border-red-200 border-[1px] p-6 rounded-[20px] hover:bg-red-50 hover:border-red-400 transition-all duration-300 group">
    <div className="flex items-center gap-4">
      <div className="bg-red-100 rounded-full p-3 group-hover:bg-red-200 transition-colors duration-300">
        <Icon className="text-red-500" size={24} />
      </div>
      <div className="flex-1">
        <H3 className="group-hover:text-red-600 transition-colors duration-300">
          {value}
        </H3>
        <B2 className="text-gray-600">{title}</B2>
        {description && (
          <B2 className="text-gray-500 text-sm mt-1">{description}</B2>
        )}
      </div>
    </div>
  </div>
);

// Sample GitHub stats data
const githubStats = [
  {
    icon: Github,
    title: "Public Repo",
    value: "25+",
    description: "Open source projects",
  },
  {
    icon: GitBranch,
    title: "Contributions",
    value: "500+",
    description: "Commits across all repositories",
  },
  {
    icon: Star,
    title: "Stars Earned",
    value: "150+",
    description: "Recognition from the community",
  },
  {
    icon: Users,
    title: "Collaborations",
    value: "10+",
    description: "Projects with other developers",
  },
];

export default function Contribution() {
  return (
    <DefaultLayout>
      {/* Title and desc */}
      <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
        <H2>Github</H2>
        <B1>Contributions on Github</B1>
        <div className="w-24 h-1 mt-4 mb-8 bg-gradient-to-r from-red-300 to-red-500 rounded-full" />
      </div>

      <div className="space-y-3">
        {/* GitHub Stats Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 h-fit"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {githubStats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 100}
              data-aos-once="true"
            >
              <GitHubStatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* GitHub Calendar Section */}
        <div
          className="bg-white border-red-200 border-[1px] p-8 rounded-[20px] hover:bg-red-50 hover:border-red-400 transition-all duration-300"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-red-100 rounded-full p-3">
                <Calendar className="text-red-500" size={24} />
              </div>
              <H3 className="text-2xl">Activity Calendar</H3>
            </div>

            <div className="flex justify-center overflow-x-auto">
              <GitHubCalendar
                username="nastarynaz"
                theme={{
                  light: [
                    "#ebedf0",
                    "#fed7d7",
                    "#feb2b2",
                    "#fc8181",
                    "#f56565",
                  ],
                }}
                blockSize={12}
                blockMargin={3}
                fontSize={14}
              />
            </div>

            <div className="border-t border-gray-100 pt-6">
              <B2 className="text-gray-600 leading-relaxed">
                As a developer, GitHub is an essential tool for showcasing my
                projects and tracking my progress. Each green square represents
                a day of coding, contributing to open source projects, and
                continuous learning in software development.
              </B2>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center space-y-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
          data-aos-once="true"
        >
          <div className="bg-gradient-to-r from-red-300 to-red-500 text-white p-8 rounded-[20px] max-w-3xl mx-auto">
            <H3 className="text-white mb-4">Explore My Work</H3>
            <B1 className="text-red-100 mb-6">
              Check out my repositories and contributions on GitHub
            </B1>
            <div className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 transition-colors duration-300 px-6 py-3 rounded-full cursor-pointer">
              <Github className="text-white" size={20} />
              <span className="text-white font-medium">
                Visit GitHub Profile
              </span>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
