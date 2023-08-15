import { Practices } from "@/constant";
import PracticeCard from "../PracticeCard";
import { formatDate } from "@/lib/utils";

function compareDates(a, b) {
  const dateA = new Date(a.Project.date);
  const dateB = new Date(b.Project.date);
  return dateB - dateA;
}

const Practice = () => {
  const sortedPractices = [...Practices].sort(compareDates);

  return (
    <section id="practice" className="flex flex-col mt-10 bg-[#0D0D0E] p-7 sm:p-12 rounded-xl gap-5">
      <header className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Practicas personales</h2>
      </header>
      <div className="flex sm:grid sm:grid-cols-1 xl:grid-cols-2 auto-rows-[310px] place-items-start overflow-x-auto  gap-6">
        {sortedPractices.map(({ Project }) => (
          <PracticeCard
            key={Project.title}
            title={Project.title}
            src={Project.src}
            alt={Project.alt}
            date={formatDate(Project.date)}
            linkGithub={Project.linkGithub}
            linkProject={Project.linkProject}
            paragraph={Project.paragraph}
            iconsTec={Project.icons}
          />
        ))}
      </div>
    </section>
  );
};

export default Practice;
