import { Practices } from "@/constant";

export const formatDate = ({ formatDate, format }) => {
  const dateTime = new Date(formatDate);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = format.dateTime(dateTime, options);

  return date;
};

export const formatHour = ({ clientDate, clientTimeZone }) => {
  const hour = clientDate.toLocaleString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: clientTimeZone,
  });
  return { hour };
};

export const formatDateLong = ({ clientDate, clientTimeZone, format }) => {
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



const compareDates = (a, b) => {
  const dateA = new Date(a.project.date);
  const dateB = new Date(b.project.date);
  return dateB - dateA;
};

export const getProjects = ({ addParagraph }) => {
  const sortedPractices = [...Practices].sort(compareDates);

  const updatedPractices = sortedPractices.map((item) => {
    const matchingNewWork = addParagraph.find((nw) => nw.id === item.project.id);
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
