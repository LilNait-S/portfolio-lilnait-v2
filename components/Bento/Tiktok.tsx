import Link from "next/link";
import { IconTiktok } from "../Icons";

const Tiktok = () => {
  return (
    <Link
      href="https://www.tiktok.com/@lilnait.dev"
      className="flex flex-col justify-center items-center h-full p-8"
      target="_blank"
    >
      <IconTiktok width="150" height="150" />
      <span className="text-2xl font-semibold">@Lilnait.dev</span>
    </Link>
  );
};

export default Tiktok;
