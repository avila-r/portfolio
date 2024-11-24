import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { usePages } from "@/hooks/data"
import { useLanguage } from "@/context/LanguageContext"
import { toast } from "sonner"
import { 
    Avatar, 
    AvatarImage, 
    AvatarFallback 
} from "@/components/ui/avatar"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export const Hero = () => {
    const { language } = useLanguage()

    const text = usePages(language).hero

    const cv = `/files/Renato Ávila - ${language === 'br' ? 'Currículo' : 'Resume'}.pdf`

    return (
        <div className="pt-28 lg:pt-36 flex items-center justify-center">
            <div className="px-4 mx-auto lg:px-8 xl:max-w-6xl lg:grid-cols-2 items-center lg:gap-10">
                <div>
                    <div className="flex items-center gap-3 justify-center md:justify-start lg:justify-start ">
                        <Avatar>
                            <AvatarImage src="/images/avatar-1.png" width={40} height={40}></AvatarImage>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>

                        {/* TITLE */}
                        <div className="flex items-center gap-1.5 text-zinc-500 dark:text-gray-300 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>

                            {text.title}
                        </div>
                    </div>

                    {/* SUBTITLE */}
                    <h2 className="
                        text-center lg:text-start md:text-start sm:text-center bg-clip-text text-transparent bg-gradient-to-b from-[#505050] to-[#1f1f1f] dark:from-[#fafafa] dark:to-[#a1a1aa] 
                        max-w-[20ch] sm:max-w-[20ch] lg:max-w-[20ch] md:max-w-[15ch] mt-5 mb-8 lg:mb-10 text-5xl leading-right font-semibold lg:text-[55px] lg:leading-[1.15]"
                    >
                        {text.subtitle}
                    </h2>

                    <AlertDialog>
                        <AlertDialogTrigger>

                        </AlertDialogTrigger>

                    </AlertDialog>

                    <div className="flex items-center justify-center md:justify-start lg:justify-start gap-3">
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <Button 
                                    size="sm" 
                                    className="bg-gradient-to-r from-[#1f1f1f] to-[#3a3a3a] dark:from-[#fafafa] dark:to-[#a1a1aa] transition-all duration-300 hover:from-[#4b4b4b]/90 hover:to-[#6a6a6a]/90 dark:hover:from-[#d4d4d4]/90 dark:hover:to-[#74747a]/90 hover:shadow-lg"
                                >
                                    <div className="flex items-center space-x-2 text-[12px]">
                                        <span>{text.download_cv}</span>
                                        <Download size={14} />
                                    </div>
                                </Button>
                            </AlertDialogTrigger>
                            
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        {text.alert?.title}
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        {text.alert?.description}
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
            
                                <AlertDialogFooter>
                                    <AlertDialogCancel>{text.alert?.cancel}</AlertDialogCancel>
                                    <AlertDialogAction>
                                        <a download href={cv} 
                                            onClick={() => { toast((language === 'br' ? "Currículo baixado com sucesso!" : "Resume downloaded successfully!"), {
                                                description: (language === 'br' ? "Obrigado por baixar o currículo." : "Thank you for downloading the resume."),
                                            })}}
                                        >
                                            {text.alert?.action}
                                        </a>
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>

                </div>
            </div>
        </div>
    )
}
