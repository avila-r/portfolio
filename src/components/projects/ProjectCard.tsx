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
    title:     string
    tags:      string[]
    hovercard: ProjectHoverCard
    drawer:    ProjectDrawer
}

export const ProjectCard = ({ title, tags, hovercard, drawer }: ProjectCardProps) => {
    return (
        <Drawer>
            <HoverCard>
                <div className="
                    flex justify-between ring-2 ring-inset ring-zinc-100 dark:ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group dark:active:bg-zinc-700/60 active:bg-zinc-300/95"
                >
                    <div>
                        <h3 className="ml-2 mt-1 text-[16px] text-zinc-600 dark:text-zinc-200 font-semibold mb-3">
                            {title}
                        </h3>

                        <ScrollArea className="w-60 sm:w-96 whitespace-nowrap rounded-md mr-2">
                                <div className="flex w-max space-x-2 p-2">
                                    {tags.map((label, key) => (
                                        <span key={key} className="h-8 text-sm text-zinc-600 bg-zinc-50 dark:text-zinc-400 dark:bg-zinc-50/5 grid items-center px-3 rounded-lg">
                                            {label}
                                        </span>
                                    ))}
                                </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
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

                    {/* ON HOVER */}
                    <HoverCardContent align="center" side="left">
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
                                    <Button onClick={() => window.open(drawer.gotoButton.link, '_blank', "noopener,noreferrer")}>{drawer.gotoButton.label}</Button>
                                    <DrawerClose>
                                        <Button variant="outline">{drawer.closeButton}</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </div>
                        </div>
                    </DrawerContent>
                </div>
            </HoverCard>
        </Drawer>
    )
}
