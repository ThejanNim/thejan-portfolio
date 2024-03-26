import Image from "next/image";
import { SocialConnectionList } from "../SocialConnectionList";

import BG_grid from './assets/hero-grid.avif';

export const HeroSection = () => {
    return (
        <div className="flex">
            <div className="max-w-2xl lg:mt-32 mt-20">
                <h1 className="font-incognito font-semibold text-3xl sm:text-5xl mb-6 min-w-full lg:min-w-[700px] lg:leading-[3.7rem] leading-tight">
                    Software Engineer, Freelancer <span className="text-blue-600">&</span> Open-source maintainer<span className="text-blue-600">,</span>
                </h1>
                <p className="text-base text-zinc-600 leading-relaxed mb-10">
                    I&apos;m Thejan Nimsara, an associate software engineer passionate about learning and
                    solve real-world problems that is beneficial to developers and world at large.
                </p>
                <SocialConnectionList />
            </div>
            <Image src={BG_grid} alt="grid" className="w-full h-[550px]" />
        </div>
    );
};
