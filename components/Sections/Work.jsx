import WorkCard from "../WorkCard";

import { formatDate } from "@/lib/utils";
import { Works } from "@/constant";

import { useTranslations } from "next-intl";
import { useFormatter } from "next-intl";

const Work = () => {
  const format = useFormatter();
  const t = useTranslations("works");
  const newWork = [
    {
      id: t("seometric.id"),
      paragraph: t("seometric.paragraph"),
    },
    {
      id: t("aini28.id"),
      paragraph: t("aini28.paragraph"),
    },
  ];

  const updatedWorks = Works.map((item) => {
    const matchingNewWork = newWork.find((nw) => nw.id === item.work.id);
    if (matchingNewWork) {
      return {
        work: {
          ...item.work,
          paragraph: matchingNewWork.paragraph,
        },
      };
    }
    return item;
  });

  return (
    <section
      id="works"
      className="flex flex-col mt-10 bg-[#0D0D0E] p-7 sm:p-12 rounded-xl gap-5"
    >
      <header className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Revisa mi trabajo</h2>
      </header>
      <div className="relative">
        <main className="flex flex-col gap-y-6">
          {updatedWorks.map(({ work }) => (
            <WorkCard
              key={work.title}
              title={work.title}
              src={work.src}
              alt={work.alt}
              date={formatDate({ formatDate: work.date, format })}
              dateEnd={formatDate({ formatDate: work.dateEnd, format })}
              LinkGithub={work.linkGithub}
              LinkProject={work.linkProject}
              paragraph={work.paragraph}
              iconsTec={work.icons}
            />
          ))}
        </main>
      </div>
    </section>
  );
};

export default Work;
