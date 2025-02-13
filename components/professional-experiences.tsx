"use client"

import { motion } from "framer-motion"

interface Experience {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
}

const experiences: Experience[] = [
  {
    title: "Data engineer internship | AI developer",
    company: "Novagen Conseil",
    location: "Neuilly-sur-Seine",
    period: "Sept. 2024 - Jan. 2025",
    responsibilities: [
      <span key="llm">
        Development of an LLM platform : {" "}
        <a 
          href="https://quantalogic.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
        >
          Quantalogic
        </a>
      </span>,
      "Implementation of TypeSense (search and database of prompts)",
      <span key="aws">
        Use of generative AI ({" "}
        <a 
          href="https://labs.ovhcloud.com/en/ai-endpoints/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 underline"
        >
          OVH AI Endpoints
        </a>{" "}
        ) to enrich a database.{" "}
      </span>,
    ],
  },
  {
    title: "Assistant Engineer",
    company: "SHOM",
    location: "Brest",
    period: "June 2022 - Dec. 2022",
    responsibilities: [
      "Python API design for bathymetric data processing",
      "Automating ETL Flows with Caris BDB",
      "25% reduction in extraction time for oceanographic surveys",
    ],
  },
]

export default function ProfessionalExperiences() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-neutral-800 dark:text-neutral-200">
        Professional Experiences
      </h2>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="mb-8 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-200">{exp.title}</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
            {exp.company} | {exp.location}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{exp.period}</p>
          <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300">
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx} className="mb-1">
                {resp}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}

