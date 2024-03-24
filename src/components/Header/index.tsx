import Link from "next/link";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const Header = () => {
    const navigationItems = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'About',
            href: '/'
        },
        {
            title: 'Projects',
            href: '/'
        },
        {
            title: 'Blog',
            href: '/'
        }
    ];

    return (
        <header className="border-b border-zinc-200">
            <div className="flex justify-between max-w-7xl m-auto px-16 py-6 w-full items-center">
                <Link href='/' className="font-semibold">Thejan Nim.</Link>
                <nav className="md:block hidden">
                    <ul className="flex items-center gap-8">
                        {navigationItems.map(({ title, href }) => (
                            <li key={href}>
                                <Link href={href} className="font-incognito text-base text-zinc-600" >{title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <ThemeSwitcher />
            </div>
        </header>
    );
}
