import Link from "next/link";

type SocialItemProps = {
    name: string;
    url: string;
    icon: any;
}

export const SocialItem = (props: SocialItemProps) =>
    <Link href={props.url}>{props.icon} {props.name}</Link>;
