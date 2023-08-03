import { AiFillEye, AiFillGithub } from "react-icons/ai";
import IconCard from "./IconCard";
import Link from "next/link";
import { BiLink } from "react-icons/bi";

const PracticeCard = ({
  title,
  src,
  alt,
  LinkGithub,
  LinkProject,
  paragraph,
  iconsTec,
}) => {
  return (
    <section className="relative h-[300px] w-[570px] flex justify-start gap-6 p-8 rounded-xl ">
      <figure className="relative flex aspect-square">
        <img
          src={src}
          alt={alt}
          width={210}
          height={210}
          className="rounded-lg w-auto h-auto aspect-square object-cover object-center"
        />
      </figure>

      <div className="flex flex-col h-full ">
        <div className="h-[70%]">
          <header className="flex justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            <div className="flex items-center">
              {LinkProject && (
                <Link href={LinkProject} className="p-2" target="_blank">
                  <span className="sr-only">Link to Project</span>
                  <BiLink className="text-[#c532ff] min-h-[20px] min-w-[20px]" />
                </Link>
              )}
              {LinkGithub && (
                <Link href={LinkGithub} className="p-2" target="_blank">
                  <span className="sr-only">Link to Github repository</span>
                  <AiFillGithub className="text-[#c532ff] min-h-[20px] min-w-[20px]" />
                </Link>
              )}
            </div>
          </header>
          <main className="text-[15px] tracking-wide text-gray-400">
            <p className="line-clamp-4">{paragraph}</p>
          </main>
        </div>
        <footer className="flex gap-x-4 gap-y-1 flex-wrap mt-2">
          {iconsTec.map(({ title, icon }) => (
            <IconCard key={title} title={title} icon={icon} />
          ))}
        </footer>
      </div>
    </section>
  );
};

export default PracticeCard;
