import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggler } from '@/components/tools/ThemeToggler';
import { LanguageToggler } from '@/components/tools/LanguageToggler';
import { useRoutes } from '@/hooks/data';
import {
    NavigationMenu,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/context/LanguageContext';

export const Navigation = () => {
    const { language } = useLanguage()

    const routes = useRoutes(language)

    const options = routes.map(({ label, link }, key) => (
        <div key={key} className='font-semibold grid items-center h-8 lg:px-4 px-2 text-sm tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors'>
            <a href={link}>
                <NavigationMenuLink className="
                    text-xs lg:text-sm px-6 inline-flex items-center
                    text-zinc-700 dark:text-gray-300
                    relative transition-colors duration-200
                    hover:text-zinc-900 dark:hover:text-white
                    rounded-lg"
                >
                    {label}
                </NavigationMenuLink>
            </a>
        </div>
    ))

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size={'icon'}
                        className="md:hidden text-start w-7 h-7 bg-zinc-100 border-bg-zinc-100 dark:border-stone-900 dark:bg-stone-900"
                    >
                        <Menu size={14}/>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" className='bg-zinc-100 dark:bg-black'>
                    <div className='w-full flex justify-center p-1 rounded-md space-x-2'>
                        <LanguageToggler/>
                        <ThemeToggler/>
                    </div>

                    <NavigationMenu className='
                        flex flex-col justify-between top-full bg-white dark:bg-zinc-50/10
                        rounded-2xl dark:ring-zinc-50/5 scale-100
                        '
                    >
                        {options}
                    </NavigationMenu>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* NAVBAR */}
            <NavigationMenu className='
                mb-2 flex justify-between max-md:hidden top-full mt-2 min-w-40bg-zinc-50/10 
                rounded-2xl ring-zinc-50/5 opacity-100 blur-10 scale-100'
            >
                {options}
            </NavigationMenu>
        </>
    )
}
