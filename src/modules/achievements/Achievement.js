"use client";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { NavbarResolver } from "@/components/Elements/Navbar/NavbarResolver";
import { H2, H3, B1, B2 } from "@/components/Elements/Typography";
import { Search, Award, Calendar, MapPin, Users } from "lucide-react";
import { cn } from "@/utils/helpers/cn";
import { useState } from "react";

// Achievement Card Component
const AchievementCard = ({ achievement, className }) => (
  <div
    className={cn(
      "relative space-y-4 border-red-200 border-[1px] p-6 group rounded-[20px] hover:bg-red-50 hover:border-red-400 cursor-pointer transition-all duration-300 h-full flex flex-col",
      className
    )}
  >
    {/* Achievement Icon */}
    <div className="flex justify-center mb-4">
      <div className="bg-red-100 rounded-full p-4 group-hover:bg-red-200 transition-colors duration-300">
        <Award className="text-red-500" size={32} />
      </div>
    </div>

    {/* Achievement Details */}
    <div className="text-center space-y-3 flex-1 flex flex-col">
      <H3 className="group-hover:text-red-600 transition-colors duration-300">
        {achievement.title}
      </H3>
      <B2 className="text-gray-600 leading-relaxed flex-1">
        {achievement.description}
      </B2>

      {/* Achievement Meta */}
      <div className="space-y-2 pt-4 border-t border-gray-100 mt-auto">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Calendar size={14} />
          <span>{achievement.date}</span>
        </div>
        {achievement.organization && (
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <MapPin size={14} />
            <span>{achievement.organization}</span>
          </div>
        )}
        {achievement.participants && (
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Users size={14} />
            <span>{achievement.participants} participants</span>
          </div>
        )}
      </div>

      {/* Achievement Badge */}
      <div className="flex justify-center pt-2">
        <span className="bg-gradient-to-r from-red-300 to-red-500 text-white px-4 py-1 rounded-full text-xs font-medium">
          {achievement.category}
        </span>
      </div>
    </div>
  </div>
);

// Sample achievements data
const achievements = [
  {
    id: 1,
    title: "Best UI/UX Design",
    description:
      "Awarded for creating an innovative and user-friendly interface design in the annual design competition.",
    date: "March 2024",
    organization: "UGM Design Week",
    participants: "150+",
    category: "Design",
  },
  {
    id: 2,
    title: "Outstanding Developer",
    description:
      "Recognized for exceptional coding skills and contribution to open-source projects in the developer community.",
    date: "January 2024",
    organization: "Tech Community Yogya",
    participants: "200+",
    category: "Development",
  },
  {
    id: 3,
    title: "Innovation Award",
    description:
      "First place winner for creating a mobile application that solves real-world problems for local businesses.",
    date: "December 2023",
    organization: "Startup Weekend",
    participants: "80+",
    category: "Innovation",
  },
  {
    id: 4,
    title: "Dean's List",
    description:
      "Academic excellence recognition for maintaining high GPA throughout the semester while actively participating in extracurricular activities.",
    date: "November 2023",
    organization: "Faculty of Engineering",
    participants: null,
    category: "Academic",
  },
  {
    id: 5,
    title: "Community Leader",
    description:
      "Acknowledged for leading and organizing multiple tech workshops that benefited over 100 students in the university.",
    date: "September 2023",
    organization: "Student Tech Club",
    participants: "100+",
    category: "Leadership",
  },
  {
    id: 6,
    title: "Hackathon Winner",
    description:
      "Team champion in 48-hour coding competition, developing a sustainable solution for waste management using IoT technology.",
    date: "August 2023",
    organization: "EcoTech Challenge",
    participants: "300+",
    category: "Competition",
  },
];

export default function Achievement() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter achievements based on search
  const filteredAchievements = achievements.filter(
    (achievement) =>
      achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      achievement.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DefaultLayout className="space-y-12">
      <NavbarResolver />

      {/* Title and desc */}
      <div data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
        <H2>Achievements</H2>
        <B1>Several achievements I have accomplished</B1>
        <div className="w-24 h-1 mt-4 mb-8 bg-gradient-to-r from-red-300 to-red-500 rounded-full" />
      </div>

      {/* Search input */}
      <div
        className="w-full mb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="flex flex-row justify-between w-full gap-3 bg-neutral-50 rounded-[15px] border-neutral-300 border-[1px] p-4 focus-within:border-red-500 focus-within:bg-white transition-all duration-300">
          <div className="flex flex-row w-full items-center gap-3">
            <Search className="text-red-500 flex-shrink-0" size={20} />
            <input
              placeholder="Search for achievements..."
              aria-label="Search for achievements"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-base bg-transparent outline-none focus:outline-none placeholder-gray-400"
            />
          </div>

          <div className="text-center whitespace-nowrap">
            <B2 className="text-gray-500">
              {searchTerm
                ? `Found ${filteredAchievements.length} achievement${
                    filteredAchievements.length !== 1 ? "s" : ""
                  }`
                : `${achievements.length} achievements`}
            </B2>
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div
        className="space-y-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        {/* Results count */}

        {/* Grid with 3 columns and equal heights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {filteredAchievements.map((achievement, index) => (
            <div key={achievement.id} className="flex">
              <AchievementCard achievement={achievement} />
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredAchievements.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Search className="text-gray-400" size={32} />
            </div>
            <H3 className="text-gray-600 mb-2">No achievements found</H3>
            <B2 className="text-gray-500">
              Try searching with different keywords or clear the search to see
              all achievements.
            </B2>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
}
