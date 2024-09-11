import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import Arrow from "../../public/Arrow.png";
import { ItemList } from "./item-list";

export default function Page() {
  return (
    <div id="border" className="flex h-full w-full justify-center items-center">
      <Link
        id="border-s"
        className="absolute top-4 left-4 w-8 h-8 "
        href="http://localhost:3000/"
      >
        <Image src={Arrow} width={32} height={32} alt="arrow" />
      </Link>
      <div className="flex flex-col w-2/3 h-2/3">
        <ItemList />
      </div>
    </div>
  );
}
