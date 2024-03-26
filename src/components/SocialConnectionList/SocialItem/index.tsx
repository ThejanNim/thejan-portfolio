import { IconType } from "react-icons";

type SocialItemProps = {
    name: string;
    url: string;
    icon?: IconType;
};

export const SocialItem = (props: SocialItemProps) =>
    <a href={props.url} className="w-fit flex items-center border-b border-zinc-200">
        {props?.icon && <props.icon className="text-zinc-500"/>}&nbsp;{props.name}
    </a>;
