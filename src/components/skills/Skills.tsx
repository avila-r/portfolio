import { SkillCard } from "@/components/skills/SkillCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { usePages, useSkills } from "@/hooks/data"
import { useLanguage } from "@/context/LanguageContext"

export const Skills = () => {
    const language = useLanguage().language

    const text = usePages(language).skill

    const skills = useSkills(language)

    return (
        <div className="pt-20 lg:pt-32 flex items-center justify-center mt-20">
            <div className="px-4 mx-auto lg-px-8">
                <h2 className="
                    bg-clip-text text-transparent bg-gradient-to-b from-[#505050] to-[#1f1f1f] dark:from-[#fafafa] dark:to-[#a1a1aa]
                    text-3xl lg:text-4xl lg:leading-tight font-semibold text-center"
                >
                    {text.content}
                </h2>

                <p className="text-center text-zinc-700 dark:text-zinc-400 mt-3 mb-8 max-w-[60ch]">
                    {text.description}
                </p>

                <div className="mt-40 mb-40">
                    <Carousel className="w-full" orientation="vertical" opts={{ align: "start", loop: true }}>
                        <CarouselPrevious/> <CarouselNext/>
                        <CarouselContent className="-mt-1 h-[300px]">
                            {skills.map(({imgSrc, label, desc, hovercard, drawer}, index) => (
                                <CarouselItem key={index} className="pl-1 basis-1">
                                    <div className="p-1">
                                        <SkillCard img={imgSrc} label={label} description={desc} hovercard={hovercard} drawer={drawer}/>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
