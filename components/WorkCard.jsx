import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import IconCard from "./IconCard";

const WorkCard = ({
  title,
  src,
  alt,
  LinkGithub,
  LinkProject,
  paragraph,
  iconsTec,
  date,
}) => {
  return (
    <section className="relative h-[300px] w-full flex justify-start gap-6 p-8 rounded-xl ">
      <figure className="relative flex aspect-square">
        <img
          src={src}
          alt={alt}
          width={210}
          height={210}
          className="rounded-lg w-auto h-auto aspect-square object-cover object-center"
        />
      </figure>

      <div className="relative flex flex-col h-full">
        <header className="flex flex-col">
          <h2 className="text-2xl font-bold purple_gradient">{title}</h2>
          <div className="flex gap-x-4 gap-y-1 flex-wrap mt-2">
            {iconsTec.map(({ title, icon }) => (
              <IconCard key={title} title={title} icon={icon} />
            ))}
          </div>
        </header>
        <main className="text-[15px] tracking-wide text-gray-400 mt-4">
          <p className="line-clamp-4">{paragraph}</p>
        </main>

        <footer className="absolute bottom-0 left-0 mt-auto flex w-full items-center justify-end gap-2 ">
          <div className="mr-auto text-base font-semibold">
            {date}
          </div>

          <div className="flex items-center">
            {LinkProject && (
              <Link
                href={LinkProject}
                className="p-2 transition-all"
                target="_blank"
              >
                <span className="sr-only">Link to Project</span>
                <BiLink className="text-[#c532ff] min-h-[25px] min-w-[25px]" />
              </Link>
            )}
            {LinkGithub && (
              <Link href={LinkGithub} className="p-2" target="_blank">
                <span className="sr-only">Link to Github repository</span>
                <AiFillGithub className="text-[#c532ff] min-h-[25px] min-w-[25px]" />
              </Link>
            )}
          </div>
        </footer>
      </div>
    </section>
  );
};

export default WorkCard;
