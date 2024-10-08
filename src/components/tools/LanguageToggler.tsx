import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/button"
import { Earth } from "lucide-react"
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent, 
    DropdownMenuItem 
} from "@/components/ui/dropdown-menu"
import { useLanguages } from "@/hooks/data"


export const LanguageToggler = () => {
    const languages = useLanguages(useLanguage().language)

    const { setLanguage } = useLanguage()

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline" size={'icon'} className="text-start w-7 h-7 border-transparent">
                        <Earth size={14}/>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => {setLanguage('br')}}>{languages.br}</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {setLanguage('en')}}>{languages.en}</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
