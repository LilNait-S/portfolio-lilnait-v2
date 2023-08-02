import Link from "next/link";
import IconCard from "../IconCard";
import FilterByTag from "../FilterByTag";
import { GoDotFill } from "react-icons/go";
import { BiLink } from "react-icons/bi";

const Work = () => {
  return (
    <section className="flex flex-col mt-10 bg-[#0D0D0E] p-12 rounded-xl gap-5">
      <header className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Revisa mi trabajo</h2>
        {/* <FilterByTag /> */}
      </header>
      <div className="relative">
        <main className="flex flex-col">
          <div className="flex items-center">
            <section className="flex justify-center items-center h-full w-full max-w-xs">
              <span className="flex justify-center items-center h-full purple_gradient font-semibold text-lg">
                Marzo 2023 - Actualidad
              </span>
            </section>
            <div className="relative border-l-4 pl-4 border-gray-600">
              <GoDotFill className="absolute text-purple-600 left-[-17px] top-[-17px] min-h-[30px] min-w-[30px]" />
              <section className="relative h-[280px] w-full flex justify-start gap-6 p-8 rounded-xl">
                <figure className="relative flex aspect-square">
                  <img
                    src="/dashboardIA.png"
                    alt="Seometric photo"
                    className="rounded-lg object-cover aspect-square object-center"
                  />
                </figure>

                <div className="flex flex-col h-full py-2 justify-between">
                  <div>
                    <header className="flex justify-between">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Seometric.io
                      </h2>
                      <div className="flex items-center">
                        {/* <Link href="/" className="p-2">
                          <AiFillEye className="text-[#c532ff] min-h-[20px] min-w-[20px]" />
                        </Link>
                        <Link href="/" className="p-2">
                          <AiFillGithub className="text-[#c532ff] min-h-[20px] min-w-[20px]" />
                        </Link> */}
                      </div>
                    </header>
                    <main className="text-[15px] tracking-wide text-gray-400">
                      <p className="line-clamp-4">
                        Desarrollé un dashboard que ha permitido potenciar el
                        desarrollo y la efectividad de la IA, brindando a los
                        usuarios un entorno completo para interactuar con ella,
                        entrenarla y optimizar su rendimiento.
                      </p>
                    </main>
                  </div>
                  <footer className="flex gap-x-4 gap-y-1 flex-wrap">
                    <IconCard title="Figma" src="/figma.svg" alt="Figma logo" />
                    <IconCard
                      title="Next js"
                      src="/nextjs.svg"
                      alt="Next js logo"
                    />
                    <IconCard
                      title="Supabase"
                      src="/supabase.svg"
                      alt="Supabase logo"
                    />
                    <IconCard
                      title="Vercel"
                      src="/vercel.svg"
                      alt="vercel logo"
                    />
                  </footer>
                </div>
              </section>
            </div>
          </div>

          <div className="flex items-center">
            <section className="flex justify-center items-center h-full w-full max-w-xs">
              <span className="flex justify-center items-center h-full text-lg">
                Enero 2023
              </span>
            </section>
            <div className="relative border-l-4 pl-4 border-gray-600">
              {/* <GoDotFill className="absolute text-purple-600 left-[-16px] top-[-17px] min-h-[30px] min-w-[30px]" /> */}
              <section className="relative h-[280px] w-full flex justify-start gap-6 p-8 rounded-xl">
                <figure className="relative flex aspect-square">
                  <img
                    src="/aini.png"
                    alt="Aini28 logo"
                    className="rounded-lg object-cover aspect-square object-center"
                  />
                </figure>

                <div className="flex flex-col h-full py-2 justify-between">
                  <div>
                    <header className="flex justify-between">
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Aini28
                      </h2>
                      <div className="flex items-center">
                        <Link
                          href="https://aini28.com/"
                          className="p-2"
                          target="_blank"
                        >
                          <BiLink className="text-[#c532ff] min-h-[25px] min-w-[25px]" />
                        </Link>
                        {/* <Link href="/" className="p-2">
                          <AiFillGithub className="text-[#c532ff] min-h-[20px] min-w-[20px]" />
                        </Link> */}
                      </div>
                    </header>
                    <main className="text-[15px] tracking-wide text-gray-400">
                      <p className="line-clamp-4">
                        Desarrollé un ecommerce de peluches. Incluye filtros por
                        tamaño, buscador, carrito de compras y cotizador.
                        También se destaca por ofertas especiales, envíos
                        rápidos y atención al cliente dedicada. El proyecto
                        busca brindar una experiencia de compra emocionante y
                        satisfactoria.
                      </p>
                    </main>
                  </div>
                  <footer className="flex gap-x-4 gap-y-1 flex-wrap">
                    <IconCard
                      title="Next js"
                      src="/nextjs.svg"
                      alt="Next js logo"
                    />
                    <IconCard
                      title="Sanity"
                      src="/sanity.svg"
                      alt="sanity logo"
                    />
                    <IconCard
                      title="Vercel"
                      src="/vercel.svg"
                      alt="vercel logo"
                    />
                  </footer>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Work;
