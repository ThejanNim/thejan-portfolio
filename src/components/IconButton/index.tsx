import Image from "next/image";
import Link from "next/link";

export const IconButton = () => {
    return (
        <div className="shadow-md max-w-fit flex items-center gap-2 py-2 px-7 rounded-3xl border border-slate-300 hover:bg-gray-200">
            <Image src="/github.svg" alt="github" width="20" height="20" />
            <Link href="https://github.com/ThejanNim" className="text-sm font-medium">Follow on GitHub</Link>
        </div>
    );
}