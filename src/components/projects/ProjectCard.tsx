import { Info } from "lucide-react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { 
    ProjectDrawer, 
    ProjectHoverCard 
} from "@/hooks/data"
import {
    ScrollArea,
    ScrollBar
} from '@/components/ui/scroll-area'
import {
    Avatar,
    AvatarImage,
} from '@/components/ui/avatar'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

interface ProjectCardProps {
    img:       string
    title:     string
    tags:      string[]
    source:    string
    hovercard: ProjectHoverCard
    drawer:    ProjectDrawer
}

export const ProjectCard = ({ img, title, tags, source, hovercard, drawer }: ProjectCardProps) => {
    const redirect = () => {
        window.open(source, "_blank", "noopener,noreferrer")
    }

    return (
        <Drawer>
            <HoverCard>
                <div className="
                relative p-4 rounded-2xl ring-2 ring-inset ring-zinc-100 dark:ring-zinc-50/10
                hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group
                dark:active:bg-zinc-700/60 active:bg-zinc-300/95"
                >
                    <HoverCardTrigger>
                        <button onClick={redirect} className="w-full">
                            <figure className="bg-zinc-700 overflow-hidden aspect-square rounded-lg mb-4">
                                <img src={img} alt={title} loading='lazy' className="w-full h-full object-cover" />
                            </figure>
                        </button>
                    </HoverCardTrigger>

                    {/* ON CLICK */}
                    <DrawerContent>
                        <div className="mx-auto max-w-md">
                            { /* HEADER */ }
                            <div>
                                <DrawerHeader className="flex items-center justify-center">
                                    <DrawerTitle>{drawer.title}</DrawerTitle>
                                </DrawerHeader>
                            </div>

                            { /* CONTENT */ }
                            <div>
                                <div className="prose dark:text-zinc-200" 
                                    dangerouslySetInnerHTML={{ __html: drawer.content }} 
                                />
                            </div>

                            { /* FOOTER */ }
                            <div>
                                <DrawerFooter className="flex items-center">
                                    <Button onClick={() => window.open(drawer.gotoButton.link, '_blank')}>{drawer.gotoButton.label}</Button>
                                    <DrawerClose>
                                        <Button variant="outline">{drawer.closeButton}</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </div>
                        </div>
                    </DrawerContent>

                    <div className="flex items-center justify-between gap-2">
                        <div className="">
                            <h3 className="text-[18px] text-zinc-600 dark:text-zinc-200 font-semibold mb-3">
                                {title}
                            </h3>

                            <ScrollArea type="always" className="h-12 w-full">
                                <div className="mt-1 px-1 flex flex-wrap gap-2">
                                    {tags.map((label, key) => (
                                        <span key={key} className="h-8 text-sm text-zinc-600 bg-zinc-50 dark:text-zinc-400 dark:bg-zinc-50/5 grid items-center px-3 rounded-lg">
                                            {label}
                                        </span>
                                    ))}
                                </div>
                                <ScrollBar />
                            </ScrollArea>
                        </div>

                        <div className="flex justify-end mt-7">
                            
                        <DrawerTrigger>
                            <div className="w-8 h-8 rounded-lg grid place-items-center bg-zinc-700 dark:bg-zinc-800 text-zinc-100 shrink-0">
                                <span aria-hidden="true">
                                    <Info size={18} />
                                </span>
                            </div>
                        </DrawerTrigger>
                        </div>

                        {/* ON HOVER */}
                        <HoverCardContent align="center" side="top">
                            <div className="flex justify-between space-x-4">
                                <Avatar>
                                    <AvatarImage src={hovercard.srcIcon} />
                                </Avatar>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold">{hovercard.srcName}</h4>
                                    <p className="text-sm">
                                        {hovercard.projectBrief}
                                    </p>
                                    <div className="flex items-center pt-2">
                                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                                        <span className="text-xs text-muted-foreground">
                                            {hovercard.createdIn}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </div>
                </div>
            </HoverCard>
        </Drawer>
    )
}
