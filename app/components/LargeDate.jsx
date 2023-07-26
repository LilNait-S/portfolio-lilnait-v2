"use client";

const LargeDate = () => {
  const longDate = new Date(Date.now()).toLocaleString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const weekday = new Date(Date.now()).toLocaleString("es-ES", {
    weekday: "long",
  });
  return (
    <div className="flex flex-col items-start justify-center h-full px-10">
      <span className="font-bold purple_gradient capitalize text-xl leading-5">{weekday}</span>
      <span>{longDate}</span>
    </div>
  );
};

export default LargeDate;
