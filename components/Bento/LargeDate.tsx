"use client";

import { formatDateLong } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useFormatter } from "next-intl";

const LargeDate = () => {
  const format = useFormatter();
  const [formattedDate, setFormattedDate] = useState("");
  const [weekday, setWeekday] = useState("");

  useEffect(() => {
    const clientDate = new Date();
    const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const { weekday, longDate } = formatDateLong({
      clientDate,
      clientTimeZone,
      format,
    });

    setWeekday(weekday);
    setFormattedDate(longDate);
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
