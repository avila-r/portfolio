import { ThemeToggler } from '@/components/tools/ThemeToggler'
import { LanguageToggler } from '@/components/tools/LanguageToggler'
import { Navigation } from '@/components/header/NavigationMenu'

export const Header = () => {
    return (
        <div className="
            shadow-sm border-b dark:border-w bg-white dark:bg-black mx-auto px-2 fixed top-0 left-0 w-full h-12 flex items-center z-40"
        >
            {/* LEFT-SIDE */}
            <div className="flex-grow flex lg:justify-center md:justify-center">
                <Navigation />
            </div>

            {/* RIGHT-SIDE */}
            <div className="flex items-center space-x-1 absolute right-4 max-md:hidden">
                <LanguageToggler/>
                <ThemeToggler/>
            </div>
        </div>
    )
}
