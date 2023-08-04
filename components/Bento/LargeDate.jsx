"use client";

import { useState, useEffect } from "react";

const LargeDate = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const [weekday, setWeekday] = useState("");

  useEffect(() => {
    // Obtenemos la fecha y el día de la semana local del cliente
    const clientDate = new Date();
    const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Formateamos la fecha usando la zona horaria del cliente
    const longDate = clientDate.toLocaleString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: clientTimeZone,
    });

    const clientWeekday = clientDate.toLocaleString("es-ES", {
      weekday: "long",
      timeZone: clientTimeZone,
    });

    setFormattedDate(longDate);
    setWeekday(clientWeekday);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-start justify-center">
        <span className="font-bold purple_gradient capitalize text-xl leading-5">
          {weekday}
        </span>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default LargeDate;
