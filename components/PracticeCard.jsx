import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import IconCard from "./IconCard";

const PracticeCard = ({
  title,
  src,
  alt,
  linkGithub,
  linkProject,
  paragraph,
  iconsTec,
  date,
}) => {
  return (
    <section className="relative h-[600px] w-[300px] sm:w-full sm:h-full flex flex-col sm:flex-row justify-start gap-6 p-4 sm:p-8 rounded-xl min-w-[280px]">
      <figure className="aspect-square min-w-[240px] sm:h-auto min-h-[240px] sm:aspect-[9/16] md:aspect-square object-cover">
        <img
          src={src}
          alt={alt}
          width={210}
          height={210}
          className="rounded-lg w-full h-full object-cover object-center"
        />
      </figure>

      <div className="relative flex flex-col h-full w-full">
        <header className="flex flex-col">
          <h2 className="text-2xl font-bold purple_gradient">{title}</h2>
          <div className="flex gap-x-4 gap-y-1 flex-wrap mt-2">
            {iconsTec.map(({ title, icon }) => (
              <IconCard key={title} title={title} icon={icon} />
            ))}
          </div>
        </header>
        <main className="text-[15px] tracking-wide text-gray-400 mt-4 mb-16">
          <p className="line-clamp-4">{paragraph}</p>
        </main>

        <footer className="absolute bottom-0 left-0 mt-auto flex w-full items-center justify-end gap-2 ">
          <div className="mr-auto text-base font-semibold">{date}</div>

          <div className="flex items-center gap-1">
            {linkProject && (
              <Link
                href={linkProject}
                className="p-2 hover:bg-[#141414] rounded-md"
                target="_blank"
              >
                <span className="sr-only">Link to Project</span>
                <BiLink className="text-[#c532ff] min-h-[25px] min-w-[25px]" />
              </Link>
            )}
            {linkGithub && (
              <Link
                href={linkGithub}
                className="p-2 hover:bg-[#141414] rounded-md"
                target="_blank"
              >
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

export default PracticeCard;
