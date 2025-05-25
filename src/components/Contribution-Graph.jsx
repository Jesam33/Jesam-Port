"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Slide } from "@/app/Animation/Slide";

export default function GithubCalendarComponent() {
  const [year, setYear] = useState(new Date().getFullYear());
  const { theme, systemTheme } = useTheme();
  const [serverTheme, setServerTheme] = useState(undefined); 

  const scheme =
    theme === "light" ? "light" : theme === "dark" ? "dark" : systemTheme;

  useEffect(() => {
    setServerTheme(scheme);
  }, [scheme]);

  return (
    <section className="w-full overflow-x-auto">
      <Slide delay={0.16} className="mb-8">
        <h2 className="font-incognito text-4xl font-bold tracking-tight">
          Contribution Graph
        </h2>
      </Slide>

      <Slide delay={0.18}>
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Contribution Graph Container */}
          <div className="dark:bg-[#27272b66] bg-[#fafafa66] w-full overflow-x-auto border dark:border-zinc-800 border-zinc-200 p-4 sm:p-6 md:p-8 rounded-lg">
            <GitHubCalendar
              username="jesam33"
              year={year}
              blockSize={15}
              colorScheme={serverTheme}
            />
          </div>

          {/* Year Selection */}
          <div className="flex md:flex-col flex-row flex-wrap gap-2 md:mb-4">
            {[2021, 2022, 2023, 2024, 2025].map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`rounded-lg text-center px-4 py-2 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 duration-100 text-sm font-medium ${
                  year === y
                    ? "dark:bg-[#0CCE6B] bg-[#0CCE6B] dark:hover:border-transparent dark:text-zinc-800 text-white hover:border-transparent"
                    : "dark:bg-[#27272b66] bg-zinc-50 dark:text-white text-zinc-800"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </Slide>
    </section>
  );
}
