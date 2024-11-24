import { useLanguage } from "@/context/LanguageContext"
<<<<<<< HEAD
import { useFooter, usePages, useRoutes, useSocials } from "@/hooks/data"
import { Button } from "@/components//ui/button"
import { ChevronRight } from "lucide-react"
=======
import { Button } from "@/components//ui/button"
import { ChevronRight } from "lucide-react"
import { 
    useFooter, 
    usePages, 
    useRoutes, 
    useSocials 
} from "@/hooks/data"
>>>>>>> b37fd21 (.)

export const Footer = () => {
    const { language } = useLanguage()

    const [ text, socials, routes, labels ] = [ usePages(language).footer, useSocials(), useRoutes(language), useFooter(language) ]

    return (
        <footer className="pt-20 lg:pt-32 flex items-center justify-center mt-2">
            <div className="px-4 mx-auto lg-px-8">
                <div className="lg:grid lg:grid-cols-2 gap-20">
                    <div className="mb-8">
                        <h2 className="
                            text-start bg-clip-text text-transparent bg-gradient-to-b from-[#505050] to-[#1f1f1f] dark:from-[#fafafa] dark:to-[#a1a1aa] 
                            max-w-[15ch] md:max-w-[15ch] lg:mb-10 md:text-4xl text-3xl lg:text-5xl leading-right font-semibold lg:leading-[1.15]
                            mb-8 lg:max-w-[12ch]
                            "
                        >
                            {text.content}
                        </h2>

                        <Button 
                            size="sm" 
                            className="bg-gradient-to-r from-[#1f1f1f] to-[#3a3a3a] dark:from-[#fafafa] dark:to-[#a1a1aa] transition-all duration-300 hover:from-[#4b4b4b]/90 hover:to-[#6a6a6a]/90 dark:hover:from-[#d4d4d4]/90 dark:hover:to-[#74747a]/90 hover:shadow-lg"
                        >
                            <a href="https://wa.me/32999948746?text=Oi!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços." target="_blank">
                                
                                <div className="flex items-center space-x-2 text-[12px]">
                                    <span>{labels.project}</span>
                                    <ChevronRight size={14} />
                                </div>
                            </a>
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2">{labels.sitemap}</p>

                            <ul>
                                {routes.map(({ label, link }, key) => (
                                    <li key={key}>
                                        <a href={link} className="block text-sm text-zinc-600 dark:text-zinc-400 py-1 transition-colors hover:text-zinc-700 black:hover:text-zinc-200">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="ml-4">
                            <p className="mb-2">{labels.socials}</p>

                            <ul>
                                {socials.map(({ label, link }, key) => (
                                    <li key={key}>
                                        <a href={link} target="_blank" className="block text-sm text-zinc-600 dark:text-zinc-400 py-1 transition-colors hover:text-zinc-700 black:hover:text-zinc-200">
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center pt-10 mb-8">
                    <p className="text-zinc-500 text-sm">
                        &copy; 2024 <span className="text-black dark:text-zinc-200">•</span> <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#505050] to-[#1f1f1f] dark:from-[#fafafa] dark:to-[#a1a1aa]">R. Ávila</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
