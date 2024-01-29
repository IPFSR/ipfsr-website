import Link from 'next/link'
import * as S from './styles'
import { Menu } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import Navlinks from './navlinks'

const Navbar = () => {
	return (
		<div className={S.Container}>
			<Link href='/'>
				<h2>IPFSR</h2>
			</Link>
			<Navlinks />
			<DropdownMenu>
				<DropdownMenuTrigger className={S.DropdownTrigger}>
					<Menu />
				</DropdownMenuTrigger>
				<DropdownMenuContent className={S.DropdownContent}>
					<Link href='/how-to-use'>
						<DropdownMenuItem className={S.Link}>How to use</DropdownMenuItem>
					</Link>
					<Link href='/how-to-guide'>
						<DropdownMenuItem className={S.Link}>How to guide</DropdownMenuItem>
					</Link>
				</DropdownMenuContent>
			</DropdownMenu>{' '}
		</div>
	)
}

export default Navbar
