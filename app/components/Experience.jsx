import React from 'react'
import { motion } from "motion/react"

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="experience"
            className="w-full px-[12%] py-10 scroll-mt-20"
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo text-accent"
            >
                Career
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="font-Ovo text-center text-5xl"
            >
                Experience
                <span className="block w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="max-w-2xl mx-auto mt-12 border border-gray-200 dark:border-white/10 rounded-xl p-6 sm:p-8
          bg-white dark:bg-dark-hover/40"
            >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Full Stack Developer Intern
                    </h3>
                    <span className="text-sm text-accent font-medium">
                        Aug 2026 — Present
                    </span>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    Innovator Solution
                </p>

                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside leading-relaxed">
                    <li>Developed and maintained features for MERN-based applications.</li>
                    <li>Built REST APIs and integrated frontend with backend services.</li>
                    <li>Implemented features such as creator videos, view tracking, and vendor matching.</li>
                    <li>Worked with Git/GitHub using feature branches and pull requests.</li>
                </ul>
            </motion.div>
        </motion.div>
    )
}

export default Experience