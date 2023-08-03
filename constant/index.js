import { IconSanity, IconVercel } from "@/app/components/Icons/Tags";
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
} from "@/app/components/Icons/Tecnologys";

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
      title: "Seometric.io",
      paragraph:
        "Desarrollé un dashboard que ha permitido potenciar el desarrollo y la efectividad de la IA, brindando a los usuarios un entorno completo para interactuar con ella, entrenarla y optimizar su rendimiento.",
      date: "2023-03-20",
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
    work: {
      title: "Aini28",
      paragraph:
        "Desarrollé un ecommerce de peluches. Incluye filtros portamaño, buscador, carrito de compras y cotizador.También se destaca por ofertas especiales, envíosrápidos y atención al cliente dedicada. El proyecto busca brindar una experiencia de compra emocionante y satisfactoria.",
      date: "2023-01-30",
      src: "/.webp",
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
    Project: {
      title: "Promptopia",
      paragraph:
        "Sitio donde puedes compartir tus mejores prompt con la comunidad, puedes registrarte con tu gmail, crea, edita o comparte tus prompt.",
      date: "2023-06-28", // Formato: "YYYY-MM-DD"
      // date: new Date(2023, 0, 1),
      src: "/promptopia.webp",
      alt: "Promptopia photo",
      LinkGithub: "https://github.com/LilNait-S/promptopia",
      LinkProject: "https://promptopia-hw6vooo66-lilnait-s.vercel.app/",
      icons: [
        { title: "Next js", icon: <IconNextjs width="20" height="20" /> },
        { title: "MongoDB", icon: <IconMongoDB width="20" height="20" /> },
        { title: "Vercel", icon: <IconVercel width="20" height="20" /> },
      ],
    },
  },
  {
    Project: {
      title: "Pokepage",
      paragraph:
        "Pokedex de Pokémon, desarrollado con TypeScript y Vite. Esta aplicación web ofrece una experiencia interactiva y rápida para explorar una amplia variedad de Pokémon.",
      date: "2023-01-31",
      src: "/pokepage.webp",
      alt: "Pokepage photo",
      LinkGithub: "https://github.com/LilNait-S/pokepage",
      LinkProject: "https://pokepage-henna.vercel.app/pokedex",
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
    Project: {
      title: "Yariga",
      paragraph:
        "Dashboard creada para ofrecer inmuebles en venta, alquiler, etc. Cuenta con charts y Auth con google.",
      date: "2023-03-02",
      src: "/yariga.webp",
      alt: "Yariga photo",
      LinkGithub: "https://github.com/LilNait-S/refine_dashboard",
      LinkProject: "https://yariga-dashboard-refine-lilnait.vercel.app/",
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
    Project: {
      title: "To do List",
      paragraph: "Aplicación para anotar cosas.",
      date: "2023-02-06",
      src: "/todolist.webp",
      alt: "To do List photo",
      LinkGithub: "https://github.com/LilNait-S/to-do-list",
      LinkProject: "https://to-do-list-six-mu.vercel.app/",
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
    Project: {
      title: "Weather App",
      paragraph: "Aplicación para ver el clima por ciudades, con buscador.",
      date: "2023-03-13",
      src: "/weatherApp.webp",
      alt: "Weather app photo",
      LinkGithub: "https://github.com/LilNait-S/to-do-list",
      LinkProject: "https://weather-app-rosy-kappa.vercel.app/",
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
];

/* Tags */
export const tagsWork = [
  {
    title: "Todo",
    value: "All Projects",
    name: "Tag Work Filter",
  },
  {
    title: "Independiente",
    value: "Freelance",
    name: "Tag Work Filter",
  },
  {
    title: "Empresas",
    value: "Business",
    name: "Tag Work Filter",
  },
];

export const tagsPractice = [
  {
    title: "Todo",
    value: "All Projects",
    name: "Tag Practice Filter",
  },
  {
    title: "Practica",
    value: "Practice",
    name: "Tag Practice Filter",
  },
  {
    title: "Pruebas técnicas",
    value: "Technical tests",
    name: "Tag Practice Filter",
  },
];
