const Hour = () => {
  const formatedHours = new Date(Date.now()).toLocaleString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <span className="text-3xl flex font-bold uppercase justify-center items-center h-full">
      {formatedHours}
    </span>
  );
};

export default Hour;
