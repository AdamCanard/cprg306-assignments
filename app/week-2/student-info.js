import Link from "next/link";

export function StudentInfo() {
  return (
    <div className="w-2/3 h-2/3">
      <div id="window" className="flex flex-col">
        <h1 id="title">ADAM CUNARD</h1>
        <div id="window-i-nb">
          <div className="flex flex-col flex-wrap w-20 text-center  ">
            <Link
              id="border"
              href="https://github.com/AdamCanard/cprg306-assignments"
            >
              GitHub!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
