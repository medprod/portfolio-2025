"use client";

import Navbar from "@/components/navbar";
import { Card } from "@/components/ui/card";
import TimelineItem from "@/components/timeline-item";
import ProjectCard from "@/components/project-card";
import { useState } from "react";
import Image from "next/image";

type ProjectCategory = "cloud" | "data-analysis" | "ai-ml" | "other";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "cloud" | "data-analysis" | "ai-ml" | "other"
  >("all");

  const projects: {
    title: string;
    description: string;
    category: ProjectCategory;
    technologies: string[];
  }[] = [
    {
      title: "Cloud Infrastructure Automation",
      description:
        "Automated cloud infrastructure deployment using Terraform and AWS.",
      category: "cloud",
      technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for real-time data analysis and visualization.",
      category: "data-analysis",
      technologies: ["Python", "React", "D3.js", "PostgreSQL"],
    },
    {
      title: "AI-Powered Chatbot",
      description: "Natural language processing chatbot for customer support.",
      category: "ai-ml",
      technologies: ["Python", "TensorFlow", "NLP", "FastAPI"],
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce platform with payment integration.",
      category: "other",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="animated-bg">
      <Navbar />
      <div className="pt-16">
        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-4"
        >
          <div className="container mx-auto max-w-4xl space-y-6">
            {/* About Me Card */}
            <Card className="p-8 bg-white/80 border-[#FFE8B0]">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Profile Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden bg-[#FFE8B0] flex items-center justify-center shadow-lg border-2 border-[#FFE8B0] relative">
                  <Image
                    src="/images/image.png"
                    alt="Medhaa Prodduturi"
                    fill
                    className="object-cover scale-[1.2] object-[50%_95%]"
                    priority
                  />
                </div>

                {/* About Text */}
                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-4 text-[#8B6B3D]">
                    Hello! I&apos;m Medha :)
                  </h1>
                  <p className="text-gray-700 text-lg">
                    I&apos;m a Data Analytics Engineer currently based in Chicago, IL. 
                    I love diving into complex datasets, uncovering patterns, and turning numbers into narratives that resonate. 
                    With a strong foundation in Python, SQL, and R, I bring both analytical rigor and a creative touch to my work. 
                    I would love to connect and explore how we can make data work for us. Feel free to check out my work below and email me!
                  </p>
                </div>
              </div>
            </Card>

            {/* Skills and Education Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skills Card */}
              <Card className="p-8 bg-white/80 border-[#FFE8B0]">
                <h2 className="text-2xl font-bold mb-6 text-[#8B6B3D] flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Skills
                </h2>
                // ... existing code ...
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-[#8B6B3D] mb-3 flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Code/Programming icon */}
                          <path d="M8 3a2 2 0 00-2 2v4a2 2 0 01-2 2H3v2h1a2 2 0 012 2v4a2 2 0 002 2h2v-2H8v-5a2 2 0 00-2-2 2 2 0 002-2V5h2V3H8zm8 0a2 2 0 012 2v4a2 2 0 002 2h1v2h-1a2 2 0 00-2 2v4a2 2 0 01-2 2h-2v-2h2v-5a2 2 0 012-2 2 2 0 01-2-2V5h-2V3h2z"/>
                        </svg>
                        Programming & Scripting
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {/* Your existing skills */}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#8B6B3D] mb-3 flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Pipeline/Flow icon */}
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
                          <path d="M16 7l-4 4-4-4h8zm0 10l-4-4-4 4h8z"/>
                        </svg>
                        ETL Data Pipeline Orchestration
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {/* Your existing skills */}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#8B6B3D] mb-3 flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Database/Analysis icon */}
                          <path d="M12 2C8.13 2 5 3.79 5 6v12c0 2.21 3.13 4 7 4s7-1.79 7-4V6c0-2.21-3.13-4-7-4zm0 2c3.31 0 5 1.34 5 2s-1.69 2-5 2-5-1.34-5-2 1.69-2 5-2zM7 8.73A8.83 8.83 0 0012 10c1.82 0 3.47-.38 5-1.27V14c0 .66-1.69 2-5 2s-5-1.34-5-2v-5.27zM7 15.73A8.83 8.83 0 0012 17c1.82 0 3.47-.38 5-1.27V18c0 .66-1.69 2-5 2s-5-1.34-5-2v-2.27z"/>
                        </svg>
                        Data Analysis & Management
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {/* Your existing skills */}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-[#8B6B3D] mb-3 flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Cloud icon */}
                          <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                        </svg>
                        Cloud Platforms & Services
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {/* Your existing skills */}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#8B6B3D] mb-3 flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Charts/Visualization icon */}
                          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                        </svg>
                        Data Visualization & Reporting
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {/* Your existing skills */}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#8B6B3D] mb-3 flex items-center gap-2">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Tools icon */}
                          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                        </svg>
                        Tools & Utilities
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {/* Your existing skills */}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Education Card */}
              <Card className="p-8 bg-white/80 border-[#FFE8B0]">
                <h2 className="text-2xl font-bold mb-6 text-[#8B6B3D] flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Education
                </h2>
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-4 border-[#FFE8B0]">
                    <div className="absolute w-4 h-4 bg-[#8B6B3D] rounded-full -left-[10px] top-1"></div>
                    <h3 className="text-xl font-semibold text-[#8B6B3D]">
                      Master of Science
                    </h3>
                    <p className="text-gray-700 font-medium mt-1">
                      Boston University
                    </p>
                    <p className="text-[#8B6B3D]/80 text-sm mt-1">
                      2024 - 2026
                    </p>
                    <p className="text-gray-700 mt-2 italic">
                      Database Management and Business Intelligence
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-4 border-[#FFE8B0]">
                    <div className="absolute w-4 h-4 bg-[#8B6B3D] rounded-full -left-[10px] top-1"></div>
                    <h3 className="text-xl font-semibold text-[#8B6B3D]">
                      CISE Senior Certification
                    </h3>
                    <p className="text-gray-700 font-medium mt-1">
                      University of Florida
                    </p>
                    <p className="text-[#8B6B3D]/80 text-sm mt-1">
                      2024 - 2024
                    </p>
                    <p className="text-gray-700 mt-2 italic">
                      Computer Science and Engineering
                    </p>
                  </div>

                  <div className="relative pl-8 border-l-4 border-[#FFE8B0]">
                    <div className="absolute w-4 h-4 bg-[#8B6B3D] rounded-full -left-[10px] top-1"></div>
                    <h3 className="text-xl font-semibold text-[#8B6B3D]">
                      Bachelor of Technology
                    </h3>
                    <p className="text-gray-700 font-medium mt-1">
                      Mahindra University
                    </p>
                    <p className="text-[#8B6B3D]/80 text-sm mt-1">
                      2020 - 2024
                    </p>
                    <p className="text-gray-700 mt-2 italic">
                      Computer Science and Engineering
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Experience Section */}
            <section
              id="experience"
              className="min-h-screen flex items-center justify-center px-4"
            >
              <div className="container mx-auto max-w-4xl">
                <Card className="p-8 bg-white/80 border-[#FFE8B0]">
                  <h2 className="text-3xl font-bold mb-8 text-[#8B6B3D]">
                    Experience
                  </h2>
                  <div className="space-y-4">
                    <TimelineItem
                      title="Data Analyst II"
                      company="bswift"
                      period="2024 - Present"
                      description="Optimizing ETL workflows, resolving data issues using SQL and Excel, 
                      and colloborating with vendors to document and deliver accurate, client-ready solutions for benefits platform onboarding."
                    />
                    <TimelineItem
                      title="Data Engineer"
                      company="Schlumberger"
                      period="2023 - 2023"
                      description="Led ETL deployments and optimized SQL-driven data flows across 10,000+ sources in Azure, accelerating performance by 
                      55% and driving agile, cross-functional delivery through Azure DevOps."
                    />
                    <TimelineItem
                      title="Product Analyst"
                      company="Prodbee Media"
                      period="2022 - 2023"
                      description="Analyzed forum content for product managers using Python and A/B testing to uncover user behavior trends, 
                      supported decision-making with Tableau dashboards, and integrated customer feedback to enhance product strategy."
                      isLast={true}
                    />
                  </div>
                </Card>
              </div>
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="min-h-screen flex items-center justify-center px-4"
            >
              <div className="container mx-auto max-w-4xl">
                <Card className="p-8 bg-white/80 border-[#FFE8B0]">
                  <h2 className="text-3xl font-bold mb-6 text-[#8B6B3D]">
                    Projects
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["all", "cloud", "data-analysis", "ai-ml", "other"].map(
                      (category) => (
                        <button
                          key={category}
                          onClick={() =>
                            setActiveCategory(
                              category as
                                | "all"
                                | "cloud"
                                | "data-analysis"
                                | "ai-ml"
                                | "other"
                            )
                          }
                          className={`px-4 py-2 rounded-full text-sm transition-colors ${
                            activeCategory === category
                              ? "bg-[#8B6B3D] text-white"
                              : "bg-[#FFE8B0] text-[#8B6B3D] hover:bg-[#FFE8B0]/80"
                          }`}
                        >
                          {category.replace("-", " ")}
                        </button>
                      )
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                      <ProjectCard key={project.title} {...project} />
                    ))}
                  </div>
                </Card>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
