import WorkCard from "../WorkCard";
import { Works } from "@/constant";

const Work = () => {
  return (
    <section className="flex flex-col mt-10 bg-[#0D0D0E] p-7 sm:p-12 rounded-xl gap-5">
      <header className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Revisa mi trabajo</h2>
      </header>
      <div className="relative">
        <main className="flex flex-col gap-y-6">
          {Works.map(({ work }) => (
            <WorkCard
              key={work.title}
              title={work.title}
              src={work.src}
              alt={work.alt}
              date={new Date(work.date).getFullYear()}
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
