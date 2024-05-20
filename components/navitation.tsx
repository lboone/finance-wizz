'use client'
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import NavButton from './nav-button'
import { useMedia } from 'react-use'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'

import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import HeaderLogo from './header-logo'

const routes = [
    {href: "/", label: "Overview"},
    {href: "/transactions", label: "Transactions"},
    {href: "/accounts", label: "Accounts"},
    {href: "/categories", label: "Categories"},
    {href: "/settings", label: "Settings"},
]

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();
    const isMobile = useMedia('(max-width: 1024px)', false)
    const pathname = usePathname()

    const onClick=(href: string) => {
      router.push(href)
      setIsOpen(false)
    }

    if(isMobile) {
      return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="flex items-center gap-x-4 justify-between">
            <Button variant="outline" size="sm" className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition">
              <Menu className="size-4"/>
            </Button>
            <HeaderLogo isMobile={true} />
          </SheetTrigger>
          <SheetContent side="left" className="px-2">
            <nav className="flex flex-col gap-y-2 pt-6">
              <div>
                <HeaderLogo isMobile={true} />
              </div>
              <div>
              {routes.map((route) => (
                 <Button variant={route.href === pathname ? "secondary" : "ghost"} key={route.href} onClick={ ()=> onClick(route.href)} className="w-full justify-start">
                   {route.label}
                 </Button>
              ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      )
    }
  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
        {routes.map((route) => (
            <NavButton
                key={route.href}
                href={route.href}
                label={route.label}
                isActive={pathname === route.href} />
        ))}
    </nav>
  )
}

export default Navigation