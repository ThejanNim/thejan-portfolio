import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-screen-xl m-auto">
      <div>
        <div className="shadow-md max-w-fit flex items-center gap-2 py-2 px-7 rounded-3xl border border-slate-300">
          <Image src="/github.svg" alt="github" width="20" height="20" />
          <p className="text-sm font-medium">Follow on GitHub</p>
        </div>
        <h1 className="text-6xl font-extrabold">Develop, Debug, Deploy</h1>
      </div>
      <div>
        
      </div>
    </main>
  );
}
