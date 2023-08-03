import Link from "next/link";
import { IconTwitterX } from "../Icons";

const Twitter = () => {
  return (
    <Link
      href="https://twitter.com/lilnaitDev"
      className="flex flex-col justify-center items-center h-full p-8"
      target="_blank"
    >
      <IconTwitterX width="150" height="150" />
      <span className="text-2xl font-semibold">@LilnaitDev</span>
    </Link>
  );
};

export default Twitter;
