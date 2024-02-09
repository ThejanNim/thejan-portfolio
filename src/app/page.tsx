import Globe from "@/components/Globe";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-screen-xl m-auto flex gap-8 items-center">
      <div className="flex gap-y-8 flex-col pr-30">
        <div className="shadow-md max-w-fit flex items-center gap-2 py-2 px-7 rounded-3xl border border-slate-300">
          <Image src="/github.svg" alt="github" width="20" height="20" />
          <Link href="https://github.com/ThejanNim" className="text-sm font-medium">Follow on GitHub</Link>
        </div>
        <h1 className="text-6xl font-extrabold">Associate Software Engineer<span className="text-[#0081f1]">.</span></h1>
        <div>
          <div className="flex gap-4">
            <h1 className="text-4xl font-medium bg-[#cee7fe] text-[#0081f1] p-2 rounded-md flex gap-1.5">
              <Image
                src="/terminal.svg"
                alt="terminal"
                width={28}
                height={28}
              />
              Develop
            </h1>
            <h1 className="text-4xl font-medium bg-[#ffdcc3] text-[#ed5f00] p-2 rounded-md flex gap-1.5">
              <Image src="/debug.svg" alt="terminal" width={28} height={28} />
              Debug
            </h1>
          </div>
          <h1 className="text-4xl font-medium bg-[#ccebd7] text-[#299764] p-2 mt-2 rounded-md flex gap-1.5 w-fit">
            <Image src="/deploy.svg" alt="terminal" width={28} height={28} />
            Deploy
          </h1>
        </div>
        <p>
          GitWonk is an open-source technical documentation tool, designed and
          built focusing on the developer experience.
        </p>
      </div>
      <div>
        <Globe />
      </div>
    </main>
  );
}
