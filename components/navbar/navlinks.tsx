'use client'
import { usePathname } from 'next/navigation'
import * as S from './styles'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Navlinks = () => {
	const pathname = usePathname()
	return (
		<ul className={S.NavLinks}>
			<Link href='/how-to-use'>
				<li
					className={cn(S.Link, {
						'text-teal-400': pathname === '/how-to-use'
					})}>
					How to use
				</li>
			</Link>
			<Link href='/how-to-guide'>
				<li
					className={cn(S.Link, {
						'text-teal-400': pathname === '/how-to-guide'
					})}>
					How to guide
				</li>
			</Link>
		</ul>
	)
}

export default Navlinks
