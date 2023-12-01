"use client";

import { formatHour } from "@/lib/utils";
import { useState, useEffect } from "react";

const Hour = () => {
  const [formattedHour, setFormattedHour] = useState("");

  useEffect(() => {
    // Obtenemos la hora local del cliente
    const clientDate = new Date();

    // Obtenemos la zona horaria del cliente
    const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Formateamos la hora usando la zona horaria del cliente
    const { hour } = formatHour({ clientDate, clientTimeZone });

    setFormattedHour(hour);
  }, []);

  return (
    <span className="text-3xl flex font-bold uppercase justify-center items-center h-full">
      {formattedHour}
    </span>
  );
};

export default Hour;
