import { useLanguage } from "@/context/LanguageContext"
import { useContact, usePages, useSocials } from "@/hooks/data"
import { Button } from "@/components/ui/button"

export const Contact = () => {
    const [ { language }, socials ] =  [useLanguage(), useSocials() ]

    const text = usePages(language).contact

    const form = useContact(language).form

    return (
        <div className="pt-20 lg:pt-32 flex items-center justify-center">
            <div className="px-4 mx-auto lg-px-8 lg:grid lg:grid-cols-2 lg:items-stretch">
                <div className="mb-12 lg:mb-0 lg:flex lg:flex-col lg:justify-center">
                    <h2 className="
                        bg-clip-text text-transparent bg-gradient-to-b from-[#505050] to-[#1f1f1f] dark:from-[#fafafa] dark:to-[#a1a1aa]
                        text-3xl lg:text-4xl lg:leading-tight font-semibold lg:max-w-[12ch]"
                    >
                        {text.content}
                    </h2>

                    <p className=" text-zinc-700 dark:text-zinc-400 mt-3 mb-6 max-w-[50ch] lg:max-w-[30ch]">
                        {text.description}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                        {socials.map(({ link, icon }, key) => (
                            <a key={key} href={link} target="_blank" className="w-9 h-9 grid place-items-center ring-inset ring-2 ring-zinc-100 active:bg-zinc-200 shadow-lg rounded-lg bg-transparent hover:bg-zinc-100/95 transition-colors hover:border-transparent hover:shadow-none dark:bg-zinc-200 dark:border-transparent dark:hover:bg-zinc-300 dark:active:bg-zinc-300 active:border-transparent dark:hover:border-transparent">
                                <img src={icon} width={18} height={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <form method="POST" action="https://getform.io/f/akkgmdxa" className="xl:pl-20 2xl:pl-30">
                    <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-zinc-700 dark:text-zinc-200 text-sm font-semibold mb-2">{form.name.label}</label>
                            <input type="text" name="name" id="name" autoComplete="name" required placeholder={form.name.placeholder} className="block outline-none w-full px-3 py-3 text-sm bg-zinc-200/55 hover:ring-zinc-300 dark:bg-zinc-800 dark:hover:ring-zinc-50/5 focus:ring-sky-300 focus:ring-2 rounded-xl ring-1 ring-inset ring-transparent transition-shadow"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-zinc-700 dark:text-zinc-200 text-sm font-semibold mb-2">{form.email.label}</label>
                            <input type="text" name="email" id="email" autoComplete="email" required placeholder={form.email.placeholder} className="block outline-none w-full px-3 py-3 text-sm bg-zinc-200/55 hover:ring-zinc-300 dark:bg-zinc-800 dark:hover:ring-zinc-50/5 focus:ring-sky-300 focus:ring-2 rounded-xl ring-1 ring-inset ring-transparent transition-shadow"/>
                        </div>
                        <div className="mb-4 col-span-2">
                            <label htmlFor="message" className="block text-zinc-700 dark:text-zinc-200 text-sm font-semibold mb-2">{form.message.label}</label>
                            <textarea name="message" id="message" autoComplete="message" required placeholder={form.message.placeholder} rows={6} className="block outline-none w-full px-3 py-3 text-sm bg-zinc-200/55 hover:ring-zinc-300 dark:bg-zinc-800 dark:hover:ring-zinc-50/5 focus:ring-sky-300 focus:ring-2 rounded-xl ring-1 ring-inset ring-transparent transition-shadow resize-none"/>
                        </div>
                    </div>

                    <Button type="submit" size="sm" className="transition-colors group w-full lg:w-16 bg-gradient-to-r from-[#1f1f1f] to-[#3a3a3a] dark:from-[#fafafa] dark:to-[#a1a1aa] hover:from-[#4b4b4b]/90 hover:to-[#6a6a6a]/90 dark:hover:from-[#d4d4d4]/90 dark:hover:to-[#74747a]/90 hover:shadow-lg">
                        {form.submit}
                    </Button>
                </form>
            </div>
        </div>
    )
}
