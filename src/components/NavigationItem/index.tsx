import Link from "next/link";

type NavigationItemProps = {
    children: React.ReactNode;
}

export const NavigationItem = (props: NavigationItemProps) =>
    <Link href="" className="font-incognito text-base text-zinc-600" >{props.children}</Link>;
