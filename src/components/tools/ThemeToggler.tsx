import { useTheme } from "@/context/ThemeContext"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'
import { useThemes } from "@/hooks/data"
import { useLanguage } from "@/context/LanguageContext"

export const ThemeToggler = () => {
    const { setTheme } = useTheme()

    const { language } = useLanguage()

    const themes = useThemes(language)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size={'icon'}
                    className="text-start w-7 h-7 border-transparent"
                >
                    <Sun size={14} className="dark:hidden" />
                    <Moon size={14} className="hidden dark:block" />
                </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setTheme('light')}>{themes.light}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>{themes.dark}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>{themes.system}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
