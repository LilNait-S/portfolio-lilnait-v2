export const formatDate = (dateString, clientTimeZone) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: clientTimeZone,
  };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "es-ES",
    options
  );
  return `${formattedDate}`;
};
