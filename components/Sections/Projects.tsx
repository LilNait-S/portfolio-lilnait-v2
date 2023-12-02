import PracticeCard from "../PracticeCard";
import { formatDate, getProjects } from "@/lib/utils";

import { useTranslations } from "next-intl";
import { useFormatter } from "next-intl";

const Projects = () => {
  const format = useFormatter();
  const t = useTranslations("practices");

  const addParagraph = [
    {
      id: t("tesla.id"),
      paragraph: t("tesla.paragraph"),
    },
    {
      id: t("Threads.id"),
      paragraph: t("Threads.paragraph"),
    },
    {
      id: t("Promptopia.id"),
      paragraph: t("Promptopia.paragraph"),
    },
    {
      id: t("Pokepage.id"),
      paragraph: t("Pokepage.paragraph"),
    },
    {
      id: t("Yariga.id"),
      paragraph: t("Yariga.paragraph"),
    },
    {
      id: t("ToDoList.id"),
      paragraph: t("ToDoList.paragraph"),
    },
    {
      id: t("WeatherApp.id"),
      paragraph: t("WeatherApp.paragraph"),
    },
    {
      id: t("Flexibble.id"),
      paragraph: t("Flexibble.paragraph"),
    },
  ];

  const newPractices = getProjects({ addParagraph });

  return (
    <section id="practice" className="flex flex-col mt-28  rounded-xl gap-5">
      <header className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">{t("title")}</h2>
      </header>
      <div className="flex sm:grid sm:grid-cols-1 xl:grid-cols-2 auto-rows-[310px] place-items-start overflow-x-auto  gap-6">
        {newPractices.map(({ project }) => (
          <PracticeCard
            key={project.title}
            title={project.title}
            src={project.src}
            alt={project.alt}
            date={formatDate({ formatDate: project.date, format })}
            linkGithub={project.linkGithub}
            linkProject={project.linkProject}
            paragraph={project.paragraph}
            iconsTec={project.icons}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
