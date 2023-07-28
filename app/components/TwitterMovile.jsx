import Link from "next/link";

const TwitterMovile = () => {
  return (
    <Link
      href="/"
      className="flex flex-col justify-center items-center h-full p-8 "
    >
      <img
        src="/twitter.svg"
        className="h-full w-full object-contain text-purple-600"
      />
      <span className="text-2xl font-semibold">@LilnaitDev</span>
    </Link>
  );
};

export default TwitterMovile;
