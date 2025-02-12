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
    title: "Data Engineer Internship | AI Developer",
    company: "Company Name",
    location: "Neuilly-sur-Seine",
    period: "Sept. 2024 - Jan. 2025",
    responsibilities: [
      "Development of an LLM platform with integration of Hugging Face and llamaIndex",
      "Optimization of processing times by CUDA Mirroring (40% performance gain)",
      "Production on AWS cluster with Graylog monitoring",
    ],
  },
  {
    title: "Assistant Engineer",
    company: "SHOM",
    location: "Brest",
    period: "June 2022 - Dec. 2022",
    responsibilities: [
      "Python API design for bathymetric data processing",
      "Automating ETL Flows with Apache Airflow",
      "25% reduction in analysis time for oceanographic surveys",
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

