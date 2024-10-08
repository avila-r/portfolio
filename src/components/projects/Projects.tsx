import { useLanguage } from "@/context/LanguageContext"
import { usePages, useWorks } from "@/hooks/data"
import { ProjectCard } from "@/components/projects/ProjectCard"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export const Projects = () => {
    const { language } = useLanguage()

    const text = usePages(language).work

    const works = useWorks(language)

    return (
        <div className="pt-20 lg:pt-32 flex items-center justify-center mt-20">
            <div className="px-4 mx-auto lg-px-8">
                <h2 className="
                    bg-clip-text text-transparent bg-gradient-to-b from-[#505050] to-[#1f1f1f] dark:from-[#fafafa] dark:to-[#a1a1aa]
                    text-3xl lg:text-4xl lg:leading-tight font-semibold text-center"
                >
                    {text.content}
                </h2>

                <div className="mt-20 mb-40">
                    <Carousel className="w-full" orientation="horizontal" opts={{ align: "start", loop: true }}>
                        <CarouselPrevious/> <CarouselNext/>

                        <CarouselContent className="-mt-1 lg:w-[1050px] md:w-[600px] w-[400px]">
                            {works.map(({imgSrc, title, tags, projectLink, hovercard, drawer}, index) => (
                                <CarouselItem key={index} className="pl lg:basis-1/3 md:basis-1/2">
                                    <div className="p-1">
                                        <ProjectCard img={imgSrc} title={title} tags={tags} source={projectLink} hovercard={hovercard} drawer={drawer}/>
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
