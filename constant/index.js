import { IconAstro, IconSanity, IconVercel } from "@/components/Icons/Tags";
import {
  IconFigma,
  IconGraphQL,
  IconJavascript,
  IconMongoDB,
  IconNextjs,
  IconNodejs,
  IconReact,
  IconSupabase,
  IconTailwind,
  IconTypeScript,
} from "@/components/Icons/Tecnologys";

export const tecnologys = [
  {
    title: "MongoDB",
    icon: <IconMongoDB />,
  },
  {
    title: "Figma",
    icon: <IconFigma />,
  },
  {
    title: "React",
    icon: <IconReact />,
  },
  {
    title: "Next js",
    icon: <IconNextjs />,
  },
  {
    title: "Javascript",
    icon: <IconJavascript />,
  },
  {
    title: "Tailwind",
    icon: <IconTailwind />,
  },
  {
    title: "GraphQL",
    icon: <IconGraphQL />,
  },
  {
    title: "Supabase",
    icon: <IconSupabase />,
  },
  {
    title: "Node js",
    icon: <IconNodejs />,
  },
  {
    title: "TypeScript",
    icon: <IconTypeScript />,
  },
];

/* Work */

export const Works = [
  {
    work: {
      id: "1",
      title: "Seometric.io",
      date: "2023-03-20",
      dateEnd: "2023-09-20",
      src: "/dashboardIA.webp",
      alt: "Landing page dashboardIA",
      linkGithub: null,
      linkProject: null,
      icons: [
        { title: "Figma", icon: <IconFigma width="20" height="20" /> },
        { title: "Next js", icon: <IconNextjs width="20" height="20" /> },
        { title: "Supabase", icon: <IconSupabase width="20" height="20" /> },
        { title: "Vercel", icon: <IconVercel width="20" height="20" /> },
      ],
    },
  },
  {
    work: {
      id: "2",
      title: "Aini28",
      date: "2022-12-10",
      dateEnd: "2023-01-30",
      src: "/aini.webp",
      alt: "Landing page Aini28",
      linkGithub: null,
      linkProject: "https://aini28.com/",
      icons: [
        { title: "Figma", icon: <IconFigma width="20" height="20" /> },
        { title: "Next js", icon: <IconNextjs width="20" height="20" /> },
        { title: "Sanity", icon: <IconSanity width="20" height="20" /> },
        { title: "Vercel", icon: <IconVercel width="20" height="20" /> },
      ],
    },
  },
];

/* practices */

export const Practices = [
  {
    project: {
      id: "1",
      title: "Tesla",
      paragraph:
        'He desarrollado una réplica de la página de inicio de Tesla en la que he implementado características avanzadas de diseño y navegación. Mediante el uso de la tecnología Intersection Observer, logré un efecto dinámico en el color de la tipografía de la barra de navegación, adaptándolo según la sección que está visible en la pantalla. Además, para una experiencia de desplazamiento suave y centrada, he empleado la propiedad CSS "scroll-snap-type" en los sliders, asegurando que las transiciones entre imágenes sean precisas y atractivas a medida que los usuarios navegan a través del contenido destacado.',
      date: "2023-08-15", // Formato: "YYYY-MM-DD"
      // date: new Date(2023, 0, 1),
      src: "/tesla.webp",
      alt: "Tesla landing",
      linkGithub: "https://github.com/LilNait-S/tesla-landing",
      linkProject: "https://luxury-lily-c4541c.netlify.app/",
      icons: [
        {
          title: "Astro",
          icon: <IconAstro width="20" height="20" />,
        },
        ,
      ],
    },
  },
  {
    project: {
      id: "2",
      title: "Threads clone",
      paragraph:
        "He creado una aplicación similar a Threads, pero con un enfoque en la creación de comunidades. La plataforma permite a los usuarios crear comunidades, realizar publicaciones y personalizar sus perfiles. Esta aplicación ofrece una experiencia interactiva y estructurada mientras fomenta la participación en torno a intereses compartidos.",
      date: "2023-08-12",
      src: "/threads.webp",
      alt: "Threads clone photo",
      linkGithub: "https://github.com/LilNait-S/threads-lilnait",
      linkProject: "https://threads-lilnait.vercel.app/",
      icons: [
        {
          title: "TypeScript",
          icon: <IconTypeScript width="20" height="20" />,
        },
        { title: "Next js", icon: <IconNextjs width="20" height="20" /> },
        { title: "MongoDB", icon: <IconMongoDB width="20" height="20" /> },
        { title: "Vercel", icon: <IconVercel width="20" height="20" /> },
      ],
    },
  },
  {
    project: {
      id: "3",
      title: "Promptopia",
      paragraph:
        "Sitio donde puedes compartir tus mejores prompt con la comunidad, puedes registrarte con tu gmail, crea, edita o comparte tus prompt.",
      date: "2023-06-28",
      src: "/promptopia.webp",
      alt: "Promptopia photo",
      linkGithub: "https://github.com/LilNait-S/promptopia",
      linkProject: "https://promptopia-hw6vooo66-lilnait-s.vercel.app/",
      icons: [
        { title: "Next js", icon: <IconNextjs width="20" height="20" /> },
        { title: "MongoDB", icon: <IconMongoDB width="20" height="20" /> },
        { title: "Vercel", icon: <IconVercel width="20" height="20" /> },
      ],
    },
  },
  {
    project: {
      id: "4",
      title: "Pokepage",
      paragraph:
        "Pokedex de Pokémon, desarrollado con TypeScript y Vite. Esta aplicación web ofrece una experiencia interactiva y rápida para explorar una amplia variedad de Pokémon.",
      date: "2023-01-31",
      src: "/pokepage.webp",
      alt: "Pokepage photo",
      linkGithub: "https://github.com/LilNait-S/pokepage",
      linkProject: "https://pokepage-henna.vercel.app/pokedex",
      icons: [
        {
          title: "TypeScript",
          icon: <IconTypeScript width="20" height="20" />,
        },
        { title: "Figma", icon: <IconFigma width="20" height="20" /> },
        { title: "React", icon: <IconReact width="20" height="20" /> },
        { title: "Tailwind", icon: <IconTailwind width="20" height="20" /> },
      ],
    },
  },
  {
    project: {
      id: "5",
      title: "Yariga",
      paragraph:
        "Dashboard creada para ofrecer inmuebles en venta, alquiler, etc. Cuenta con charts y Auth con google.",
      date: "2023-03-02",
      src: "/yariga.webp",
      alt: "Yariga photo",
      linkGithub: "https://github.com/LilNait-S/refine_dashboard",
      linkProject: "https://yariga-dashboard-refine-lilnait.vercel.app/",
      icons: [
        {
          title: "TypeScript",
          icon: <IconTypeScript width="20" height="20" />,
        },
        { title: "React", icon: <IconReact width="20" height="20" /> },
      ],
    },
  },
  {
    project: {
      id: "6",
      title: "To do List",
      paragraph: "Aplicación para anotar cosas.",
      date: "2023-02-06",
      src: "/todolist.webp",
      alt: "To do List photo",
      linkGithub: "https://github.com/LilNait-S/to-do-list",
      linkProject: "https://to-do-list-six-mu.vercel.app/",
      icons: [
        {
          title: "TypeScript",
          icon: <IconTypeScript width="20" height="20" />,
        },
        { title: "Tailwind", icon: <IconTailwind width="20" height="20" /> },
        { title: "React", icon: <IconReact width="20" height="20" /> },
      ],
    },
  },
  {
    project: {
      id: "7",
      title: "Weather App",
      paragraph: "Aplicación para ver el clima por ciudades, con buscador.",
      date: "2023-03-13",
      src: "/weatherApp.webp",
      alt: "Weather app photo",
      linkGithub: "https://github.com/LilNait-S/to-do-list",
      linkProject: "https://weather-app-rosy-kappa.vercel.app/",
      icons: [
        { title: "Figma", icon: <IconFigma width="20" height="20" /> },
        {
          title: "JavaScript",
          icon: <IconJavascript width="20" height="20" />,
        },
        { title: "React", icon: <IconReact width="20" height="20" /> },
        { title: "Tailwind", icon: <IconTailwind width="20" height="20" /> },
      ],
    },
  },
  {
    project: {
      id: "8",
      title: "Flexibble",
      paragraph: "Dribbble clone, con CRUD y registro con google",
      date: "2023-07-15",
      src: "/flexibble.webp",
      alt: "flexibble app photo",
      linkGithub: "https://github.com/LilNait-S/grafbase-flexibble",
      linkProject: "https://flexibble-lilnait.vercel.app/",
      icons: [
        {
          title: "Next js",
          icon: <IconNextjs width="20" height="20" />,
        },
        {
          title: "GraphQL",
          icon: <IconGraphQL width="20" height="20" />,
        },
        { title: "Tailwind", icon: <IconTailwind width="20" height="20" /> },
      ],
    },
  },
];
