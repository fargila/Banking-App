'use client'

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname()
  
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image 
                    src="/public/icons/hamburger.svg"
                    width={30}
                    height={30}
                    alt='menu'
                    className='cursor-pointer'/>
                </SheetTrigger>
                <SheetContent side='left'>
                    <Link 
                    className='flex mb-12 cursor-pointer items-center gap-2'
                    href="/">
                        <Image
                        className='size-[24px] max-xl:size-14'
                        src='/public/icons/logo.svg'
                        width={34}
                        height={34}
                        alt='Horizon logo'/>

                        <h1 className='sidebar-logo'>Horizon</h1>
                    </Link>

                    {sidebarLinks.map((item)=> {
                    const isActive = pathname === item.route || 
                    pathname.startsWith(`${item.route}`)

                    return (
                        <Link 
                        className={cn('sidebar-link', {
                        'bg-bank-gradient': isActive
                        })}
                        key={ item.label }
                        href={ item.route }>
                            { 
                                <div className='relative size-6'>
                                <Image
                                className={cn(
                                    { 'brightness-[3] invert-0': isActive }
                                )}
                                src={item.imgURL}
                                alt={item.label}
                                fill/>
                                </div> 
                            }
                            <p className={cn('sidebar-label', {'text-white': isActive})}>
                                { item.label }
                            </p>
                        </Link> 
                    )
                    })}
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav