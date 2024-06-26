import React from 'react'
import HeaderLogo from './header-logo'
import Navigation from './navitation'
import { UserButton , ClerkLoading, ClerkLoaded} from '@clerk/nextjs'
import { Loader, Loader2 } from 'lucide-react'
import WelcomeMessage from './welcome-message'

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 py-8 pb-36 px-4 lg:px-14">
        <div className="max-w-screen-2xl mx-auto">
            <div className="w-full flex items-center justify-between mb-14">
                <div className="flex items-center lg:gap-x-16">
                    <HeaderLogo />
                    <Navigation />
                </div>
                <ClerkLoaded>
                <UserButton afterSignOutUrl="/"/>
                </ClerkLoaded>
                <ClerkLoading>
                  <Loader2 className=" size-12 animate-spin text-blue-400/75" />
                </ClerkLoading>
            </div>
            <WelcomeMessage />
        </div>
    </header>
  )
}

export default Header