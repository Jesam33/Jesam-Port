"use client";
import { useState } from "react";
import { Slide } from "@/app/Animation/Slide";
import RefLink from "@/components/Reflink";
import { RiFolderOpenLine } from "react-icons/ri";
import { projects } from "@/app/Data/Projects";

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="mt-32 container mx-auto px-6">
      <Slide delay={0.16}>
        <div className="mb-16 text-center">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            My Projects
          </h2>
        </div>
      </Slide>

      {projects.length > 0 ? (
        <Slide delay={0.18}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-lg dark:border-zinc-800 border-zinc-200 bg-white dark:bg-zinc-900 flex flex-col"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                  <span>{project.techStack}</span>
                  <span>| {project.year}</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-3">
                  {project.description}
                </p>
                <RefLink
                  href={project.url}
                  className="mt-4 inline-flex items-center text-primary-color dark:text-tertiary-color hover:underline"
                >
                  View Project
                </RefLink>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-gray-300 dark:bg-zinc-700 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(projects.length / projectsPerPage)}
              className="px-4 py-2 rounded bg-gray-300 dark:bg-zinc-700 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </Slide>
      ) : (
        <div className="flex flex-col items-center text-center mt-12">
          <RiFolderOpenLine size={50} className="text-gray-500" />
          <h2 className="text-lg font-semibold mt-4">No Projects Available</h2>
          <p className="text-gray-500">No projects found. Add some to the JSON file!</p>
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;
