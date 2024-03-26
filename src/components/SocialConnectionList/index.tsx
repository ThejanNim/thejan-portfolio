import { socialConnections } from "@/data/socialConnections";
import { SocialItem } from "./SocialItem";

export const SocialConnectionList = () => {
    return (
        <ul className="flex gap-x-5 gap-y-4">
            {socialConnections.map(socialConnection => (
                <li key={socialConnection.name}>
                    <SocialItem name={socialConnection.name} url={socialConnection.url} icon={socialConnection.icon} />
                </li>
            ))}
        </ul>
    );
}