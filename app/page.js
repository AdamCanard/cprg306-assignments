import Link from "next/link";

export default function Home() {
  return (
    <div id="border" className="flex h-full w-full justify-center items-center">
      <div id="border-s" className="flex flex-col w-2/3 h-2/3">
        <h1 id="header">CPRG 306: Web Development 2 - Assignments</h1>
        <Link
          id="border"
          className="w-20 text-center"
          href="http://localhost:3000/week-2"
        >
          Week-2
        </Link>
        <Link
          id="border"
          className="w-20 text-center"
          href="http://localhost:3000/week-3"
        >
          Week-3
        </Link>
        <Link
          id="border"
          className="w-20 text-center"
          href="http://localhost:3000/week-4"
        >
          Week-4
        </Link>
      </div>
    </div>
  );
}
