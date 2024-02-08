import Image from "next/image";
import Link from "next/link";

export default function TopNavigation() {
  return (
    <header>
      <nav className="flex justify-between max-w-screen-xl m-auto py-6">
        <Link href="/">
          <Image src="/example-logo.png" alt="" width={160} height={30} />
        </Link>
        <div className="flex items-center">
          <Link className="px-4 text-gray-600 font-medium" href="/">Blog</Link>
          <Link className="px-4 text-gray-600 font-medium" href="/">Projects</Link>
        </div>
      </nav>
    </header>
  );
}
