import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface HeaderLogoProps {
  isMobile?: boolean
}

const HeaderLogo = ({isMobile = false}: HeaderLogoProps) => {
  return (
    <Link href="/">
        <div className={cn("items-center",isMobile ? "flex" : "hidden lg:flex")}>
          <Image src="/iconHome.png" alt="Logo" width={50} height={50} className="rounded-full"/>
            <p className={cn("font-semibold text-2xl ml-2.5",isMobile ? "text-blue-500":"text-white")}>finance.wizz</p>
        </div>
    </Link>
  )
}

export default HeaderLogo