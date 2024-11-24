import { CalendarIcon } from "@radix-ui/react-icons"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Avatar,
    AvatarImage,
} from '@/components/ui/avatar'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import { SkillDrawer, SkillHoverCard } from "@/hooks/data"

interface SkillCardProps {
    img: string
    label: string
    description: string
    drawer: SkillDrawer
    hovercard: SkillHoverCard
}

export const SkillCard = ({img, label, description, drawer, hovercard}: SkillCardProps) => {
    return (
        <HoverCard>
            <Drawer>
                <div className="flex justify-between ring-2 ring-inset ring-zinc-100 dark:ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group dark:active:bg-zinc-700/60 active:bg-zinc-300/95">
                    <div className="items-center group flex gap-3">
                        <figure className="flex items-center bg-zinc-100 dark:bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-900 transition-colors">
                            <img 
                                src={img}
                                width={32}
                                height={32}
                                alt={label}
                            />
                        </figure>

                        <div>
                            <h3>{label}</h3>
                            <p className="text-zinc-700 dark:text-zinc-400 text-sm">
                                {description}
                            </p>
                        </div>
                    </div>

                    <DrawerTrigger>
                        <HoverCardTrigger>
                            <div className="w-8 h-8 rounded-lg grid place-items-center bg-transparent text-zinc-800 dark:text-zinc-100 shrink-0">
                                <span aria-hidden="true">
                                    <Info size={18} />
                                </span>
                            </div>
                        </HoverCardTrigger>
                    </DrawerTrigger>


                    {/* ON CLICK */}
                    <DrawerContent>
                        <div className="mx-auto max-w-md px-6">
                            { /* HEADER */ }
                            <div>
                                <DrawerHeader className="flex items-center justify-center">
                                    <DrawerTitle>{drawer.title}</DrawerTitle>
                                </DrawerHeader>
                            </div>

                            { /* CONTENT */ }
                            <div>
                                <div className="prose-sm sm:prose dark:text-zinc-200" 
                                    dangerouslySetInnerHTML={{ __html: drawer.content }} 
                                />
                            </div>

                            { /* FOOTER */ }
                            <div>
                                <DrawerFooter className="flex items-center">
                                    <Button onClick={() => { window.open(drawer.gotoButton.link), '_blank' }}>{drawer.gotoButton.label}</Button>
                                    <DrawerClose asChild>
                                        <Button variant="outline">{drawer.closeButton}</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </div>
                        </div>
                    </DrawerContent>

                    {/* ON HOVER */}
                    <HoverCardContent align="center" side="left">
                        <div className="flex justify-between space-x-4">
                            <Avatar>
                                <AvatarImage src={img} className="w-full h-full object-contain" />
                            </Avatar>
                            <div className="space-y-1">
                                <h4 className="text-sm font-semibold">{hovercard.title}</h4>
                                <p className="text-sm">
                                    {hovercard.content}
                                </p>
                                <div className="flex items-center pt-2">
                                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                                    <span className="text-xs text-muted-foreground">
                                        {hovercard.expPeriod}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </div>
            </Drawer>
        </HoverCard>
    )
}
