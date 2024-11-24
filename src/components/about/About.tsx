import { useLanguage } from '@/context/LanguageContext';
import { usePages, useAboutItems } from '@/hooks/data';

export const About = () => {
    const { language } = useLanguage()

    const text = usePages(language).about

    const items = useAboutItems(language)

    return (
        <div className="pt-20 lg:pt-32 flex items-center justify-center mb-40">
            <div className="px-4 mx-auto lg-px-8 xl:max-w-6xl">
                <div className="bg-zinc-200/25 dark:bg-zinc-800/25 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-700 dark:text-gray-200 mb-4 md:mb-8 md:text-xl md:max-w-[60ch] ">
                        {text.content}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7 text-zinc-700 dark:text-gray-200">
                        {items.map(({label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                    <span className="font-semibold md:text-2xl">+</span>
                                </div>

                                <p>{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
