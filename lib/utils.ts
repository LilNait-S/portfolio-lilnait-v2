import { Practices } from "@/constant";

interface FormatDateProps {
  formatDate: string;
  format: any
}

export const formatDate = ({ formatDate, format }: FormatDateProps) => {
  const dateTime = new Date(formatDate);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = format.dateTime(dateTime, options);

  return date;
};


interface FormatHourProps {
  clientDate: Date;
  clientTimeZone: string;
}

export const formatHour = ({ clientDate, clientTimeZone }: FormatHourProps) => {
  const hour = clientDate.toLocaleString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: clientTimeZone,
  });
  return { hour };
};

interface FormatDateLongProps {
  clientDate: Date;
  clientTimeZone: string;
  format: any;
}

export const formatDateLong = ({
  clientDate,
  clientTimeZone,
  format,
}: FormatDateLongProps) => {
  const longDate = format.dateTime(clientDate, {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: clientTimeZone,
  });

  const weekday = format.dateTime(clientDate, {
    weekday: "long",
    timeZone: clientTimeZone,
  });

  return { weekday, longDate };
};

const compareDates = (
  a: { project: { date: string } },
  b: { project: { date: string } }
) => {
  const dateA = new Date(a.project.date);
  const dateB = new Date(b.project.date);
  return dateB.getTime() - dateA.getTime();
};


export const getProjects = ({ addParagraph } : any) => {
  const sortedPractices = [...Practices].sort(compareDates);

  const updatedPractices = sortedPractices.map((item) => {
    const matchingNewWork = addParagraph.find(
      (nw: any) => nw.id === item.project.id
    );
    if (matchingNewWork) {
      return {
        project: {
          ...item.project,
          paragraph: matchingNewWork.paragraph,
        },
      };
    }
    return item;
  });

  return updatedPractices;
};
